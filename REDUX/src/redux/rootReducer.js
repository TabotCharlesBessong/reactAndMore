
import { combineReducers } from "redux";
import cakeReducer from "./cakes/CakeReducer";
import iceReducer from "./ice/iceReducer";
import cookiesReducer from "./cookies/cookiesReducers";

const rootReducer = combineReducers({
  cake:cakeReducer,
  ice:iceReducer,
  cookies:cookiesReducer
})

export default rootReducer 