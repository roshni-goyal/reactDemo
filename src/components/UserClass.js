import React from "react";

class UserClass extends React.Component {

    constructor(props) {
        super(props);

       
        //state variable in Class based components
        this.state = {
        userInfo : {
            name: "John Doe",
            location: "Default",
            avatar_url: "https://avatars.githubusercontent.com/u/73108509?v=4",
        },
        }
        //console.log(this.props.name + " Constructor")
               //console.log(this.props);
    }

    async componentDidMount(){
       // console.log(this.props.name + " mounted!!!")

       const data = await fetch("https://api.github.com/users/roshni-goyal");
       const json = await data.json();
       console.log(json);
       this.setState({
        userInfo : json,
       })
    }

    render(){

        //console.log(this.props.name + " Render")
        const {name , location, avatar_url} = this.state.userInfo;
        console.log(name);
        return (
            <div className = "user-card">
                    <img src = {avatar_url}/>
                    <h2>Name : {name}</h2>
                    <h3>Location:  {location}</h3>
                    <h4>Contact : "NA"</h4>
            </div>
        )
    }

}
export default UserClass;