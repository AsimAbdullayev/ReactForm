import React from 'react'
import styles from "./Header.module.scss"
import { CiSearch } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { FiShoppingCart } from "react-icons/fi";
import { useNavigate } from 'react-router-dom';
import Basket from '../pages/Basketcontex/Basket';
import { FaUser } from "react-icons/fa";
const Header = () => {
const navigation =useNavigate()

function Cart(){
    navigation('/Basket');

}

function Wish(){
    navigation('/Wish');
}

function Home(){
    navigation('/')
}

function Sign(){
    navigation('/signup')
}

  return (
    <>
            <div className={styles.freecontainer}>
                <div className={styles.free}>
                    <p>FREE SHIPPING ON ALL ORDERS OVER $75.00. <a href="">LEARN MORE!</a> </p>
                </div>
            </div>
            <div className={styles.container}>
                <div className={styles.logo}>
                    <a href="#" onClick={Home}>haute</a>
                </div>
                <div className={styles.navbaricon}>
                        <ul>
                            
                            <li><a  href="#" onClick={Home}>Home </a></li>
                            <li><a href="#">Shop</a></li>
                            <li><a href="#">Pages</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">Contact</a></li>
                        </ul>
                        <a href=""onClick={Sign}><FaUser  size={30} /></a>
                        <a href=""onClick={Wish}><CiHeart size={30}/></a>
                        <a href="" onClick={Cart}><FiShoppingCart size={29} /> <p>1</p></a>
                        
                </div>
            </div>

    </>
  )
}

export default Header