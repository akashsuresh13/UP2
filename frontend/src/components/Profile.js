import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link,withRouter } from 'react-router-dom'
import substitute_icon from '../images/icons/substitute.png'
import events_icon from '../images/icons/events.png'
import faculty_icon from '../images/icons/faculty.png'
import subjects_icon from '../images/icons/subjects.png'
import timeline_icon from '../images/icons/timeline.png'
import timetable_icon from '../images/icons/timetable.png'
import allotment_icon from '../images/icons/allotment.png'
import '../App.css'
// import { decode } from 'punycode'

export default class Profile extends Component{

    constructor(){
        super()
        this.state = {
            userID: '',
            userFID: '',
            userName: '',
            reload: false
        }
    }

    componentDidMount(){
        let token = localStorage.usertoken
        let decoded = jwt_decode(token)
        this.setState({
            userID: decoded.user_email_id,
            userFID: decoded.user_FID,
            userName: decoded.user_name
        })
    }

    render(){

        return(
            <div className="App">
                <div class="container" 
                     style={{display: 'table',
                             width: '100%',
                             top: '16.75%',
                             left:'7.5%',
                             position: 'absolute'}}>
                    <div class="row">
                        <div class="col-lg" style={{marginBottom:15}}><img src={faculty_icon} class="img-fluid" alt="Responsive image" /></div>
                        <div class="col-lg" style={{marginBottom:15}}><img src={subjects_icon} class="img-fluid" alt="Responsive image" /></div>
                        <div class="col-lg" style={{marginBottom:15}}><img src={timeline_icon} class="img-fluid" alt="Responsive image" /></div>
                    </div>
                    <div class="row">
                        <div class="col-lg" style={{marginBottom:15}}><img src={timetable_icon} class="img-fluid" alt="Responsive image" /></div>
                        <div class="col-lg" style={{marginBottom:15}}><img src={allotment_icon} class="img-fluid" alt="Responsive image" /></div>
                        <div class="col-lg" style={{marginBottom:15}}><img src={events_icon} class="img-fluid" alt="Responsive image" /></div>
                    </div>
                </div>
            </div>
        )

    }

}