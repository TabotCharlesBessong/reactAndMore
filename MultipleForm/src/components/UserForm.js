
import React, { Component } from 'react'
import Confirm from './Comfirm'
import FormPersonalDetail from './FormPersonalDetail'
import FormUserDetail from './FormUserDetail'
import Success from './Success'

export class UserForm extends Component {
  state = {
    step:1,
    firstName:'',
    lastName:'',
    email:'',
    occupation:'',
    city:'',
    bio:'',
  }

  // proceed to the next step

  nextStep = ()=>{
    const {step} = this.state
    this.setState({
      step:step + 1
    })
  }

  // proceed to the prev step
  prevStep = ()=>{
    const {step} = this.state
    this.setState({
      step:step - 1
    })
  }

  // handle fields changes

  handleChange = (input) => (e) =>{
    this.setState({[input]:e.target.value})
  }
  render() {

    const {step} = this.state 
    const {firstName,lastName,occupation,city,bio, email} = this.state 
    const values = {firstName,lastName,occupation,city,bio, email}

    switch (step) {
      case 1:
        return (
          <FormUserDetail
            nextStep = {this.nextStep}
            handleChange = {this.handleChange}
            values = {values}
          />
        )
      case 2:
        return (
          <FormPersonalDetail 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            handleChange={this.handleChange}
            values={values}
          />
        )
      case 3:
        return (
          <Confirm 
            nextStep={this.nextStep}
            prevStep={this.prevStep}
            // handleChange={this.handleChange}
            values={values}
          />
        )
      case 4:
        return (
          <Success 
            prevStep={this.prevStep}
            values={values}
          />
        )
      default :
        return (
         <h1>Hello word</h1>
        )
    }
  }
}

export default UserForm