
// import { connect } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyCookies, buyIce } from '../redux'

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}  </h2>
      <button onClick={props.buyItem} > Buy Items </button>
    </div>
  )
}

const mapStateToProps  = (state , ownProps )=>{
  const itemState = ownProps.cake ? state.cake.numOfCakes : ownProps.ice ? state.ice.numOfIceCreame : state.cookies.numOfCookies

  return {
    item : itemState
  }
}

const mapDispatchToProps = (dispatch , ownProps) =>{
  const dispatchFunction = ownProps.cake ? () => dispatch(buyCake()) : ownProps.ice ? () => dispatch(buyIce()) : () => dispatch(buyCookies())

  return {
    buyItem  : dispatchFunction
  }
}

export default connect(mapDispatchToProps ,mapDispatchToProps)(ItemContainer)