import React from 'react'
import DataBackground from '../DataBackground'
import "./Inbox.css"


const Inbox = () => {
  return (
    <div id='main-right'>
      <div id='main-top'>
        <DataBackground />
      </div>
      <div className='main-inbox'>
        <div className='main-inbox-left'>
        Text Area
        </div>
        <div className='main-inbox-right'>
        out area
        </div>
      </div>
      
    </div>
  )
}

export default Inbox
