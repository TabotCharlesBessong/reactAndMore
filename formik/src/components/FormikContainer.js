
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {
   
  const dropDownOptions = [
    {key:'Select an option',value:''},
    {key:'Option 1',value:'option1'},
    {key:'Option 2',value:'option2'},
    {key:'Option 3',value:'option3'}
  ]

  const radioOptions = [
    {key:'Option 1',value:'rOption1'},
    {key:'Option 2',value:'rOption2'},
    {key:'Option 3',value:'rOption3'},
  ]
  
  const initialValues = {
    email:'',
    fName:'',
    lName:'',
    comments:'',
    selecOption:'',
    radioOption:''
  }
  const validationSchema = Yup.object({
    email:Yup.string().required('Required').email('Invalid email format'),
    fName:Yup.string().required('Required'),
    lName:Yup.string().required('Required'),
    comments:Yup.string().required('Required'),
    selectOption:Yup.string().required('Required'),
    radioOption:Yup.string().required('Required'),
  })
  const onSubmit = (values) => {
    console.log(values);
  }
  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {
          formik => (
            <Form>
          
              <FormikControl control='input' type='text'label="First Name" name="fName" />
              <FormikControl control='input' type='text'label="Last Name" name="lName" />
              <FormikControl control='input' type='email' label="Email" name="email" />
              <FormikControl control='textarea' type='textarea' label='Comments' name='comments' />
              <FormikControl 
                control='select'
                label='Select a topic'
                name='selectOption'
                options={dropDownOptions}
              />
              <FormikControl
                control='radio'
                label='Radio Topic'
                name='radioOption'
                options={radioOptions}
              />
              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default FormikContainer