
 const RestaurantCard = (props)=>{
    const {resData}=props;
    //console.log(props);
    if (!resData?.data) {
        return <div className="p-4 text-red-500">Invalid restaurant data</div>;
      }
      
    const {resimage,cuisines,resname,ratings,costforTwo,deliveryTime} = resData?.data;
return (
    <div data-testid="resCard" className="w-[250px] p-4 shadow-lg rounded-lg flex flex-col h-full bg-gray-200 hover:bg-gray-300">
        <img className="w-50 h-32 object-cover rounded-lg" alt="res-img" src={resimage}/>
        <h3 className="font-bold py-4 text-lg">{resname}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{ratings} stars</h4>
        <h4>Rs.{costforTwo/100} for two.</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
)
};

export const promotedRestaurants=(RestaurantCard)=>
{
    return(props)=>{
        return(
        <div className="relative">
            <label className="absolute bg-black text-white text-right rounded-lg m-3 p-2">Promoted</label>
            <RestaurantCard {...props}/>
        </div>
        );
    };
};

export default RestaurantCard