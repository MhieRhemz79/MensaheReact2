import React from 'react'
import "./ControlPanel.css"
import reactLogo from "./images/avatar.png"
import { Link } from 'react-router-dom'

const ControlPanel = () => {
  return (
    <div className='main-left'>
      <div className='main-left-1' >
      <img src={reactLogo} alt="react logo" />
      </div>
      <div className='main-left-2' >
      <button className='dashboard'><Link to="/">Dashboard</Link></button>
      <button><Link to="statistics">Statistics</Link></button>
      <button><Link to="support">Support</Link></button>
      <button><Link to="inbox">Inbox</Link></button>
      <button><Link to="goals">Goals</Link></button>
      </div>
      <div className='main-left-3'>
      <button>Log OUt</button>
      </div>
    </div>
  )
}

export default ControlPanel
