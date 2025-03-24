import UserClass from "./UserClass";
import User from "./User";
import React from "react";
import UserContext from "../utils/UserContext";
class About extends React.Component{
    constructor(props)
    {
        super(props);
        console.log("Parent component constructor");
    }
    componentDidMount()
    {
        console.log("Parent component did mount");
    }
    
    render()
    {
     console.log("Parent component render");
       return( <div>
            <h1>About Us:</h1>
            <UserContext.Consumer>
                {({loggedInUser})=><h1>{loggedInUser}</h1>}
            </UserContext.Consumer>
            <h2>Welcome to Food delivery app.</h2>
            {/* <User name="Varchas" location="Bangalore"/> */}
            <UserClass name="Navya" location="Bangalore"/>
        </div>
       );
    }
}

export default About;