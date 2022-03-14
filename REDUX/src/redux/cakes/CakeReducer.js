import { BUY_CAKE } from "./CakeTypes"

const initialState = {
  numOfCakes :10
}

const cakeReducer = (state=initialState,action)=>{
  switch(action.type){
    case BUY_CAKE:
      return{
        ...state,
        numOfCakes:state.numOfCakes - action.payload 
      }
      // if(state.numOfCakes == 0){
      //   state.numOfCakes = 10
      // }
    default :
    return state 
  }
}

export default cakeReducer