import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import Register from '../auth/register';
import Login from '../auth/login';

class Navbar extends Component {
  render() {
    return (
      <div>
          <nav className="navbar navbar-expand-sm navbar-dark bg-dark mb-4">
                <div className="container">
                <Link className="navbar-brand" to='/'>Link-UP</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#mobile-nav">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="mobile-nav">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to="/profiles"> Developers
                        </Link>
                    </li>
                    </ul>

                    <ul className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link className="nav-link" to='/register' component={Register}>Sign Up</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/login' component={Login}>Login</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </nav>
      </div>
    )
  }
}

export default Navbar;