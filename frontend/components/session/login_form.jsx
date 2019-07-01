import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: '', password: '' }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state)
  }

  handleChange(field) {
    return (e) => { this.setState({ [field]: e.target.value }) }
  }

  render() {
    
    return (
      <div className="login-form-cont">
        <form className="login-form" onSubmit={this.handleSubmit}>
          <input className="login-email" value={this.state.email} onChange={this.handleChange('email')} />
          <input className="login-password" value={this.state.password} onChange={this.handleChange('password')} />
          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}

export default LoginForm;