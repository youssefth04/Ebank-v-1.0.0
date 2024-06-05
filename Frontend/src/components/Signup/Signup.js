import React, { Component } from "react";
import Service from "../services/Service";

class Signup extends Component {
    constructor(props){
        super(props);
        this.state={
            firstName:'',
            lastName:'',
            username:'',
            email:'',
            password:''

        }
        this.Service = new Service();

    }
    handleSignup= async(event)=>{
        event.preventDefault();

        const { firstName, lastName, username, email, password } = this.state;
        try {
            const response = await this.Service.signUp(firstName, lastName, username, email, password);
            console.log(response);
            // Redirect to the login page
            window.location.href = '/authentification';
            } catch (error)  {
            console.error("Error signing up:", error);
            // Handle sign-up failure
        }
    };
    handlInput = (event) => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
      }
    

  
    render() {
        const{firstName,lastName,username,email,password}=this.state;
        return (
            <section id="three" className="wrapper style1 fade-up">
            <div className="inner">
                <h2 style={{ marginLeft: '4em', marginBottom: '2.6em' }}>Become a customer of EliteBank</h2>
                <div className="split style1">
                    <section>
                        <form onSubmit={this.handleSignup}>
                            <div className="fields">
                                <div className="field half">
                                    <label htmlFor="fname">First name</label>
                                    <input type="text" name="firstName" id="fname" value={firstName} onChange={this.handlInput}
    required minLength="6" placeholder="First name" autoFocus/>
                                </div>
                                <div className="field half">
                                    <label htmlFor="lname">Last name</label>
                                    <input type="text" name="lastName" value={lastName} onChange={this.handlInput}
                                     id="lname" required minLength="6" placeholder="Last name" autoFocus/>
                                </div>
                                <div className="field half">
                                    <label htmlFor="username">Username</label>
                                    <input type="text" name="username" value={username} onChange={this.handlInput}
                                     id="username"  placeholder="Username"/>
                                </div> 
    
                                <div className="field half">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" value={email} onChange={this.handlInput}
                                     id="email"  placeholder="Email"/>
                                </div>
                                <div className="field half">
                                    <label htmlFor="password">Password</label>
                                    <input type="password" name="password" value={password} onChange={this.handlInput}
                                     id="password" required minLength="8" placeholder="password"/>
                                </div>
                        
                            </div>
                                <ul className="actions">
                                    <input type="submit" name="signup" id="signup" value="sign up" style={{ marginLeft: '1em' }} />
                                </ul>
                                <p style={{ textAlign: 'center', fontSize: '1.3em' }}>Have an account?<a style={{ color: '#ffffff', fontSize: '1.1em' }} href="authentification">  log in</a> </p>
                                
                                    
                         </form>
                    </section>
                    
                    <section>
                        <ul className="contact" >
                           
                                <h3>Social</h3>
                                <ul className="icons"  >
                                    <li><a href="https://twitter.com/EliteBank" className="icon brands fa-twitter" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">Twitter</span></a></li>
                                    <li><a href="https://Facebook.com/EliteBank" className="icon brands fa-facebook-f" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">Facebook</span></a></li>
                                    <li><a href="https://GitHub.com/EliteBank" className="icon brands fa-github" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">GitHub</span></a></li>
                                    <li><a href="https://Instagram.com/EliteBank" className="icon brands fa-instagram" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">Instagram</span></a></li>
                                    <li><a href="https://LinkedIn.com/EliteBank" className="icon brands fa-linkedin-in" style={{ fontSize: '2em', padding: '0.2em' }}><span className="label">LinkedIn</span></a></li>
                                </ul>
    
                        </ul>
                    </section>
                </div>
            </div>
        </section>
        );
    }
}

export default Signup;