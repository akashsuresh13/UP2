import React,{ Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Login from './components/Login'

export default class App extends Component {

  render(){

    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={Login} />
          <div className="container">
            {/* <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profile" component={Profile} /> */}
          </div>
        </div>
      </Router>
    );    

  }

}
