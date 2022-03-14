
// import { connect } from 'formik'
import React from 'react'
import { connect } from 'react-redux'

const ItemContainer = (props) => {
  return (
    <div>
      <h2>Item - {props.item}  </h2>
    </div>
  )
}

const mapDispatchToProps  = (state , ownProps )=>{
  const itemState = ownProps.cake ? state.cake.numOfCakes : ownProps.ice ? state.ice.numOfIceCreame : state.cookies.numOfCookies

  return {
    item : itemState
  }
}

export default connect(mapDispatchToProps)(ItemContainer)