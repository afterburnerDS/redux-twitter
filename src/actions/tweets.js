export const RECEIVE_TWEETS = 'RECEIVE_TWEETS'
export const ADD_TWEET = 'ADD_TWEET'

export function receiveTweets (tweets) {
    return {
      type: RECEIVE_TWEETS,
      tweets,
    }
  }


  export function addTweet (tweet) {
    return {
      type: ADD_TWEET,
      tweet,
    }
  }

  export function handleAddTweet (tweet) {
    return (dispatch, getState) => {
      const { authedUser } = getState()
  
      dispatch(showLoading())
      return savePoll({
        ...tweet,
        author: authedUser
      })
        .then((tweet) => dispatch(addTweet(tweet)))
        .then(() => dispatch(hideLoading()))
    }
  }