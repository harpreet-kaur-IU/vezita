import React from 'react'
import SiteLogo from './SiteLogo'
import MenuBar from './MenuBar'
import style from './css/SideBar.module.css'
const Sidebar = () => {
  return (
    <div className={`${style["sidebar-wrapper"]}`} id="sidebar-wrapper">
        <SiteLogo></SiteLogo>
        <MenuBar></MenuBar>
    </div>
  )
}

export default Sidebar