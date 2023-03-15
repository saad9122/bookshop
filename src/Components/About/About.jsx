import React from 'react';
import "./about.css";
import authorpic from "../../assets/images/authorpic.png";
import authorhistory from "../../assets/images/authorhistory.png";
import atomicOne from "../../assets/images/atomicOneBook.png";
import darkLight from "../../assets/images/darkLightBook.png";
import { Trust } from '../Trust/Trust';
import { Link } from 'react-router-dom';

export const About = () => {

  return (
    <main id="about">
      <div className='xl:container mx-auto'>
        
          <div className="banner">
              <h1 className='text-center'> About the Author</h1>
              <div className="section-line"></div>
              <p className='text-center'>There are many variations of passages of Lorem Ipsum available, have suffered alteration in some form.</p>
          </div>  

          <div className='about-author flex flex-col align-center p-4 lg:p-12'>
            <div>

              <div className='flex justify-center'>
              <img src={authorpic} alt="AuthorImage" className='rounded'/>

              </div>
            </div>

            <div>
              <div className="flex flex-wrap align-items-center">
                <div className="basis-full lg:basis-1/4 author-detail mt-4 lg:mt-12 p-12 shadow-md shadow-emerald-100 bg-white">

                  <div>
                    <div className="grid grid-cols-12 gap-y-4">
                      <div className="col-span-6"> <b>Country:</b></div>
                      <div className="col-span-6"> <p>United Kingdom </p></div>
                      <div className="col-span-6"> <b>Language: </b></div>
                      <div className="col-span-6"> <p>English </p></div>
                      <div className="col-span-6"> <b>Genre: </b></div>
                      <div className="col-span-6"> <p>Histrography </p></div>
                      <div className="col-span-6"> <b>Publication Date:</b></div>
                      <div className="col-span-6"> <p>1991 </p></div>
                      <div className="col-span-6"> <b>Share us:</b></div>
                      <div className="col-span-6"> <p>1991 </p></div>
                    </div>

                  </div>
                  
                </div>

                <div className="basis-full lg:basis-3/4 mt-4 lg:mt-0 flex items-center author-title text-white">
                    <div className='lg:p-12'>
                        <h1>Dr. John Abraham</h1>
                        <div className="left-line"></div>
                        <p>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, 
                        making this the first true generator on the Internet. It uses a dictionary of over 200 Latin 
                        words, that can combined with a handful of model sentence structures.</p>
                        <button className='mt-4 text-black'> Contact now</button>

                    </div>
                </div>

                </div>
            </div>
            

          </div>

          <div className=" grid grid-cols-1 lg:grid-cols-2 gap-y-4 items-center history p-2 lg:p-0 mt-8">

            <div className="history-content order-2 lg:order-1">
                <h2> My Story </h2>
                <div className="left-line"></div> 
                <p>Making this the first true generator on the Internet. It uses a dictionary of over 200 
                  Latin words, combined with a handful of model sentence structures.</p>
                   <div className="history-points mt-4">
                      <div className="flex flex-wrap space-y-8">

                        <div className="basis-full grid grid-cols-12">
                          
                          <div className="col-span-2  xl:col-span-1 point"> <p className='lead'>01</p></div> 
                          <div className="col-span-10 xl:col-span-11 space-y-2">
                            <h4>Great Author Awards - 1996 & 2000</h4>
                            <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                          </div>
                        </div>

                        <div className=" basis-full grid grid-cols-12">

                          <div className="col-span-2  xl:col-span-1 point"> <p className='lead'>02</p></div> 
                          <div className="col-span-10 xl:col-span-11 space-y-2">
                            <h4>10 Times New York Times ® Best Seller</h4>
                            <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                          </div>
                        </div>

                        <div className=" basis-full grid grid-cols-12">
                          
                          <div className="col-span-2  xl:col-span-1 point"> <p className='lead'>03</p></div> 
                          <div className="col-span-10 xl:col-span-11 space-y-2">
                          <h4>Writer of Hack Productivity</h4>
                          <p>How to navigate around the interface and toggle on/off the panels you wish to use.</p>
                          </div>
                        </div>
                        
                        </div>

                      </div>
                   </div>
                 <div className='order-1 lg:order-2'>
                  <div className='flex justify-center lg:justify-end'>
                  <img src={authorhistory} alt="authorImage"/>
                    
                  </div>
                 </div>
            </div>
      {/* Two Books */}

      <div className="about-books mt-12">
        <h2 className='text-center'>Author's Book includes</h2>
        <div className="section-line"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 mt-12">
          
          <div className='px-4'>          
              <div className="flex flex-col lg:flex-row shadow-lg shadow-slate-300 p-6 lg:p-8">
                <div className='flex justify-center book-image '> 
                  <img src={atomicOne} alt="Book" />  
                </div>

              <div className="book-detail lg:pl-4 mt-2">
                  <h3>Atomic One's</h3>
                  <p className='mt-2'>Many variations of passages of Lorem Ipsum willing araise alteration in some form.</p>
              {/* Align Pages and Length */}
              <div className="flex space-x-4 mt-4">
                
                <div className='flex'>
                  <div className="bullet"></div>
                  <div className="flex flex-col">
                    <h4>Pages:</h4>
                    <p>586 Pages</p>
                  </div>
                </div>

                <div className='flex'>
                  <div className="bullet"></div>
                  <div className="flex flex-col">
                    <h4>Length:</h4>
                    <p>10 Hours</p>
                  </div>
                </div>

              </div>

                  <button className="order-today-outline mt-4"
                  ><Link to="/services"> Order Today </Link>
                  </button>

              </div>

            </div>

            
          </div>

          <div className='px-4'>          
              <div className="flex flex-col lg:flex-row shadow-lg shadow-slate-300 p-6 lg:p-8">
                <div className='flex justify-center items-stretch book-image '> 
                  <img src={darkLight} alt="Book" />  
                </div>

              <div className="book-detail lg:pl-4">
                  <h3>The Dark Light</h3>
                  <p className='mt-2'>Many variations of passages of Lorem Ipsum willing araise alteration in some form.</p>
              {/* Align Pages and Length */}
              <div className="flex space-x-4 mt-4">
                
                <div className='flex'>
                  <div className="bullet"></div>
                  <div className="flex flex-col">
                    <h4>Pages:</h4>
                    <p>586 Pages</p>
                  </div>
                </div>

                <div className='flex'>
                  <div className="bullet"></div>
                  <div className="flex flex-col">
                    <h4>Length:</h4>
                    <p>10 Hours</p>
                  </div>
                </div>

              </div>

                  <button className="order-today-outline mt-4">Order Today
                  </button>

              </div>

            </div>

            
          </div>


          
        </div>
      </div>


    {/* Trusted by the best */}
      
      <Trust/>

    {/* Trusted by the best */}

    
      </div>
    </main>
  )
}
