import { useDispatch } from "react-redux";
import {addItem} from "../utils/cartSlice"

const ItemsList=({items})=>{

    const dispatch= useDispatch();
    const handleItem=(item)=>{
        dispatch(addItem(item));
    }

    return(
    <div>
    {
    items.map((item)=>(
    <div key={item.dishId} className="p-2 m-2 border-b-2 border-gray-200 flex justify-between items-center">
        <div>
        <span className="text-pretty font-semibold">{item.dishName}:</span>
        <span className="p-2 text-black-600"> Rs-{item.price}</span>
        </div>
        <div className="flex flex-col items-center">
            <div className="absolute">
            <button className="mx-20 my-20 p-2 bg-black text-white shadow-lg rounded-lg"
            onClick={()=>handleItem(item)}>
                Add +</button>
            </div>
        <img className="w-32 h-32 object-cover rounded-lg" alt={item.dishName} src={item.dishImage} />
        </div>
    </div>
    ))}
    </div>)}

export default ItemsList;