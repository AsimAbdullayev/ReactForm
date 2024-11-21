import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/Header/Header'
import Haute from '../components/Hautebody/Haute'
import Footer from '../components/Footer/Footer'
import Basket from '../components/pages/Basketcontex/Basket'
import Wish from '../components/pages/WishList/Wish'
import Home from '../components/pages/Home/Home'
import Card from '../components/Card/Card'
import SignupForm from '../components/pages/form/SignupForm'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
                <Route path='/' element={<Home/>}/> 
                <Route path='/Basket' element={<Basket/>}/> 
                <Route path='/Wish'element={<Wish/>}/> 
                <Route path='/signup'element={<SignupForm/>}/>
                
    </Routes>
    </BrowserRouter>
  )
}

export default Router