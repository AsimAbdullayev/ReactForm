import React, { useState } from 'react';
import Header from '../../Header/Header';
import axios from 'axios';


const Basket = () => {


  axios.post('http://localhost:5000/basket',)
  .then(response => {
    console.log('Mehsul Sepetdedir:', response.data);
  })
  .catch(error => {
    if (error.response) {
      
      console.error('Apiden Gelen data:', error.response.data);
      console.error('APi xetasi:', error.response.status);
    } else if (error.request) {
      
      console.error('İstek gönderildi :', error.request);
    } else {
      
      console.error('Xeta bas verdi:', error.message);
    }
  });
  



  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [count, setCount] = useState(0);

  
  const addToCart = (item) => {
    setCart((prevCart) => [...prevCart, item]);
    console.log('Sepete eklenen Mehsul:', item);
  };

 
  const addToWish = (item) => {
    setWishlist((prevWishlist) => [...prevWishlist, item]);
    console.log('Favorilere eklenen Mehsul:', item);
  };

  const addcart = (item) => {
    setCart((prevCart) => [...prevCart, item]); 
    setCount(prevCount => prevCount + 1); 
    console.log('Sepete eklenen Mehsul:', item);
  };



 
  return (
    <div>
        <Header/>
      
      
    </div>
  );
};

export default Basket;
