
import {BUY_COOKIES} from './cookiesTypes'

const initialState = {
  numOfCookies : 14
}

const cookiesReducer = (state = initialState, action)=>{
  switch (action.type){
    case BUY_COOKIES:
      return {
        ...state , 
        numOfCookies:state.numOfCookies - 1
      }
    default :
    return state
  }
}

export default cookiesReducer