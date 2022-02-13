
import { Form, Formik, validateYupSchema } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const RegistrationForm = () => {

  const options = [
    {key:'Email',value:'emailloc'},
    {key:'Telephone',value:'telephonemoc'}
  ]

  const initialValues = {
    email:'',
    password:'',
    confirmPassword:'',
    modeOfContact:'',
    phone:''
  }

  const validationSchema = Yup.object({
    email:Yup.string().email('Invalid email format').required('Required field'),
    password:Yup.string().required('Required field'),
    confirmPassword:Yup.string().oneOf([Yup.ref('password'),''],'Passwords must match'),
    modeOfContact:Yup.string().required('Required'),
    phone:Yup.string().when('modeOfContact',{
      is:'telephonemoc',
      then:Yup.string().required('Required field')
    })
  })

  const handelSubmit = (value)=>{
    console.log(value);
  }
  return (
    <Formik initialValues={initialValues} validationSchema={validateYupSchema} handelSubmit={handelSubmit} >
     {
       formik => {
         return (
           <Form>
             <FormikControl
               control='input'
               type='email'
               label='Email Address'
               name='email'
             />
              <FormikControl
                 control='input'
                 type='password'
                 label='Password'
                 name='password'
               />
                <FormikControl
                   control='input'
                   type='password'
                   label='Confirm Password'
                   name='confirmPassword'
                 />
                  <FormikControl
                     control='radio'
                    //  type='email'
                     label='Mode of contact'
                     name='modeOfContact'
                     options={options}
                   />
                    <FormikControl
                       control='input'
                       type='email'
                       label='Phone Number'
                       name='phone'
                     />
           </Form>
         )
       }
     }
    </Formik>
  )
}

export default RegistrationForm