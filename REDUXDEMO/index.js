
const redux = require('redux')

const createStore = redux.createStore
const combineReducers = redux.combineReducers

const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'
 

const buyCake = ()=>{
  return {
    type:BUY_CAKE,
    info:'First redux action'
  }
}

const buyIcecreame = ()=>{
  return {
    type:BUY_ICECREAM
  }
}

// 
// const initialState = {
//   numOfCake:10 ,
//   numOfIcreCreame : 21
// }

const initialCakeState = {
  numOfCake:10
} 

const initialIceCreamState = {
  numOfIceCreame:21
}




const cakeReducer = (state = initialCakeState ,action)=>{
  switch(action.type){
    case BUY_CAKE:
      return {
        ...state,
        numOfCake: state.numOfCake - 1 
      }
      
      default:
        return state 
  }
}

const iceCreameReducer = (state = initialIceCreamState ,action)=>{
  switch(action.type){
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreame: state.numOfIceCreame - 1 
      }
      
      default:
        return state 
  }
}

const rootReducer  = combineReducers({
  cake:cakeReducer,
  iceCream:iceCreameReducer 
})

const store = createStore(rootReducer)

console.log('initialstate',store.getState());
const unsubscribe  =  store.subscribe(()=> console.log('updated state',store.getState()) )
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
store.dispatch(buyIcecreame())
unsubscribe() 