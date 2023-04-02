import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const NavigationTwo = () => {
    const[cart,setCart] = useState([])
    useEffect(()=>{
        fetch("").then(response => response.json()).then(product => product)
    },[])
    let _cart = {...cart};
    if(!_cart.items){
        _cart.items = {}

    }
    if(_cart.items[product?._id]){
        _cart.items[product?._id] = _cart.items[product?._id] + 1;

    }
    else{
        _cart.items[product?._id] = 0
    }
    if(!_cart.totalItems){
        _cart.totalItems = 0


    }
    _cart.totalItems = +1;
    setCart(_cart);
  return (
    
    <div>
        <Link to="/products">
        <ul>
            <li>Home</li>
            <li>Services</li>
            <li>About</li>
            <li>Cart</li>
        </ul>
        <p><em>About  us</em></p>
        </Link>
      
    </div>
  )
}

export default NavigationTwo
