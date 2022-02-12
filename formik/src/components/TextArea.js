import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'

const TextArea = (props) => {
  const {label,name,...rest} = props
  return (
    <div className='form-control' >
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} {...rest} as='textarea' />
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default TextArea