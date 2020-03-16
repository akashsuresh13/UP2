import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link,withRouter } from 'react-router-dom'
import substitute_icon from '../images/icons/substitute.png'
import '../App.css'
import profile_icon from '../images/icons/profile.png'
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
            <div class="d-md-flex h-md-100 align-items-center">
                <div class="col-md-6 p-0 bg-indigo h-md-100">
                    {/* <div class = "mytooltip">
                        <img src={profile_icon} class="img-fluid" alt="Responsive image"></img>
                        <div class = "mytext">
                            <ul>
                                <li>{this.state.userName}</li>
                                <li>{this.state.userID}</li>
                                <li>{this.state.userFID}</li>
                            </ul>
                        </div>
                    </div>                         */}
                    <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                            <Link to="/subs_raise" className="nav-link">
                                <div class = "mytext">R</div>
                            </Link>
                            <img src={substitute_icon} class="img-fluid" alt="Responsive image"></img>
                            <Link to="/subs_offer" className="nav-link">
                                <div class = "mytext">O</div>
                            </Link>
                    </div>
                </div>
                <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
                    Second Content
                </div>
            </div>
        )

    }

}