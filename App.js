import React from 'react'
import { BrowserRouter as Router, Switch , Route, Link } from 'react-router-dom'
import User from './Components/User'
import product from './Components/product'
import AddUser from './Components/AddUser'

class Header extends React.Component{
    render(){
        return(
            <Router>
                <div className="container">
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                        <a className="navbar-brand">React</a>
                        <div className="collape navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                        <li className="nav-items"><Link to={'/user'} className="nav-link">User</Link></li>
                        <li className="nav-items"><Link to={'/product'} className="nav-link">Product</Link></li>
                        </ul>
                        <hr />
                        </div>
                    </nav> <br />
                    <Switch>
                        <Route exact path='/user' component={ User } />
                        <Route exact path='/product' component={ product } />
                        <Route path='/addUser' component={ AddUser } />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Header
