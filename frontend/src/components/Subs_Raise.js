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
import '../font-awesome-4.7.0/css/font-awesome.css'

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

  just4test(){
    alert("im deleted")
  }

  render() {
    return (
      <div className="App">
        <div class="d-md-flex h-md-100 align-items-center">
          <div class="col-md-6 p-0 bg-indigo h-md-100">
              <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                <div class="border rounded p-5">
                
                  <div class="form-group">
                    <div class="input-group">
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
                    </div>
                  </div>

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
                  </div>
                </div>

                  <div class="form-group">
                    <select id="hr_no" class="custom-select">
                      <option value="default">Select Hour</option>
                      <option value="1">L1</option>
                      <option value="2">T3</option>
                      <option value="3">T5</option>
                      <option value="4">T2</option>
                    </select> 
                  </div>

                  <div class="form-group">
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <div class="input-group-text">
                          <input type="checkbox" aria-label="Checkbox for following text input" />
                        </div>
                      </div>
                      <input type="text" class="form-control" value="Entire Day" readOnly/>
                    </div>
                  </div>
                  <input type="text" class="form-control" value="Entire Day"/>
                </div></div>
                  <div className="form-group">
                    <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                      <button type="button" style={{width:"33.33%"}} class="btn btn-danger"><i class="fa fa-plus fa-2x" aria-hidden="true"></i></button>
                      <button type="button" style={{width:"33.33%"}} class="btn btn-primary"><i class="fa fa-minus-circle fa-2x" aria-hidden="true"></i></button>
                      <button type="button" style={{width:"33.33%"}} class="btn btn-warning"><i class="fa fa-refresh fa-2x" aria-hidden="true"></i></button>
                    </div>
                  </div>
                </div>

          <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
            <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center" >
              <table class="table table-striped header-fixed">
                <thead>
                  <tr>
                    <th>Details</th>
                  </tr>
                </thead>
                <tbody className="big-table forcetext-leftalign">
                  <tr>
                    <td>
                      <a onClick={this.just4test}><span className="item_id text-danger">ID : GS01</span><br/>
                      <span className="text-primary">CLASS : 5CSE1</span><br/>
                      <span className="text-primary">DATE : 27/03/2020</span><br/>
                      <span className="text-primary">HOUR : 1</span></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a onClick={this.just4test}><span className="item_id text-danger">ID : GS01</span><br/>
                      <span className="text-primary">CLASS : 5CSE1</span><br/>
                      <span className="text-primary">DATE : 27/03/2020</span><br/>
                      <span className="text-primary">HOUR : 1</span></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a onClick={this.just4test}><span className="item_id text-danger">ID : GS01</span><br/>
                      <span className="text-primary">CLASS : 5CSE1</span><br/>
                      <span className="text-primary">DATE : 27/03/2020</span><br/>
                      <span className="text-primary">HOUR : 1</span></a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <a onClick={this.just4test}><span className="item_id text-danger">ID : GS01</span><br/>
                      <span className="text-primary">CLASS : 5CSE1</span><br/>
                      <span className="text-primary">DATE : 27/03/2020</span><br/>
                      <span className="text-primary">HOUR : 1</span></a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}