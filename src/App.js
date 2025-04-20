import React,{lazy,Suspense, useContext, useEffect, useState} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";

const Grocery = lazy(()=>import ("./components/Grocery"));


const AppLayout = () =>{
    
    const [userName,setUserName]=useState();


    //authentication code
    useEffect(()=>
        {  
            const data={
                name :"Navya"
            }
            setUserName(data.name);
        },
    [])
    
return(
    <Provider store={appStore}>
    <UserContext.Provider value={{loggedInUser:userName, setUserName}}>
    <div className="app">
        <Header />
        <Outlet/>
        <Footer/>
    </div>
    </UserContext.Provider>
    </Provider>
)
};
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                index:true,
                element:<Body/>,
            },
            {
                path:"/contact",
                element:<Contact/>,
                
            },
            {
                path:"/about",
                element:<About/>,
                
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<div>Loading..</div>}>
                        <Grocery/>
                        </Suspense>
            },
            {
                path:"/restaurantmenu/:resId",
                element:<RestaurantMenu/>
            },
            {
                path:"/cart",
                element:<Cart/>
            }
        ],
        errorElement:<Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);