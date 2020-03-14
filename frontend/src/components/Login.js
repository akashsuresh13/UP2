import React,{ Component } from 'react'
import {login} from './UserFunctions'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

export default class Login extends Component{

    constructor(){
        super()
        this.state = {
            uemail: '',
            upass: ''
        }

        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    onChange(e){
        this.setState({[e.target.name]: e.target.value})
    }

    onSubmit(e){

        e.preventDefault()

        const user={
            uemail: this.state.uemail,
            upass: this.state.upass
        }

        login(user).then(res => {
            if(res){
                this.props.history.push(`\profile`)
            }
        })
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5 mx-auto">
                        <form noValidate onSubmit={this.onSubmit}>
                            <h1 className="h3 mb-3 font-weight-normal">Please sign in</h1>
                            <div className="form-group">
                                <label htmlFor="uemail">Email Address</label>
                                <input 
                                    type="email"
                                    className="form-control"
                                    name="uemail"
                                    placeholder="Enter Email"
                                    value={this.state.uemail}
                                    onChange={this.onChange}
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="upass">Email Address</label>
                                <input 
                                    type="password"
                                    className="form-control"
                                    name="upass"
                                    placeholder="Enter Password"
                                    value={this.state.upass}
                                    onChange={this.onChange}
                                />
                            </div>
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Sign In
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}