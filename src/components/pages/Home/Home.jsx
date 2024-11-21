import React, { useState } from 'react'
import Header from '../../Header/Header'

import Footer from '../../Footer/Footer'
import Haute from '../../Hautebody/Haute'
import axios from 'axios'
import Card from '../../Card/Card'
import KeepCalm from '../../KeepCalm/KeepCalm'
import Eyewear from '../../Eyewear/Eyewear'
import SignupForm from '../form/SignupForm'


const Home = () => {
    const [data,setData] =useState([])
    axios.get("https://dummyjson.com/products")
    .then(res =>{
        setData(res.data.products)
    },[])
  return (
    <> 
    
            

             <Header/>
             <Haute/>
            <Card/>
            <KeepCalm/>
            <Eyewear/>
            
             <Footer/>
    </>
   
  )
}

export default Home