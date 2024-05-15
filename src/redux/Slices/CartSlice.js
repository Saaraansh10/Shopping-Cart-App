import { createSlice } from "@reduxjs/toolkit";
//slice create krre hai
//do reducers bnaye hai add to cart remove from cart
//export krdiye dono ko
//add krte time state me us action ko daldia
//filtering krlenge id ke basis pe ki jo state action me ayegi us id ke equal ni hogi sirf usko filter krna
//values access krna hai to action.payload se krskte hai
export const CartSlice = createSlice({
    name:"cart",
    initialState:[],
    reducers:{
        add:(state,action) => {
            state.push(action.payload);
        },
        remove:(state,action) => {
            return state.filter((item) => item.id !== action.payload);
        },
    }
});

export const {add, remove} = CartSlice.actions;
export default CartSlice.reducer;