import React from 'react'
import styles from './css/partner.module.css'
import Link from 'next/link'
export default function PartnerBarCalendar(props) {
    return (
      <>
        <div className={`${styles["bar"]}`}>
            <span >{props.children}</span>
        </div>
      
        <div className={`${styles["calendar-bar"]} d-flex d-flex-wrap d-justify-center p-relative`}>
            <Link href="/calendar">
              <a className={`${styles["calendar-back-icon"]}`} >
              <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 2L2 9.50006L9 17" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M2.0293 9.55029H16.8134" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
              </svg>
            </a></Link>
            <span className='col-12'>{props.children}</span>
        </div>
      </>
    )
}
