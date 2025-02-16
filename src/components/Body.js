import {RestaurantCard } from "../components/RestaurantCard";
import { useState } from "react";
import { resList  } from "../utils/mockData";

const Body = () =>{
    const [listOfResturants,setListOfRestaurants]= useState(resList);
    return (
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