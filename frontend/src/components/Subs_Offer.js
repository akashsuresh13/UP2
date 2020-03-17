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
                      <option selected>Open this select menu</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <div style={{textAlign:"center",padding:"5px 0px",
                                  fontSize:"24px",backgroundColor:"white",
                                  color:"black",verticalAlign:"center"}}>Sections</div>

                    <table class="table table-fixed table-bordered table-striped mb-0" bgcolor="white">
                
                      {/* <thead style={{position:"fixed"}}> 
                        <tr>
                          <th scope="sec">Section</th>
                        </tr>
                      </thead> */}

                      <tbody class="small-table">
                        <tr>
                          <td>5CSE1</td>
                        </tr>
                        <tr>
                          <td>5CSE2</td>
                        </tr>
                        <tr>
                          <td>5CSE3</td>
                        </tr>
                        <tr>
                          <td>5CSE4</td>
                        </tr>
                        <tr>
                          <td>5CSE5</td>
                        </tr>
                        <tr>
                          <td>5CSE6</td>
                        </tr>
                        <tr>
                          <td>5CSE4</td>
                        </tr>
                        <tr>
                          <td>5CSE5</td>
                        </tr>
                        <tr>
                          <td>5CSE6</td>
                        </tr><tr>
                          <td>5CSE4</td>
                        </tr>
                        <tr>
                          <td>5CSE5</td>
                        </tr>
                        <tr>
                          <td>5CSEM</td>
                        </tr>
                      </tbody>

                    </table>
                  </div>
                  

                  <div className="form-group">
                    <div class="btn-group btn-group-lg" role="group" aria-label="Basic example">
                      <button type="button" class="btn btn-danger">DELETE</button>
                      <button type="button" class="btn btn-primary">ADD</button>
                      <button type="button" class="btn btn-warning">RESET</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          

          <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
            <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
              <div class="table-responsive table-wrapper-scroll-y my-custom-scrollbar">
                <table class="table table-fixed table-bordered table-striped mb-0 big-table">
                  <thead>
                    <tr>
                      <th scope="details">Details</th>
                    </tr>
                  </thead>
                  
                  <tbody class="big-table">
                    <tr>
                      <td>Dr.Ajay Kumar<br/>5CSE1<br/>27-02-2020<br/>3</td>
                    </tr>
                    <tr>
                      <td>Dr.Blessed Prince<br/>5CSE5<br/>21-02-2020<br/>1</td>
                    </tr>
                    <tr>
                      <td>Dr.Blessed Prince<br/>5CSE5<br/>21-02-2020<br/>1</td>
                    </tr>
                    <tr>
                      <td>Dr.Blessed Prince<br/>5CSE5<br/>21-02-2020<br/>1</td>
                    </tr>
                    <tr>
                      <td>Dr.Blessed Prince<br/>5CSE5<br/>21-02-2020<br/>1</td>
                    </tr>
                    <tr>
                      <td>Dr.Blessed Prince<br/>5CSE5<br/>21-02-2020<br/>1</td>
                    </tr>
                    <tr>
                      <td>Dr.Blessed Prince<br/>5CSE5<br/>21-02-2020<br/>1</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}