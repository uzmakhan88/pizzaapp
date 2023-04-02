import React, { useEffect, useState,useContext } from 'react'
import Product from './Product';
import { CartContext } from './CartContext';

const Products = () => {
const[products,setProducts] = useState([]);
 const {name} = useContext(CartContext);
useEffect(()=>{
   fetch("https://star-spark-pasta.glitch.me/api/products")
   .then(response => response.json()).then(products => {
    setProducts(products)
   })

 
},[])



  return (
    <div className='container mx-auto pb-24'>
        <h1 className='text-lg font-bold my-8'>Products {name}</h1>
        <div className='grid grid-cols-5 gap-4 ' >
            {
                products.map(product => <Product key={product._id} product={product}/>)
            }
           
          
           
          
          
        </div>
      
    </div>
  )
}

export default Products
