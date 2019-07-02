import React from 'react';

import LoginForm from '../session/login_form';
import SignupForm from '../session/signup_form';

class Navbar extends React.Component {

  render() {
    let { signup, login, logout, currentUser } = this.props;

    const loginLeft = (
      <div className="navbar-logo1">
        <img className="logo1" src={'newlogo.png'} />
      </div>
    )
    const loginRight = (<LoginForm login={login} />)

    const logoutLeft = (
      <div className="navbar-logo2">SearchBar</div>
    )
    const logoutRight = (
      <div>buttons</div>
    )

    return(
      <div className="navbar-cont">
        <div className="navbar-left-cont">
          { currentUser ? logoutLeft : loginLeft }
        </div>
        <div className="navbar-right-cont">
          { currentUser ? logoutRight : loginRight }
        </div>
      </div>
    )
  }
}

export default Navbar;