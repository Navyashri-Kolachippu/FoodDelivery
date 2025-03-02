import {RestaurantCard } from "../components/RestaurantCard";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Body = () =>{
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
        console.log(json);
    };

    return (listOfResturants.length == 0)?  <Shimmer /> : (
        <div className="body">
            <div className="filter"> 
                <div className="search">
                    <input type="text" className="search-box" value={searchText} 
                        onChange={(e) => setSearchText(e.target.value)} />
                    <button onClick={()=>
                    {
                        console.log(searchText);
                        const filteredRes=listOfResturants.filter((res) =>
                            res?.data?.resname?.toLowerCase().includes(searchText.toLowerCase())
                        );
                        setFilteredListOfRestaurants(filteredRes);
                    }
                    }>Search</button>
                </div>
                <button className="filter-btn"
                onClick={()=>{
                   var filteredlist = listOfResturants.filter((res)=>res.data.ratings > 4.5);
                   setListOfRestaurants(filteredlist);
                }}>
                Top Rated Restaurants</button> 
            </div>
            <div className="res-container">
                {
                    filteredListOfResturants.map((restaurant) => (
                        <Link  key={restaurant.data.id} to={"/restaurantmenu/"+restaurant.data.id}><RestaurantCard resData={restaurant} />;
                        </Link> 
                    ))
                }
            </div>
        </div>
    )
};

export default Body;