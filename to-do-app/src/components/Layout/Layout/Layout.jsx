import React from 'react'
import Footer from "../Footer/Footer"
import { Navigation } from "../Navigation/Navigation"
import SideBar from '../SideBar/SideBar'


const Layout = ({ sideBarOpened, children }) => {
  return (
    <div>

      <Navigation />
      {sideBarOpened && <SideBar />}
      <main>
        {children}
      </main>
      <Footer />
    </div>

  )
}

export default Layout