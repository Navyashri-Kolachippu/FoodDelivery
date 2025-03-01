
import Shimmer from "./Shimmer";
import { useEffect,useState } from "react";

const RestaurantMenu = ()=>{
   const[menudata,setmenudata]=useState([]);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch("http://localhost:5220/api/FoodDelivery/GetMenu?restaurantId=1");
        const json=await data.json();
        setmenudata(json);
        console.log(json);
    }

    if (!menudata) {
        return <Shimmer />;
    }
 else
 {
    const {restaurantName,cuisines=[],costForTwo,items=[],restaurantId}=menudata;
    return(
        <div className="menu">
            <h1>{restaurantName}</h1>
            <h3>{cuisines.join(", ")} - Rs.{costForTwo}</h3>
            <h3>Menu</h3>
            <ul> 
                {items.map((item)=> (
                <li key={item.dishName}>
                    {item.dishName} - Rs.{item.price}
                </li>
                ))}
            </ul>
        </div>
    );
}
};

export default RestaurantMenu;