
// import { ThemeProvider ,AppBar } from '@material-ui/core'
import React, { Component } from 'react'
import { AppBar ,TextField , RaisedButton,MuiThemeProvider } from 'material-ui'
import styled from 'styled-components'

export class FormPersonalDetail extends Component {

  continue = (e)=>{
    e.preventDefault()
    this.props.nextStep()
  }
  back = (e)=>{
    e.preventDefault()
    this.props.prevStep()
  }
  render() {
    const {values , handleChange} = this.props
    return (
      <MuiThemeProvider>
        <>
          <AppBar title='Enter Personal details' />
          <TextField 
            hintText='Enter your Occupation'
            floatingLabelText='Occupation'
            onChange={handleChange('occupation')}
            defaultValue={values.occupation}
          />
          <br />
          <TextField 
            hintText='Enter your City name'
            floatingLabelText='city Name'
            onChange={handleChange('city')}
            defaultValue={values.city}
          />
          <br />
          <TextField 
            hintText='What are your root'
            floatingLabelText='Biography'
            onChange={handleChange('bio')}
            defaultValue={values.bio}
          />
          <br />
          <RaisedButton 
            label="Continue"
            primary={true}
            style={styled.button}
            onClick = {this.continue}
          />
          <RaisedButton 
            label="Return"
            secondary={true}
            style={styled.button}
            onClick = {this.back}
          />
        </>
      </MuiThemeProvider>
    )
  }
}

export default FormPersonalDetail