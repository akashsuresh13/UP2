import React,{ Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'
import Profile from './components/Profile'
import Navbar from './components/Navbar'
import Events1 from './components/Events1'

export default class App extends Component {

  render(){

    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Login} />
          <div>
            {/* <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} /> */}
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/events" component={Events1} />
          </div>
        </div>
      </Router>
    );    

  }

}
