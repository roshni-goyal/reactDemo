import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";



class AboutUS extends React.Component {


    constructor(props){
        super(props);

       // console.log("(Parent) Contructor!!!")
    }

    componentDidMount(){
       // console.log("(Parent) already mounted!!!")
    }

    render(){

        //console.log("(Parent) Render!!!")
        return (
            <div>
                <div>
                    LoggedIn User:
                    <UserContext.Consumer>
                        {({loggedInUser}) =>  <h1 className="font-semibold">{loggedInUser}</h1> }
                    </UserContext.Consumer>
                </div>
                <h1>About</h1>
                <h2>This is a Food Delivery App</h2>
                <UserClass name = {"Roshni Goyal"} location = {"Iowa"} contact = {"@roshnigoyal"}/>
            </div>
    
        ) 
    }
}
export default AboutUS;

// const AboutUs = () => {
//     return (
//         <div>
//             <h1>About</h1>
//             <h2>This is a Food Delivery App</h2>
//             {/* <User name = {"Roshni Goyal(function)"}/> */}

//             <UserClass name = {"Roshni Goyal(class)"} location = {"Iowa"} contact = {"@roshnigoyal"}/>
//         </div>

//     )
// }

