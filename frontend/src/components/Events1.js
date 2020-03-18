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
                  <div className="form-inline">
                    <div class="form-group"><div class="input-group">
                      <div class="input-group-prepend">
                        <img src={calendar_icon} class="img-fluid" alt="canlendar icon"></img>
                      </div>
                      <DatePicker 
                        placeholderText="Start Date"
                        dateFormat="d-MM-yyyy"
                        value={this.state.startDate}
                        selected={this.state.startDate}
                        name="startDate"
                        onChange={(date) => {this.setState({startDate:date})}}
                      />
                    </div></div>

                    <div class="form-group"><div class="input-group">
                      <div class="input-group-prepend">
                        <img src={calendar_icon} class="img-fluid" alt="canlendar icon"></img>
                      </div>
                      <DatePicker 
                        placeholderText="End Date"
                        dateFormat="d-MM-yyyy"
                        name="endDate"
                        value={this.state.endDate}
                        selected={this.state.endDate}
                        onChange={(date) => {this.setState({endDate:date})}}
                      />
                    </div></div>
                  </div>
                </div>
                  
                <div className="form-group">
                    <button type="button" class="button-margin btn btn-success"><i class="fa fa-plus fa-2x" aria-hidden="true" /></button>
                    <button type="button" class="button-margin btn btn-primary"><i class="fa fa-pencil fa-2x" aria-hidden="true" /></button>
                    <button type="button" class="button-margin btn btn-danger"><i class="fa fa-trash fa-2x" aria-hidden="true"/></button>
                </div>
                <div className="form-group">
                  <table class="table table-striped header-fixed" bgcolor="white">
                    <thead>
                      <tr>
                        <th>Events</th>
                      </tr>
                    </thead>
                    <tbody className="small-table">
                      <tr>
                        <td>
                          <span className="event_name">Meraki</span><br />
                          <span>23-09-2020 || 25-10-2020</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="event_name">Meraki</span><br />
                          <span>23-09-2020 || 25-10-2020</span>
                        </td>
                      </tr>
                      <tr>
                        <td>
                          <span className="event_name">Meraki</span><br />
                          <span>23-09-2020 || 25-10-2020</span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
            <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
              <div class="table-wrapper-scroll-y my-custom-scrollbar">
                <div class="border rounded p-5">
                  <div className="form-group">
                    <button type="button" class="btn btn-primary btn-lg btn-block">Meraki</button>
                  </div>

                  <div className="form-group">
                    <div class="row">
                      <div class="col1">
                        <div className="form-group">
                          <input class="form-control" type="text" placeholder="Event Name" />
                        </div>
                        <div className="form-group">
                          <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                            <button type="button" style={{width:"25%"}} class="btn btn-primary"><i class="fa fa-plus fa-lg" aria-hidden="true"></i></button>
                            <button type="button" style={{width:"25%"}} class="btn btn-warning"><i class="fa fa-pencil fa-lg" aria-hidden="true"></i></button>
                            <button type="button" style={{width:"25%"}} class="btn btn-success"><i class="fa fa-refresh fa-lg" aria-hidden="true"></i></button>
                            <button type="button" style={{width:"25%"}} class="btn btn-danger"><i class="fa fa-trash fa-lg" aria-hidden="true"></i></button>
                          </div>
                        </div>
                        <center><div className="form-group">
                          <div class="list-group anyClass">
                            <a href="#!" class="list-group-item active">Dance</a>
                            <a href="#!" class="list-group-item list-group-item-action">Treasure Hunt</a>
                            <a href="#!" class="list-group-item list-group-item-action">Fashion Show</a>
                            <a href="#!" class="list-group-item list-group-item-action">Fashion Show</a>
                            <a href="#!" class="list-group-item list-group-item-action">Fashion Show</a>
                            <a href="#!" class="list-group-item list-group-item-action">Fashion Show</a>
                          </div>
                        </div></center>
                      </div>
                      <div style={{margin:"0px 5px"}} class="col2">
                        <div className="form-group">
                          <input class="form-control" type="text" placeholder="Faculty Name" />
                        </div>
                        <center><div className="form-group">
                          <div class="list-group anyClass">
                            <a href="#!" class="list-group-item active">Ms Jessy</a>
                            <a href="#!" class="list-group-item list-group-item-action">Mr Vasanth</a>
                            <a href="#!" class="list-group-item list-group-item-action">Mr Vasanth</a>
                            <a href="#!" class="list-group-item list-group-item-action">Mr Vasanth</a>
                            <a href="#!" class="list-group-item list-group-item-action">Mr Vasanth</a>
                          </div>
                        </div></center>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </div>
    );
  }
}

export default Events1;