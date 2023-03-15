import {useContext, useEffect, useState} from 'react'
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark, faHouse, faAddressCard, faBriefcase, faAddressBook,faMoon } from '@fortawesome/free-solid-svg-icons';
import "./navbar.css";
import "./navbarMobile.css"

import fb from "../../assets/Icons/facebook.svg";
import twitter from "../../assets/Icons/Twitter.svg";
import linkedin from "../../assets/Icons/LinkedIn.svg";
import logo from "../../assets/Icons/Logo.svg";
import carticon from  "../../assets/Icons/Cart.svg"; 
import { StoreContext } from '../Context/Context';


export const Navbar = ({handleTheme}) => {

    const location = useLocation();

    const [responsive,setResponsive] = useState(false);

    const {countCart,cartItems} = useContext(StoreContext);


    const responsiveNavbar = responsive ? "mobile" : "pc"; 

    useEffect(() => {
        const element = document.getElementById(location.hash.replace("#", ""));
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
          console.log(element);
        }
      }, [location]);

      const closeNavbar = () => {
        responsive ? setResponsive(!responsive) : setResponsive(responsive)
      }

      const handleCart = () =>{

        closeNavbar();

      }

  return (
 <header>
    <div className='xl:container mx-auto navbar-container p-2'>

    <div className="navbar flex justify-between items-center">

      <div className='order-2 md:order-1 inline-flex align-center'>

        <div className='flex items-baseline pages-heading'>
            <img src={logo}  alt="booksLogo"/>
            <h2 className='pl-1'>Pages</h2>
        </div>

        <div className='header-icons'>
            <img src={fb} alt='Facebook'/>
            <img src={twitter} alt='Twitter'/>
            <img src={linkedin} alt='Linkedin' />
        </div>

      </div>
      <button 
      onClick={()=> setResponsive(!responsive)}
      className={`navbar-btn ${responsiveNavbar} order-1`}>
      {!responsive ? <FontAwesomeIcon icon={faBars}/> : <FontAwesomeIcon icon={faXmark} />}
      </button>
      <nav className= {`${responsiveNavbar} order-2`}>
        <ul className={`navbar-ul ${responsiveNavbar} flex align-center`}>

            {responsive && <li className='name'> <h5>Pages</h5></li>}

            <li> {responsive && <FontAwesomeIcon icon={faHouse} className="icons" />} <Link onClick={closeNavbar}
            to="/">Home</Link></li>

            <li> {responsive && <FontAwesomeIcon icon={faAddressCard} className="icons" />}<Link onClick={closeNavbar}
            to="/about">About</Link></li>

            <li> {responsive && <FontAwesomeIcon icon={faBriefcase} className="icons" />}<Link onClick={closeNavbar}
            to="/services">Products</Link></li>

            <li>{responsive && <FontAwesomeIcon icon={faAddressBook} className="icons" />} <Link onClick={closeNavbar} 
            to="/contact">Contact</Link></li>

            <li className='cart'><Link onClick={handleCart} to="/cart"
            ><img src={carticon} alt ="cart" className='carticon'/></Link> 
            {countCart() >0 && <div className={`cart-count ${responsiveNavbar} flex justify-center items-center`}><p>{countCart()}</p></div>}</li>
        
            
        </ul>
      </nav>     
    </div>
    </div>
  </header>
  )
}
