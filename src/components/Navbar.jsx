import {FaShoppingCart} from "react-icons/fa"
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ThemeSwitcherBtn from "./ThemeSwitcherBtn";


const Navbar = () => {
  const cart = useSelector((state) => state.cart);
//logo aur home ko justify between krdiye taaki extremes me agye
//img me navlink lga hai ki us img pe click hoga to home page pe vapis ajayega
//home
//cart pe navlink lgayenge taaki click krne pe cart section me jaske
return (
  <div>
    <div className="flex justify-between items-center h-[10.95vh] max-w-6xl mx-auto">
      <NavLink to="/">
        <div className="ml-5">
          <img src="../logo.png" className="h-14" alt="textimg"/>
        </div>
      </NavLink>
      <div className="flex items-center font-medium text-slate-100 mr-5 space-x-6">
        <NavLink to="/">
          <p>Home</p>
        </NavLink>
        <NavLink to="/cart">
          <div className="relative">
            <FaShoppingCart className="text-2xl" />
            {cart.length > 0 && (
              <span className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex justify-center items-center animate-bounce rounded-full">
                {cart.length}
              </span>
            )}
          </div>
        </NavLink>
        <div>
          <ThemeSwitcherBtn/>
        </div>
      </div>
    </div>
  </div>
);
};

export default Navbar;
