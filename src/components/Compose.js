import React, { Component } from 'react'
import { connect } from 'react-redux'
import Tweet from './Tweet'

class Compose extends Component {

    state = {
        text : ''
      }
    handleInputChange = (e) => {
        const { value, name } = e.target
    
        this.setState(() => ({
          text: value
        }))
      }

      isDisabled = () => {
        const { text } = this.state
        
        return text === ''
      
      }

      handleSubmit = (e) => {
        e.preventDefault()
       
        //this.props.dispatch(handleAddPoll(this.state))
      }
   
    render() {

        const { text} = this.state
    
      return (
        <div>
        <h2>Your Timeline</h2>    
        <form onSubmit={this.handleSubmit}>
            <h3 style={{marginBottom: 5}}>Compose new Tweet</h3>
                <input
                    value={text}
                    onChange={this.handleInputChange}
                    name='text'
                    className='input'
                    type='textarea'
            />

            <button className='btn' type='submit' disabled={this.isDisabled()}>
            Submit
        </button>
        </form>

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
  
  export default connect(mapStateToProps)(Compose)