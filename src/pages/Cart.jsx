import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
//cart leke ayenge use selector se
//cart me kuch ni rhega to cart empty aur shop now ka button ayega
//cart non empty hai map ka use krk sbko dikhado
  const {cart} = useSelector((state) => state);
  //total amount ko 0 se initialise krenge
  const [totalAmount, setTotalAmount] = useState(0);
//reduce function se total amount ki value nikal lenge accumulator use krk
  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price,0) );
  }, [cart])
//cart item 
//your cart
//summary
//total items
//total amount
//checkout now button
return (
  <div className="max-w-6xl   mx-auto">
    {
      cart.length > 0 ?
      (
        <div className="md:flex  gap-6 ">
    <div className="md:w-7/12">
      {
        cart.map((item, index) => (
          <div><CartItem key={item.id} item={item} itemIndex={index} cartLength={cart.length} /> </div>
        ))
      }
    </div>
    <div className="w-full md:w-[40%] flex flex-col p-5 gap-5 justify-between my-20 ml-5  ">
      <div className="">
        <p className="text-xl dark:text-gray-100 font-semibold text-green-700">YOUR CART</p>
        <p className="text-5xl dark:text-gray-100 font-semibold text-green-700">SUMMARY</p>
        <p className="text-xl dark:text-gray-100 font-semibold text-slate-700 mt-5">Total items: {cart.length}</p>
      </div>
      <div>
        <p className="text-xl dark:text-gray-100 font-semibold text-slate-700">Total Amount: <span className="text-slate-900 dark:text-gray-50 font-bold">${totalAmount}</span></p>
       <NavLink to="#">
       <button className="bg-green-700 w-full hover:bg-purple-50 rounded-lg text-white transition duration-300 ease-linear mt-5 border-2 border-green-600 font-bold hover:text-green-700 p-3 text-xl">
          Checkout Now
        </button>
       </NavLink>
      </div>
    </div>
  </div>
      ) :
      (
        <div className="flex flex-col min-h-[80vh]  justify-center items-center ">
          <p className="text-2xl dark:text-gray-100 font-bold">Your cart is empty!</p>
          <NavLink to="/">
            <button className="mt-7 font-semibold px-10 py-3 text-xl text-white bg-green-600 rounded-lg border ">
              SHOP NOW
            </button>
          </NavLink>
        </div>
      )
    }
  </div>
  );
};

export default Cart;
