import React from 'react'
import styles from './css/BillingTable.module.css'

const BillingTable = () => {
  return (
    <>
        
        <div className={`${styles["booking-table-scroll-section"]}`}>
            <div className={`${styles["booking-table-wrapper"]}`}>
                <div className={`${styles["booking-table-header-row"]} d-flex d-align-center`}>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Patient name</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Doctor Name</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Paid Via</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Appointment ID</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Received on</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Amount</h5>
                    </span>
                </div>
                <div className={`${styles["booking-table-column"]} d-flex d-align-center`}>
                    <span className={`d-flex d-align-center ${styles["patient-details-column"]}`}>
                        <img src='title-img.png'></img>
                        <h5 className='l-22 f-400'>Wade Warren</h5>
                    </span>
                    <span className={`d-flex d-align-center ${styles["patient-details-column"]}`}>
                        <img src='title-img.png'></img>
                        <h5 className='l-22 f-400'>Guy Hawkins</h5>
                    </span>
                    <span className='d-flex '>
                        <h5 className='l-22 f-400'>Cash</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-400'>66538135</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-400'>01/30/2018 11:44 PM PT</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-400'>$32</h5>
                    </span>
                </div>
            </div>
        </div>
    </>
  )
}

export default BillingTable