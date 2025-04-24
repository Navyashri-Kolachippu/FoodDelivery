import { createSlice } from "@reduxjs/toolkit";

const cartSlice=createSlice({
   name:'cart',
   initialState:{
    items:[],
   },
   reducers:{
    addItem:(state,action)=>{
        const newItem = action.payload;
        //console.log(newItem);
        const existingItem=state.items.find((item)=>item.dishId==newItem.dishId);
        if(existingItem)
        {
            existingItem.count=existingItem.count+1;
        }
        else
        {
            newItem.count=1;
            state.items.push(newItem);
        }
    },
    removeItem:(state,action)=>{
        state.items=state.items.filter(item=>item.dishName!== action.payload);
    },
    clearCart:(state)=>{
        state.items.length=0;
    },
   }
})

export const {addItem,removeItem,clearCart}= cartSlice.actions;
export default cartSlice.reducer;