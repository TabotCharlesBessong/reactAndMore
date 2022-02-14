
// import { ThemeProvider ,AppBar } from '@material-ui/core'
import React, { Component } from 'react'
import { AppBar ,List ,ListItem,  RaisedButton,MuiThemeProvider } from 'material-ui'
import styled from 'styled-components'

export class Success extends Component {

  continue = (e)=>{
    e.preventDefault()
    this.props.nextStep()
  }

  // PROCESS FORM 
  back = (e)=>{
    e.preventDefault()
    this.props.prevStep()
  }
  render() {
    const { values :{firstName,email,lastName,occupation,city,bio} } = this.props
    return (
      <MuiThemeProvider>
        <>
          <AppBar title='Form Suucesfully added ' />
          <h1>Thank for your submission</h1>
          <p>You Mr {firstName} {lastName} will get an email to comfirm your account creation</p>
          <br />
        </>
      </MuiThemeProvider>
    )
  }
}

export default Success