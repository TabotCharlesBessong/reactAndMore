import React, { useState, useRef, useEffect } from 'react'
import { FaBars} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './Navbar.css'
// import logo from '../../logo.svg'

const Navbar = () => {
  // we are using the usestate to toggle the functionalites of displaying and disappearing the navbar
  const [showLinks,setShowLinks] = useState(false)
  // The height is automatic due to the useref prop which will always refrencece to our links container and get the height of the container
  const linksContainerRef = useRef(null)
  const linksRef = useRef(null)

  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height
    // the automatic height will be coming from here with the use of the useBoundingClientRect 
    if(showLinks){
      linksContainerRef.current.style.height  = `${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height = '0px'
    }
  },[showLinks])

  return <>
  <nav>
    <div className="nav-center">
      <div className="nav-header">
        {/* <img src={logo} alt="" /> */}
        <h1 className="logo">blanco-negro</h1>
        <button className="nav-toggle" onClick={()=> setShowLinks(!showLinks)}>
          <FaBars/>
        </button>
      </div>
      {/* {showLinks &&  */}
      <div className= 'links-container' ref={linksContainerRef} >
        
        <ul className="links" ref={linksRef} >
          <Link className='link' to='/'>Home</Link>
          <Link className='link' to='/'>cards</Link>
          <Link className='link' to='/'>login/signup</Link>
          <Link className='link' to='/'>create</Link>
          {/* <Link className='link' to='/'>Home</Link> */}
        </ul>
      </div>
      {/* } */}
      
    </div>
  </nav>
  </>
}

export default Navbar
 