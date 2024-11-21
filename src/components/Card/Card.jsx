import React, { useEffect, useState } from 'react';
import styles from './Card.module.scss';
import axios from 'axios';
import { FiShoppingCart } from 'react-icons/fi';
import { CiHeart } from 'react-icons/ci';

const Card = ({ addCart }) => {
  const [data, setData] = useState([]);
  const [wishlist, setWishlist] = useState([]); 
  const [basket,addcartlist]=useState([])

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then((res) => {
        setData(res.data.products);
      });
  }, []);

  const addToCart = (item) => {
    axios.post('http://localhost:5000/basket',item)
    addcartlist(data); 
    console.log("Mehsul Sepete Eklendi",item);
    
  };

  const addToWish = (item) => {
    
    setWishlist(prevWishlist => [...prevWishlist, item]); 
    console.log("Ürün dilek listesine eklendi:", item);
    
   
    axios.post('http://localhost:5000/basket', item) 
      .then(res => {
        console.log("Mehsul favorilere gonderildi");
      })
      .catch(error => {
        console.error("Favorilere gonderende xeta bas verdi", error);
      });
  };

  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        {data.map((item) => (
          <div key={item.id} className={styles.card}>
            <img src={item.thumbnail} alt={item.title} />
            <h3>{item.title}</h3>
            <p>${item.price}</p>
            <div className={styles.btn}>
              <button onClick={() => addToCart(item)}>
                <FiShoppingCart size={40} color="darkblue" />
                
              </button>
              <button onClick={() => addToWish(item)}>
                <CiHeart size={40} color="darkblue" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Card;
