
import { ErrorMessage, Field } from 'formik'
import TextError from './TextError'
import React from 'react'
import '../styles.css'

const Input = (props) => {
  const {label,name,...rest} = props
  return (
    <div className='form-control'>
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} {...rest} />
      <ErrorMessage name={name} component={ TextError} />
    </div>
  )
}

export default Input