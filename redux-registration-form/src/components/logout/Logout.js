
import React from 'react'
import './logout.css'

const Logout = () => {
  return (
    <div className='logout' >
      <h1>welcome <span className='user__name' >Charles</span> </h1>

      <button className='logout__btn' >logout</button>
    </div>
  )
}

export default Logout