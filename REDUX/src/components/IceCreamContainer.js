
import React from 'react'
import { buyIce } from '../redux'
import { connect } from 'react-redux'

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of ice creame - {props.numOfIceCream} </h2>
      <button onClick={props.buyIce} >Buy Ice creame</button>
    </div>
  )
}

const mapStateToProps = (state)=>{
  return {
    numOfIceCream:state.ice.numOfIceCream
  }
}

const mapDispatchToProps = (dispatch)=>{
  return {
    buyIce:()=> dispatch(buyIce()) 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(IceCreamContainer)