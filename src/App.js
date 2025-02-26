import React from "react"
import ReactDOM from "react-dom/client"
import "../index.css"
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contact from "./components/Contact";

const AppLayout = () =>{
return(
    <div className="app">
        <Header />
        <Body />
        <Footer/>
    </div>
)
};
const appconfig = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
    },
    {
        path:"/Contact",
        element:<Contact/>
        
    },
    {
        path:"/About",
        element:<About/>
        
    },

]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appconfig} />);