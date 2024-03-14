import React from 'react'
import { Outlet } from 'react-router-dom'

const FooterRouters = () => {
  return (
    <div>
        <footer>
      <h3>Footer</h3>
        </footer>
      <Outlet/>
    </div>
  )
}

export default FooterRouters
