import React, { useContext } from 'react'
import { StoreContext } from '../Context/Context'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus,faMinus } from '@fortawesome/free-solid-svg-icons';

export const YourCart = (props) => {
    const {id,name,price,des,img} = props.data;

    const {cartItems,addToCart,removeFromCart} = useContext(StoreContext);

    let total = cartItems[id]*price;
    
   
  return (
        <div className="flex mt-6 p-4 shadow-lg shadow-gray-400 ">
          {/* Products */}
          <div className='flex flex-col md:flex-row basis-1/2 md:basis-2/5'>
                  <img src={img} alt="Book"  className=' w-full md:w-1/2 lg:w-1/6'/>
              <div className='flex flex-col items-start gap-y-2 pl-4'>
                  <h2 className='text-start'>{name}</h2>
                  <p className='text-start hidden md:block'>{des}</p>
              </div>
          </div>
          {/* Price, quantity and total */}

          <div className='flex flex-col md:flex-row lg:items-center justify-center basis-1/2 md:basis-3/5' >
          <div className='basis-1/3 flex items-center justify-center'> <h3 className='text-center'>{price}$</h3></div>
             <div className='basis-1/3 flex justify-center items-center space-x-6 quantity mx-auto'>     
                <button onClick={() => removeFromCart(id)}>
                <FontAwesomeIcon icon={faMinus} className="quantity-icon" /></button>

                <h3>{cartItems[id]}</h3>

                <button onClick={() => addToCart(id)}> 
                <FontAwesomeIcon icon={faPlus}  className="quantity-icon" /> </button>
              </div>
              <div className='basis-1/3 flex items-center justify-center'>
              <h3>{total.toFixed(2)}$</h3> </div>
                
          </div>
        </div>
  )
}
