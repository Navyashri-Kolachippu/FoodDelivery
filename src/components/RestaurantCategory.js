import ItemsList from "./ItemsList";
import {useState} from "react";

const RestaurantCategory=({data})=>
{
    const [showItems,setShowItems]=useState(false);

    const handleClick=()=>
    {
        showItems==true?setShowItems(false):setShowItems(true);
    }
    return(
        <div>
            <div className="w-12/12 mx-auto my-4 bg-gray-100 shadow-lg p-4">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
            <span className="font-bold text-lg"> {data.categoryName}({data.items.length}) </span>
            <span>⬇</span>
            </div>
            {showItems && <ItemsList items={data.items}/>}
            </div>
        </div>
    )

}

export default RestaurantCategory;