
import React from 'react'
import { useState } from 'react'
import {  useChatContext } from 'stream-chat-react'
import {SearchIcon} from '../assets'

const ChanelSearch = () => {
  
  const [query,setQuery] = useState('')
  const [loading,setLoading] = useState(false)
  const getChannels = async (text)=>{
    try {
      // to do : fetch 
    } catch (error) {
      setQuery('')
    }
  } 
  const onSearch = (e)=>{
    e.preventDefault()
    setLoading(true)
    setQuery(e.target.value)
    getChannels(e.target.value)
  }

  return (
    <div className='channel-search__container' >
      <div className="channel-search__input__wrapper">
        <div className="channel-search__input__icon">
          <SearchIcon/>
        </div>
        <input type="text" className="channel-search__input__text" placeholder='search' value={query} onChange={onSearch}  />
      </div>
    </div>
  )
}

export default ChanelSearch