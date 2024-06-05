import React, { Component } from "react";
import Service from "../services/Service";

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      balance: 0.00,
      currency: 'USD',
    };
    this.Service = new Service();
  }

  componentDidMount() {
    this.fetchBalance();
  }

  fetchBalance = async () => {
    try {
      const response = await this.Service.getBalance();
      if (response.balance !== undefined && response.currency !== undefined) {
        this.setState({
          balance: response.balance,
          currency: response.currency
        });
      } else {
        console.error('Invalid response format:', response);
      }
    } catch (error) {
      console.error('Error fetching balance:', error);
    }
  };

  render() {
    const { balance, currency } = this.state;

    return (
      <div>
        <div className="container">
          <div className="item">
            <h2>Balance</h2>
            <h1>{balance.toFixed(2)} {currency}</h1>
            <h5>available</h5>
            <button>transfer funds</button>
          </div>
          
          <div className="item">
            <a href="transfer"><button className="sendbtn">Send</button></a>
            <a href="request"><button className="requestbtn">Request</button></a>
            <br />
      
            <a href="wallet" className="image-link">
              <img src="../../../img/addcard.png" style={{ height: "5em" }} alt="Add card or bank" />
              <h4>add card or bank</h4>
            </a>
      
            <a href="aa" className="image-link">
              <img src="../../../img/invoice.png" style={{ height: "5em" }} alt="Create an invoice" />
              <h4>create an invoice</h4>
            </a>
          </div>
      
          <div className="item">
            <h2>Recent activity</h2>
            <h3>See when money comes in, and when it goes out. You’ll find your recent activity here.</h3>
            <a href="activiy.html">show all</a>
          </div>
      
          <div className="item">
            <a href="wallet"><h3>Banks and cards</h3>
            <img src="../../../img/cardlink.png" alt="img"></img></a>
            <h4>send payments more securely. Link your credit card now.</h4>
            <a href="wallet">Link a card or Bank</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;