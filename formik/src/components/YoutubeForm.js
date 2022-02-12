
import React from 'react'
import { Formik , Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comment:'',
  address:''
}

const onSubmit = values => {
  console.log('Form data', values)
}


const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required')
})

function YoutubeForm () {

  return (
    <Formik 
    initialValues={initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
     >

      <Form >
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field  placeholder='Your Name'
            type='text'  id='name'    name='name'
          />
         <ErrorMessage name='name' />
        </div>
  
        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <Field placeholder='Your Email'
            type='email'      id='email'     name='email'
          />
        <ErrorMessage name='email' />
        </div>
  
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field placeholder='Your Channel Name'
            type='text' id='channel'   name='channel'
          />
        <ErrorMessage name='channel' />
        </div>
        
        <div className="form-control">
          <label htmlFor="comment">Comment</label>
          <Field as='textarea' id='comment' name='comment' placeholder='Your Comment  here' />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <Field  name='address' id='address' >
            {
              (props)=>{
                const {filed,form,meta} = props
                return <div className="form-control">
                 <input type='text' id='address' 
                 {...filed} />
                {meta.touched && meta.error ? <div className="">
                  {meta.error}
                </div>
                : null
                 }
                </div>
              }
            }
          </Field>
        </div>
        <button type='submit'>Submit</button>
      </Form>
    </Formik>

  )
}

export default YoutubeForm