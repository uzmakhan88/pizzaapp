import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import packet from "../Images/packet.png"
import { useContext } from 'react';
import { CartContext } from './CartContext';

const Product = (props) => {
    const[isAdding,setisAdding] = useState(false);
    const {cart,setCart} = useContext(CartContext);
    const {product} = props;

    const addToCart = (event,product) => {
        event.preventDefault();
        let _cart = {...cart}
        if(!_cart.items){
            _cart.items = {}

        }
        if(_cart.items[product?._id]){
            _cart.items[product?._id] = _cart.items[product._id] + 1;

        }else{
            _cart.items[product?._id] = 1;
        }

        if(!_cart.totalItems){
            _cart.totalItems = 0;
        }
        
        _cart.totalItems += 1
        setCart(_cart)
        setisAdding(true);
        setTimeout(() => {
            setisAdding(false)
            
        }, 1000);


    }
    
  return (
    <div>
        <Link to={`/products/${product?._id}`}>
        <div style={{width:"150px"}} >
                <img style={{height:"150px"}} src={product?.image} alt="pizza" />
                <div className='text-center'>
                <h2 className='text-lg font-bold py-2'>{product?.name}</h2>
                <span className='bg-green py-1 rounded-full text-sm px-4'>{product?.size}</span>
                </div>
                <div className='flex justify-between items-center mt-4'>
                    <span>${product?.price}</span>
                    
                    <button disabled={isAdding} onClick={(e) => {addToCart(e,product)}} className={`${isAdding ? "bg-green" : "bg-orange"} py-1 px-4 rounded-full font-bold`}>ADD{isAdding ? "ED" : ""} </button>
                </div>
            </div>
        </Link>
         
      
    </div>
  )
}

export default Product
