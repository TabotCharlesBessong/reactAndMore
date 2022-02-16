import React from 'react';
import {BsFillPlayFill,BsPauseFill} from 'react-icons/bs'
import meal from '../../constants/meal';
import data from '../../constants/data';

import './Intro.css';
import { useRef } from 'react';
import { useState } from 'react';

const Intro = () => {

  const handleVideo = ()=>{
    setPlayVidoe((prev)=> !prev )

    if(playVideo){
      vidRef.current.pause()
    }else{
      vidRef.current.play()
    }
  }
  const [playVideo,setPlayVidoe] = useState(false)
  const vidRef = useRef()

  return (
    <div className='app__video' >
      <video src={meal} 
        type="video/mp4"
        loop
        controls={false}
        ref={vidRef}
        muted
      />
      <div className="app__video-overlay flex__center">
        <div className="app__video-overlay_circle flex__center" onClick={handleVideo} >
          {
            playVideo ? ( <BsPauseFill color='#fff' fontSize={30} /> ) :
            ( <BsFillPlayFill color='#fff' fontSize={30} /> )
          }
        </div>
      </div>
    </div>
  )
  
  
};

export default Intro;
