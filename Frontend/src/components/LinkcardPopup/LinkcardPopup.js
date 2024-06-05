import React, { Component } from "react";
import './LinkcardPopup.css';

class Modal extends Component {
  render() {
    return (
      <div className="modal">
        <div className="modal-content">
          <span className="close" onClick={this.props.onClose}>&times;</span>
          <form>
            <label htmlFor="cardNumber">Card Number:</label>
            <input type="text" id="cardNumber" name="cardNumber" required maxLength={16} minLength={16} placeholder="Card Number" />
            <label htmlFor="expiryDate">Expiration Date:</label>
            <input type="text" id="expiryDate" name="expiryDate" required placeholder="MM/YY"/>
            <label htmlFor="cvv">CVV:</label>
            <input type="text" id="cvv" name="cvv" required minLength={3} maxLength={4} placeholder="CVV"/><br></br>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default Modal;