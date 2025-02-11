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


const resList=[
    {
        "type": "restaurant",
        "data":{
        "resname": "Mc Donald's",
        "ratings": "4.8",
        "deliveryTime": "1hr 20 mins",
        "cuisines": ["Fries","Burger","FastFood"],
        "costforTwo": "40000",
        "id": 1,
        "resimage": mcdonaldimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Namaste",
        "ratings": "4.5",
        "deliveryTime": "30 mins",
        "cuisines": ["Idly","Dosa","South Indian"],
        "costforTwo": "25000",
        "id": 2,
        "resimage": namasteimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Milano Ice cream",
        "ratings": "4.2",
        "deliveryTime": "40 mins",
        "cuisines": ["Icecream","Gelato","Desserts"],
        "costforTwo": "60000",
        "id": 3,
        "resimage": milanoimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Harleys Fine Baking",
        "ratings": "4.8",
        "deliveryTime": "50 mins",
        "cuisines": ["Cakes","Desserts","Coffee"],
        "costforTwo": "60000",
        "id": 4,
        "resimage": harleysimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Blue Tokai Coffee Roasters",
        "ratings": "4.3",
        "deliveryTime": "1hr 30 mins",
        "cuisines": ["Coffee","Tea","Cakes"],
        "costforTwo": "80000",
        "id": 5,
        "resimage": bluetokaiimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Pizza Hut",
        "ratings": "4.1",
        "deliveryTime": "30 mins",
        "cuisines": ["Pizza","Burger","FastFood"],
        "costforTwo": "45000",
        "id": 6,
        "resimage": pizzahutimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Rameshwaram Cafe",
        "ratings": "4.8",
        "deliveryTime": "30 mins",
        "cuisines": ["Idli","Dosa","South Indian"],
        "costforTwo": "60000",
        "id": 7,
        "resimage": rameshwaramimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Corner House",
        "ratings": "4.8",
        "deliveryTime": "1hr 40 mins",
        "cuisines": ["Ice cream","Desserts"],
        "costforTwo": "70000",
        "id": 8,
        "resimage": cornerhouseimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Asha sweets",
        "ratings": "4.8",
        "deliveryTime": "1hr 20 mins",
        "cuisines": ["Sweets","Jalebi","Savouries"],
        "costforTwo": "40000",
        "id": 9,
        "resimage": ashaimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Theobroma",
        "ratings": "4.8",
        "deliveryTime": "1hr 40 mins",
        "cuisines": ["Cakes","Desserts"],
        "costforTwo": "60000",
        "id": 10,
        "resimage": theobromaimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Pasta Street",
        "ratings": "4.2",
        "deliveryTime": "30 mins",
        "cuisines": ["Pasta","Noodles","FastFood"],
        "costforTwo": "80000",
        "id": 11,
        "resimage": pastastreetimage,
        }
    },
    {
        "type": "restaurant",
        "data":{
        "resname": "Paakashala",
        "ratings": "4.8",
        "deliveryTime": "1hr 20 mins",
        "cuisines": ["Idli","Dosa"],
        "costforTwo": "50000",
        "id": 12,
        "resimage": paakashalaimage,
        }
    }

];
const RestaurantCard = (props)=>{
    const {resData}=props;
    const {resimage,cuisines,resname,ratings,costforTwo,deliveryTime} = resData?.data;
return (
    <div className="res-card" style={styleCard}>
        <img className="res-img" alt="res-img" src={resimage}/>
        <h3>{resname}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{ratings} stars</h4>
        <h4>Rs.{costforTwo/100} for two.</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
)
};

const Body = () =>{
    return (
        <div className="body">
            <div className="search"> mysearch </div>
            <div className="res-container">
                {
                    resList.map((restaurant)=> (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>))
                }
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