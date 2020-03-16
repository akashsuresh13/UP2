import React,{ Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
import home_icon from '../images/icons/home.png'
import logout_icon from '../images/icons/logout.png'
import jwt_decode from 'jwt-decode'

class Navbar extends Component{

    logOut(e){
        e.preventDefault()
        localStorage.removeItem('usertoken')
        this.props.history.push(`/`)
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