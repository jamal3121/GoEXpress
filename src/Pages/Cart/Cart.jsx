import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import '../../Components/Utility.css'
import CartDetails from '../../Components/Cart/CartDetails'
import Footer from '../../Components/Footer/Footer'
const Cart = () => {
  return (
    <div>
        <Navbar/>
        <div className='prl-100 w-[100%]'>
            <CartDetails/>
        </div>
        <Footer/>
    </div>
  )
}  

export default Cart