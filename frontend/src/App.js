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
                  <p>
					<i class="fa fa-anchor fa-3x"></i>
				</p>
				<h1 class="mb-0 mt-3 display-4">Anchor</h1>
				<h5 class="mb-4 font-weight-light">Free Bootstrap UI Kit with <i class="fab fa-sass fa-2x text-cyan"></i></h5>
				<a target="_blank" class="btn btn-outline-light btn-lg btn-round" href="https://www.wowthemes.net/anchor-free-bootstrap-ui-kit/">Get this free kit</a>
                  </div>
              </div>
          </div>

          <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
              <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
              <form class="border rounded p-5">
				<h3 class="mb-4 text-center">Sign In</h3>
				<div class="form-group">
					<input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="E-mail" required="" />
				</div>
				<div class="form-group">
					<input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required="" />
				</div>
				<div class="form-group form-check">
					<input type="checkbox" class="form-check-input" id="exampleCheck1" />
					<label class="form-check-label small text-muted" for="exampleCheck1">Remember me</label>
				</div>
				<button type="submit" class="btn btn-success btn-round btn-block shadow-sm">Sign in</button>
				<small class="d-block mt-4 text-center"><a class="text-gray" href="#">Forgot your password?</a></small>
			</form>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
