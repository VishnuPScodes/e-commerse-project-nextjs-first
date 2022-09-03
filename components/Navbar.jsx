
import Link from 'next/link'
import React from 'react'

function Navbar() {
  return (
    <div id='navbar' >
        <div className='single-nav'>
            <Link href='/'>
            <a>Home</a>
            </Link>
        </div>
         

        <div className='single-nav'>
            <Link href='/products'>
            <a>Products</a>
            </Link>
        </div>

        <div className='single-nav'>
            <Link href='/About'>
            <a>About US</a>
            </Link>
        </div>

        <div className='single-nav'>
            <Link href='/Cart'>
            <a>Cart</a>
            </Link>
        </div>
    </div>
  )
}

export default Navbar