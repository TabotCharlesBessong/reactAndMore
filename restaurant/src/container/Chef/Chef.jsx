import React from 'react';
import images from '../../constants/images';
import SubHeading from '../../components/SubHeading/SubHeading';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'   >
    <div className="app__wrapper_img app__wrapper_img-reverse ">
      <img src={images.chef} alt="" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading  title='Chefs word' />
      <h1 className="headtext__cormorant">
        what we believe in
      </h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate reiciendis quidem tenetur consequatur est aut facere ab molestiae quia enim?
          </p>
        </div>
        <p className="p__opensans">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde dolores ullam ut fuga.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Lua</p>
        <p className="p__epensans">
          Chef and founder
        </p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
