import React from 'react'
import { Outlet } from 'react-router-dom'
import ControlPanel from '../../ControlPanel'

const Layout = () => {
  return (
    <>
      <ControlPanel/>
      <main>
        <Outlet />
      </main>
    </>
  )
}

export default Layout
