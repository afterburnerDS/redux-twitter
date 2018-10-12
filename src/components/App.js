import React, { Component } from 'react'
import { handleInitialData } from '../actions/shared'
import { connect } from 'react-redux'
import Dashboard from './Dashboard';
import LoadingBar from 'react-redux-loading'


class App extends Component {
  componentDidMount () {
    this.props.dispatch(handleInitialData())
  }

  render() {
    return (
      <div>
         <LoadingBar />
        <Dashboard />
      </div>
    )
  }
}
function mapStateToProps () {
 
}

export default connect(mapStateToProps)(App)