import React from "react"
import ReactDOM from "react-dom/client"
import "../index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import Contact from "./components/Contact";
import About from "./components/About";
import Error from "./components/Error";

const AppLayout = () =>{
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
                path:"/",
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
        ],
        errorElement:<Error/>,
    },
    
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);