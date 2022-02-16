import React from 'react';

import './SpecialMenu.css';
import images from '../../constants/images';
import data  from '../../constants/data'
import SubHeading from '../../components/SubHeading/SubHeading';
import MenuItem from '../../components/MenuItem/MenuItem';
const SpecialMenu = () => (
  <div className='app__specialMenu flex__center section__padding'  id='menu' >
    <div className="app__specailMenu-title">
      <SubHeading title="Menu That feets your pallets" />
      <h1 className='headtext__cormorant' > Todays Special </h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className='app__specialMenu-menu_heading' >Wine and Beer</p>
        <div className="app__specialMenu-menu_item">
          {data.wines.map((wine,index)=>(
            <MenuItem key={wine.title + index } price={wine.price} title={wine.title} tags={wine.tags} />
          ))}
        </div>
      </div>
      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div>
      <div className="app__specialMenu-menu_cocktails flex__center">
        <p className='app__specialMenu-menu_heading' > CockTails </p>
        <div className="app__specialMenu-menu_items">
          {data.cocktails.map((cock,index)=>(
            <MenuItem key={cock.title + index } title={cock.title} price={cock.price} tags={cock.tags} />
          ))}
        </div>
      </div>
    </div>
    <div className="" style={{marginTop:'15px'}} >
      <button type='button' className='custom__button' >
        view more
      </button>
    </div>
  </div>
);

export default SpecialMenu;
