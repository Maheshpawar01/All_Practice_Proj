import React, { useEffect, useState } from 'react'
import axios from "axios"

function UseeffectProj() {

    const [products, setProducts] = useState([])

    const getData=async(URL)=>{
        try {
                    const data = await axios.get(URL)
                    // console.log(data)
                    // console.log(data.status)
        setProducts(data.data.products)
        } catch (error) {
            console.log('getdata error', getData)
            
        }

    }

    useEffect(()=>{
        const URL = "https://dummyjson.com/products"
        getData(URL)
    }, [])

  return (
    <>
    {
        products && products.map((product)=><div >{product.title}</div>)
    }
    </>
  )
}

export default UseeffectProj