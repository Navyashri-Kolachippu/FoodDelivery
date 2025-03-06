import { useState} from "react";

const user=(props)=>{
    const [count1]=useState(0);
    const [count2]=useState(1);
    return(
        <div className="user-data">
                <h3>Count1:{count1}</h3>
                <h3>Count2:{count2}</h3>
                <h3>Name:{props.name}</h3>
                <h3>Location:{props.location}</h3>
                <h3>contact@delivery.com</h3>
        </div>
    );
}
export default user;