import React,{Component} from "react";
import Navbar from "../components/Navbar/Navbar";
import Wallet from "../components/Wallet/Wallet";
import Footer from "../components/Footer/Footer";

class WalletPage extends Component{
    render(){
        return(
            <div>
               <Navbar a="Home" b="Send" c="Wallet" d="Activity" 
            img1="../../../img/téléchargement-removebg-preview.png"
             img2="../../../../img/images-removebg-preview.png" 
             btn="Log Out"
             e='none' f='none'
             
             />

            <Wallet/>
            <Footer/>
            </div>

        );
    }
}
export default WalletPage