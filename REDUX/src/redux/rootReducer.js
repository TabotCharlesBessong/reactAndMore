
import { combineReducers } from "redux";
import cakeReducer from "./cakes/CakeReducer";
import iceReducer from "./ice/iceReducer";
import cookiesReducer from "./cookies/cookiesReducers";
import {reducer} from './user/Reducer'

const rootReducer = combineReducers({
  cake:cakeReducer,
  ice:iceReducer,
  cookies:cookiesReducer,
  user:reducer 
})

export default rootReducer 