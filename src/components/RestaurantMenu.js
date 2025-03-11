
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
        <div className="menu">
            <h1>{restaurantName}</h1>
            <h3>{cuisines.join(", ")} - Rs.{costForTwo}</h3>
            <h3>Menu</h3>
            <ul> 
                {items.map((item)=> (
               <li key={item.dishName} className="menu-item">
               <div className="menu-details">
                   <h4 className="dish-name">{item.dishName}</h4>
                   <p className="dish-price">Rs. {item.price}</p>
               </div>
               <img className="dish-img" alt={item.dishName} src={item.dishImage} />
               </li>
                ))}
            </ul>
        </div>
    );
}
};

export default RestaurantMenu;