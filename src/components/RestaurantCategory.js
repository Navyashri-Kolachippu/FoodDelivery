import ItemsList from "./ItemsList";


const RestaurantCategory=({data,showItems,setshowIndex})=>
{

    const handleClick=()=>
    {
        setshowIndex();
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