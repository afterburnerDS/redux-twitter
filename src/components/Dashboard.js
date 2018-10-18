import { Link } from 'react-router-dom'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'

class Dashboard extends Component {
   
    render() {

        const { tweetIDs, tweets, users } = this.props

        console.log("aqui",tweetIDs)
     
        
  
      return (
        <div>
        <h2>Your Timeline</h2>    
          <ul>
          {tweetIDs.map((id) => (
            <li className='tweetContainer' key={id}>
              <Link to={`tweets/${id}`}>
                <Tweet tweetId={id} />
              </Link>
            </li>
          ))}
        </ul>
        </div>
      )
    }
  }

function mapStateToProps ({tweets, users}) {
    const tweetIDs = Object.keys(tweets);

    console.log("map",tweetIDs)

    return {
        tweetIDs,
    }
  }
  
  export default connect(mapStateToProps)(Dashboard)