
import React ,{useState} from 'react'
import { useDispatch } from 'react-redux'
import {useSelector} from 'react-redux'
import { useHistory } from 'react-router-dom'
import {toast} from 'react-toastify'

const AddContact = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')
  const contacts = useSelector(state => state )

  const handleSubmit = (e)=>{
    e.preventDefault()

    const checkEmail = contacts.find(contact => contact.email === email && email )
    const checkNumber = contacts.find(contact => contact.number === parseInt(number)  && number )
    const checkName = contacts.find(contact => contact.name === name && name )
    if(!email || !number || !name){
      return toast.warning("PLease fill in all fields")
    }
    if(checkEmail){
      return toast.error("This email already exist!")
    }
    if(checkNumber){
      return toast.error("This Number already exist!")
    }
    if(checkName){
      return toast.error("This Name already exist!")
    }

    const data = {
      id: contacts[contacts.length - 1].id + 1,
      name,
      email,
      number,
    }
    // console.log(data);
    dispatch({type:'ADD_CONTACT',payload:data})
    toast.success("Tenants added successfully")
    history.push("/")
  }
  // console.log(contacts);
  return (
    <div className="container">
        <h1 className="display-3 text-center my-5">
        Add Tenants
    </h1>
      <div className="row">
        {/* <div className="col-md-6  text-right"> */}
          {/* <h1 className="display-3 text-center"> */}
              {/* Add Tenants */}
          {/* </h1> */}
        {/* </div> */}
        <div className="col-md-6 shadow mx-auto p-5">
           <form action="" className='' onSubmit={(e)=>handleSubmit(e)} >
             <div className="form-group my-2 ">
               <input type="text" placeholder='Name' value={name} className='form-control' 
               onChange={(e)=> setName(e.target.value)}  />
             </div>
             <div className="form-group my-2 ">
               <input type="email" placeholder='Email Address' className='form-control' 
               onChange={(e)=> setEmail(e.target.value)} value={email} />
             </div>
             <div className="form-group my-2 ">
               <input type="text" placeholder='Telephone' className='form-control' 
               onChange={(e)=> setNumber(e.target.value)} value={number} />
             </div>
             <div className="form-group my-2 ">
               <input  type="submit" value='Tenants' className='btn  btn-block btn-dark  ' />
             </div>
           </form>          
        </div>
      </div>
    </div>
  )
}

export default AddContact