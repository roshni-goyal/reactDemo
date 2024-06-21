import { CDN_URL , RATING_URL } from "../utils/constants";

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
        avgRating,
    } = resData?.info;
    const {deliveryTime} = resData?.info?.sla;
    
    const {header, subHeader} = resData?.info?.aggregatedDiscountInfoV3 || {};

 
    return (
        <div className="m-3 p-4 w-72 rounded-lg">
            <div className="relative">
            <img className = " h-72 w-72 rounded-lg"
                alt = "res-logo"
                src = {CDN_URL
                    + 
                    cloudinaryImageId}/>
                {header && subHeader && (
                    <label className="absolute bottom-0 bg-black bg-opacity-50 text-white font-extrabold m-4 p-4 rounded-lg">{header} {subHeader}</label>
                )}
               
            </div>
           
            <h3 className="font-bold py-2 text-lg">{name}</h3>
            <h4>{costForTwo}</h4>
            <div className="flex">
            <img src="rating.png"/><h4>{avgRating}</h4><span>&bull;</span><h4>{deliveryTime} minutes</h4>
            </div>
        </div>
    )
}

export const withTopRatedLabel = (RestaurantCart) => {
    return (props) => {
        return (
            <div className="relative">
                <label className="absolute top-0 left-0 z-10 bg-black text-white m-7 p-2 rounded-lg">Top Rated</label>
                <RestaurantCart {...props}/>
            </div>
        );
    };

};

export default RestaurantCart;