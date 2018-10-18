import { RECEIVE_TWEETS } from '../actions/tweets'
import {LIKE_TWEET} from '../actions/likes'
import {ADD_TWEET} from '../actions/tweets'

export default function tweets (state = {}, action) {
  switch (action.type) {
    case RECEIVE_TWEETS :
      return {
        ...state,
        ...action.tweets,
      }
    case LIKE_TWEET :
      const { authedUser, id, hasLiked} = action
      const tweet = state[id]
      const likes = state[id].likes
      
        return {
          ...state,
          [id]:{
            ...tweet,
            likes: hasLiked ? likes.concat([authedUser]) : likes.filter((id) => id !== authedUser)
          }
        }

    case ADD_TWEET :
    if(action.tweet.replyingTo) {
      return {
        ...state,
        [action.tweet.id] : action.tweet,
       
        
        [action.tweet.replyingTo]: {
          
          ...action.tweet.replyingTo,
          [action.tweet.replyingTo.replies]: action.tweet.replyingTo.replies ?action.tweet.replyingTo.replies.concat([action.tweet.replyingTo]) : [].concat([action.tweet.replyingTo])
        }
        
      }
    } else{
      return {
        ...state,
        [action.tweet.id] : action.tweet,  
      }
    }
        

    default :
      return state
  }
}