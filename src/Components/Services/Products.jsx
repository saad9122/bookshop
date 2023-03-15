import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import { StoreContext } from '../Context/Context';


export const Products = (props) => {
   
    const {id,name,price,des,img} = props.data;

    const {cartItems, addToCart}  = useContext(StoreContext)
    
    const handleCart = () => {
      addToCart(id);
    }

  return (

    <div className='basis-full md:basis-1/2 lg:basis-2/6 p-4 lg:p-12'>
        <div className='flex flex-col shadow-lg shadow-gray-400 rounded'>

          <div className=' flex justify-center imagebox py-2'> <Link to="/singlepage"><img src={img} alt="Book" /> 
          </Link>
          </div>

          <div className='p-6'>
            <div className="flex justify-between">
              <h3>{name}</h3>
              <h3>{price} $</h3>
            </div>
              <p className='mt-2'>{des}</p>  
            <div className='flex justify-start mt-2'>
              <div className="bullet"></div>
              <h4>Printed Books</h4>
            </div>

            <button className='order-today-outline mt-4'
            onClick={handleCart}
            >
              Add to Cart {(cartItems[id] > 0 && <>({cartItems[id]})</>)}
            </button>
            
          </div>

        </div>
    </div>
  )
}
