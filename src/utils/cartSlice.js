import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : 'cart',
    initialState: { //what is the initial value of the slice in the store
        items: []
    },
    reducers:{ // this will modify the state
        addItem: (state, action) => {
            //Redux Toolkit uses immer BTS
            //mutating the state here
            state.items.push(action.payload)
        },
        removeItem: (state) => {
            state.items.pop();
        },
        clearCart:(state) => {
            //state = [] directly modifying wont work
            state.items.length = 0;
        },
    },
});




export const {addItem, removeItem, clearCart} = cartSlice.actions;

export default cartSlice.reducer;