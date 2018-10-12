import React, { Component } from 'react'
import { connect } from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReply } from '@fortawesome/free-solid-svg-icons'
import { faHeart as faHeartRegular } from '@fortawesome/free-regular-svg-icons'


class Tweet extends Component {

    handleReply = (e) => {
    
        console.log('replied')
      }

      handleLike = (e) => {
    
        console.log('liked')
      }
   
    render() {

        const { tweetId, tweets, users } = this.props
        console.log(tweets[tweetId])
        
      return (
        <div className='tweet'>
            <h1>{tweets[tweetId].author}</h1>
            <h3>{tweets[tweetId].timestamp}</h3>
            <h4>{tweets[tweets[tweetId].replyingTo] ? 'Replying to: '+ tweets[tweets[tweetId].replyingTo].author : ''}</h4>
            <div>
                {tweets[tweetId].text}
            </div>
            <div onClick={this.handleReply}>
                <span>{tweets[tweetId].replies.length}</span>
                <FontAwesomeIcon className=''icon={faReply} />
            </div>
            <div onClick={this.handleLike}>
                <span>{tweets[tweetId].likes.length}</span>
                <FontAwesomeIcon icon={faHeartRegular} />
            </div>
           
            
            
        </div>
      )
    }
  }

function mapStateToProps ({tweets, users}) {
    return {
        tweets,
        users,
        
    }
  }
  
  export default connect(mapStateToProps)(Tweet)