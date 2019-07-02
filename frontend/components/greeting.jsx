import React from 'react';
import LoginNavbarContainer from './navbar/login_navbar_container';
import LogoutNavbarContainer from './navbar/logout_navbar_container';
import SignupForm from './session/signup_form';

class Greeting extends React.Component {

  render() {
    let { currentUser, signup  } = this.props;
    let loginNav = <LoginNavbarContainer />
    let logoutNav = <LogoutNavbarContainer />

    let loginMain = <SignupForm signup={signup} />
    let logoutMain = <div>Feed</div>

    return(
      <div className="greet-cont">
        { currentUser ? logoutNav : loginNav }

        <div className="greet-main-cont">
          { currentUser ? logoutMain : loginMain}
        </div>

      </div>
    )
  }
}

export default Greeting;