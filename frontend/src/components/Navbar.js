import React,{ Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
import home_icon from '../images/icons/home.png'
import logout_icon from '../images/icons/logout.png'
import profile_icon from '../images/icons/profile.png'
import jwt_decode from 'jwt-decode'

class Navbar extends Component{

    constructor(){
        super()
        this.state = {
            userID: '',
            userFID: '',
            userName: '',
            reload: false
        }
    }

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
    }

    refreshPage = () => {
        this.setState(
            {reload: true},
            () => this.setState({reload: false})
        )
    }

    forceUpdateHandler(){
        this.forceUpdate();
    };

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
        const userLink = (

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded">

                <button 
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbar1"
                    aria-controls="navbar1"
                    aria-expanded="false"
                    aria-label="Toggle navigation">

                    <span className="navbar-toggle-icon"></span>

                </button>

                <div 
                    className="collapse navbar-collapse justify-content-md-center"
                    id="navbar1">

                    <ul className="navbar-nav">

                        <li className="nav-item">
                            <Link to="/profile" className="nav-link">
                                <img src={home_icon} class="img-fluid" alt="Responsive image"></img>
                            </Link>
                        </li>

                        <li className="nav-item">
                        <Link to="/profile" className="nav-link">
                            <div class = "mytooltip">
                                <img src={profile_icon} class="img-fluid" alt="Responsive image"></img>
                                <div class = "mytext">
                                    <ul>
                                        <li>{this.state.userName}</li>
                                        <li>{this.state.userID}</li>
                                        <li>{this.state.userFID}</li>
                                    </ul>
                                </div>
                            </div>
                        </Link>
                        </li>

                        <li className="nav-item">
                            <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                                <img src={logout_icon} class="img-fluid" alt="Responsive image"></img>
                            </a>
                        </li>
                    </ul>
                </div>

            </nav>
        )

        return (
            localStorage.usertoken ? userLink : null
        )
    }
}

export default withRouter(Navbar)