import React, { useState } from 'react'

const allBrands =[ 
    {id: "1", brandName: "Puma"},
    {id: "2", brandName: "adidas"},
    {id: "3", brandName: "abibas"},
    {id: "4", brandName: "bata"},
    {id: "5", brandName: "sparx"},
]
function AddtoCart() {

    const [selectedBrands, setSelectedBrands] = useState([]);

    const addtoCartclick = (id)=>{
        console.log('clicked', id)

        const selectedItem = allBrands.find(item => item.id === id)
        setSelectedBrands([...selectedBrands, selectedItem])
    }

    const onRemoveClick = (id)=>{
        console.log("removed", id)

        const filterdItem = selectedBrands.filter(item => item.id !== id)
        setSelectedBrands(filterdItem)
    }

  return (
    <div>
        <p>Add to cart page</p>

  
            {
                allBrands.map(brand => <div  key={brand.id}>
                    <span >{brand.brandName}</span>
                    <button onClick={()=> addtoCartclick(brand.id)}>add to cart</button>
                    </div>
                    )
            }


            <div>
                <h1>cart item</h1>
                {
                    selectedBrands.map(brand => 
                        <p key={brand.id}>{brand.brandName} - <button onClick={()=> onRemoveClick(brand.id)}>Remove</button></p>
                        
                    )
                }
            </div>
    </div>
  )
}

export default AddtoCart;