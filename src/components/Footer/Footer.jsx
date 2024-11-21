import React from 'react'
import styles from "./Footer.module.scss"

const Footer = () => {
  return (
    <>
            <div className={styles.containerfoot}>
                <div className={styles.haute}>
                    <h2>haute</h2>
                    <p>Our mission is to offer you the best selection of Nordic
                        <br />
                         design, whether well-established or up-and-coming.</p>
                </div>
                    

                <div className={styles.Navigate}>
                  <h4>Navigate</h4>
                  <ul>
                  <li><a href="#">Home</a></li>
                  <li><a href="#">Catalog</a></li>
                  <li><a href="#">About</a></li>
                  <li><a href="#">Contact</a></li>
                  <li><a href="#">Journal</a></li>
                </ul>
              </div>

              
              <div className={styles.information}>
                  <h4>Informations</h4>
                  <ul>
                  <li><a href="#">Delivery</a></li>
                  <li><a href="#">Return Policy</a></li>
                  <li><a href="#">Team</a></li>
                  <li><a href="#">Store Locations</a></li>
                  <li><a href="#">F.A.Q</a></li>
                </ul>
              </div>

                        <div className={styles.subscribe}>
                            <h4>Newsletter</h4>
                            <p>Subscribe to get notified about product launches,
                                <br />
                                 special offers and news.</p>
                            <form action="">
                                <input type="text" placeholder='hi@haute.woostify' name="" id="" />
                            </form>
                            <br />
                            <button><a href="#">Subscribe</a></button>
                        </div>

                    </div>
            
    
    </>
  )
}

export default Footer