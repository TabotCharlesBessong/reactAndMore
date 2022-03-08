
import React from 'react'
import { buyCookies } from '../redux'
import { connect } from 'react-redux'

const CookiesContainer = (props) => {
  return (
    <div>
      <h2>Number of cookies - {props.numOfCookies} </h2>
      <button onClick={props.buyCookies} >Buy cookies</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    numOfCookies:state.cookies.numOfCookies
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    buyCookies:()=> dispatch(buyCookies()) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CookiesContainer)