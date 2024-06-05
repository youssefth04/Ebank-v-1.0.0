import React,{Component} from "react";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import LandingPage from '../../pages/LandingPage'; 
import LoginPage from '../../pages/LoginPage';
import SignupPage from '../../pages/SignupPage';
import DashboardPage from '../../pages/DashboardPage';
import SendPage from '../../pages/SendPage';
import WalletPage from "../../pages/WalletPage";
import RequestPage from "../../pages/RequestPage";
import ProtectedRoutes from "../utils/ProtectedRoutes";
import './App.css';

class App extends Component{
	render(){
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route index element ={<LandingPage/>} /> 
        <Route path='/home' element={<LandingPage/>}/>
        <Route path='/authentification' element={<LoginPage/>} />
        <Route path='/inscription' element={<SignupPage/>}/>

        <Route element={<ProtectedRoutes/>}>
               <Route path='/myaccount/dashboard' element={<DashboardPage/>}/>
              <Route path='/myaccount/transfer' element={<SendPage/>}/>
               <Route path="/myaccount/wallet" element={<WalletPage/>}/>
               <Route path="/myaccount/request" element={<RequestPage/>}/>
               </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}
}
export default App;