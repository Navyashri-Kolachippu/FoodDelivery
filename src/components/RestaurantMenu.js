
import Shimmer from "./Shimmer";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import RestaurantCategory from "./RestaurantCategory";
import { useParams } from "react-router-dom";
import { useState } from "react";

const RestaurantMenu = ()=>{
   const {resId} = useParams();
   const menudata= useRestaurantMenuData(resId);
   const [showIndex,setshowIndex]=useState(null);

    if (!menudata) {
        return <Shimmer />;
    }
 else
 {
    //console.log(menudata);
    const {restaurantName,cuisines=[],costForTwo,categories=[],restaurantId}=menudata;
    return(
        <div className="p-4">
            <h1 className="text-xl font-bold">{restaurantName}</h1>
            <h3>{cuisines.join(", ")} - Rs.{costForTwo}</h3>
            <h3 className="mt-4 text-lg font-semibold">Menu</h3>
            {categories.map((category,index)=> 
            <RestaurantCategory key={category.categoryId} data={category} 
            showItems={index===showIndex?true:false}
            setshowIndex={()=>setshowIndex(index)} />)}
        </div>
    );
}
};

export default RestaurantMenu;