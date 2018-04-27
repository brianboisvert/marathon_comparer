import React from 'react';
import AccessToken from '../actions/AccessTokens'
import { connect } from 'react-redux'

class Dashboard extends React.Component {

  componentDidMount() {
    this.props.fetchData(window.location.href.split('').splice(45).join(''))
  }

  render() {
    return(
      <div>
        Dashboard
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (token) => {dispatch (AccessToken(token))}
  }
}

export default connect(null, mapDispatchToProps)(Dashboard);


// http://localhost:3000/dashboard/?state=&code=1dee3eaf1b74bdb6df004f1c048634ee601f0df0
