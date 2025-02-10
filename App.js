import React from "react"
import ReactDOM from "react-dom/client"
import logoimage from "./assets/images/logo.jpg"
import harleysimage from "./assets/images/harleys.jpg"
import theobromaimage from "./assets/images/theobroma.jpg"
import namasteimage from "./assets/images/namaste.jpg"
import pastastreetimage from "./assets/images/pastastreet.jpg"
import bluetokaiimage from "./assets/images/bluetokai.jpg"
import cornerhouseimage from "./assets/images/cornerhouse.jpg"
import ashaimage from "./assets/images/ashasweets.jpg"
import mcdonaldimage from "./assets/images/mcdonald.jpg"
import rameshwaramimage from "./assets/images/rameshwaram.jpg"
import pizzahutimage from "./assets/images/pizzahut.jpg"
import paakashalaimage from "./assets/images/paakashala.jpg"
import milanoimage from "./assets/images/milano.jpg"
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

const styleCard ={
    backgroundColor:"#f0f0f0",
};

const RestaurantCard = (props)=>{
    const { resname,cuisine,rating,resimage,timeOfDelivery}=props;
return (
    <div className="res-card" style={styleCard}>
        <img className="res-img" alt="res-img" src={resimage}/>
        <h3>{resname}</h3>
        <h4>{cuisine}</h4>
        <h4>{rating}</h4>
        <h4>{timeOfDelivery}</h4>
    </div>
)
};

const Body = () =>{
    return (
        <div className="body">
            <div className="search"> mysearch </div>
            <div className="res-container">
                <RestaurantCard  
                resname="Harleys Fine Baking" 
                cuisine="Cakes,Macarons" 
                rating="4.5" timeOfDelivery="34mins" 
                resimage={harleysimage}/>
                <RestaurantCard  
                resname="Namaste" 
                cuisine="South Indian,Idli" 
                rating="4.3" timeOfDelivery="15mins" 
                resimage={namasteimage}/>
                <RestaurantCard  
                resname="Corner House" 
                cuisine="Icecreams,Deserts" 
                rating="4.9" timeOfDelivery="45mins" 
                resimage={cornerhouseimage}/>
                <RestaurantCard  
                resname="Theobroma" 
                cuisine="Cakes,Macarons" 
                rating="4.5" timeOfDelivery="28mins" 
                resimage={theobromaimage}/>
                <RestaurantCard  
                resname="Pasta Street" 
                cuisine="Pasta,Italian" 
                rating="4.1" timeOfDelivery="15mins" 
                resimage={pastastreetimage}/>
                <RestaurantCard  
                resname="Blue Tokai" 
                cuisine="Coffee,Deserrts" 
                rating="4.6" timeOfDelivery="35mins" 
                resimage={bluetokaiimage}/>
                <RestaurantCard  
                resname="Rameshwaram Cafe" 
                cuisine="South Indian,Dosa" 
                rating="4.3" timeOfDelivery="35mins" 
                resimage={rameshwaramimage}/>
                <RestaurantCard  
                resname="Milano" 
                cuisine="Gelato,Icecream" 
                rating="4.7" timeOfDelivery="45mins" 
                resimage={milanoimage}/>
                 <RestaurantCard  
                resname="PizzaHut" 
                cuisine="Pizza,FastFood" 
                rating="4.0" timeOfDelivery="15mins" 
                resimage={pizzahutimage}/>
                <RestaurantCard  
                resname="Asha Sweets" 
                cuisine="Sweets Savouries" 
                rating="4.3" timeOfDelivery="25mins" 
                resimage={ashaimage}/>
                <RestaurantCard  
                resname="Paakashala" 
                cuisine="South Indian,Idli" 
                rating="4.3" timeOfDelivery="45mins" 
                resimage={paakashalaimage}/>
                <RestaurantCard  
                resname="Mc Donald's" 
                cuisine="Burger,Fries,FastFood" 
                rating="4.3" timeOfDelivery="45mins" 
                resimage={mcdonaldimage}/>

            </div>
        </div>
    )
};

const Footer = () =>{
 return(<div className="footer">
        <div className="copyright" style={{marginLeft:500}}><h3>CopyRight 2025</h3></div>
        <div className="contact" style={{paddingLeft:5}}><h3>Bangalore</h3></div>
    </div>)
};

const AppLayout = () =>{
return(
    <div className="app">
        <Header />
        <Body />
        <Footer/>
    </div>
)
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);