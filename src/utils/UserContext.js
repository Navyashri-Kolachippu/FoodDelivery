import { createContext } from "react";

const UserContext=createContext(
    data={
        loggedInUser: "Default User"
    }
)

export default UserContext;