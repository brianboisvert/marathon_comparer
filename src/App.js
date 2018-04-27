import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './containers/Dashboard'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
        </div>
      </Router>
    )
  }
}

export default App;
