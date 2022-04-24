
import React from 'react'
import Carousel from "react-elastic-carousel";

const Banner = () => {
  return (
    <div className='banner' >
      <Carousel enableAutoPlay autoPlaySpeed={5000}>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
        <h1>Hello</h1>
      </Carousel>
    </div>
  )
}

export default Banner