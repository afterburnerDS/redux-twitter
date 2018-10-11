import React, { Component } from 'react'
import { connect } from 'react-redux'

class Dashboard extends Component {
   
    render() {

        const { tweetIDs, tweets, users } = this.props
     
        
  
      return (
        <div>
        <h2>Your Timeline</h2>    
          <ul>
          {tweetIDs.map((id) => (
              
            
            <li key={id}>
             
                {
                `${tweets[id].id}, ${tweets[id].author}, ${tweets[id].author} `
                }
              
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
        tweets,
        users
    }
  }
  
  export default connect(mapStateToProps)(Dashboard)