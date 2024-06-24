import { useState } from "react";
import ItemListInCategory from "./ItemListInCategory";


const RestaurantCategory = ({categoryData: data = {}, showItems, setShowIndex}) => {

    const handleClick = () => {
        setShowIndex();
    }
    
    return (
        <div>
            <div className="w-6/12 m-auto my-4 p-4 bg-gray-50 shadow-lg ">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="font-bold text-lg">
                        {data.title}({data.itemCards.length})
                    </span>
                    <span>⬇️</span>
                </div>
                {showItems && <ItemListInCategory items = {data.itemCards}/>}
            </div>
        </div>
    )

}

export default RestaurantCategory;