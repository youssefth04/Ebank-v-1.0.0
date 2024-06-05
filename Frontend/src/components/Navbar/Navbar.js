import React, { Component } from "react";

class Navbar extends Component {
    render() {
        const { a, b, c, d, e, f, img1, img2, btn, onLogout } = this.props;

        return (
            <section id="sidebar">
                <div className="inner">
                    <nav>
                        <ul>
                            <li>
                                <a href="dashboard">
                                    <img src="../../../../img/hh.png" className="logo" alt="logohome" />
                                </a>
                            </li>
                            <li><a href="dashboard">{a}</a></li>
                            <li><a href="transfer">{b}</a></li>
                            <li><a href="wallet">{c}</a></li>
                            <li><a href="#three">{d}</a></li>

                            {img1 !== 'none' && (
                                <li className="notification1">
                                    <a href="#three">
                                        <img src={img1} alt="notification" />
                                    </a>
                                </li>
                            )}

                            {img2 !== 'none' && (
                                <li className="notification">
                                    <a href="#three">
                                        <img src={img2} alt="" />
                                    </a>
                                </li>
                            )}

                            {e !== 'none' && <li><a href="#three">{e}</a></li>}
                            {f !== 'none' && <li><a href="#three">{f}</a></li>}

                            <li>
                                <button className="logout-btn" onClick={onLogout}>{btn}</button>
                            </li>
                        </ul>
                    </nav>
                </div>
            </section>
        );
    }
}

export default Navbar;