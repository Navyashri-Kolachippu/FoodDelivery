import {resList } from "../utils/mockData";

const styleCard ={
    backgroundColor:"#f0f0f0",
};


export const RestaurantCard = (props)=>{
    const {resData}=props;
    const {resimage,cuisines,resname,ratings,costforTwo,deliveryTime} = resData?.data;
return (
    <div className="w-[250px] p-4 shadow-lg rounded-lg flex flex-col h-full bg-gray-200 hover:bg-gray-300">
        <img className="rounded-lg" alt="res-img" src={resimage}/>
        <h3 className="font-bold py-4 text-lg">{resname}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{ratings} stars</h4>
        <h4>Rs.{costforTwo/100} for two.</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
)
};