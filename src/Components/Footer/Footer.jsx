import React from 'react';
import "./footer.css"
import { Link } from 'react-router-dom';

import fbfooter from "../../assets/Icons/fbfooter.svg"
import twfooter from "../../assets/Icons/twitterfooter.svg"
import linkfooter from "../../assets/Icons/linkedinfooter.svg"
import instafooter from "../../assets/Icons/instafooter.svg"
import logo from "../../assets/Icons/Logo.svg"
import bulletfooter from "../../assets/Icons/bulletfooter.svg"

export const Footer = () => {
  return (
    <footer id='footer'>
    <div className="xl:container mx-auto p-2 py-5">
      <div className="grid grid-cols-12 items-start gap-y-4">
        
          <div className=" col-span-12 md:col-span-6 lg:col-span-4">
            <div className='flex align-baseline pages-footer'>
                <img src={logo}  alt="booksLogo"/>
                <h2 className='pl-1'>Pages</h2>
            </div>

            <div className='footer-icons'>
                <img src={fbfooter} alt='Facebook'/>
                <img src={twfooter} alt='Twitter'/>
                <img src={linkfooter} alt='Linkedin' />
                <img src={instafooter} alt='Instagram' />
            </div>
          </div>

          <div className='col-span-12 md:col-span-6 lg:col-span-2'>
            <h2 className='mb-4'>Explore</h2>
            <div>
              <ul className='footer-ul'>
                <li><img src={bulletfooter} alt=""/> <Link to="/"> Home </Link></li>
                <li><img src={bulletfooter} alt=""/> <Link to="/about"> About us </Link></li>
                <li><img src={bulletfooter} alt=""/> <Link to="/services"> Services </Link></li>
                <li><img src={bulletfooter} alt=""/> <Link to="/contact"> Contact us </Link></li>
                <li><img src={bulletfooter} alt=""/> <Link to="/cart"> Cart </Link></li>
                <li><img src={bulletfooter} alt=""/> <Link to="/shop"> Order us </Link></li>
              </ul>
            </div>
        </div>

        <div className='col-span-12 md:col-span-6 lg:col-span-2'>
          <h2 className='mb-4'>Utility Pages</h2>
            <div>
              <ul className='footer-ul'>
                <li> <img src={bulletfooter} alt=""/> <Link to="#"> Start Here </Link></li>
                <li><img src={bulletfooter} alt=""/> <Link to="#"> Style guide </Link></li>
                <li><img src={bulletfooter} alt=""/> <Link to="#"> 404 not found </Link></li>
                <li><img src={bulletfooter} alt=""/> <Link to="#"> Password Protected </Link></li>
                <li><img src={bulletfooter} alt=""/> <Link to="#"> liscence </Link></li>
                <li><img src={bulletfooter} alt=""/> <Link to="#"> Changelog </Link></li>
              </ul>
            </div>
        </div>

        <div className=' col-span-12 md:col-span-6 lg:col-span-4'>
            <div>
              <h2 className='mb-4'> Keep in Touch </h2>
              <div className="grid grid-cols-12 gap-y-6">
                <div className="col-span-3"> <b> Address:</b> </div>
                <div className="col-span-9"> <p>  24A kingston St,Los Vegas NC 28202 , USA </p>  </div>
                <div className="col-span-3"> <b> Mail :</b>  </div>
                <div className="col-span-9"> <p> support @doctors.com</p>  </div>
                <div className="col-span-3"> <b> Phone :</b>  </div>
                <div className="col-span-9"> <p>  (+22)123-4567-900 </p> </div>
              </div>
            </div>
        </div>
        
    </div>
    </div>  

    </footer>
  )
}
