
import React , {useState} from 'react'
import axios from 'axios'

import signinImage from '../assets/signup.jpg'

const Auth = () => {
  const [signUp,setSignUp] = useState(false)
  const handleChange = ()=>{

  }
  return (
    <div className='auth__form-container' >
      <div className="auth__form-container_fields">
        <div className="auth__form-container_fields-content">
          <p> { signUp ? 'Sign up' : 'Sign in'  } </p>
          <form onSubmit={()=> console.log('Hello') }>
            { signUp && (
              <div className="auth__form-container_fields-conetent_input">
                <label htmlFor="fullName">Full Name</label>
                <input placeholder='full name' type="text" name='fullname' onChnage={()=> handleChange} required  />
              </div>
            )  }
            <div className="auth__form-container_fields-conetent_input">
                <label htmlFor="userName">User Name</label>
                <input  placeholder='user name' type="text" name='username' onChnage={()=> handleChange} required  />
              </div>
          </form>
        </div>
      </div>

    </div>
  )
}

export default Auth