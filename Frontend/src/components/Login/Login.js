import React, { Component } from "react";
import Service from '../services/Service';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      error: ''
       // Initialize authentified state
    };
    this.Service = new Service();
  }

  handlLogin = async (event) => {
    event.preventDefault();

    const { username, password } = this.state;
    try {
      const response = await this.Service.signIn(username, password);
      console.log('Response from signIn:', response);
      if (response.message === 'Login successful') {
        const sessionToken = response.sessionToken;
        const sessionResponse = await this.Service.checkCredentialCall(sessionToken);
        console.log('User authenticated:', sessionResponse === 'authenticated');
        console.log('Session response:', sessionResponse);


      
          this.setState({ authentified: true });
        
          window.location.href = '/myaccount/dashboard';

        
      } else {
        console.log('Login failed:', response.message);
        this.setState({ error: response.message });
      }
    } catch (error) {
      console.error('Error logging in:', error);
      this.setState({ error: 'Failed to log in. Please try again.' });
    }
  }

  handlInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  render() {
    const { username, password, error } = this.state;

    return (
    
      <div>
        <section id="three" className="wrapper style1 fade-up">
          <div className="inner">
            <h2 style={{ marginLeft: '5em', marginBottom: '2em' }}>ACCOUNTS ACCESS</h2>
            <div className="split style1">
              <section>
                <form onSubmit={this.handlLogin}>
                  <div className="fields">
                    <div className="field half">
                      <label htmlFor="username">Username</label>
                      <input type="text" name="username"
                        value={username}
                        onChange={this.handlInput}
                        id="username" required minLength="6"
                        placeholder="Username" />
                    </div>
                    <div className="field half">
                      <label htmlFor="password">Password</label>
                      <input type="password" name="password"
                        value={password}
                        onChange={this.handlInput}
                        id="password" required minLength="8"
                        placeholder="Password" />
                    </div>
                    <div className="container1">
                      <label className="checkbox-container">
                        Remember me
                        <input type="checkbox" />
                        <span className="checkmark"></span>
                      </label>
                    </div>
                  </div>
                  {error && <p style={{ color: 'red' }}>{error}</p>}
                  <button type="submit" id="loginbtn">Log in</button>
                  <p style={{ textAlign: 'center', fontSize: '1.3em' }}>Don't have an account?<a style={{ color: 'rgb(255, 255, 255)', fontSize: '1.4em' }} href="inscription">  Sign up</a> </p>
                </form>

              </section>
              <section>
                <ul className="contact">
                  <li>
                    <h3>Social</h3>
                    <ul className="icons">
                      <li><a href="https://twitter.com/EliteBank" className="icon brands fa-twitter" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">Twitter</span></a></li>
                      <li><a href="https://Facebook.com/EliteBank" className="icon brands fa-facebook-f" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">Facebook</span></a></li>
                      <li><a href="https://GitHub.com/EliteBank" className="icon brands fa-github" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">GitHub</span></a></li>
                      <li><a href="https://Instagram.com/EliteBank" className="icon brands fa-instagram" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">Instagram</span></a></li>
                      <li><a href="https://LinkedIn.com/EliteBank" className="icon brands fa-linkedin-in" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">LinkedIn</span></a></li>
                    </ul>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

export default Login;