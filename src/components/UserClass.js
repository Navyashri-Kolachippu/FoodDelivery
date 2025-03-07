import { Component } from "react";

class UserClass extends Component
{
    constructor(props)
    {
        super(props);
        this.state=
        {
            count1:0,
            count2:1,
            userInfo:{
                name:"Dummy",
                location:"Default",
            }
        }

        console.log("Child component constructor");
    }

    async componentDidMount(){
       const data = await fetch("https://api.github.com/users/Navyashri-Kolachippu");
       const json = await data.json();
       console.log(json); 
       this.setState({
        userInfo:json,
       });
       console.log("Child component mounted");
    }
    render()
    {
        console.log("Child component rendered");
        const {name,location} =this.state.userInfo;
        return(
            <div className="user-data">
                {/* <h3>Count:{this.state.count1}</h3>
                <button onClick={
                    ()=>
                    {
                        this.setState({
                            count1:this.state.count1+1,
                            count2:this.state.count2+1,
                        })
                    }
                }>Click to Increment!</button>
                <h3>Count:{this.state.count2}</h3> */}
                <h3>Name:{name}</h3>
                <h3>Location:{location}</h3>
                <h3>contact@delivery.com</h3>
            </div>
        );
    }

}

export default UserClass;