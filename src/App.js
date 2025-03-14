import React,{lazy,Suspense} from "react"
import ReactDOM from "react-dom/client"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";

const Grocery = lazy(()=>import ("./components/Grocery"));

const AppLayout = () =>{
    console.log("applayout")
return(
    <div className="app">
        <Header />
        <Outlet/>
        <Footer/>
    </div>
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
            }
        ],
        errorElement:<Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);