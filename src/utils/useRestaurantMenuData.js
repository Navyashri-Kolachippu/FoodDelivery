import { useEffect, useState } from "react"

const useRestaurantMenuData=(resId)=>{
    const [menudata,setmenudata]=useState();
    useEffect(()=>
        {
            fetchMenu();
        },[]);
    const fetchMenu=async()=>{
        const data=await fetch("http://localhost:5220/api/FoodDelivery/GetMenu?restaurantId="+resId);
        const json=await data.json();
        setmenudata(json);
    }
    return menudata;
}

export default useRestaurantMenuData;