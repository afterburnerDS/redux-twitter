import { getInitialData } from '../utils/api'
import { receiveUsers } from '../actions/users'
import { receiveTweets } from '../actions/tweets'
import { setAuthedUser } from '../actions/authedUser'



export function handleInitialData () {
    return (dispatch) => {
      return getInitialData()
        .then(({ users, polls }) => {
          dispatch(receiveUsers(users))
          dispatch(receivePolls(polls))
          dispatch(setAuthedUser(AUTHED_ID))
        })
    }
  }