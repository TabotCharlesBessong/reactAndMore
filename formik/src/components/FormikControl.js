
import React from 'react'
import CheckBox from './CheckBox'
import DatePicker from './DatePicker'
import Input from './Input'
import Radio from './Radio'
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
      return <Radio {...rest}/>
    case 'checkBox':
      return <CheckBox {...rest} />
    case 'date':
      return <DatePicker {...rest} />
    default:
      return null

  }
  return (
    <div>FormikControl</div>
  )
}

export default FormikControl