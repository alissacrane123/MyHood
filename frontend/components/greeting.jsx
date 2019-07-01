import React from 'react';
import LoginNavbarContainer from './navbar/login_navbar_container';
import LogoutNavbarContainer from './navbar/logout_navbar_container';

class Greeting extends React.Component {

  render() {
    let { currentUser  } = this.props;
    let loginNav = <LoginNavbarContainer />
    let logoutNav = <LogoutNavbarContainer />

    return(
      <div>
        <div className="navbar-cont">
          { currentUser ? logoutNav : loginNav }
        </div>

      </div>
    )
  }
}

export default Greeting;