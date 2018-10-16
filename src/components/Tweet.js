import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons'
import { toggleLike } from '../actions/likes'


class Tweet extends Component {

    handleReply = () => {
    
        console.log('replied')
      }

      handleToggleLike = () => {
        
            this.liked = !this.liked;
            const { tweetId, authedUser, tweets } = this.props
            this.props.dispatch(toggleLike({
              authedUser,
              id: tweets[tweetId].id,
            hasLiked: this.liked
            }))
         
      }
   
    render() {

        const { tweetId, tweets } = this.props
        console.log(tweets[tweetId])
        
      return (
        <div className='tweet'>
            <h1>{tweets[tweetId].author}</h1>
            <h3>{tweets[tweetId].timestamp}</h3>
            <h4>{tweets[tweets[tweetId].replyingTo] ? 'Replying to: '+ tweets[tweets[tweetId].replyingTo].author : ''}</h4>
            <div>
                {tweets[tweetId].text}
            </div>
            <div onClick={() => {this.handleReply } }>
                <span>{tweets[tweetId].replies.length}</span>
                <FontAwesomeIcon className=''icon={faReply} />
            </div>
            <div onClick={() => {
                
                    this.handleToggleLike()
                }
                }>
                <span>{tweets[tweetId].likes.length}</span>
                {
                    this.liked ? <FontAwesomeIcon  icon={faHeartSolid} /> : <FontAwesomeIcon  icon={faHeartRegular} />
                } 
            </div>
           
            
            
        </div>
      )
    }
  }

function mapStateToProps ({tweets, users, authedUser}) {
    return {
        tweets,
        users,
        authedUser
        
    }
  }
  
  export default connect(mapStateToProps)(Tweet)