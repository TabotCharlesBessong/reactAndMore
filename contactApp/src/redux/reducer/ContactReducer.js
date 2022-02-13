
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
    case 'UPDATE_CONTACT':
      const updateState = state.map(contact => contact.id === action.payload.id ? action.payload : contact  )
      state = updateState
      return state
    case 'DELETE_CONTACT':
      const filterContact = state.filter(contact => contact.id !== action.payload ? contact :null )
      state = filterContact
      return state

    default:
      return state
  }
}

export default ContactReducer