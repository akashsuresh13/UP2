import React,{ Component } from 'react'
import {login} from './UserFunctions'
import user_icon from '../images/icons/user.png'
import password_icon from '../images/icons/password.png'
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
            <div class="jumbotron"
                    style={{display: 'table',
                        width: '100%',
                        top: '12.5%',
                        left: '25%',
                        width: '50%',
                        position: 'absolute'}}>
                <div className="col-md-6 mt-5 mx-auto">
                    <form onSubmit={this.onSubmit}
                        style={{textalign: 'center',
                                margin: 'auto',
                            verticalalign: 'middle'}}>
                        <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                        <div className="form-inline">
                        <img src={user_icon} class="img-fluid" alt="Responsive image"></img>
                            <input 
                                type="email"
                                className="form-control"
                                name="uemail"
                                placeholder="Enter Email"
                                value={this.state.uemail}
                                style={{width:'auto',margin:'5%'}}
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <div className="form-inline">
                            <img src={password_icon} class="img-fluid" alt="Responsive image"></img>
                            <input 
                                type="password"
                                className="form-control"
                                name="upass"
                                style={{width:'auto',margin:'5%'}}
                                placeholder="Enter Password"
                                value={this.state.upass}
                                onChange={this.onChange}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <button
                                type="submit"
                                className="btn btn-lg btn-primary btn-block">
                                Log In
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}