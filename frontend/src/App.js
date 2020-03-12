import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="d-md-flex h-md-100 align-items-center">

          <div class="col-md-6 p-0 bg-indigo h-md-100">
              <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                  <div class="logoarea pt-5 pb-5">
                      First half content here
                  </div>
              </div>
          </div>

          <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
              <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
                  Second half content here
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
