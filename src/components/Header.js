import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

    //let btnName = "Login";
    const[btnName,setbtnName]= useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg">
            <div className="logo-container">
                <Link to = "/"><img className="w-24" src={LOGO_URL}/></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    <li className = "px-4">
                        Online Status : {onlineStatus ?  "✅" : "🛑"}
                    </li>
                    <li className = "px-4">
                        <Link to = "/">Home</Link>
                    </li>
                    <li className = "px-4">
                        <Link to = "/about">About us</Link>
                    </li>
                    <li className = "px-4">
                        <Link to = "/contact">Contact us</Link>
                    </li>
                    <li className = "px-4">
                        <Link to = "/grocery">Groceries</Link>
                    </li>
                    <li className = "px-4">Cart</li>
                    <li className="px-4" onClick={() => {btnName === "Login"
                    ? setbtnName("Logout") 
                    : setbtnName("Login")}}
                    >{btnName}</li>
                </ul>
            </div>
        </div>
    )
}

export default Header;