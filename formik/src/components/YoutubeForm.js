
import React from 'react'
import { Formik , Form, Field, ErrorMessage, FieldArray, FastField } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'
import { useState } from 'react'

const savedValues = {
  name: 'Charles',
  email: 'me@.com',
  channel: 'abx',
  comment:'iou',
  address:'buea',
  social:{
    facebook:'',
    twitter:''
  },
  phoneNumbers:['',''],
  phNumbers: ['']
}

const initialValues = {
  name: '',
  email: '',
  channel: '',
  comment:'',
  address:'',
  social:{
    facebook:'',
    twitter:''
  },
  phoneNumbers:['',''],
  phNumbers: ['']
}

const onSubmit = (values,onSubmitProps) => {
  console.log('Form data', values , onSubmitProps)
  onSubmitProps.setSubmitting(false)
  onSubmitProps.resetForm()
}


const validationSchema = Yup.object({
  name: Yup.string().required('Required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Required'),
  channel: Yup.string().required('Required'),
  // comment:Yup.string().required('Required')
})

const validateComments = value => {
  let error 
  if(!value) {
    error ='Required'
  }
  return error
}

function YoutubeForm () {

  const [formValues,setFormValues] = useState(null)

  return (
    <Formik 
    initialValues={ formValues || initialValues}
    validationSchema={validationSchema}
    onSubmit={onSubmit}
    // validateOnChange={false} 
    // validateOnBlur={false}
    // validateOnMount
    enableReinitialize
     >
     {
       formik => {
         console.log(formik)
         return (
    
          <Form >
        <div className='form-control'>
          <label htmlFor='name'>Name</label>
          <Field  placeholder='Your Name'
            type='text'  id='name'    name='name'
          />
         <ErrorMessage name='name' component={TextError} />
        </div>
  
        <div className='form-control'>
          <label htmlFor='email'>E-mail</label>
          <Field placeholder='Your Email'
            type='email'      id='email'     name='email'
          />
        <ErrorMessage name='email'  >
          {
            (errorMsg)=>
              <div className="error">
                {errorMsg}
              </div>
            
          }
        </ErrorMessage>
        </div>
  
        <div className='form-control'>
          <label htmlFor='channel'>Channel</label>
          <Field placeholder='Your Channel Name'
            type='text' id='channel'   name='channel'
          />
        <ErrorMessage name='channel' component={TextError} />
        </div>
        
        <div className="form-control">
          <label htmlFor="comment">Comment</label>
          <Field as='textarea' id='comment' name='comment' placeholder='Your Comment  here' validate={validateComments}  />
          <ErrorMessage name='comment' component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="address">Address</label>
          <FastField  name='address' id='address' >
            {
              (props)=>{
                {/* console.log(FileReader) */}
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
          </FastField>
        </div>

        <div className="form-control">
          <label htmlFor="facebook">Facebook</label>
          <Field type='text' id='facebook' name='social.facebook' />
        </div>

        <div className="form-control">
           <label htmlFor="twitter">twitter</label>
           <Field type='text' id='twitter' name='social.twitter' />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh">primary phone number</label>
          <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
        </div>

        <div className="form-control">
          <label htmlFor="secondaryPh">secondary phone number</label>
          <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
      </div>

      <div className="form-control">
        <label htmlFor="">List of Phone Numbers</label>
        <FieldArray name ='phNumbers' >
          {
            (fieldArrayProps)=>{
             {/* console.log(fieldArrayProps) */}
             const {push,remove,form} = fieldArrayProps 
             const {values} = form 
             const {phNumbers} = values
             console.log('form errors',form.errors)
             return (
               <div>
                 {
                   phNumbers.map((item,index)=> (
                     <div key={index}>
                       <Field name={`phNumbers[${index}]`} />
                       {
                         index > 0 &&  <button type='button' onClick={() => remove(index)} > - </button>
                       }
                       
                       <button type='button' onClick={()=> push('')} > + </button>
                     </div>
                   ))
                 }
               </div>
             )
              
            }
          }
        </FieldArray>
      </div>

        {/* <button type='button' onClick={()=> formik.validateField('comment')} >Validate comments</button> */}
        {/* <button type='button' onClick={()=> formik.validateForm()} >Validate all</button> */}
        {/* <button type='button' onClick={()=> formik.setFieldTouched('comment')} >Visits comments</button> */}
        {/* <button type='button' onClick={()=> formik.setTouched({ */}
          {/* // name:true ,
          // email:true,
          // channel:true,
          // comment:true
        // })} >Visits all</button> */}
        
        <button  type='button' onClick={()=> setFormValues(savedValues) } >
          Load saved Data
        </button>
        {/* <button type='reset'> */}
          {/* Reset */}
        {/* </button> */}
        <button disabled={!formik.isValid || formik.isSubmitting} type='submit'>Submit</button>
          </Form>

           )
        }
      }
  </Formik>

  )
}

export default YoutubeForm