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
const MenuBar = () => {
  return (
    <>
      <ul className={`d-flex d-flex-column p-0 m-0 list-style-none ${style["menu-bar-wrapper"]}`}>
        <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]}`}>
          <Dashboard></Dashboard>
          <Link href='/dashboard'>Dashboard</Link>
        </li>
        <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]}`}>
          <Reports></Reports>
          <Link href='/reports'>Reports</Link>
        </li>
        <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]} ${style["active"]}`}>
          <Bookings></Bookings>
          <Link href='/allBookings'>Bookings</Link>
        </li>
        <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]}`}>
          <Patients></Patients>
          <Link href='/newpatient'>My Patients</Link>
        </li>
        <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]}`}>
          <Calendar></Calendar>
          <Link href='/mycalendar'>My Calendar</Link>
        </li>
        <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]}`}>
          <CreateReports></CreateReports>
          <Link href='/medicalreport'>Create Medical Reports</Link>
        </li>
        <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]} `}>
          <Message></Message>
          <Link href='/'>Messages</Link>
        </li>
        <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]}`}>
          <Finance></Finance>
          <Link href='/finances'>Finances</Link>
        </li><li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]}`}>
          <Banner></Banner>
          <Link href='/banner'>Banners</Link>
        </li>
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