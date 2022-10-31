import React, { useState } from 'react'
import Header from './Header'
import styles from './css/BookingDetails.module.css'
import Link from 'next/link'
const BookingDetailsChoose = () => {

    const [activeTab, setActiveTab] = useState("tab1");

    const handleClick = (e) =>{
        setActiveTab(e.target.id);
    }
  return (
    <>
        <Header title="Bookings Details"></Header>
        <div className={`d-flex ${styles["wrapper"]}`}>
            <div className={`col-8 ${styles["left-column"]}`}>
                <div className={`bg-teal-1 ${styles["left-col-video"]}`}>
                    <div className={`d-flex d-justify-space-between ${styles["video-appointment-wrapper"]}`}>
                        <div className={`d-flex d-flex-column ${styles["video-appointment-content"]}`}>
                            <h6 className='text-secondary l-20 f-500'>Video appointment scheduled at </h6>
                            <h4 className='text-teal-5 l-26 f-500'>Thursday, 15th Feb, 2022 at 12:30 PM</h4>
                        </div>
                        <button className={`bg-teal-5 cursor-pointer d-flex d-align-center d-justify-center ${styles["video-app-button"]}`}>
                            <img src='video-app.png'></img>
                            <h6 className='l-20 f-600'>START VIDEO CALL</h6>
                        </button>
                    </div>
                </div>
                <div className={`bg-grey7 ${styles["left-col-1"]}`}>
                    <div className={`d-flex d-align-center d-justify-space-between ${styles["status-wrapper"]}`}>
                        <h3 className='text-secondary l-28 f-500'>Do you want to accept the booking?</h3>
                        <div className='d-flex'>
                            <button className={`cursor-pointer d-flex d-justify-center ${styles["status-button-decline"]}`}>
                                <img src='cross.png'></img>
                                DECLINE
                            </button>
                            <button className={`cursor-pointer d-flex d-justify-center ${styles["status-button-accept"]}`}>
                                <img src='tick.png'></img>
                                ACCEPT
                            </button>
                        </div>
                    </div>

                    <div className={`d-flex d-flex-column ${styles['booking-details']}`}>
                        <div className='d-flex col-12'>
                            <h5 className='text-secondary col-6 f-400 l-22'>Booked on</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>12th Feb, 2022</h5>
                        </div>
                        <div className='d-flex col-12'>
                            <h5 className='text-secondary col-6 f-400 l-22'>Payment status</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>Paid Online via Paypal, $20</h5>
                        </div>
                        <div className='d-flex col-12'>
                            <h5 className='text-secondary col-6 f-400 l-22'>Appointment no</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>2340986746</h5>
                        </div>
                    </div>

                    <div className={`text-dark-blue ${styles["note-wrapper"]}`}>
                        <h5 className='f-400 l-22'><span className='f-600'>Note:</span> If you decline or cancel the booked appointment, the user will get a refund on the payment mode he chose.</h5>
                    </div>
                </div>
                <div className={`bg-grey7 ${styles["left-col-2"]}`}>
                    <div className={`d-flex d-align-center d-justify-space-between ${styles["patient-details-wrapper"]}`}>
                        <div className={`d-flex  d-align-center ${styles["patient-details"]}`}>
                            <img className={`${styles["patient-img"]}`} src="title-img.png"></img>
                            <div className='d-flex d-flex-column'>
                                <h5>Brooklyn Simmons</h5>
                                <h5>ID: 93894</h5>
                            </div>
                        </div>
                        <div className={`d-flex ${styles["icons-wrapper"]}`}>
                            <div className={`${styles["call-icon"]}`}>
                                <img src='phone.png'></img>
                            </div>
                            <div className={`${styles["mail-icon"]}`}>
                                <img src='mail.png'></img>
                            </div>
                            <div className={`${styles["message-icon"]}`}>
                                <img src='chat.png'></img>
                            </div>
                        </div>
                    </div>

                    <div className={`d-flex ${styles["patient-age-details"]}`}>
                        <div className={`col-4 d-flex d-flex-column d-align-center ${styles["patient-age-details-col"]}`}>
                            <h6 className='text-secondary l-20 f-500'>Age</h6>
                            <h5 className='text-grey-2 l-22 f-400'>28</h5>
                        </div>
                        <div className={`col-4 d-flex d-flex-column d-align-center ${styles["patient-age-details-col"]}`}>
                            <h6 className='text-secondary l-20 f-500'>Gender</h6>
                            <h5 className='text-grey-2 l-22 f-400'>Female</h5>
                        </div>
                        <div className={`col-4 d-flex d-flex-column d-align-center ${styles["patient-age-details-col"]}`}>
                            <h6 className='text-secondary l-20 f-500'>Marital status</h6>
                            <h5 className='text-grey-2 l-22 f-400'>Single</h5>
                        </div>
                        <div className={`col-4 d-flex d-flex-column d-align-center`}>
                            <h6 className='text-secondary l-20 f-500'>Blood Group</h6>
                            <h5 className='text-grey-2 l-22 f-400'>O+</h5>
                        </div>
                    </div>
                </div>
                <div className={`bg-grey7 ${styles["left-col-3"]}`}>
                    <h3 className='text-secondary f-500 l-28'>More details</h3>
                    <div>
                        <div className={`d-flex col-12 ${styles["more-details-row"]}`}>
                            <h5 className='text-secondary col-6 f-400 l-22'>Medical conditons</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>Migrane, Blood Pressure</h5>
                        </div>
                        <div className={`d-flex col-12 ${styles["more-details-row"]}`}>
                            <h5 className='text-secondary col-6 f-400 l-22'>Allergies</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>Soy, Tomato</h5>
                        </div>
                        <div className={`d-flex col-12 ${styles["more-details-row"]}`}>
                            <h5 className='text-secondary col-6 f-400 l-22'>Current Medications</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>Antihistamics 220, Cartienain Hipnic Forte</h5>
                        </div>
                        <div className={`d-flex col-12 ${styles["more-details-row"]}`}>
                            <h5 className='text-secondary col-6 f-400 l-22'>Past Medications</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>N/A</h5>
                        </div>
                        <div className={`d-flex col-12 ${styles["more-details-row"]}`}>
                            <h5 className='text-secondary col-6 f-400 l-22'>Surgeries</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>N/A</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`col-4 ${styles["right-column"]}`}>
                <div className={`bg-grey7 ${styles["right-col-1"]}`}>
                    <h3 className='f-500 l-28 text-secondary'>Previous appointments <span className='text-primary'>(4)</span></h3>
                    <div className={`${styles["previous-appointments-list"]}`}>
                        <div className={`d-flex ${styles["previousa-appoi-single-item"]}`}>
                            <div className={`d-flex d-align-center bg-purple-2 ${styles["appointment-icons-wrapper"]}`}>
                                <img src="clinic-appointment.png"></img>
                            </div>
                            <div>
                                <h4 className='f-500 l-26 text-secondary'>Clinical Appointment</h4>
                                <h5 className='text-grey-3 f-400 l-22'>18 Feb, 2022</h5>
                            </div>
                        </div>
                        <div className={`d-flex ${styles["previousa-appoi-single-item"]}`}>
                            <div className={`d-flex d-align-center bg-teal-2 ${styles["appointment-icons-wrapper"]}`}>
                                <img src="video-appointment.png"></img>
                            </div>
                            <div>
                                <h4 className='f-500 l-26 text-secondary'>Video Appointment</h4>
                                <h5 className='text-grey-3 f-400 l-22'>18 Feb, 2022</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={`bg-grey7 ${styles["right-col-2"]}`}>
                    <h3 className={`f-500 l-28 ${styles["docs-title"]}`}>Documents</h3>
                    <div className={`d-flex ${styles["tabs-wrapper"]}`}>
                        <h3 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab1" ? styles["active"] : ""} `}>By Doctor</h3>
                        <h3 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab2" ? styles["active"] : ""}`} >By Patient</h3>
                    </div>
                    {activeTab == "tab1" &&
                        <div className={`d-flex d-align-center d-justify-space-between ${styles["tabs-content-wrapper"]}`}>
                            <div className={`d-flex ${styles["docs-details-and-icon"]}`}>
                                <img src='files-icon.png'></img>
                                <div className={`d-flex d-flex-column ${styles["docs-details-wrapper"]}`}>
                                    <h4 className='l-26 f-500 text-secondary'>CT Scan</h4>
                                    <h5 className='l-22 f-400 text-grey-3'>Report.pdf</h5>
                                    <h6 className='l-20 f-500 text-secondary'>Uploaded by doctor on 12-02-22</h6>
                                </div>
                            </div>
                            <div className={`d-flex ${styles["docs-view-and-download"]}`}>
                                <img className='cursor-pointer' src='view-icon.png'></img>
                                <img className='cursor-pointer' src='download-icon.png'></img>
                            </div>
                        </div>
                    }
                     {activeTab == "tab2" &&
                        <div className={`d-flex d-align-center d-justify-space-between ${styles["tabs-content-wrapper"]}`}>
                            <div className={`d-flex ${styles["docs-details-and-icon"]}`}>
                                <img src='files-icon.png'></img>
                                <div className={`d-flex d-flex-column ${styles["docs-details-wrapper"]}`}>
                                    <h4 className='l-26 f-500 text-secondary'>CT Scan</h4>
                                    <h5 className='l-22 f-400 text-grey-3'>Report.pdf</h5>
                                    <h6 className='l-20 f-500 text-secondary'>Uploaded by patient on 12-02-22</h6>
                                </div>
                            </div>
                            <div className={`d-flex ${styles["docs-view-and-download"]}`}>
                                <img className='cursor-pointer' src='view-icon.png'></img>
                                <img className='cursor-pointer' src='download-icon.png'></img>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </div>
    </>
  )
}

export default BookingDetailsChoose