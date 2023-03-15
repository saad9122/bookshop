
import "./home.css";
import atomicOne from "../../assets/images/atomicOneBook.png";
import darkLight from "../../assets/images/darkLightBook.png";
import { Link } from "react-router-dom";
import authorhome from "../../assets/images/authorhome.png"
import scan from "../../assets/images/scan.png"
import {Trust} from "../Trust/Trust.jsx"


//import myimage from './images/1.jpg';

export const Home = () => {
  

  return (
    <section id="home" className="xl:container mx-auto">
      <div className="banner">

        <h2 className="text-center">Books Are Uniquely Portable Magic </h2>
        <div className="section-line"></div>
        <p className="text-center">There are many variations of passages of Lorem Ipsum available, but the majority have 
          suffered alteration in some form.</p>
      </div>
      {/* Author Book Include */}

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
    {/* Author Home */}
    <div className="flex flex-wrap mt-24">
      <div className="basis-full lg:basis-1/2">
        <img src={authorhome} alt="author" className="author-home-img mx-auto"/>
      </div>
      <div className="basis-full lg:basis-1/2 p-8">
        <h2>About Author</h2>
        <div className="left-line"></div>
        <p>All the Lorem Ipsum generators on the Internet tend to repeated predefined chunks as necessary, 
           making this the first true value generator on the Internet. It uses a dictionary of over 200 
           Latin words, combined with a handful.</p>
           <div className="flex mt-8">
            <div className="basis-1/3 pr-4 lg:pr-8">
              <div className="border-r-2 border-secondary space-y-2">
                <h2>02</h2>
                <p>Books Published</p>
              </div>   
            </div>
            <div className="basis-1/3 pr-4 lg:pr-8">
              <div className="border-r-2 border-secondary space-y-2">
                <h2>4.5</h2>
                <p>Books Published</p>
              </div>
            </div>
            <div className="basis-1/3 pr-8">
              <div className="space-y-2">                
                <h2>04</h2>
                <p>Books Published</p>
              </div>
            </div>
           </div>
           <div className="bg-primary p-4 inline-block mt-8">

           <img src={scan} alt="scan"  className="h-24"/>

           </div>
           
      </div>

    </div>

    {/* Trusted by the best */}

    <Trust />

    



      

  </section>
  )
}
