import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {add ,remove} from "../redux/Slices/CartSlice";

const Product = ({item}) => {
//use selector use krk cart leke aare
  const {cart} = useSelector((state) => state);
  //function call kre using dispatch
  const dispatch = useDispatch();
//add krre post ko
//item added toast display krre
  const addHandler = () => {
    dispatch(add(item));
    toast.success("Item added to Cart");
  }
//remove krre cart se
//toast show krre removed from cart se
  const removeHandler = () => {
    dispatch(remove(item.id));
    toast.error("Item removed from Cart");
  }
//title 
//description
//img
//price
//remove item 
//add to card
return (
  <div  className="flex dark:bg-slate-800 dark:border-slate-500 dark:text-white  flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl border-2 
    shadow-xl hover:shadow-[0px_25px_50px_40px_rgba(0,0,0,0.15)] dark:hover:shadow-[0px_25px_50px_40px_rgba(225,225,225,0.07)]
    group ">
 
    <div>
    <p  className="text-gray-700 dark:text-gray-200 font-semibold text-lg  truncate text-left w-40 mt-1">{item.title }</p>
    </div>
    <div className="text-[10px] text-gray-400 w-40 mt-1 text-left  ">
    <p>{item.description.split(" ").slice(0,10).join(" ") + "..."} </p>
    </div>
   <div className="h-[180px]">
   <img src={item.image} className="h-full w-full" alt="itm" />
   </div>
   <div className="flex mt-5 items-center justify-between w-full">
   <div>
   <p className="text-green-600 font-semibold">${item.price}</p>
   </div>
    <div className=" border-2 border-black dark:border-white  p-1 px-3 rounded-full font-medium text-[12px]
     group-hover:bg-gray-700 dark:group-hover:bg-gray-100 transition duration-300 ease-in group-hover:text-white group-hover:font-semibold dark:group-hover:text-black ">
      {
        cart.some((c) => c.id === item.id) ?
        (
          <button onClick={removeHandler}>
            REMOVE ITEM
          </button>
        ) :
        (
          <button onClick={addHandler}>
            ADD TO CART
          </button>
        )
      }
    </div>
   </div>
  </div>
  );
};

export default Product;