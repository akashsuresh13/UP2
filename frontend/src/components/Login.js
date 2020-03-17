import React,{ Component } from 'react'
import {login} from './UserFunctions'
import user_icon from '../images/icons/user.png'
import password_icon from '../images/icons/password.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import '../font-awesome-4.7.0/css/font-awesome.css'

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
                            
                        <div className="form_group">
                            <h1 className="h3 mb-3 font-weight-normal">Sign In</h1>
                        </div>
                        
                        <div class="input-group form-group">
                            <div style={{padding:"2px 10px 0px 10px"}}
                                    class="input-group-prepend btn">
                                    <i class="fa fa-user fa-2x" aria-hidden="true"></i>
                            </div>
                            <input type="email" 
                                    class="form-control"
                                    name="uemail" 
                                    placeholder="Email"
                                    value={this.state.uemail}
                                    onChange={this.onChange}
                                    required
                                    autoFocus
                                    aria-label="" 
                                    aria-describedby="basic-addon1" />
                        </div>
                        
                        <div class="input-group form-group">
                            <div style={{padding:"2px 10px 0px 10px"}} 
                                    class="input-group-prepend btn">
                                    <i class="fa fa-lock fa-2x" aria-hidden="true"></i>
                            </div>
                            <input type="password" 
                                    class="form-control"
                                    name="upass" 
                                    placeholder="Password"
                                    value={this.state.upass}
                                    onChange={this.onChange}
                                    required
                                    aria-label="" 
                                    aria-describedby="basic-addon1" />
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