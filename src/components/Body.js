import {RestaurantCard } from "../components/RestaurantCard";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";
import useOnline from "../utils/useOnline";

const Body = () =>{
    const online = useOnline();
    const [listOfResturants,setListOfRestaurants]= useState([]);
    const [filteredListOfResturants,setFilteredListOfRestaurants]= useState([]);
    const [searchText, setSearchText] = useState("");;
    
    useEffect(()=>{
        fetchData();
    },[]);


    const fetchData= async()=>{
        const data= await fetch("http://localhost:5220/api/FoodDelivery/GetRestaurants");
        const json = await data.json();
        setListOfRestaurants(json);
        setFilteredListOfRestaurants(json);
    };

    if(online===false)
        {
            return(
                 <h1>Your not online currently , please check your internet.</h1>
            );
        }
    return (listOfResturants.length == 0)?  <Shimmer /> : (
        <div className="body">
            <div className="filter flex"> 
                <div className="m-4 p-4">
                    <input type="text" className="search-box border p-1 border-black" value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} />
                    <button className="px-4 py-1 m-4 bg-green-100 rounded-lg" onClick={()=>
                    {
                        const filteredRes=listOfResturants.filter((res) =>
                            res?.data?.resname?.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredListOfRestaurants(filteredRes);
                    }
                    }>Search</button>
                </div>
                <div className="m-4 p-4 flex items-center">
                <button className="px-4 py-1 m-4 bg-gray-100 rounded-lg"
                onClick={()=>{
                   var filteredlist = listOfResturants.filter((res)=>res.data.ratings > 4.5);
                   setFilteredListOfRestaurants(filteredlist);
                }}>
                Top Rated Restaurants</button> 
                </div>
            </div>
            <div className="flex gap-4 flex-wrap items-stretch">
                {
                    filteredListOfResturants.map((restaurant) => (
                        <Link  key={restaurant.data.id} to={"/restaurantmenu/"+restaurant.data.id} className="restaurant-link">
                            <RestaurantCard resData={restaurant} />
                        </Link> 
                    ))
                }
            </div>
        </div>
    )
};

export default Body;