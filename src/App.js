// import logo from './logo.svg';
// import './App.css';
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";
import Navigation from "./Navigation";
import Cart from "./pages/Cart";
import { CartContext } from "./pages/CartContext";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Singleproduct from "./pages/Singleproduct";

function App() {
  const [cart,setCart ] = useState({});
useEffect(()=>{
 const cart = window.localStorage.getItem('cart');
 setCart(JSON.parse(cart))
 console.log(JSON.parse(cart));


},[])

useEffect(()=>{
window.localStorage.setItem('cart', JSON.stringify(cart))
},[cart])

  return (
    <div>
      <BrowserRouter>
        <CartContext.Provider value={{cart,setCart}}>
          <Navigation />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:_id" exact element={<Singleproduct />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </CartContext.Provider>
      </BrowserRouter>
    </div>
  );
}

export default App;
