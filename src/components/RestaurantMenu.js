
import { useEffect, useState } from "react";
import ShimmerCard from "./ShimmerCard";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useRestaurantMenu from "../utils/useRestaurantMenu";



const RestaurantMenu = () => {

    const {resId} = useParams(); 

    const restaurantInfo = useRestaurantMenu(resId);

    //console.log(restaurantInfo?.cards[2]?.card?.card?.info.name + " : name");
   // const {name, cuisines, avgRating, costForTwoMessage} = restaurantInfo?.cards[2]?.card?.card?.info;
    // if(restaurantInfo !== null){
    //     const {name, avgRating, cuisines, costForTwoMessage }  = restaurantInfo?.cards[2]?.card?.card?.info;
    // }
    if(restaurantInfo === null) return <ShimmerCard />;
    const {name, cuisines, avgRating, costForTwoMessage} = restaurantInfo?.cards[2]?.card?.card?.info;
    const { itemCards } = restaurantInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card;
   return (
        <div className="menu">
            <h1>{ name }</h1>
            <h3>{ cuisines.join(" , ")}</h3>
            <h3>{ avgRating}</h3>
            <h3>{costForTwoMessage}</h3>
            <ul>
                { itemCards.map(item => <li key = {item.card.info.id}>{item.card.info.name} - Rs.{item.card.info.price / 100}</li>)}
            </ul>

        </div>
    )
}

export default RestaurantMenu;