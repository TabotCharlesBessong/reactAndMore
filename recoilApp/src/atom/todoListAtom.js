
import {atom} from 'recoil'

// declaring a state
export const todoListState = atom({
  key:'TodoList',
  default:[]
})