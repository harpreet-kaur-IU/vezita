import React from 'react'
import style from './css/SideBar.module.css'
import Link from 'next/link'
import Dashboard from '../icons/dashboard'
import Reports from '../icons/reports'
import Banner from '../icons/banner'
import Bookings from '../icons/bookings'
import Calendar from '../icons/calendar'
import CreateReports from '../icons/createReports'
import Finance from '../icons/finance'
import Message from '../icons/message'
import Patients from '../icons/patients'
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
        <MenuItem title="My Patients" path="/newpatient" multipath="0"></MenuItem>
        <MenuItem title="My Calendar" path="/mycalendar" multipath="0"></MenuItem>
        <MenuItem title="Create Medical Reports" path="/medicalreport" multipath="0"></MenuItem>
        <MenuItem title="Messages" path="/" multipath="0"></MenuItem>
        <MenuItem title="Finances" path="/finances" multipath="0"></MenuItem>
        {/* <MenuItem title="Banners" path="/banner" multipath="0"></MenuItem> */}
      </ul>

      <div className={`${style["help-wrapper"]}`}>
        <h6 className='cursor-pointer f-400 l-20'>
          <Link href='/helpsupport'>Help & support</Link>
        </h6>
        <h6 className='cursor-pointer f-400 l-20'>Terms & conditions</h6>
      </div>
    </>
  )
}

export default MenuBar