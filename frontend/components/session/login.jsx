import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/'));
  }

  handleChange(e) {
    e.preventDefault();
    let email = this.state.email;
    let password = this.state.password;
    if (e.currentTarget.name === "email") {
      this.setState({email: e.currentTarget.value, password});
    } else {
      this.setState({password: e.currentTarget.value, email});
    }
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.router.push('/');
  }

  render() {
    return(
      <div className="overlay">
        <div className="box">
          <div className="innerbox group">
            <div className="info">
              <h1>Formulator Welcomes You!</h1>
              <p>Hey friend, please log in.</p>
            </div>

          <ul>{ this.props.errors }</ul>

          <form>
            <label>Email Address
              <input type="email" name="email" onChange={ this.handleChange }></input>
            </label>
            <br/>

            <label>Password
              <input type="password" name="password" onChange={ this.handleChange }></input>
            </label>
            <br/>

            <button onClick={ this.handleSubmit }>Log In</button>
          </form>
          <button onClick={ this.handleCancel }>Cancel</button>
          <Link to={"/signup"}>Sign Up</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
