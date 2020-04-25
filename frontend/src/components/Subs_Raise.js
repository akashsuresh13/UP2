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

export default class Subs_Raise extends Component {
  
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
                  <select class="custom-select">
                    <option selected>Select Class</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                  </select>
                </div>

                <div className="form-group">
                  <table class="table table-striped header-fixed" bgcolor="white">
                    <thead>
                      <tr>
                        <th>Classes</th>
                      </tr>
                    </thead>
                    <tbody className="small-table">
                      <tr><td>5CSE1</td></tr>
                      <tr><td>5CSE1</td></tr>
                      <tr><td>5CSE1</td></tr>
                      <tr><td>5CSE1</td></tr>
                      <tr><td>5CSE1</td></tr>
                      <tr><td>5CSE1</td></tr>
                    </tbody>
                  </table>
                </div>
                

                {/* <div className="form-group">
                  <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                    <button type="button" style={{width:"33.33%"}} class="btn btn-danger"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></button>
                    <button type="button" style={{width:"33.33%"}} class="btn btn-primary"><i class="fa fa-minus-circle fa-2x" aria-hidden="true"></i></button>
                    <button type="button" style={{width:"33.33%"}} class="btn btn-warning"><i class="fa fa-refresh fa-2x" aria-hidden="true"></i></button>
                  </div>
                </div> */}
              </div>
            </div>
          </div>

          <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
            <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
            <div class="border rounded p-5"><div className="form-group">
              <div style={{width:"100%"}} class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                <button type="button" style={{width:"100%"}} class="btn btn-success">Available</button>
                <button type="button" style={{width:"100%"}} class="btn btn-primary">Accepted</button>
              </div>
            </div>
            <div className="form-group"><table class="table table-striped header-fixed">
                {/* <thead>
                  <tr>
                    <th>Available</th>
                  </tr>
                </thead> */}
                <tbody style={{height:"270px"}} className="big-table forcetext-leftalign">
                  <tr>
                    <td>
                      <a onClick={this.just4test}>
                        <span className="item_user"><i class="fa fa-user" aria-hidden="true"/>Vijay Suresh</span><br/>
                        <span className="text-primary"><i class="fa fa-square" aria-hidden="true"/> : 5CSE1</span><br/>
                        <span className="text-primary"><i class="fa fa-calendar" aria-hidden="true"/> : 27/03/2020</span><br/>
                        <span className="text-primary"><i class="fa fa-clock-o" aria-hidden="true"/> : T1</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a onClick={this.just4test}>
                        <span className="item_user"><i class="fa fa-user" aria-hidden="true"/>Vijay Suresh</span><br/>
                        <span className="text-primary"><i class="fa fa-square" aria-hidden="true"/> : 5CSE1</span><br/>
                        <span className="text-primary"><i class="fa fa-calendar" aria-hidden="true"/> : 27/03/2020</span><br/>
                        <span className="text-primary"><i class="fa fa-clock-o" aria-hidden="true"/> : T1</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a onClick={this.just4test}>
                        <span className="item_user"><i class="fa fa-user" aria-hidden="true"/>Vijay Suresh</span><br/>
                        <span className="text-primary"><i class="fa fa-square" aria-hidden="true"/> : 5CSE1</span><br/>
                        <span className="text-primary"><i class="fa fa-calendar" aria-hidden="true"/> : 27/03/2020</span><br/>
                        <span className="text-primary"><i class="fa fa-clock-o" aria-hidden="true"/> : T1</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a onClick={this.just4test}>
                        <span className="item_user"><i class="fa fa-user" aria-hidden="true"/>Vijay Suresh</span><br/>
                        <span className="text-primary"><i class="fa fa-square" aria-hidden="true"/> : 5CSE1</span><br/>
                        <span className="text-primary"><i class="fa fa-calendar" aria-hidden="true"/> : 27/03/2020</span><br/>
                        <span className="text-primary"><i class="fa fa-clock-o" aria-hidden="true"/> : T1</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a onClick={this.just4test}>
                        <span className="item_user"><i class="fa fa-user" aria-hidden="true"/>Vijay Suresh</span><br/>
                        <span className="text-primary"><i class="fa fa-square" aria-hidden="true"/> : 5CSE1</span><br/>
                        <span className="text-primary"><i class="fa fa-calendar" aria-hidden="true"/> : 27/03/2020</span><br/>
                        <span className="text-primary"><i class="fa fa-clock-o" aria-hidden="true"/> : T1</span>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a onClick={this.just4test}>
                        <span className="item_user"><i class="fa fa-user" aria-hidden="true"/>Vijay Suresh</span><br/>
                        <span className="text-primary"><i class="fa fa-square" aria-hidden="true"/> : 5CSE1</span><br/>
                        <span className="text-primary"><i class="fa fa-calendar" aria-hidden="true"/> : 27/03/2020</span><br/>
                        <span className="text-primary"><i class="fa fa-clock-o" aria-hidden="true"/> : T1</span>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table></div></div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}