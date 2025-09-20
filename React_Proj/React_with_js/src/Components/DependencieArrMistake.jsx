import React, { useEffect, useState } from 'react'

function DependencieArrMistake() {

    const addresses = [
        {city:"mumbai", pinCode:'12345', isDefault:true},
        {city:"pune", pinCode:'23456', isDefault:false},
        {city:"delhi", pinCode:'34567', isDefault:false},
        {city:"bengluru", pinCode:'45678', isDefault:false},
        {city:"nagpur", pinCode:'567890', isDefault:false}
    ]

    const [defaultAddress, setDefaultAddress] = useState(addresses.find(({isDefault})=> isDefault))

    const [pinCode, setpinCode] = useState("")


        const onSetpinCodeClick =()=>{
            const selectedAddress = addresses.find(address => address.pinCode === pinCode)
            setDefaultAddress(selectedAddress)
        }

        useEffect(()=>{
            console.log('this effect is called')
        }, [defaultAddress.pinCode])



  return (
    <div>
        <h1>dependencie Array Mistake</h1>
        <div>
            <input type="number" placeholder='enter pinCode' onChange={(e)=>setpinCode(e.target.value)} />
        </div>

        <div>
            <button onClick={onSetpinCodeClick}>Set pinCode</button>
        </div>


    </div>
  )
}

export default DependencieArrMistake