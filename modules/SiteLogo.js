import React from 'react'
import style from './css/SideBar.module.css'
const SiteLogo = () => {
  return (
    <div className={`${style["sidebar-site-logo"]}`}>
      <img src='site-logo.png'></img>
  </div>
  )
}

export default SiteLogo