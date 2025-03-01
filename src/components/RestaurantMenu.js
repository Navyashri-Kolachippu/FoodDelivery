
import { useEffect } from React;

const RestaurantMenu = ()=>{
   
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu=async()=>{
        const data=await fetch();
        const json=await data.json();
    }

    return(
        <div className="menu">
            <h1>Name of the Res</h1>
            <h2>Menu</h2>
            <ul>
                <li></li>
            </ul>
        </div>
    );
};

export default RestaurantMenu;