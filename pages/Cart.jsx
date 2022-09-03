



import React from 'react'
import Navbar from '../components/Navbar'
import SingleCart from '../components/singleCart'

function cart() {
  return <> <Navbar/>   
    <div id='cart-cover'>
        <SingleCart/>
    </div>
    </>
}

export default cart