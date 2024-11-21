import React from 'react'
import styles from "./Haute.module.scss"
import { FaCartFlatbed } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { RiSecurePaymentLine } from "react-icons/ri";
import { FaBoxOpen } from "react-icons/fa";
import Card from '../Card/Card';
const Haute = () => {
  return (
   <>
        <div className={styles.containerone}>
                    <div className={styles.inner}>
                        <img src="https://demo.woostify.com/haute/wp-content/uploads/sites/30/2022/02/text-slide.png" alt="foto" />
                        <p>Enhancing your
                        <br />
                        inner beauty

                        </p>
                        <button><a href="#">SHOP NOW </a></button>
                    </div>
        </div>
        
        <div className={styles.support}>
                
                    <div className={styles.iconlar}>
                        <a href="#"><FaCartFlatbed size={50} color='white'/></a>
                        <p>Flat-rate Delivery</p>
                    
                   
                    <a href="#"><FaPhoneAlt size={50} color='white' /></a>
                    <p>
                    Support 24/7</p>
                    
                    
                    <a href="#"><RiSecurePaymentLine size={50} color='white' /></a>
                    <p>Secure Payment</p>
                    
                    
                    <a href="#"><FaBoxOpen size={50} color='white' /></a>
                    <p>
                    Free Return	</p>
                    </div>
                
        </div>

        <div className={styles.cardDum}>
            <h1>New Arrivals</h1>
            
        </div>
        <Card/>

       
   </>
  )
}

export default Haute