import React from 'react'
import amazonlogo from "../../assets/Icons/amazonlogo.svg"
import urbanlogo from "../../assets/Icons/urbanlogo.svg"
import meganlogo from "../../assets/Icons/meganlogo.svg"
import maslogo from "../../assets/Icons/maslogo.svg"

import "./trust.css"

export const Trust = () => {
  return (
    <section id='trust' className='text-black'>
        <div>
            <h2 className='text-center'> Trusted by the Best</h2>
            <div className="section-line"></div>
        </div>

        <div className="flex flex-wrap lg:mt-12">
          <div className='basis-full md:basis-1/2 lg:basis-1/4 flex items-stretch p-2'>
            <div className='shadow-lg shadow-slate-400 px-4 py-8 rounded-lg'>
            <div className='flex flex-col items-center'>
              <img src={amazonlogo} alt="amazon Logo"/>
              <h3 className='mt-4'> Amzaon Corp</h3>
              <p className='text-center mt-2'>A long established fact that a who looking at its layout.</p>
            </div>  
          </div>
        </div>

          <div className='basis-full md:basis-1/2 lg:basis-1/4  flex items-stretch p-2'>
            <div className='shadow-lg shadow-slate-400 px-4 py-8 rounded-lg'>
              <div className='flex flex-col items-center'>
                <img src={meganlogo} alt="amazon Logo"/>
                <h3 className='mt-4'> Megan Books</h3>
                <p className='text-center mt-2'>A long established fact that a who looking at its layout.</p>
              </div>  
            </div>
          </div>

          <div className='basis-full md:basis-1/2 lg:basis-1/4 flex items-stretch p-2'>
            <div className='shadow-lg shadow-slate-400 px-4 py-8 rounded-lg'>
              <div className='flex flex-col items-center'>
                <img src={maslogo} alt="amazon Logo"/>
                <h3 className='mt-4'> Los Books</h3>
                <p className='text-center mt-2'>A long established fact that a who looking at its layout.</p>
              </div>  
            </div>
          </div>
          <div className='basis-full md:basis-1/2 lg:basis-1/4 flex items-stretch p-2'>
            <div className='shadow-lg shadow-slate-400 px-4 py-8 rounded-lg'>
              <div className='flex flex-col items-center'>
                <img src={urbanlogo} alt="amazon Logo"/>
                <h3 className='mt-4'> Urban Lib</h3>
                <p className='text-center mt-2'>A long established fact that a who looking at its layout.</p>
              </div>  
            </div>
          </div>

        </div>
    </section>
  )
}
