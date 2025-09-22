import React, { useEffect, useReducer } from "react";
import axios from "axios";

const initialState = {
  products: [],
  price: 0,
  discount: 0,
  rating: 0,
};

function filterReducer(state, action) {
  switch (action.type) {
    case "FETCH_SUCCESS":
      return { ...state, products: action.payload };
    case "PRICE":
      return { ...state, price: action.payload };
    case "DISCOUNT":
      return { ...state,  discount: action.payload };
    case "RATING":
      return { ...state, rating: action.payload };
    default:
      return state;
  }
}

function FilterProdProj() {

  const [state, dispatch] = useReducer(filterReducer, initialState);
  const { products, price, discount, rating } = state;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        dispatch({ type: "FETCH_SUCCESS", payload: response.data });
        
      } catch (error) {
        console.log("useEffect error", error);
      }
    };
    fetchProduct();
    // console.log("fetchprod log", fetchProduct)
  }, []);


  const filterProducts =price > 0 ? products.filter((prod)=> prod.price <= price) : products;
  const ratingFilterProd =rating > 0 ? filterProducts.filter(prod=> prod.rating.rate > rating) : filterProducts;

  return (
    <div >
      <h1 className="flex justify-center text-2xl m-2">Products</h1>
      <div className="my-3 flex justify-center">
        filters:
        <input
          onChange={(e) => dispatch({ type: "PRICE", payload: e.target.value })}
          type="text"
          placeholder="Set Price Limit"
          className="m-1 p-1 border-1 rounded-md"
        />
        <input
          onChange={(e) => dispatch({ type: "RATING", payload: e.target.value })}

          type="text"
          placeholder="Set Rating"
          className="m-1 p-1 border-1 rounded-md"
        />
        <input
          onChange={(e) => dispatch({ type: "DISCOUNT", payload: e.target.value })}

          type="text"
          placeholder="Set Discount"
          className="m-1 p-1 border-1 rounded-md"
        />
      </div>
      <hr />

      <div className="flex flex-wrap justify-center m-1">
        {ratingFilterProd.length> 0 && ratingFilterProd.map((prod) => {
            return (

          <div key={prod.id} className="border-1 m-2 rounded-md p-2 w-[300px] h-[200px] flex flex-col justify-between">
            <h2 className="m-2 font-semibold">{prod.title}</h2>
            <h3 className="m-2">
              Price: {prod.price} || Rating: {prod.rating.rate} || Discount: 10%
            </h3>
          </div>
            )
        })}
      </div>
    </div>
  );
}

export default FilterProdProj;
