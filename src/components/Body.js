import {resList } from "../utils/restaurantcard";

const styleCard ={
    backgroundColor:"#f0f0f0",
};

const RestaurantCard = (props)=>{
    const {resData}=props;
    const {resimage,cuisines,resname,ratings,costforTwo,deliveryTime} = resData?.data;
return (
    <div className="res-card" style={styleCard}>
        <img className="res-img" alt="res-img" src={resimage}/>
        <h3>{resname}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{ratings} stars</h4>
        <h4>Rs.{costforTwo/100} for two.</h4>
        <h4>{deliveryTime} minutes</h4>
    </div>
)
};

const Body = () =>{
    return (
        <div className="body">
            <div className="search"> mysearch </div>
            <div className="res-container">
                {
                    resList.map((restaurant)=> (
                    <RestaurantCard key={restaurant.data.id} resData={restaurant}/>))
                }
            </div>
        </div>
    )
};

export default Body;