import React,{ Component } from 'react'
import { Link,withRouter } from 'react-router-dom'
import home_icon from '../images/icons/home.png'
import logout_icon from '../images/icons/logout.png'
import '../font-awesome-4.7.0/css/font-awesome.css'

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
                                <i class="fa fa-home fa-lg" aria-hidden="true"></i>
                            </Link>
                        </li>

                        <li className="nav-item">
                            <a href="" onClick={this.logOut.bind(this)} className="nav-link">
                                <i class="fa fa-sign-out fa-lg" aria-hidden="true"></i>
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