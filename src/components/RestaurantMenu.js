import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";



const RestaurantMenu = () => {

    const {resId} = useParams(); 

    const restaurantInfo = useRestaurantMenu(resId);

    const [showIndex , setShowIndex] = useState(0);

    if(restaurantInfo === null) return <ShimmerCard />;
 
  
    const {name, cuisines, avgRating, costForTwoMessage, totalRatingsString} = restaurantInfo?.cards[2]?.card?.card?.info;
    
    const { itemCards } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2].card.card;

    const categories = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
        (c) => c.card?.card?.["@type"] == 
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    return (
        <div className="">
            <h1 className="font-bold my-7 text-2xl text-center">{ name }</h1>
            <div className="flex flex-col items-center text-left">
                <div className="w-[500] h-64 p-3 bg-white border border-gray-300 rounded-xl shadow-lg">
                        <h3 className="font-bold text-lg text-black">{avgRating} ({totalRatingsString}) <span>&bull;</span> {costForTwoMessage}</h3>
                        <h3 className="font-bold text-sm text-orange-500">{ cuisines.join(" , ")}</h3>
                </div>
            </div>
            <div>
                {categories.map((category,index) => 
                //Controlled component bcz parent is controlling it by passing the state and controlling the behaviour based on that state by using showItems for toggle feature
                    (<RestaurantCategory key = {category?.card?.card.title}
                    categoryData = {category?.card?.card}
                    showItems = {index === showIndex && true}
                    setShowIndex={() => setShowIndex(index)}
                    />
                    ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;