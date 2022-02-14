
// import { ThemeProvider ,AppBar } from '@material-ui/core'
import React, { Component } from 'react'
import { AppBar ,List ,ListItem,  RaisedButton,MuiThemeProvider } from 'material-ui'
import styled from 'styled-components'

export class Confirm extends Component {

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
          <AppBar title='Confirm User Data' />
          <List>
            <ListItem 
              primaryText="First Name"
              secondaryText={ firstName }
            />
            <ListItem 
              primaryText="Last Name"
              secondaryText={ lastName }
            />
            <ListItem 
              primaryText="Email"
              secondaryText={ email }
            />
            <ListItem 
              primaryText="Occupation"
              secondaryText={ occupation }
            />
            <ListItem 
              primaryText="City Name"
              secondaryText={ city }
            />
            <ListItem 
              primaryText="About You"
              secondaryText={ bio }
            />
          </List>
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

export default Confirm