
import React from 'react'
import { AddChannel } from '../assets'

const ThemeChannelList = ({children , error=false,loading,type}) => {

  if(error){
    return type === 'team' ? (
    <div className="team-channel-list">
      <p className="team-channel-list__message">
        connection error plaease wait a moment and try again 
      </p>
    </div>
    ) : null
  }

  if(loading){
    return (
      <div className="team-channel-list">
      <p className="team-channel-list__message loading">
         {type = 'team' ? 'Channel' : 'Messages'} loading... 
      </p>
    </div>
    )
  }
  return (
    <div className='team-channel-list' >
      <div className="team-channel-list__header">
        <p className="team-channel-list__header__title">
          {type = 'team' ? 'Channel' : 'Direct Messages'} 
        </p>
        {/* Button and channel  */}
      </div>
      {children}
    </div>
  )
}

export default ThemeChannelList