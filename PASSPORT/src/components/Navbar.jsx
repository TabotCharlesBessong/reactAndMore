
import React from 'react'
import '../App.css'
import img from '../images/agents5.jfif'

const Navbar = () => {
  return (
    <div className='navbar' >
      <span className='logo' >Bolingo</span>
      <ul className="list">
        <li className="listItem">
          <img src={img} alt="" className='avatar' />
        </li>
        <li className="listItem">
john doe
        </li>
        <li className="listItem">
logout
        </li>
      </ul>
    </div>
  )
}

export default Navbar