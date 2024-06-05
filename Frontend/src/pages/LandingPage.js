import React, { Component } from "react";

import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";




class LandingPage extends Component {
    render() {
    return(
        <div>
        <Navbar a="Home" b=" Why Us" c="About" d="Contact" btn=" Language" img1="none" img2="2" e="help" f="What's New" />
        <div id="wrapper">

			
					<section id="intro" class="wrapper style1 fullscreen fade-up">
						<div class="inner">
							<h1>welcome to</h1>
							<h4>Elitebank </h4>
							<h3>Proudly serving our community since 2000
								In person, online or over the phone we provide banking the way that you want it.
								Reach out and see why we are different.</h3>
							<ul class="actions">
								<li><a href="inscription" class="button scrolly">Sign up</a></li>
							</ul>
							<ul class="actions">
								<li><a href="authentification" class="button scrolly">Log in</a></li>
							</ul>
						</div>
					</section>
            </div>

            <section id="two" className="wrapper style3 fade-up">
        <div className="inner">
          <h2 style={{ textAlign: "center" }}>WHY CUSTOMERS CHOOSE US</h2>
          <h3 style={{ textAlign: "center" }}>
            At Elite Bank, we are committed to providing world-class customer
            support on all products offered, together with the best technological
            tools to make your banking experience the best it has ever been
          </h3>
          <div className="features">
            <section>
              <span className="icon solid major fa-code"></span>
              <h3>Investment</h3>
              <p>
                Maximize the return of your money with investment opportunities managed by professionals
              </p>
              <ul>
                <li>Asset sales and participation</li>
                <li>Security Investments through a third-party provider (First quarter 2024)</li>
              </ul>
            </section>
            <section>
              <span className="icon solid major fa-lock"></span>
              <h3>Secure</h3>
              <p>
                Your security is paramount. Our website utilizes advanced encryption and
                security measures to protect your sensitive information.
                You can bank online with confidence, knowing that your data is secure
              </p>
            </section>
            <section>
              <span className="icon solid major fa-cog"></span>
              <h3>Customer Forms</h3>
              <p>Apply online for the openings of accounts with forms for individuals and corporate customers</p>
              <ul>
                <li>Personal Accounts</li>
                <li>Commercial Accounts</li>
              </ul>
            </section>
            <section>
              <span className="icon solid major fa-desktop"></span>
              <h3>Deposits</h3>
              <p>Optimize your savings approach with the help of a global team of professionals</p>
              <ul>
                <li>Checking and Savings Accounts</li>
                <li>Certificates of Deposits</li>
                <li>Online Banking</li>
                <li>Phone Banking</li>
                <li>Remote Deposit Capture</li>
              </ul>
            </section>
            <section>
              <span className="icon solid major fa-link"></span>
              <h3>Lending</h3>
              <p>
                Our credit and Lending products are tailored for you and coordinate almost any type or scale of corporate flow.
              </p>
              <ul>
                <li>Commercial Loans</li>
                <li>Mortgage Loans</li>
                <li>Trade Finance Loans</li>
                <li>Asset-based Lending</li>
                <li>Factoring</li>
                <li>Letters of Credit</li>
              </ul>
            </section>
            <section>
              <span className="icon major fa-gem"></span>
              <h3>Results</h3>
              <p>To be the bank that our customers need, our employees embrace and our shareholders feel proud of.</p>
            </section>
          </div>
        </div>
      </section>
      <section id="one" className="wrapper style2 spotlights">
        <section>
          <a href="index.html" className="image">
            <img src="/img/3.jpg" alt="" data-position="center center"style={{ width: '400px', height: '400px' }}/>
          </a>
          <div className="content">
            <div className="inner">
              <h2 style={{ color: 'black' }}>Mission</h2>
              <p style={{ color: 'black' }}>The Bank’s mission is to become the premier International Bank in Morocco providing financial products and services to individuals and corporations in order for them to achieve their personal and business goals.</p>
            </div>
          </div>
        </section>
        <section>
          <a href="index.html" className="image">
            <img src="=../../../img/1.jpg" alt="" data-position="top center" style={{ width: '400px', height: '400px' }} />
          </a>
          <div className="content">
            <div className="inner">
              <h2 style={{ color: 'black' }}>Vision and Core Values</h2>
              <p style={{ color: 'black' }}>To be recognized as a premier financial institution operating internationally based on the pillars of integrity and honesty </p>
            </div>
          </div>
        </section>
        <section>
          <a href="index.html" className="image">
            <img src="../../../img/2.jpg" alt="" data-position="25% 25%" style={{ width: '400px', height: '400px' }} />
          </a>
          <div className="content">
            <div className="inner">
              <h2 style={{ color: 'black' }}>Trust</h2>
              <p style={{ color: 'black' }}>Based on a culture of respect and transparency where ethic and hard work are not compromised</p>
            </div>
          </div>
        </section>
      </section>
      


        




        <section id="three" className="wrapper style1 fade-up">
            <div className="inner">
                <h2>Contact us</h2>
                <div className="split style1">
                    <section>
                        <form method="post" action="log in.html">
                            <div className="fields">
                                <div className="field half">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="name" id="name" required />
                                </div>
                                <div className="field half">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" name="email" id="email" required />
                                </div>
                                <div className="field half">
                                    <label htmlFor="subject">Subject</label>
                                    <select>
                                        <option>Opportunities</option>
                                        <option>Complaint</option>
                                        <option>Assistance</option>
                                        <option>Be contacted</option>
                                    </select>
                                </div>
                                <div className="field">
                                    <label htmlFor="message">Message</label>
                                    <textarea name="message" id="message" rows="5"></textarea>
                                </div>
                            </div>
                            <ul className="actions">
                                <li><input type="submit" id="submit" name="Send Message" /></li>
                            </ul>
                        </form>
                    </section>
                    <section>
                        <ul className="contact">
                            <li>
                                <h3>Address</h3>
                                <span>23, Boulevard Hassan II, Quartier Al Adarissa Béni Mellal<br /></span>
                            </li>
                            <li>
                                <h3>Email</h3>
                                <a href="mailto:support@Elitebank.com">support@Elitebank.com</a>
                            </li>
                            <li>
                                <h3>Phone</h3>
                                <a href="tel:+212777777777"><span>(+212 777-777777)</span></a>
                            </li>
                            <li>
                                <h3>Social</h3>
                                <ul className="icons">
                                    <li><a href="https://twitter.com/EliteBank" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                                    <li><a href="https://Facebook.com/EliteBank" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                                    <li><a href="https://GitHub.com/EliteBank" className="icon brands fa-github"><span className="label">GitHub</span></a></li>
                                    <li><a href="https://Instagram.com/EliteBank" className="icon brands fa-instagram"><span className="label">Instagram</span></a></li>
                                    <li><a href="https://LinkedIn.com/EliteBank" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                                </ul>
                            </li>
                        </ul>
                    </section>
                </div>
            </div>
        </section>
        
        <Footer/>
        </div>

    );
}}
 export default LandingPage