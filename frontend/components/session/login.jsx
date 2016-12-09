import React from 'react';
import { Link } from 'react-router';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "" };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(() => this.props.router.push('/manager'));
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

  handleGuest(e) {
    e.preventDefault();
    const guestUser = { email: "jon@email.com", password: "hello6" };
    this.props.processForm(guestUser).then(() => this.props.router.push('/manager'));
  }

  componentDidMount() {
    this.props.clearErrors();
  }

  render() {
    return(
      <div className="overlay">
        <div className="box">
          <div className="innerbox group">
            <div className="info">
              <h1>Formulator Welcomes You!</h1>
              <p>Hey matey, please log in.</p>
            </div>

            <form className="login-form">
              <ul className="errors">{ this.props.errors }</ul>
              <label className="login-label">Email Address
                <input className="login-input" type="email" name="email" onChange={ this.handleChange }></input>
              </label>
              <label className="login-label">Password
                <input className="login-input" type="password" name="password" onChange={ this.handleChange }></input>
              </label>
              <button className="button" onClick={ this.handleSubmit }>Log In</button>
              <button className="button" onClick={ this.handleGuest }>Guest Login</button>
              <button className="button" onClick={ this.handleCancel }>Cancel</button>
            </form>

            <Link to={"/signup"}>
              <section className="signup-link-section">
                <div className="red-div">
                  <h2 className="red-h2">{ "Don't have an account?" }</h2>
                  <p className="red-p">no worries!</p>
                </div>

                <div>
                  <h2 className="green-h2">{ "Create one now." }</h2>
                  <p className="green-p">It's FREE!</p>
                </div>
              </section>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
