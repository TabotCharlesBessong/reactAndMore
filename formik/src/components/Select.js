
import { ErrorMessage, Field } from 'formik'
import React from 'react'
import TextError from './TextError'
import '../styles.css'

const Select = (props) => {
  const {name,label,options,...rest} = props
  return (
    <div className='form-control' >
      <label htmlFor={name}>{label}</label>
      <Field name={name} id={name} as='select' {...rest} >
        {
          options.map(option => {
            return (
              <option key={option.value} value={option.value} >
                 {option.key}
              </option>
            )
          })
        }
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  )
}

export default Select