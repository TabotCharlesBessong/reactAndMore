
import React from 'react'
import {Facebook, GitHub} from '@material-ui/icons'
import {FcGoogle} from 'react-icons/fc'

const Login = () => {
  return (
    <div className='login' >
      <h1 className="loginTitle">
        choose your login method
      </h1>
      <div className="wrapper">
        <div className="left">
           <div className="login-button">
            <FcGoogle className='icon google' />
           </div>
          <div className="login-button">
             {/* <Google className='loginIcon'  /> */}
            <Facebook className='icon facebook'  />
            </div>
          <div className="login-button">
            <GitHub className='icon github'  />
          </div>
        </div>
        <div className="circle">
          <div className="line" />
          <div className="or">
            or
          </div>
        </div>
        <div className="right">
          <input type="text" placeholder='username' />
          <input type="password" placeholder='passwprd' />
          <button className="submit">
            submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login