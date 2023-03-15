import React from 'react'

import product from "../../assets/images/atomicOneBook.png"
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const SinglePage = () => {
  return (
    <section id='singlePage'>
        <div className="xl:container mx-auto">     
            <div className="banner">
              <h2 className='text-center'>Buy our best Books</h2>
              <div className="section-line"></div>
              <p className="text-center">There are many variations of passages of Lorem Ipsum available,  
              have suffered alteration in some form.</p>
            </div>

        <div className='px-2 md:px-20 lg:px-40 py-16'>
            <div className="flex flex-wrap gap-y-8">
                {/* Book Image */}
                <div className='basis-full lg:basis-1/3 flex justify-center lg:justify-start'>
                <img src={product} alt="BookImage"/>
                </div>
                {/* Description of book */}
            
                <div className='basis-full lg:basis-2/3 pl-8'>
                    <h2>The Atomic one</h2>
                    <p className='text-xl mt-2'>$30.00.00</p>
                    <p className='mt-2'>Making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, 
                    combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                    The generated Lorem Ipsum.</p>
                    <div className="flex flex-col gap-y-4 mt-4">
                        <div className="grid grid-cols-12">
                            <p className="col-span-2">Publisher</p>
                            <p className='col-span-1'>:</p>
                            <p className="col-span-9"> Learning Private Limited (1 January 2021) </p>
                        </div>
                        <div className="grid grid-cols-12 gap-y-4">
                            <p className="col-span-2">Language</p>
                            <p className='col-span-1'>:</p>
                            <p className="col-span-9"> English </p>
                        </div>
                        <div className="grid grid-cols-12 gap-y-4">
                            <p className="col-span-2">Paperback</p>
                            <p className='col-span-1'>:</p>
                            <p className="col-span-9"> 212 Pages </p>
                        </div>
                        <div className="grid grid-cols-12 gap-y-4">
                            <p className="col-span-2">ISBN-10</p>
                            <p className='col-span-1'>:</p>
                            <p className="col-span-9"> 9788120345799 </p>
                        </div>
                        <div className="grid grid-cols-12 gap-y-4">
                            <p className="col-span-2">Dimensions</p>
                            <p className='col-span-1'>:</p>
                            <p className="col-span-9"> 20 x 14 x 4 cm </p>
                        </div>
                    </div>
                    <div className="flex mt-4 space-x-2">
                        <input type="number" className='border-2 border-zinc-800 rounded-sm p-2 w-24 text-center'/>
                        <button className='bg-secondary basis-1/3'> <FontAwesomeIcon icon={faShoppingCart} /> Add to Cart</button>
                    </div>
                </div>
            </div>

        </div>
        
        </div>
    </section>
  )
}
