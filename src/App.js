import React,{ lazy, Suspense, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider,Outlet} from "react-router-dom";
import AboutUs from "./components/AboutUs";
import ContactUs from "./components/ContactUs";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import UserContext from "./utils/UserContext";


const Grocery = lazy(() => import("./components/Grocery"));



const AppLayoutComponent = () => {


    const [userInfo, setUserInfo] = useState();

    useEffect (() => {
        //API call to get the details of the logged In User will come here, right now using hardcoded value
    const data = {
        name : "Roshni Goyal",
    };

    setUserInfo(data.name);
},[])

    return (
        <UserContext.Provider value = {{loggedInUser :userInfo}}>
            <div className = "app">
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
  
    )
   
}
const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayoutComponent/>,
        children:[
            {
                path: "/",
                element: <Body /> 
            },
            {
                path: "/about",
                element: <AboutUs/> 
            },

            {
                path: "/contact",
                element: <ContactUs/> 
            },
            {
                path: "/grocery",
                element: <Suspense fallback = {<h1>Loading....</h1>}><Grocery/></Suspense>
            },
            {
                path: "/restaurants/:resId",
                element: <RestaurantMenu/> 
            }
        ],
        errorElement:<Error /> //To handle Error
    }
    

])

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayoutComponent/>) Now instead of this we will use RouterProvider

root.render(<RouterProvider router = {appRouter}/>)