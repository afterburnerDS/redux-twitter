import { saveLikeToggle } from '../utils/api'
import { showLoading, hideLoading } from 'react-redux-loading'

export const LIKE_TWEET = 'LIKE_TWEET'

export function toggleLikeTweet ({ authedUser, id, hasLiked }) {
    return {
      type: LIKE_TWEET,
      authedUser,
      id,
      hasLiked
    }
  }


  export function toggleLike (likeData) {
    return (dispatch) => {
      dispatch(showLoading())
      return saveLikeToggle(likeData)
        .then(() => dispatch(toggleLikeTweet(likeData)))
        .then(() => dispatch(hideLoading()))
    }
  }