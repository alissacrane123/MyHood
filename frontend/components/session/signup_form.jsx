import React from 'react';

class SignupForm extends React.Component {
  constructor() {
    super(props);
    this.state = { email: '', fname: '', lname: '', }
  }

  render() {

    return (
      <div className="signup-form-container">
        <div className="signup-left">
          
        </div>
        <div className="signup-right">
          <div className="signup-header">Sign Up</div>
          <div className="signup-subheader">It's free and always will be.</div>
        </div>
        
      </div>
    )
  }
}