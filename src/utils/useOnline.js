import { useEffect, useState } from "react";

const useOnline=()=>{
 const [getOnlineStatus,setOnlineStatus]=useState(true);

    useEffect(()=>{
        window.addEventListener("offline",()=>{
            setOnlineStatus(false);
        })
        window.addEventListener("online",()=>{
            setOnlineStatus(true);
        })
    },[]);
 return getOnlineStatus;
};

export default useOnline;