import React from 'react'
import styles from "./Eyewear.module.scss"

const Eyewear = () => {
  return (
    <>
    <div className={styles.containerEye}>
        
            <div className={styles.img}>
                <img src="https://demo.woostify.com/haute/wp-content/uploads/sites/30/2022/02/collection-1.jpg" alt="foto" />
                <p><b>Trending Eyewear</b></p>
                <span>Largest collection of genuine quality
                    <br />
                     prescription glasses frames</span>
                <a href="">Wiew Collection</a>
            </div>
            <div className={styles.img}>
            <img src="https://demo.woostify.com/haute/wp-content/uploads/sites/30/2022/02/collection-2.jpg" alt="foto" />
               
            <p><b>Weekend Collective</b></p>
                <span>Largest collection of genuine quality
                    <br />
                     prescription glasses frames</span>
                <a href="">Shop Now</a>
            </div>
            <div className={styles.img}>

            <img src="https://demo.woostify.com/haute/wp-content/uploads/sites/30/2022/02/collection-3.jpg" alt="foto" />
            <p><b>It’s Cold Outsite</b></p>
                <span>Curated collection of our favorite
                    <br />
                     holiday style</span>
                <a href="">Check It Out</a>
            </div>

               
                

        </div>
    
    
    </>
  )
}

export default Eyewear