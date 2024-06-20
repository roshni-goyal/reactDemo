import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";


const Header = () => {

    //let btnName = "Login";
    const[btnName,setbtnName]= useState("Login");

    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
    <div className="logo-container">
        <Link to = "/"><img className="logo" src={LOGO_URL}/></Link>
    </div>
    <div className="nav-items">
        <ul>
            <li>
                Online Status : {onlineStatus ?  "✅" : "🛑"}
            </li>
            <li>
                <Link to = "/">Home</Link>
            </li>
            <li>
                <Link to = "/about">About us</Link>
            </li>
            <li>
                <Link to = "/contact">Contact us</Link>
            </li>
            <li>
                <Link to = "/grocery">Groceries</Link>
            </li>
            <li>Cart</li>
            <li className="login-btn" onClick={() => {btnName === "Login"
             ? setbtnName("Logout") 
             : setbtnName("Login")}}
             >{btnName}</li>
        </ul>
    </div>
</div>
    )
}

export default Header;