
import React from 'react'
import Input from './Input'
import Select from './Select'
import TextArea from './TextArea'

const FormikControl = (props) => {
  const {control,...rest} = props

  switch(control){
    case 'input':
      return <Input {...rest} />
    case 'textarea':
       return <TextArea {...rest} />
    case 'select':
      return <Select {...rest} />
    case 'radio':
    case 'checkbox':
    case 'date':
    default:
      return null

  }
  return (
    <div>FormikControl</div>
  )
}

export default FormikControl