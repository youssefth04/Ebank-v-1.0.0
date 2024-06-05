import React, { Component } from "react";
import { Outlet, Navigate } from "react-router-dom";
import Service from "../services/Service";

class ProtectedRoutes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthenticated: null,
        };
        this.Service = new Service();
    }

    componentDidMount() {
        this.handleSession();
    }

    handleSession = () => {
        const sessionToken = localStorage.getItem('sessionToken');
        if (sessionToken) {
            this.Service.checkCredentialCall(sessionToken)
                .then(response => {
                    if (response.message === 'Authenticated') {
                        this.setState({ isAuthenticated: true });
                    } else {
                        this.setState({ isAuthenticated: false });
                    }
                })
                .catch(error => {
                    console.error("Error checking credentials:", error);
                    this.setState({ isAuthenticated: false });
                });
        } else {
            this.setState({ isAuthenticated: false });
        }
    };

    render() {
        const { isAuthenticated } = this.state;

        if (isAuthenticated === null) {
            // You can show a loading spinner or message here while authentication is being checked
            return <div>Loading...</div>;
        }

        return isAuthenticated ? <Outlet /> : <Navigate to="/authentification" />;
    }
}

export default ProtectedRoutes;