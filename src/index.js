import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { store } from "./redux/Store";
import { Toaster } from "react-hot-toast";

const root = ReactDOM.createRoot(document.getElementById("root"));
//provider ke andr daaldia app ko toaster ko aur redux ko react se connect krdia
root.render(
    <BrowserRouter>
        <Provider store={store}>
          <App />   
          <Toaster/>
        </Provider>
    </BrowserRouter>  
);
