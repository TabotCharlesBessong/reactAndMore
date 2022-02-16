import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import MenuItem from '../../components/MenuItem/MenuItem';
import data from '../../constants/data';
import images from '../../constants/images';

import './Laurels.css';

const AwardCard = ({award:{imgUrl,title,subtitle}}) => (
  <div className="app__laurels_awards-card">
    <img src={imgUrl} alt="awards" />
    <div className="app__laurels_awards-card_content">
      <p className="p__cormorant" style={{color:'#dcca87'}} >
        {title}
      </p>
      <p className="p__cormorant"  >
        {subtitle}
      </p>
    </div>
  </div>
)

const Laurels = () => (
  <div className='app__bg app__wrapper section__padding' id='award' >
    <div className="app__wrapper_info">
     <SubHeading title='awards and recognition' />
     <h1 className="headtext__cormorant">
       Our Lorals
     </h1>
    
    <div className="app__laurels_awards">
      {data.awards.map((award)=> (
        <AwardCard award={award} key={award.title} imgUrl={award.imgUrl}  />
      ) )}
    </div>

    </div>
    <div className="app__wrapper_img">
      <img src={images.laurels} alt="laurels" />
    </div>
  </div>
);

export default Laurels;
