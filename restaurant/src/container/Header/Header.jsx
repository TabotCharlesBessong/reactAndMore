import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images'

import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home' >
    <div className="app__wrapper_info">
       <SubHeading
         title="Chase The New Flavour"
       />
       <h1 className='app__header-h1' >
         The key to find dinnig
       </h1>
       <p className="p__opensans" style={{margin:'2rem 0'}} >
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt autem quibusdam libero id quia accusamus!
       </p>
       <button type='button' className='custom__button' >Read Menu</button>
    </div>
    <div className="app__wrapper_img">
       <img src={images.welcome} alt="header-img" />
    </div>
  </div>
);

export default Header;
