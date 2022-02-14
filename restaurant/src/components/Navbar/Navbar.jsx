import React from 'react';
import {GiHamburgerMenu} from 'react-icons/gi'
import {MdOutlineRestaurantMenu} from 'react-icons/md'

import images from '../../constants/images'

import './Navbar.css';

const Navbar = () => (
   <nav className="app__navbar">
     <div className="app__navbar-logo">
       <img src={images.gericht} alt="app logo" />
     </div>
     <ul className='app__navbar-links' >
       <li className='p__opensans' >
         <a href="#home">Home</a>
       </li>
              <li className='p__opensans' >
         <a href="#about">About</a>
       </li>
       <li className='p__opensans' >
         <a href="#menu">Menu</a>
       </li>
       <li className='p__opensans' >
         <a href="#award">Award</a>
       </li>
       <li className='p__opensans' >
         <a href="#contact">Contact</a>
       </li>
       {/* <li className='p__opensans' > */}
         {/* <a href="#home">Home</a> */}
       {/* </li> */}

     </ul>
     <div className="app__navbar-login">
       <a href="#login" className='p__opensans'>Login / Register </a>
       <div className=""></div>
       <a href="/" className='p__opensans'>book a table</a>
     </div>
     <div className="app__navbar-smallscreen">
       <GiHamburgerMenu color="#fff" fontSize="27px"   />
       <div className="app__navbar-smallscreen_overlay flex__center slice__bottom">
        <MdOutlineRestaurantMenu className='overlay__close' onClick={()=> {}} />
         <ul className='app__navbar-smallscreen-links' >
           <li className='p__opensans' >
             <a href="#home">Home</a>
           </li>
                  <li className='p__opensans' >
             <a href="#about">About</a>
           </li>
           <li className='p__opensans' >
             <a href="#menu">Menu</a>
           </li>
           <li className='p__opensans' >
             <a href="#award">Award</a>
           </li>
           <li className='p__opensans' >
             <a href="#contact">Contact</a>
           </li>
           {/* <li className='p__opensans' > */}
             {/* <a href="#home">Home</a> */}
           {/* </li> */}
         </ul>
       </div>

     </div>
   </nav>
);

export default Navbar;
