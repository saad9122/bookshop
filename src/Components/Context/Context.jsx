import React, { createContext, useState } from 'react';
import { products } from '../../products';


export const StoreContext = createContext(null);

const getDefaultCart = () => {

  let cart = {};

  for ( let i=1; i<products.length+1; i++) {
    cart[i] = 0; 
  }
  return cart;
}

export const StoreContextProvider = (props) =>  {

  const [cartItems,setCartItems] = useState(getDefaultCart());



  const addToCart = (id) => setCartItems((prev) => ({...prev, [id]:prev[id]+1}));

  const removeFromCart = (id) => setCartItems((prev) => ({...prev, [id]:prev[id]-1}));

  const countCart = () => {
    let count = 0;
    for(let i=1; i<products.length+1; i++){
        count += cartItems[i];
    }
    return count;
  }

  // const subTotal = () => {
  //   let total = 0;

  //   for(let i=0; i<products.length+1; i++){
  //     total += cart
  //   }
  // }

  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart,
    countCart,
  }

  return (
    <StoreContext.Provider value={contextValue}>

      {props.children}

    </StoreContext.Provider>
  )


}
