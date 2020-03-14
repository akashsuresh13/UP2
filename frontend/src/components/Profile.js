import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link,withRouter } from 'react-router-dom'
// import { decode } from 'punycode'

export default class Profile extends Component{

    constructor(){
        super()
        this.state = {
            userID: '',
            userFID: ''
        }
    }

    componentDidMount(){
        const token = localStorage.usertoken
        const decoded = jwt_decode(token)
        this.setState({
            userID: decoded.userID,
            userFID: decoded.userFID
        })
    }

    render(){

        return(
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
                </div>
            </div>
        )

    }

}