
// import { ThemeProvider ,AppBar } from '@material-ui/core'
import React, { Component } from 'react'
import { AppBar ,TextField , RaisedButton,MuiThemeProvider } from 'material-ui'
import styled from 'styled-components'

export class FormUserDetail extends Component {

  continue = (e)=>{
    e.preventDefault()
    this.props.nextStep()
  }
  render() {
    const {values , handleChange} = this.props
    return (
      <MuiThemeProvider>
        <>
          <AppBar title='Enter user details' />
          <TextField 
            hintText='Enter your first name'
            floatingLabelText='First Name'
            onChange={handleChange('firstName')}
            defaultValue={values.firstName}
          />
          <br />
          <TextField 
            hintText='Enter your last name'
            floatingLabelText='Last Name'
            onChange={handleChange('lastName')}
            defaultValue={values.lastName}
          />
          <br />
          <TextField 
            hintText='Enter your email'
            floatingLabelText='Email'
            onChange={handleChange('email')}
            defaultValue={values.email}
          />
          <br />
          <RaisedButton 
            label="Continue"
            primary={true}
            style={styled.button}
            onClick = {this.continue}
          />
        </>
      </MuiThemeProvider>
    )
  }
}

export default FormUserDetail