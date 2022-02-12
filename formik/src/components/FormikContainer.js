
import { Form, Formik } from 'formik'
import React from 'react'
import * as Yup from 'yup'
import FormikControl from './FormikControl'

const FormikContainer = () => {

  const initialValues = {
    email:'',
    fname:'',
    lname:'',
  }
  const validationSchema = Yup.object({
    email:Yup.string().required('Required').email('Invalid email format'),
    fname:Yup.string().required('Required'),
    lname:Yup.string().required('Required')
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
              <button type='submit'>Submit</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}

export default FormikContainer