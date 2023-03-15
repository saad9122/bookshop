import React, {useContext} from 'react'
import { products } from '../../products'
import { YourCart } from './YourCart'
import { StoreContext } from '../Context/Context'

export const FilledCart = (props) => {

    const subTotal = () =>{
        let total = 0;
        products.map((productInfo) => {
          if(cartItems[productInfo.id] > 0){
            total += cartItems[productInfo.id] * productInfo.price
      }})
      return total.toFixed(2);
      }
    const {cartItems} = useContext(StoreContext)
  return (
    <div>
      <div className='hidden md:block bg-secondary p-4'>
      <div className="flex">
        {/* products */}
        <h2 className='basis-2/5'>Products</h2>
        <div className='basis-3/5 flex text-center'>
          <h2 className='basis-1/3'>Price</h2>
          <h2 className='basis-1/3'>Quantity</h2>
          <h2 className='basis-1/3'>Total</h2>
        </div>
      </div>  

      </div>
      
        {products.map((productInfo) => {
            if(cartItems[productInfo.id] > 0){
              return (<YourCart data = {productInfo} />)
            }
          })
        }
      <div className='flex justify-end'>
        
      <h3 className='bg-secondary px-16  py-4 mt-12 whitespace-nowrap'>{subTotal() === 0 ? "SubTotal: 0" : (<p> SubTotal : {subTotal()}</p>)}</h3>

      </div>
    </div>
  )
}
