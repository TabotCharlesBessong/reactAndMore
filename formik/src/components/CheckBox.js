
import { ErrorMessage, Field } from 'formik'
import React from 'react'

import '../styles.css'
import TextError from './TextError'

const CheckBox = (props) => {
  const {name,label,options,...rest} = props
  return (
    <div className='form-control' >
      <label htmlFor={name}> {label} </label>
      <Field name={name} id={name} >
        {
          ({field})=>{
            console.log(field)
             return (
               options.map(option =>{
                 return (
                   <React.Fragment key={option.key} className='radio' >
                     <input type='checkbox' id={option.value} {...field} value={option.value} checked={field.value.includes(option.value)}  />
                     <label htmlFor={option.value}> {option.key} </label>
                   </React.Fragment>
                 )
               })
             )
          }
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default CheckBox