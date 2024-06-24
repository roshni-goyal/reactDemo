import { useDispatch, useSelector } from "react-redux";
import ItemListInCategory from "./ItemListInCategory";
import { clearCart } from "../utils/cartSlice"; 

const Cart = () => {


    const cartItems = useSelector((store) => store.cart.items);


    const dispatch = useDispatch();

    const handleClearCart = () => {
        dispatch(clearCart());
    }

    return (
        <div className="text-center m-4 p-4">
            <h1 className="text-2xl font-bold p-4">Cart</h1>
            <div className="w-6/12 m-auto border border-gray-300 rounded-lg">
                {cartItems.length == 0 && <h1>Cart is empty, Add something yummy !!</h1>}
                <ItemListInCategory items = {cartItems}/>
                <button className="p-2 m-2 bg-black text-white rounded-lg"
                onClick={handleClearCart}
                >Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart;