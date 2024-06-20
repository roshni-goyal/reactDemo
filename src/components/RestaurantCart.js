import { CDN_URL } from "../utils/constants";

const stylecard = {
    backgroundColor : "#f0f0f0",
}

const RestaurantCart = (props) => { 
    const {resData} = props;
    //console.log(props);
    const {
        cloudinaryImageId,
        name,
        costForTwo,
        avgRating
    } = resData?.info;
    const {deliveryTime} = resData?.info.sla;
    return (
        <div className="res-card" style={stylecard}>
            <img className = "res-img-logo"
             alt = "res-logo"
             src = {CDN_URL
                 + 
                cloudinaryImageId}/>
            <h3>{name}</h3>
            <h4>{costForTwo}</h4>
            <h4>{avgRating}</h4>
            <h4>{deliveryTime} minutes</h4>
        </div>
    )
}

export default RestaurantCart;