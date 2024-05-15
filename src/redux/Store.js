import { configureStore } from "@reduxjs/toolkit";
import { CartSlice } from "./Slices/CartSlice";
import ThemeSwitcher from "./Slices/ThemeSwitcher";

//slices ko store me save krlia 
export const store = configureStore({
    reducer:{
        cart: CartSlice.reducer,
        theme:ThemeSwitcher,
    }
});