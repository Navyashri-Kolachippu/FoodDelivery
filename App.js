import React from "react"
import ReactDOM from "react-dom/client"
import logoimage from "./assets/images/logo.jpg"
import "./index.css"

const Header =()=>{
    return(
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={logoimage}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const AppLayout = () =>{
return(
    <div className="app">
        <Header />
    </div>
)
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);