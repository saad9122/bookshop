import React, { useContext } from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import { useState, useRef } from 'react';

import "./App.css";
// import 'bootstrap/dist/css/bootstrap.min.css';

//import "./global.css";
import { Navbar } from './Components/Navbar/Navbar';
import { Home } from './Components/Home/Home';
import { Services } from './Components/Services/Services';
import { About } from './Components/About/About';
import {Contact} from "./Components/Contact/Contact"
import { Footer } from './Components/Footer/Footer.jsx';
import { SinglePage } from './Components/SingelPage/SinglePage';
import { StoreContext, StoreContextProvider } from './Components/Context/Context';
import { Cart } from './Components/Cart/Cart';



function App() {

  
const [theme,setTheme] = useState("light");
const rootRef = useRef(null);


  const handleTheme = () =>{

    setTheme (theme === "light" ? "dark" : "light")

  }

  return (
  <StoreContextProvider>
    <div className= {`App ${theme}`}>
      
        <BrowserRouter>
        <div ref={rootRef}>
          <Navbar handleTheme={handleTheme}/>

              <Routes>
                <Route path="/cart" element={<Cart />} />
                <Route path="/" element = {<Home />} />
                <Route path="/about" element = {<About />} />
                <Route path="/services" element = {<Services />} />
                <Route path="/contact" element = {<Contact />} />
                <Route path="/singlepage" element = {<SinglePage />}/>
              </Routes>
          <Footer/>
        </div>
        </BrowserRouter>
    </div>
    </StoreContextProvider>
  );
}

export default App;
