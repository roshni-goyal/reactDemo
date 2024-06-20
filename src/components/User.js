import { useState } from "react";


const User = (props) => {

    const [count1 , setCount1] = useState(0);
    const [count2 , setCount2] = useState(1);

    useEffect(() => {
        //API calls
    },[])

const {name} = props;

    return (
        <div className = "user-card">
                <h1>Count = {count1}</h1>
                <h1>Count = {count2}</h1>
                <h2>Name : {name}</h2>
                <h3>Location:  Iowa</h3>
                <h4>Contact : @roshnigoyal</h4>
        </div>
    )

}

export default User;