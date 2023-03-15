import { faCartArrowDown, faCartPlus } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Link } from 'react-router-dom'

export const EmptyCart = () => {
  return (
    <div className='flex flex-col justify-center items-center space-y-6 px-4 lg:px-24 mt-8'>
        <FontAwesomeIcon icon={faCartPlus} className=" text-[10rem] lg:text-[15rem]"/>
        <h2 className='3xl'> Your Cart is Empty</h2>
        <p className='text-2xl text-center'>Before proceed to checkout you must add some products to your shopping cart.
        You will find a lot of interesting products on our "Shop" page.</p>
        <button className='px-4 lg:px-12 py-4 bg-black text-white text-2xl rounded'
        ><Link to="/services">Return to Products page </Link></button>
    </div>
  )
}
