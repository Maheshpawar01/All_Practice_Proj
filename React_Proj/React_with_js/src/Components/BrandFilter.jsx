import React, { useState } from 'react'

function BrandFilter() {
    const allBrands =[ 
        {id: "1", brandName: "Puma"},
        {id: "2", brandName: "adidas"},
        {id: "3", brandName: "abibas"},
        {id: "4", brandName: "bata"},
        {id: "5", brandName: "sparx"},
    ]

    const [search, setSearch] = useState("")
    const [brands, setBrands] = useState(allBrands)


    function onSearching(e){
        setSearch(e.target.value);
        const filterBrands = search?.length>0 ? brands.filter(brand => brand.brandName.includes(e.target.value.toLocaleLowerCase())): allBrands ;
        setBrands(filterBrands) 
    }
  return (
    <div>
        <h1>Brand filter</h1>

        <input type="text" onChange={onSearching}  style={{ width: "300px", height: "40px" }}/>
        <ul>
            {
                brands.map(brand => <li key={brand.id}>{brand.brandName}</li>)
            }
        </ul>
    </div>
  )
}

export default BrandFilter