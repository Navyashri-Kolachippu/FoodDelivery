
import Shimmer from "./Shimmer";
import useRestaurantMenuData from "../utils/useRestaurantMenuData";
import { useParams } from "react-router-dom";

const RestaurantMenu = ()=>{
   const {resId} = useParams();
   const menudata= useRestaurantMenuData(resId);

    if (!menudata) {
        return <Shimmer />;
    }
 else
 {
    const {restaurantName,cuisines=[],costForTwo,items=[],restaurantId}=menudata;
    return(
        <div className="p-4">
            <h1 className="text-xl font-bold">{restaurantName}</h1>
            <h3>{cuisines.join(", ")} - Rs.{costForTwo}</h3>
            <h3 className="mt-4 text-lg font-semibold">Menu</h3>
            <ul className="space-y-4 bg-gray-100 shadow-md"> 
                {items.map((item)=> (
               <li key={item.dishName} className="flex items-center gap-4 border p-4 rounded-lg shadow-md">
               <div className="flex-1">
                   <h4 className="text-lg font-semibold">{item.dishName}</h4>
                   <p className="text-gray-600">Rs. {item.price}</p>
               </div>
               <img className="w-32 h-32 object-cover rounded-lg" alt={item.dishName} src={item.dishImage} />
               </li>
                ))}
            </ul>
        </div>
    );
}
};

export default RestaurantMenu;