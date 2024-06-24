import RestaurantCart, {withTopRatedLabel} from "./RestaurantCart";
import { useState,useEffect } from "react";
import ShimmerCard from "./ShimmerCard";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { DASHBOARD_API } from "../utils/constants";

const Body = () => {

    //State Variable
     const [listofRestaurants , setListofRestaurants] = useState([]);
     const [filteredRestaurants , setfilteredRestaurants] = useState([]);
     const [searchText, setSearchText] = useState("");
     const RestaurantCartTopRated = withTopRatedLabel(RestaurantCart); //HOC - High Order Component

     useEffect(()=>{
        fetchData();
     },[]);

    const fetchData = async () => {
        const data  = await fetch(
            DASHBOARD_API
        );//fetch is given by the browser and not JS or React
    const json = await data.json();

    //optional chaining -json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    setListofRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)    
};


 const onlineStatus = useOnlineStatus();

 if(onlineStatus == false){
    return <h1>Looks like you are offline. Please check your internet connection!!</h1>
 }

    return listofRestaurants.length === 0 ? <ShimmerCard/> : (
        <div className="body">
            <div className="filter flex justify-center">
                <div className="m-4 p-4">
                    <input 
                        type = "text" 
                        className="border border-solid px-4 mx-4" 
                        placeholder="Search" 
                        value = {searchText}
                        onChange={(e) => {
                        setSearchText(e.target.value);
                        if(e.target.value === ''){
                            setfilteredRestaurants(listofRestaurants);
                        } else {
                        const filteredRestaurant = 
                        listofRestaurants.filter((restaurant) => 
                        restaurant.info.name.toLowerCase().
                        includes(searchText.toLowerCase()));
                        // filteredRestaurant.length === 0 ? 
                        // <NoResultFound/> : setListofRestaurants(filteredRestaurant)
                        setfilteredRestaurants(filteredRestaurant);
                        }
                        
                    }}></input>
                    <button className="px-4 py-2 bg-green-100 m-4 rounded-lg" onClick={() => {
                       const filteredRestaurant = 
                        listofRestaurants.filter((restaurant) => 
                        restaurant.info.name.toLowerCase().
                        includes(searchText.toLowerCase()));
                        setfilteredRestaurants(filteredRestaurant);
                        
                    }}>Search</button>
                </div>
                <div className="flex justify-center">
                    <button
                        className="m-12 px-2 bg-gray-100 rounded-lg"
                        onClick={() => {
                            const filterList = listofRestaurants.filter(
                                res => res.info.avgRating > 4
                                );
                                setfilteredRestaurants(filterList);
                            }} 
                            >Top Rated Restaurants</button>
                </div>
                
            </div>
                <div className="flex flex-wrap justify-center">
                    {
                        filteredRestaurants.map((restaurant) => (
                        <Link 
                        key = {restaurant.info.id}
                        to = {"/restaurants/" +restaurant.info.id }>
                            
                        {restaurant.info.avgRating > 4.1 ? 
                        (<RestaurantCartTopRated resData = {restaurant}/> ) : 
                        (<RestaurantCart resData = {restaurant}/>)} 
                        
                        {/* <RestaurantCart resData = {restaurant}/> */}
                        </Link>
                    ))}
                 
                </div>
        </div>
    )
}

export default Body;