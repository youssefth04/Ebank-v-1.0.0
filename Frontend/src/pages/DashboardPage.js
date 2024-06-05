import React, { Component } from "react";
import Navbar from "../components/Navbar/Navbar";
import Dashboard from "../components/Summary/Dashboard";
import Footer from "../components/Footer/Footer";
import Service from "../components/services/Service";

class DashboardPage extends Component {
    constructor(props) {
        super(props);
        this.Service = new Service();
        this.handleLogout = this.handleLogout.bind(this);
    }

    handleLogout() {
        this.Service.logout()
            .then(() => {
                console.log('Logout successful');
                window.location.href = '/authentification';
            })
            .catch(error => {
                console.error('Error during logout:', error);
            });
    }

    render() {
        return (
            <div>
                <Navbar 
                    a="Home" 
                    b="Send" 
                    c="Wallet" 
                    d="Activity" 
                    img1="../../../img/téléchargement-removebg-preview.png"
                    img2="../../../../img/images-removebg-preview.png" 
                    btn="Log Out"
                    e="none" 
                    f="none"
                    onLogout={this.handleLogout} // Use bound method
                />
                <div className="bodysend">
                    <Dashboard />
                </div>
                <Footer />
            </div>
        );
    }
}

export default DashboardPage;