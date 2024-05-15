import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import Product from "../components/Product";
//api fetch krk laaye json me convert kiye posts me data ko daldia loading handle krlia
const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading, setLoading] = useState(false);
  const [items, setItems] = useState([]);

  async function fetchProductData() {
    setLoading(true);
    try{
      const res = await fetch(API_URL);
      const data = await res.json();
      setItems(data);
    }
    catch(error) {
      console.log("Error aagya ji");
      setItems([]);
    }
    setLoading(false);
  }
//use effect wale hook se ek baar data leke ayenge aur rkhenge
  useEffect( () => {
    fetchProductData();
  },[])
//loading true hai to spinner dikhao
//post hai to show kro 
//ni to no data fund show krdo
return <div>
<div className=" bg-gray-50 dark:bg-gray-800">
 {
   loading ? <Spinner/> :
   items.length > 0 ? 
   (
     <div className="grid  xs:gridcols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl p-2 mx-auto space-y-10 space-x-5 min-h-[80vh]">
      {
        items.map((item) => (
         <Product key = {item.id} item={item} />
         ))
      }
     </div>
   ) : 
   (
     <div className="flex justify-center items-center">
       No Data Found
     </div>
   )
 }
</div>
</div>;
};


export default Home;
