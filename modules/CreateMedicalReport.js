import React from 'react'
import styles from './css/CreateMedicalReport.module.css'
import Link from 'next/link'
import Header from './Header'
import {useRouter} from 'next/router'
const CreateMedicalReport = () => {
    const router = useRouter();
    const prescriptionHandler = () =>{
        router.push('/prescriptiondetails')
    }
  return (
    <>
        <Header title="Create medical reports"></Header>
        <div className={`${styles["wrapper"]}`}>
            <h3 className='l-28 f-500 text-primary'>Today, 15th Feb, 2022</h3>
            <div className={`${styles["booking-table-scroll-section"]}`}>
                <div className={`${styles["booking-table-wrapper"]}`}>
                    <div className={`${styles["booking-table-header-row"]} d-flex d-align-center`}>
                        <span className='d-flex'>
                            <h5 className='l-22 f-500'>Patient name</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-500'>Consultation</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-500'>Booking Type</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-500'>Booked Slot</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-500'>Prescription status</h5>
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
                        <span className='d-flex'>
                            <h5 className='l-22 f-400'>Stroke treatment</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-400'>In-Clinic Consultation</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-400'>4:00 PM</h5>
                        </span>
                        <span className={`d-flex ${styles['prescription-btn']}`}>
                            <button className='cursor-pointer d-flex'>
                                <h6 className='text-grey-2 l-20 f-600'>Prescribe</h6>
                                <img src='prescribe-edit.png'></img>
                            </button>
                        </span>
                        <span className={`cursor-pointer d-flex d-justify-center ${styles["column-arrow"]}`}>
                            <Link href="/medicalrecord"><img src='arrow.png'></img></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${styles["wrapper"]}`}>
            <h3 className='l-28 f-500 text-grey-2'>Yesterday, 14th Feb, 2022</h3>
            <div className={`${styles["booking-table-scroll-section"]}`}>
                <div className={`${styles["booking-table-wrapper"]}`}>
                    <div className={`${styles["booking-table-header-row"]} d-flex d-align-center`}>
                        <span className='d-flex'>
                            <h5 className='l-22 f-500'>Patient name</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-500'>Consultation</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-500'>Booking Type</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-500'>Booked Slot</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-500'>Prescription status</h5>
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
                        <span className='d-flex'>
                            <h5 className='l-22 f-400'>Stroke treatment</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-400'>In-Clinic Consultation</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-400'>4:00 PM</h5>
                        </span>
                        <span className={`d-flex ${styles['prescription-btn-green']}`}>
                            <button onClick={prescriptionHandler} className='cursor-pointer d-flex'>
                                <h6 className='text-grey-2 l-20 f-600'>Prescribe</h6>
                                <img src='prescribe-tick.png'></img>
                            </button>
                        </span>
                        <span className={`cursor-pointer d-flex d-justify-center ${styles["column-arrow"]}`}>
                            <Link href="/medicalrecord"><img src='arrow.png'></img></Link>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default CreateMedicalReport