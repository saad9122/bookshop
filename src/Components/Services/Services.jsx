import React from 'react'
import { products } from "../../products.js"
import { Products } from './Products.jsx'
import "./services.css"

export const Services = () => {
  return (
    <section id="services">
      <div className="xl:container mx-auto">
        <div className="banner">
              <h1 className='text-center'>  Products</h1>
              <div className="section-line"></div>
              <p className='text-center'>There are many variations of passages of Lorem Ipsum available,  have suffered alteration in some form.</p>
          </div> 
        
        {/* Products */}

        <div className='flex flex-wrap'>

        {products.map((productinfo) => {
           return (<Products data = {productinfo} />)
        })}

        </div>

        </div>
        
        
        {/* Products */}

  </section>
  )
}
