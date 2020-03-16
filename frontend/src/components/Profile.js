import React, { Component } from 'react'
import jwt_decode from 'jwt-decode'
import { Link,withRouter } from 'react-router-dom'
// import { decode } from 'punycode'

export default class Profile extends Component{

    render(){

        return(

            <div class="d-md-flex h-md-100 align-items-center">
                <div class="col-md-6 p-0 bg-indigo h-md-100">
                    First Content
                </div>
                <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
                    Second Content
                    </div>
                    </div>
        )

    }

}