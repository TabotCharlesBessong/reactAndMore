
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup  from 'yup'
import FormikControl from './FormikControl'

const LoginForm = () => {
  const initialValues = {
    email:'',
    password:''
  }

  const validationSchema = Yup.object({
    email:Yup.string().email('Invalid email format').required('Required Field'),
    password:Yup.string().required('Required Field')
  })

  const handleSubmit = (values)=>{
    console.log(values);
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} handleSubmit={handleSubmit}  >
      {
        formik => {
          return (
            <Form>
              <FormikControl
                control='input'
                type='email'
                label='Email'
                name='email'
              />
              <FormikControl
                control='input'
                type='password'
                label='Password'
                name='password'
              />
              <button type="submit" disabled={!formik.isValid} >
                Login
              </button>
            </Form>
          )
        }
      }
    </Formik>
  )
}

export default LoginForm