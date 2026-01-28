import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
    name:"Cart",
    initialState:{
        items:[]
    },
    reducers:{
        addToCart(state,action){
            const item = action.payload;
            const existingItem = state.items.find(i => i.id===item.id);

            if(existingItem){
                existingItem.quantity+=1;
            }
            else{
                state.items.push({...item, quantity:1})
            }
        },

        removeFromCart(state,action){
            const item = action.payload;
            state.items = state.items.filter(i=>i.id !== item)
        },

        increaseQuantity(state,action){
            const item = state.items.find(i => i.id === action.payload);
            if(item){
                item.quantity += 1;
            }
        },

        decreaseQuantity(state,action){
            const item = state.items.find(i=>i.id === action.payload);
            if(item && item.quantity > 0){
                item.quantity -= 1;
            }
        }
    }
});


export const {
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
} = cartSlice.actions;

export const cartReducer = cartSlice.reducer;