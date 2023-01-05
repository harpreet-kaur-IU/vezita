import React from 'react'
import style from './css/SideBar.module.css'
import Link from 'next/link'
import MenuItem from './MenuItem'
const MenuBar = () => {
  return (
    <>
      <ul className={`d-flex d-flex-column p-0 m-0 list-style-none ${style["menu-bar-wrapper"]}`}>
        {/* <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]}`}>
          <Dashboard></Dashboard>
          <Link href='/dashboard'>Dashboard</Link>
        </li> */}
        <MenuItem title="Dashboard" path="/dashboard" multipath="0"></MenuItem>
        <MenuItem title="Reports" path="/reports" multipath="0"></MenuItem>
        <MenuItem title="Bookings" path="/allBookings" multipath="0"></MenuItem>
        <MenuItem title="My Patients" path="/newpatient" path1="/patientdetails/[id]" path2="/addnewpatient" multipath="1" haspath1="1" haspath2="1"></MenuItem>
        <MenuItem title="My Calendar" path="/mycalendar" multipath="0"></MenuItem>
        <MenuItem title="Create Medical Reports" path="/medicalreport" path1="/prescriptiondetails/[id]" multipath="1" haspath1="1"></MenuItem>
        <MenuItem title="Messages" path="/message" multipath="0"></MenuItem>
        <MenuItem title="Finances" path="/finances" multipath="0"></MenuItem>
        {/* <MenuItem title="Banners" path="/banner" multipath="0"></MenuItem> */}
      </ul>

      <div className={`${style["help-wrapper"]}`}>
        <h6 className='cursor-pointer f-400 l-20'>
          <Link href='/helpsupport'>Help & support</Link>
        </h6>
        <h6 className='cursor-pointer f-400 l-20'>
          <Link href='/tc'>Terms & conditions</Link>
        </h6>
      </div>
    </>
  )
}

export default MenuBar