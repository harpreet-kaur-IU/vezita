import React from 'react'
import Header from './Header'
import styles from './css/BookingDetails.module.css'
import styles2 from './css/TableTemplate.module.css'
import Link from 'next/Link'
const CreateRecord = () => {

  return (
    <>
      <Header title="Create a medical record"></Header>
      <div className={`d-flex ${styles["wrapper"]}`} style={{paddingBottom:"18px"}}>
          <div className={`col-12 ${styles["left-column"]}`} style={{marginRight: "0px"}}>
              <div className={`bg-grey-7 ${styles["left-col-2"]}`} style={{marginTop:"0px"}}>
                  <div className={`d-flex d-align-center d-justify-space-between ${styles["patient-details-wrapper"]}`} style={{paddingBottom:"20px"}}>
                      <div className={`d-flex d-align-center ${styles["patient-details"]}`}>
                          <img className={`${styles["patient-img"]}`} src="title-img.png"></img>
                          <div className='d-flex d-flex-column'>
                              <h5>Brooklyn Simmons</h5>
                              <h5>ID: 93894</h5>
                          </div>
                      </div>
                      <div className={`d-flex ${styles["icons-wrapper"]}`} style={{gap:"28px"}}>
                          <div className={` cursor-pointer ${styles["call-icon"]}`}>
                              <img src='phone.png'></img>
                          </div>
                          <div className={` cursor-pointer ${styles["mail-icon"]}`}>
                              <img src='mail.png'></img>
                          </div>
                          <div className={` cursor-pointer ${styles["message-icon"]}`}>
                              <img src='chat.png'></img>
                          </div>
                          <div className={`d-flex d-align-center cursor-pointer ${styles["view-details-btn"]}`}>
                              <h5 className='l-22 f-500'>View all details</h5>
                              <img src='arrow.png'></img>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      {/* Appintment Details */}
      <div className={`d-flex d-align-center d-justify-space-between ${styles["wrapper-appointment-details"]}`}>
        <div className={`d-flex d-flex-column ${styles["appointment-details"]}`}>
          <h3 className='f-500 l-28 text-dark-blue'>Today, 15th Feb, 2022</h3>
          <h5 className='f-400 l-22'>Appointment ID:<span className='f-500'> 89341908</span></h5>
        </div>
        <button className={`d-flex d-align-center ${styles["appointment-send-btn"]}`}>
          <h5 className='f-500 l-22 text-dark-blue'><Link href="/prescriptiondetails">Send</Link></h5>
          <img src="send-icon.png"></img>
        </button>
      </div>
      {/* Table and template */}
      <div className={`d-flex ${styles2["wrapper"]}`}>
        <div className={`col-8 ${styles2["booking-table-scroll-section"]}`}>
          <div className={`${styles2["booking-table-wrapper"]}`}>
            <div className={`${styles2["booking-table-header-row"]} d-flex d-align-center`}>
                <span className='d-flex'>
                  <h5 className='l-22 f-500'>Drug</h5>
                </span>
                <span className='d-flex'>
                  <h5 className='l-22 f-500'>Frequency</h5>
                </span>
                <span className='d-flex'>
                  <h5 className='l-22 f-500'>Duration</h5>
                </span>
                <span className='d-flex'>
                  <h5 className='l-22 f-500'>Instructions</h5>
                </span>
            </div>
            <div className={`${styles2["booking-table-column"]} d-flex d-align-center`}>
              <span className='d-flex'>
                <h5 className='l-22 f-400'>Acetaminophen</h5>
              </span>
              <span className='d-flex'>
                <h5 className='l-22 f-400'>once daily</h5>
              </span>
              <span className='d-flex'>
                <h5 className='l-22 f-400'>1 month</h5>
              </span>
              <span className='d-flex'>
                <h5 className='l-22 f-400'>Take by mouth with water on an empty stomach in morning.</h5>
              </span>
            </div>
          </div>
        </div>
        <div className={`bg-grey-7 col-4 ${styles2["template-wrapper"]}`}>
          <h3 className={`f-500 l-28 ${styles2["template-heading"]}`}>Template</h3>
          <div className={`d-flex d-align-center ${styles2["template-search-input"]}`}>
            <img src='search-icon.png'></img>
            <input className='col-12' type="text" placeholder='Search'></input>
          </div>
          <div className={`d-flex d-align-center d-justify-space-between ${styles2["template-search-suggestions"]}`}>
            <h6 className='l-20 f-500 text-grey-2'>Covid fever</h6>
            <img src="plus-grey.png"></img>
          </div>
          <div className={`d-flex d-align-center d-justify-space-between ${styles2["template-search-suggestions"]}`}>
            <h6 className='l-20 f-500 text-grey-2'>Migrane</h6>
            <img src="plus-grey.png"></img>
          </div>
          <div className={`d-flex d-align-center d-justify-space-between ${styles2["template-search-suggestions"]}`}>
            <h6 className='l-20 f-500 text-grey-2'>Migrane</h6>
            <img src="plus-grey.png"></img>
          </div>
          <div className={`d-flex d-align-center d-justify-space-between ${styles2["template-search-suggestions"]}`}>
            <h6 className='l-20 f-500 text-grey-2'>Migrane</h6>
            <img src="plus-grey.png"></img>
          </div>
        </div>
      </div>
    </>
  )
}

export default CreateRecord