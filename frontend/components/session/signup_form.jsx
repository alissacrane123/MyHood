import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', fname: '', lname: '', b_day: '', b_month: '', b_year: '', gender: '' };
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(field) {
    return (e) => this.setState({ [field]: e.target.value })
  }

  handleSubmit(e)  {
    e.preventDefault();
    this.props.signup(this.state)
  }

  render() {

    return (
      <div className="signup-form-container">
        <div className="signup-left">
          
        </div>
        <div className="signup-right">
          <div className="signup-header">Sign Up</div>
          <div className="signup-subheader">It's free and always will be.</div>
          
          <div className="signup-names">
            <input className="signup-fname" onChange={this.handleChange('fname')} value={this.state.fname}/>
            <input className="signup-lname" onChange={this.handleChange('lname')} value={this.state.lname}/>
          </div>

          <input className="signup-email" onChange={this.handleChange('email')} value={this.state.email} />
          <input className="signup-password" onChange={this.handleChange('password')} value={this.state.password}/>

          <div className="signup-birthday">

          </div>

          <button onClick={this.handleSubmit}>Sign Up</button>
        </div>
        
      </div>
    )
  }
}

export default SignupForm