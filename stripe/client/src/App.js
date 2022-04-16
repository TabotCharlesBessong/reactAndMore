
import React, { useState } from 'react'
import StripeContainer from './component/StripeContainer'
import spatula from './assets/spatula.jpg'

const App = () => {
  const [showItem , setShowItem] = useState(false)
  return (
    <div  className='App' >
    <h1>The spatula store</h1>
    {showItem ? <StripeContainer/> : <>
      <h3>$10.00</h3>
      <img src={spatula} alt="" />
      <button onClick={()=>setShowItem(true)} >Purchase Spatula</button>
    </> }
      {/* <StripeContainer/> */}
    </div>
  )
}

export default App