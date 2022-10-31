import React, { useState } from 'react'
import styles from './css/BookingTable.module.css'
import Link from 'next/link'
const BookingTable = () => {
    const[status,setStatus] = useState('0');

    const declineHandler = () =>{
        setStatus('decline');
    }
    const acceptHandler = () =>{
        setStatus('accept');
    }
    
  return (
    <div className={`${styles["booking-table-scroll-section"]}`}>
        <div className={`${styles["booking-table-wrapper"]}`}>
            <div className={`${styles["booking-table-header-row"]} d-flex d-align-center`}>
                <span className='d-flex'>
                    <h5 className='l-22 f-500'>Patient name</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-500'>Day</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-500'>Time</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-500'>Consultation type</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-500'>No. of consultations</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-500'>Status</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-500'>View details</h5>
                </span>
            </div>
            <div className={`${styles["booking-table-column"]} d-flex d-align-center`}>
                <span className={`d-flex d-align-center ${styles["patient-details-column"]}`}>
                    <img src='title-img.png'></img>
                    <h5 className='l-22 f-400'>Wade Warren</h5>
                </span>
                <span className='d-flex '>
                    <h5 className='l-22 f-400'>Tomorrow, 12th Feb, 2022</h5>
                </span>
                <span className='d-flex '>
                    <h5 className='l-22 f-400'>2:00 PM</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-400'>Video call</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-400'>12</h5>
                </span>
                <span className={`f-500 d-flex ${styles["status-decline-text"]}`}>
                    <h5 className='l-22 f-400'>DECLINED</h5>
                </span>
                <span className={`cursor-pointer d-flex d-justify-center ${styles["column-arrow"]}`}>
                    <Link href="/choose"><img src='arrow.png'></img></Link>
                </span>
            </div>
            <div className={`${styles["booking-table-column"]} ${styles["booking-table-column-data"]} d-flex d-align-center`}>
            <span className={`d-flex d-align-center ${styles["patient-details-column"]}`}>
                    <img src='title-img.png'></img>
                    <h5 className='l-22 f-400'>Wade Warren</h5>
                </span>
                <span className='d-flex '>
                    <h5 className='l-22 f-400'>Tomorrow, 12th Feb, 2022</h5>
                </span>
                <span className='d-flex '>
                    <h5 className='l-22 f-400'>2:00 PM</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-400'>Video call</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-400'>12</h5>
                </span>
                <span className='d-flex'>
                    {status == '0' &&
                        <>
                            <div className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["status-btn"]}`} onClick={declineHandler}>
                                <img src='cross.png'></img>
                                Decline
                            </div>
                            <div className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["status-btn-green"]}`} onClick={acceptHandler}>
                                <img src='tick.png'></img>
                                Accept
                            </div>
                        </>
                    }
                    {status === "decline" &&
                        <span className={`f-500 d-flex ${styles["status-decline-text"]}`}>DECLINED</span>
                    }
                    {status === "accept" &&
                        <span className={`f-500 d-flex ${styles["status-accept-text"]}`}>ACCEPTED</span>
                    }
                </span>
                <span className={`cursor-pointer d-flex d-justify-center ${styles["column-arrow"]}`}>
                    <Link href="/choose"><img src='arrow.png'></img></Link>
                </span>
            </div>
            <div className={`${styles["booking-table-column"]} d-flex d-align-center`}>
            <span className={`d-flex d-align-center ${styles["patient-details-column"]}`}>
                    <img src='title-img.png'></img>
                    <h5 className='l-22 f-400'>Wade Warren</h5>
                </span>
                <span className='d-flex '>
                    <h5 className='l-22 f-400'>Tomorrow, 12th Feb, 2022</h5>
                </span>
                <span className='d-flex '>
                    <h5 className='l-22 f-400'>2:00 PM</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-400'>Video call</h5>
                </span>
                <span className='d-flex'>
                    <h5 className='l-22 f-400'>12</h5>
                </span>
                <span className={`f-500 d-flex ${styles["status-noshow-text"]}`}>
                    <h5 className='l-22 f-400'>DECLINED</h5>
                </span>
                <span className={`cursor-pointer d-flex d-justify-center ${styles["column-arrow"]}`}>
                    <Link href="/choose"><img src='arrow.png'></img></Link>
                </span>
            </div>
        </div>
    </div>
  )
}

export default BookingTable