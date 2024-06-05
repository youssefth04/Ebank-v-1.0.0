import React, { Component } from "react";
 import Navbar from "../components/Navbar/Navbar";
import Transfer from "../components/Transfer/Transfer";
import Footer from "../components/Footer/Footer";
import CurrencyConverter from "../components/CurrencyConverter/CurrencyConverter";



class SendPage extends Component {
    render() {
    return(
 <div>
             <Navbar a="Home" b="Send" c="Wallet" d="Activity" 
            img1="../../../img/téléchargement-removebg-preview.png"
             img2="../../../../img/images-removebg-preview.png" 
             btn="Log Out"
             e='none' f='none'
             
             />

    <div className=" bodysend">
         <div className="container">
             <div className="item">
                 <Transfer/>
             </div>
         <div className="item">
                <CurrencyConverter />
         </div>
      </div>
      </div>
      <Footer/>
      </div>

    );
}
}
export default SendPage