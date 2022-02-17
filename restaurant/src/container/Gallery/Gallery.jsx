import React, { useRef } from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from '../../constants/images';
import { BsInstagram , BsArrowLeftShort , BsArrowRightShort } from 'react-icons/bs';

import './Gallery.css';

const Gallery = () => {
  const scrollRef = useRef(null)
  
  const scroll = (dir)=> {
    const {curr} = scrollRef

    if(dir === 'left'){
      curr.scrollLeft -= 300
    }else{
      curr.scrollLeft +=300
    }
  }

  const image = [
    images.gallery01,images.gallery02,images.gallery03,images.gallery04
  ]
  return(
    <div className='app__gallery flex__center' >
      <div className="app__gallery-content">
        <SubHeading title='Instagram' />
        <h1 className="headtext__cormorant">
          Photo Gallery
        </h1>
        <p className="p__opensans" style={{color:'#aaa',marginTop:'2rem'}} >
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quis, fugit maxime suscipit vero dolore dignissimos.
        </p>
        <button type='button' className='custom__button' >
          view more
        </button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef} >
         {
          image.map((img,index)=>(
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index+1}`} >
             <img src={img} alt="gallery" />
             <BsInstagram className='gallery__image-icon' />
            </div>
          ))
         }
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className='gallery__arrow-icon' onClick={()=> scroll('left') } />
          <BsArrowRightShort className='gallery__arrow-icon' onClick={()=> scroll('right') } />
        </div>
      </div>
    </div>
  )
};

export default Gallery;
