import { CDN_URL } from "../utils/constants";

const ItemListInCategory = ({items}) => {
 console.log(items);

    return (
        <div>
            {items.map((item) => (
               
                // <div key = {item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left relative">
                //         <div className="p-2 flex justify-between items-start">
                //         <div className="flex flex-col">
                //             <span className="font-bold text-lg font-sans">{item.card.info.name}</span>
                //             <span className="mt-1"> ₹ {!item.card.info.addons ? item.card.info.price/100: item.card.info.defaultPrice/100}</span>
                //             <p className= "text-xs text-gray-400">{item.card.info.description}</p>
                //         </div>
                //             <img src = {CDN_URL + item.card.info.imageId} className="w-28 rounded-lg"></img>
                //             <div className="absolute">
                //                 <button className="m-4 p-4 bg-gray-200 shadow-lg">Add +</button>
                //             </div>
                //         </div>
                        
                    
                // </div>
                <div key={item.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left relative">
                <div className="flex items-start">
                    <div className="flex flex-col">
                        <span className="font-bold text-lg font-sans">{item.card.info.name}</span>
                        <span className="mt-1">₹ {!item.card.info.addons ? item.card.info.price / 100 : item.card.info.defaultPrice / 100}</span>
                        <p className="text-xs text-gray-400">{item.card.info.description}</p>
                    </div>
                    <img src={CDN_URL + item.card.info.imageId} className="w-28 ml-auto" alt="item" />
                </div>
                <button className="absolute bottom-0 right-8 p-2 bg-gray-200 shadow-lg rounded-md">Add +</button>
            </div>
))}
        </div>
    )
}

export default ItemListInCategory;