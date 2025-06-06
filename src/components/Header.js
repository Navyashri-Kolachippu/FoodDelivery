import { useContext, useState } from "react";
import logoimage from "../../public/logo.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header =()=>{
    const [btnName,setbtnName]=useState("Login");
    const online = useOnline();
    const {loggedInUser}=useContext(UserContext);
    //Subscribe to the store using selector
    const cartItems =useSelector((store)=>store.cart.items);
    //console.log(cartItems);
    //console.log(logoimage);
    return(
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
                <img className="w-24" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="flex items-centers">
                <ul className="flex p-4 m-4">
                    <li className="px-4">Online {online?"✔":"🔴"}</li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about">About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4 font-bold text-lg"><Link to="/cart">Cart - ({cartItems.length} -Items)</Link></li>
                    <li className="px-4">
                        <button className="btnLogin"
                            onClick={()=>
                            {
                                btnName =="Login"?
                                setbtnName("Logout"):
                                setbtnName("Login")
                            }}>
                          {btnName}
                        </button>
                    </li>
                    <li className="px-4">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;