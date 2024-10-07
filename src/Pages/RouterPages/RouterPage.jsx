import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Home/Home'
import ProductPage from '../ProductPage/ProductPage'
import Cart from '../Cart/Cart'

const RouterPage = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
        
    </BrowserRouter>
  )
}

export default RouterPage