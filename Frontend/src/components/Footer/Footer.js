import React, { Component } from "react";

class Footer extends Component {
    render() {
        return (
            <footer id="footer" className="wrapper style1-alt">
                <div className="inner">
                    <ul className="menu">
                        <li><a href="/home"><img src="../../../../img/hh.png" alt="img" /></a></li>
                        <li>&copy;2024 EliteBank All rights reserved.</li>
                        <li><a href="/privacy">Privacy</a></li>
                        <li><a href="/cookies">Cookies</a></li>
                        <li><a href="/legal">Legal</a></li>
                    </ul>
                </div>
            </footer>
        );
    }
}

export default Footer;


