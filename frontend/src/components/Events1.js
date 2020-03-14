import React, { Component } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar_icon from '../images/icons/calendar.png'
import add_icon from '../images/icons/add.png'
import delete_icon from '../images/icons/remove.png'
import edit_icon from '../images/icons/edit.png'
import '../../src/App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

class Events1 extends Component {
  
  constructor(props){
    super(props)
    this.state = {
      eventName: null,
      startDate: null,
      endDate: null
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e){
      this.setState({[e.target.name]: e.target.value})
  }

  render() {
    return (
      <div className="App">
        <div class="d-md-flex h-md-100 align-items-center">
          <div class="col-md-6 p-0 bg-indigo h-md-100">
              <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                <div class="border rounded p-5">
                  <div class="form-group">
                    <input type="text" class="form-control" placeholder="Event Name" 
                            name="email"
                            value={this.state.eventName}
                            onChange={this.onChange} />
                  </div>
                  <div className="form-group">
                    <div class="form-inline">
                      <div class="form-group">
                        <DatePicker 
                          placeholderText="Start Date"
                          dateFormat="d-MM-yyyy"
                          class="form-control"
                          value={this.state.startDate}
                          onChange={this.onChange}
                        />
                        <img src={calendar_icon} class="img-fluid" alt="Responsive image"></img>
                      </div>
                      <div class="form-group">
                        <DatePicker 
                          placeholderText="End Date"
                          dateFormat="d-MM-yyyy"
                          class="form-control"
                          value={this.state.endDate}
                          onChange={this.onChange}
                        />
                        <img src={calendar_icon} class="img-fluid" alt="canlendar icon"></img>
                      </div>
                    </div>
                  </div> 
                  <div className="form-group">
                      <button type="button" class="button-margin btn btn-success"><img src={add_icon} class="img-fluid" alt="add icon"></img></button>
                      <button type="button" class="button-margin btn btn-primary"><img src={edit_icon} class="img-fluid" alt="add icon"></img></button>
                      <button type="button" class="button-margin btn btn-danger"><img src={delete_icon} class="img-fluid" alt="add icon"></img></button>
                  </div>
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

export default Events1;