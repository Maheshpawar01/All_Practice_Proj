import React from 'react'
import {useCart} from "../Cart-Context/CartContext"
function Navbar() {
  const {cart} = useCart()
  return (
    <div className='m-4'>
        <h1 className='font-bold my-2 bg-amber-500 inline p-2 rounded-md'>Shopee</h1> 
        <h3>Product Count : <span className='font-semibold text-2xl'>{cart.length}</span> </h3>
    </div>
  )
}

export default Navbar