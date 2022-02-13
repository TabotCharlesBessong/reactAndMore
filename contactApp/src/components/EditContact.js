
import React, { useState } from 'react'
import { useEffect } from 'react'
import { useReducer } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { Link, useHistory, useParams } from 'react-router-dom'
import { toast } from 'react-toastify'

const EditContact = () => {
  const dispatch = useDispatch()
  const history = useHistory()
  const {id} = useParams()
  const contacts = useSelector(state => state)
  const currentContact = contacts.find(contact => contact.id ===parseInt(id) )
  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [number,setNumber] = useState('')
  
  useEffect(()=>{
   if(currentContact){
     setName(currentContact.name)
     setEmail(currentContact.email)
     setNumber(currentContact.number)
   }
  },[currentContact])
 
  const handleSubmit = (e)=>{
    e.preventDefault()

    const checkEmail = contacts.find(contact => contact.id !== parseInt(id) && contact.email === 
email && email )
    const checkNumber = contacts.find(contact => contact.id !== parseInt(id) && contact.number 
=== parseInt(number)  && number )
    const checkName = contacts.find(contact => contact.id !== parseInt(id) && contact.name === 
name && name )
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
      id: parseInt(id) ,
      name,
      email,
      number,
    }
    // console.log(data);
    dispatch({type:'UPDATE_CONTACT',payload:data})
    toast.success("Tenants updated successfully")
    history.push("/")
  }

  return (
    <div className="container">
    {currentContact ? (
      <>

    
    
    <h1 className="display-3 text-center my-5">
    Edit Tenants  {id}
     </h1>
       <div className="row">
         {/* <div className="col-md-6  text-right"> */}
           {/* <h1 className="display-3 text-center"> */}
               {/* Add Tenants */}
           {/* </h1> */}
         {/* </div> */}
         <div className="col-md-6 shadow mx-auto p-5">
            <form action="" className='' onSubmit={(e)=> handleSubmit(e)} >
              <div className="form-group my-2 ">
                <input type="text" placeholder='Name'      className='form-control'
                onChange={(e)=> setName(e.target.value)} value={name} 
                 />
              </div>
              <div className="form-group my-2 ">
                <input type="email" placeholder='Email Address'      className='form-control'
                  onChange={(e)=> setEmail(e.target.value)} value={email} 
                 />
              </div>
              <div className="form-group my-2 ">
                <input type="number" placeholder='Telephone'      className='form-control' 
                    onChange={(e)=> setNumber(e.target.value)} value={number} 
                />
              </div>
              <div className="form-group my-2 ">
                <input type="submit" value='Update Tenants' className='btn        btn-dark  ' />
                <Link to='/' className='btn btn-danger ml-3  ' >
                  Cancel
                </Link>
              </div>
            </form>          
         </div>
       </div>
       </>
     )
     :
     (
       <h1 className="display-3 my-5 text-center">
         Tenants with Id of {id} does not exist
       </h1>
     )
     }
     </div>
  )
}

export default EditContact