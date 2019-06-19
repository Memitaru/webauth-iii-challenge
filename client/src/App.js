import React from 'react';
import './App.css';
import {Route, NavLink, withRouter} from 'react-router-dom';
import Register from './Components/Register';
import Login from './Components/Login';
import Users from './Components/Users';

class App extends React.Component{
  logout = () => {
    localStorage.removeItem('token')
    this.props.history.push('/')
  }
  render(){
    return(
      <div>
        <ul>
          <li><NavLink to="/signup">Register</NavLink></li>
          <li><NavLink to="/login">Login</NavLink></li>
          <li><NavLink to="/users">User List</NavLink></li>
          <button onClick={this.logout}>Log Out</button>
        </ul>
        <main>
          <Route path='/signup' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/users' component={Users} />
        </main>
      </div>
    )
  }
}

export default withRouter(App);
