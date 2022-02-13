
const initialState = [
  {
    id:0,
    name:'Charles Tabot',
    number:1234567890,
    email:'charlestabot@gmail.com'
  },
  {
    id:1,
    name:'Junior Tristan',
    number:9807654321,
    email:'watt@gmail.com'
  }
]

const ContactReducer = (state = initialState , action) =>{
  switch(action.type){
    case 'ADD_CONTACT':
      state = [...state, action.payload]
      return state
    default:
      return state
  }
}

export default ContactReducer