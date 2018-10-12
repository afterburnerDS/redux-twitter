import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'

class Dashboard extends Component {
   
    render() {

        const { tweetIDs, tweets, users } = this.props
     
        
  
      return (
        <div>
        <h2>Your Timeline</h2>    
          <ul>
          {tweetIDs.map((id) => (
              
            
            <li className='tweetContainer' key={id}>
                <Tweet tweetId={id} />
            </li>
          ))}
        </ul>
        </div>
      )
    }
  }

function mapStateToProps ({tweets, users}) {
    const tweetIDs = Object.keys(tweets);

    return {
        tweetIDs,
    }
  }
  
  export default connect(mapStateToProps)(Dashboard)