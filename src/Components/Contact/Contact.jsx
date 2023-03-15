import React from 'react'
import "./contact.css"
import callus from "../../assets/Icons/callus.svg"
import visitus from "../../assets/Icons/visitus.svg"
import emailus from "../../assets/Icons/emailus.svg"

export const Contact = () => {
  return (
    <section className='xl:container mx-auto'>
      <div className="banner">
        <h2 className="text-center">Contact Us</h2>
        <div className="section-line"></div>
        <p className='text-center'> There are many variations of passages of Lorem Ipsum available,  
        have suffered alteration in some form.</p>
      </div>

      <div className="flex flex-wrap mt-8">
        {/* Keep in Touch */}
        <div className="basis-full lg:basis-1/2 p-4">
          <div>
              <h2>Keep in Touch</h2>
              <div className="left-line"></div>
              <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, 
                by injected humour, or randomised words which don't look even slightly believable.</p>
            <div className="flex mt-4 space-x-4">
              <div> <img src={visitus} alt="icon" /></div>
              <div>
                <h3>Visit Us:</h3> 
                <p>No: 09a, Downtown, San Dieago, USA.</p>               
              </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <div> <img src={emailus} alt="icon" /></div>
              <div>
                <h3>Email Us:</h3> 
                <p>support@pages.com</p>               
              </div>
            </div>
            <div className="flex mt-4 space-x-4">
              <div> <img src={callus} alt="icon" /></div>
              <div>
                <h3>Call Us:</h3> 
                <p>Call: 1-800-123-9999</p>               
              </div>
            </div>
          </div>
        </div>
        <div className="basis-full lg:basis-1/2 p-4">
          <div className="grid grid-cols-12 grid-rows-7 gap-y-4">
            <input type="text"  className='col-span-6 py-4 mr-2' placeholder='Name'/>
            <input type="email" className='col-span-6 py-4' placeholder='Email'/>
            <input type="text"  className='col-span-12 py-4'placeholder='Phone'/>
            <textarea type="text"  className='col-span-12 py-4' rows="5" placeholder='Message'>
            </textarea>
            <div className='col-span-12 flex space-x-4'>
             <input type="checkbox" className='contact-checkbox'/>
              <p>Keep me up to date with news and offers from time to time by email</p>
            </div>
            <button className='col-span-12 py-4 bg-secondary'>Send Message</button>
          </div>
        </div>
      </div>




    </section>
  )
}

