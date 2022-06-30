
import React from 'react'
import { useState } from 'react'
import './login.css'
import { useDispatch } from 'react-redux'
import { login } from '../../redux/features/userSlice'

const Login = () => {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')

  const dispatch = useDispatch

  const handleSubmit = (e)=>{
    e.preventDefault()
    dispatch(login({
      name:name,
      email:email,
      password:password,
      loggedIn:true
    }))
  }
  return (
    <div className="login" >
      <form action="" className='login__form' onSubmit={(e)=>handleSubmit(e)}  >
        <h1>login here 👩‍🦰 </h1>
        <input type="name" placeholder='name' value={name} onChange={(e)=>setName(e.target.value)} />
        <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)} />

        <button type="submit" className='submit__btn' >
          submit
        </button>
      </form>
    </div>
  )
}

export default Login