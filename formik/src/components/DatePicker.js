
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import DataView from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import TextError from './TextError'

const DatePicker = (props) => {
  const {name,label,...rest} = props
  return (
    <div className='form-control' >
      <label htmlFor={name}>{label}</label>
      <Field name={name} >
         {
           ({form,field})=>{
             const {setFieldValue} = form 
             const {value} = field 
             return <DataView 
             id={name} 
             {...field} 
             {...rest} 
             selected={value} 
             onChange={(val)=> setFieldValue(name,val) } />
           }
         }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default DatePicker