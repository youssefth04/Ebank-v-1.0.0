import React, { Component } from "react";
import LinkcardPopup from "../LinkcardPopup/LinkcardPopup";


class Wallet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    };
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  render() {
    return (
      <div>
        <body className="bodysend">
          <div id="cardlink">
            <img id="cardimg" src="../../../img/AA.png" alt="img" />
            <h2>Link a new card</h2>
            <p>
              Join the millions of customers who use EliteBank to pay for everyday purchases any time, any day, anywhere.
            </p>
            <button id="linkcardbtn" onClick={this.toggleModal}>Link a card</button>
          </div>
          <hr />
        </body>
        {this.state.showModal && <LinkcardPopup onClose={this.toggleModal} />}
      </div>
    );
  }
}

export default Wallet;