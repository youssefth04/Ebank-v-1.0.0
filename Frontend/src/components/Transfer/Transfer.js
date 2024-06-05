import React, { Component } from 'react';
import Service from '../services/Service';

class Transfer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            receiver: '',
            amount: '',
            message: '',
        };

        this.service = new Service();
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = (event) => {
        event.preventDefault();
        const { receiver, amount } = this.state;
        this.service.sendMoney(receiver, amount)
            .then(response => {
                this.setState({ message: 'Money sent successfully!' });
            })
            .catch(error => {
                this.setState({ message: 'Failed to send money: ' + error.message });
            });
    };

    render() {
        const { receiver, amount, message } = this.state;

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h2>Send money to</h2>
                    <input
                        type="text"
                        name="receiver"
                        placeholder="Receiver Username"
                        value={receiver}
                        onChange={this.handleChange}
                    />
                    <br />
                    <input
                        type="number"
                        name="amount"
                        placeholder="Amount"
                        value={amount}
                        onChange={this.handleChange}
                    />
                    <button
                        type="submit"
                        style={{ backgroundColor: '#03087f', marginTop: '3em' }}
                    >
                        Send
                    </button>
                </form>
                {message && <p>{message}</p>}
            </div>
        );
    }
}

export default Transfer;