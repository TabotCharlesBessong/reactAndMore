import { BUY_ICE } from "./iceTypes"

const initialState = {
  numOfIceCream:20
}

const iceReducer = (state = initialState  ,action)=>{
  switch(action.type){
    case BUY_ICE:
      return {
        ...state,
        numOfIceCream:state.numOfIceCream - 1
      }
    default :
    return state
  }
}

export default iceReducer

