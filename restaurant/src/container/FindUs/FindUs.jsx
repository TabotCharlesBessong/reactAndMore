import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import data from '../../constants/data';

const FindUs = () => (
  <div className='app__bg app__wrapper section__padding' id='contact' >
    <div className="app__wrapper_info">
      <SubHeading title='Contact'/>
      <h1 className="headtext__cormorant" style={{marginBottom:'3rem'}} >
        find us
      </h1>
      <div className="app__wrapper-content">
        <p className="p__opensans">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus vitae dignissimos optio,
        </p>
        <p className="p__cormorant" style={{color:'#dcca87',margin:'2rem 1rem'}} >
          opening hours
        </p>
        <p className="p__opensans">
           monday to friday
        </p>
        <p className="p__opensans">
        saturday to sunday
        </p>
      </div>
      <button className="custom__button" style={{marginTop:'2rem'}} >
  visit us
      </button>
    </div>
    <div className="app__wrapper_img">
      <img src={images.findus} alt="find us" />
    </div>
  </div>
);

export default FindUs;
