import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard';
import Compose from './Compose';
import LoadingBar from 'react-redux-loading' 


class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
         <LoadingBar />
        <Compose />
      </div>
    )
  }
}
function mapStateToProps () {
 
}

export default connect(mapStateToProps)(App)