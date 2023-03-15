import React, { useContext } from 'react'
import { StoreContext } from '../Context/Context'
import "./cart.css";
import { products } from '../../products';
import { EmptyCart } from './EmptyCart';
import { FilledCart } from './FilledCart';

export const Cart = () => {
  
  const {cartItems} = useContext(StoreContext)

const subTotal = () =>{
  let total = 0;
  products.map((productInfo) => {
    if(cartItems[productInfo.id] > 0){
      total += cartItems[productInfo.id] * productInfo.price
}})
return total.toFixed(2);
}


  return (
    <section id='cart' className='xl:container mx-auto'>
      <div className="banner">
        <h2 className='text-center'>Shopping Cart</h2>
        <div className="section-line"></div>
        <p className='text-center'>There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.</p>
      </div>
      { subTotal() == 0 ? (<EmptyCart/>) :
      (<FilledCart data={subTotal} />)
} 

      
      
      
        

    </section>
  )
}
