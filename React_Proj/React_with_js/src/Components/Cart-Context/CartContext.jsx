import React, { useReducer } from 'react'
import { useContext, createContext, useState } from 'react'

const CartContext = createContext()

const initialstate={
  cart : []
}

const reducerFunc = (state, action)=>{
  switch(action.type){
    case "ADD_TO_CART": return{...state, cart: [...state.cart, action.payload ]}
    case "REMOVE_FROM_CART": return{...state, cart: state.cart.filter(item => item.id !== action.payload.id)}
    default:return state

  }
}
function CartProvider({children}) {

  
  const [state, cartDispatch] = useReducer(reducerFunc, initialstate)
  return (
    <CartContext.Provider value={{cart:state.cart, cartDispatch}}>
      {children}
    </CartContext.Provider>
  )
}

const useCart =()=> useContext(CartContext)

export { CartProvider, useCart, CartContext };


//when you click on remove btn it remove all from same id 
//when you add more the 1 item with different id then 
// when you click on remove it removes only the cliked item id from array 

//Revise 1 more time useReducer and useContext hook 
