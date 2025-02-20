import {RestaurantCard } from "../components/RestaurantCard";
import { useState,useEffect } from "react";
import { resList  } from "../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () =>{
    const [listOfResturants,setListOfRestaurants]= useState([]);
    useEffect(()=>{
        fetchData();
    },[]);
    const fetchData= async()=>{
        const data= await fetch("http://localhost:5220/FoodDelivery");
        const json = await data.json();
        console.log(json);
        setListOfRestaurants(json);
    };

    return (listOfResturants.length == 0)?  <Shimmer /> : (
        <div className="body">
            <div className="filter"> 
                <button className="filter-btn"
                onClick={()=>{
                   var filteredlist = listOfResturants.filter((res)=>res.data.ratings > 4.5);
                   console.log(filteredlist)
                   setListOfRestaurants(filteredlist);
                }}>
                Top Rated Restaurants</button> 
            </div>
            <div className="res-container">
                {
                    listOfResturants.map((restaurant) => {
                        return <RestaurantCard key={restaurant.data.id} resData={restaurant} />;
                    })
                }
            </div>
        </div>
    )
};

export default Body;