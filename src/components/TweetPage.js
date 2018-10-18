import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'
import Compose from './Compose'
import LoadingBar from 'react-redux-loading'

class TweetPage extends Component {
   
    render() {
        const { replies, id } = this.props

        console.log("aqui",replies)

       //const tweetReplies = tweets[id].replies
  
      return (
        <div> 
           
{ <Tweet tweetId = {id} />}
           {<Compose replyingId = {id} />}
            <h2>Replies</h2>
            
          {<ul>
      {   replies.map((id) => (
              
            
            <li className='tweetContainer' key={id}>
                <Tweet tweetId={id} />
            </li>
          ))}
        </ul>}

        
            
        </div>
      )
    }
  }

function mapStateToProps ({authedUser, tweets, users}, { match } ) {
    const {id} = match.params
    
    return {
      id,
      replies: !tweets[id].replies
      ? []
      : tweets[id].replies.sort((a,b,) => tweets[b].timestamp - tweets[a].timestamp)
    }
  }
  
  export default connect(mapStateToProps)(TweetPage)