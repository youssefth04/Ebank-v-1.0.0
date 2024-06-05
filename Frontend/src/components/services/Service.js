import Config from './Config';

export default class Service {
    constructor() {
        this.host = Config.host;
        this.sessionToken = this.getSessionToken();
    }

    getSessionToken() {
        return localStorage.getItem('sessionToken');
    }

    signUp(firstName, lastName, username, email, password) {
        return new Promise((resolve, reject) => {
            const signUpUrl = `${this.host}/register`;
            const xhr = new XMLHttpRequest();
            
            xhr.open('POST', signUpUrl, false);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error('Sign-up failed'));
                }
            };

            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };

            const userData = {
                firstName,
                lastName,
                username,
                email,
                password
            };

            xhr.send(JSON.stringify(userData));
        });
    }

    signIn(username, password) {
        return new Promise((resolve, reject) => {
            const signInUrl = `${this.host}/login`;
            const xhr = new XMLHttpRequest();
    
            xhr.open('POST', signInUrl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
    
            xhr.onload = function () {
                if (xhr.readyState === 4) {
                    if (xhr.status === 200) {
                        const response = JSON.parse(xhr.responseText);
                        if (response.sessionToken) {
                            localStorage.setItem('sessionToken', response.sessionToken);
                            resolve(response);
                        } else {
                            reject(new Error('Session token not found in response'));
                        }
                    } else {
                        reject(new Error('Sign-in failed'));
                    }
                }
            };
    
            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };
    
            xhr.onerror = () => {
                reject(new Error('Network error'));
            };
    
            const userData = { username, password };
            xhr.send(JSON.stringify(userData));
        });
    }

    checkCredentialCall(sessionToken) {
        return new Promise((resolve, reject) => {
            const checkurl = `${this.host}/checkcredential`;
            const xhr = new XMLHttpRequest();

            xhr.open('POST', checkurl, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            xhr.onload = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error('Sign-in failed'));
                }
            };

            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            xhr.send(JSON.stringify({ sessionToken }));
        });
    }

    logout() {
        return new Promise((resolve, reject) => {
            const logoutUrl = `${this.host}/logout`;
            const xhr = new XMLHttpRequest();
            xhr.open('POST', logoutUrl, true); // true for asynchronous request
            xhr.setRequestHeader('Authorization', `Bearer ${this.sessionToken}`);

            xhr.onload = function() {
                if (xhr.status === 200) {
                    localStorage.removeItem('sessionToken');
                    resolve();
                } else {
                    reject(new Error('Logout failed: ' + xhr.statusText));
                }
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            xhr.send();
        });
    }

    sendMoney(receiver, amount) {
        return new Promise((resolve, reject) => {
            const sendMoneyUrl = `${this.host}/send-money`;
            const xhr = new XMLHttpRequest();
            xhr.open('POST', sendMoneyUrl, true);
            const sessionToken = this.getSessionToken();
    
            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.setRequestHeader('Authorization', `Bearer ${sessionToken}`);
    
            xhr.onload = function() {
                if (xhr.readyState === 4) {
                    const response = JSON.parse(xhr.responseText);
                    if (xhr.status === 200) {
                        resolve(response);
                    } else if (xhr.status === 400) {
                        reject(new Error(response.error || 'Bad Request'));
                    } else if (xhr.status === 500) {
                        reject(new Error(response.error || 'Internal Server Error'));
                    } else {
                        reject(new Error('Unexpected response status: ' + xhr.status));
                    }
                }
            };
    
            xhr.ontimeout = () => {
                reject(new Error('Request timed out'));
            };
    
            xhr.onerror = () => {
                reject(new Error('Network error'));
            };
    
            const data = { receiver, amount };
            xhr.send(JSON.stringify(data));
        });
    }

    getBalance() {
        return new Promise((resolve, reject) => {
            const url = `${this.host}/balance`;
            const xhr = new XMLHttpRequest();
            xhr.open('GET', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');
            const sessionToken = this.getSessionToken();
            xhr.setRequestHeader('Authorization', `Bearer ${sessionToken}`);

            xhr.onload = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    const response = JSON.parse(xhr.responseText);
                    resolve(response);
                } else {
                    reject(new Error('Error fetching balance'));
                }
            };

            xhr.onerror = () => {
                reject(new Error('Network error'));
            };

            xhr.send();
        });
    }
}