import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link,withRouter } from 'react-router-dom'
// import { decode } from 'punycode'

export default class Profile extends Component{

    render(){

        return(
<<<<<<< HEAD
            <div class="d-md-flex h-md-100 align-items-center">
                <div class="col-md-6 p-0 bg-indigo h-md-100">
                    First Content
                </div>
                <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
                    Second Content
=======
            <div className="container">
                <div className="jumbotron mt-5">
                    <div className="col-sm-8 mx-auto">
                        <h1 className="text-center">PROFILE</h1>
                    </div>
                    <table className="table col-md-6 mx-auto">
                        <tbody>
                            <tr>
                                <td>First Name</td>
                                <td>{this.state.userID}</td>
                            </tr>
                            <tr>
                                <td>Last Name</td>
                                <td>{this.state.userFID}</td>
                            </tr>
                        </tbody>
                    </table>
                    <li className="nav-item">
                        <Link to="/events" className="nav-link">
                            Events
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/subs_raise" className="nav-link">
                            Substitute Raise
                        </Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/subs_offer" className="nav-link">
                            Substitute Offer
                        </Link>
                    </li>
>>>>>>> e2d7e2662361cd319f1c64de3d3af31867199ba3
                </div>
            </div>
        )

    }

}