import axios from "axios";
import { useEffect, useReducer, useState } from "react";
import React from "react";
import Navbar from "./Navbar";
import {useCart} from "../Cart-Context/CartContext"

function Products() {

  const { cartDispatch, cart} = useCart();


  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        console.log(response);
      } catch (error) {
        console.log("useEffect error", error);
      }
    };
    fetchProduct();
    // console.log("fetchprod log", fetchProduct)
  }, []);

  const onAddtoCart = (prod) => {
    cartDispatch({
      type:"ADD_TO_CART",
      payload:prod
    }
    )
  };

  const onRemovefromCart=(prod)=>{
    cartDispatch({
      type:"REMOVE_FROM_CART",
      payload:prod
    })
  }

  return (
    <div>
      <Navbar />
      <hr />
      <div className="flex flex-wrap justify-center m-1">
        {products.map((prod) => {
          return (
            <div
              key={prod.id}
              className="border-1 m-2 rounded-md p-2 w-[300px] h-[250px] flex flex-col justify-between"
            >
              <h2 className="m-2 font-semibold">{prod.title}</h2>
              <h3 className="m-2">
                Price: {prod.price} || Rating: {prod.rating.rate} || Discount:
                10%
              </h3>

              <button
                onClick={()=>onAddtoCart(prod)}
                className="bg-green-200 cursor-pointer"
              >
                Add to cart
              </button>
              <button onClick={()=> onRemovefromCart(prod)} className="bg-red-200 cursor-pointer">
                Remove from cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Products;
