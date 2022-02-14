
import {combineReducers} from 'redux'
import usersReducer from './Reducer'

const RootReducer = combineReducers({
  users:usersReducer
})

export default RootReducer