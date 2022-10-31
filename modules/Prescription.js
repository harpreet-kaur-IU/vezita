import React from 'react'
import Header from './Header'
import styles from './css/BookingDetails.module.css'
import styles2 from './css/TableTemplate.module.css'
import DynamicDropdown from './DynamicDropdown'
const Prescription = () => {
  return (
    <>
        <Header title="Prescription"></Header>
        <div className={`d-flex ${styles["wrapper"]}`} style={{paddingBottom:"18px"}}>
            <div className={`col-12 ${styles["left-column"]}`} style={{marginRight: "0px"}}>
                <div className={`bg-grey7 ${styles["left-col-2"]}`} style={{marginTop:"0px"}}>
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
                            <div className={`cursor-pointer ${styles["mail-icon"]}`}>
                                <img src='mail.png'></img>
                            </div>
                            <div className={`cursor-pointer ${styles["message-icon"]}`}>
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
                <h5 className='f-500 l-22 text-dark-blue'>Send</h5>
                <img src="send-icon.png"></img>
            </button>
        </div>
        {/* Table and template */}
        <div className={`d-flex ${styles2["wrapper"]}`}>
            <div className='col-8'>
                <div className={`d-flex d-align-center d-justify-space-between ${styles2["add-template-wrapper"]}`}>
                    <div className={`d-flex d-flex-column ${styles2["template-name-wrapper"]}`}>
                        <h6 className='l-20 f-600 text-secondary'>Template</h6>
                        <input type="text" placeholder='Name of the template'></input>
                    </div>
                    <button className={`cursor-pointer d-flex d-align-center ${styles2["add-btn-wrapper"]}`}>
                        <img src="plus-white.png"></img>
                        <h4 className='l-26 f-600'>Add</h4>
                    </button>
                </div>
                <div className={`d-flex ${styles2["drug-detail-wrapper"]}`}>
                    <div className='col-5 d-flex d-flex-column'>
                        <div className={`d-flex d-flex-column ${styles2["drug-detail-left"]}`}>
                            <h6 className='l-20 f-600 text-secondary'>Drug</h6>
                            <input type="text" placeholder='Add the Drug'></input>
                        </div>
                        <div className={`d-flex d-flex-column ${styles2["drug-detail-left-instruction"]}`}>
                            <h6 className='l-20 f-600 text-secondary'>Instructions</h6>
                            <input className='l-22' type="text" placeholder='Instructions'></input>
                        </div>
                    </div>
                    
                    <div className='col-5 offset-1 d-flex d-flex-column'>
                        <div className={`${styles2["drug-detail-right"]}`}>
                            <h6 className='l-20 f-600 text-secondary'>Instructions</h6>
                            <div className={`col-12 d-flex ${styles2["instruction-radio-btn-details"]}`}>
                                <div className={`d-flex ${styles2["instruction-radio-btn"]}`}>
                                    <input className='m-0' type="radio" name='instruction'></input>
                                    <h5 className='l-22 f-400'>Before food</h5>
                                </div>
                                <div className={`d-flex ${styles2["instruction-radio-btn"]}`}>
                                    <input className='m-0' type="radio" name='instruction'></input>
                                    <h5 className='l-22 f-400'>After food</h5>
                                </div>
                            </div>

                            <div className={`${styles2['time-and-dosage-wrapper']}`}>
                                <h6 className='l-20 f-600 text-secondary'>Time and dosage</h6>
                                <div className={`d-flex ${styles2["time-and-dosage-check-box-details"]}`}>
                                    <div className='d-flex d-flex-column'>
                                        <div className={`d-flex ${styles2["time-and-dosage-check-box"]}`}>
                                            <input className='m-0' type="checkbox"></input>
                                            <h5 className='l-22 f-400'>Morning</h5>
                                        </div>
                                        <div className={`${styles2["doasge-dropdown-wrapper"]}`}>
                                            <DynamicDropdown width="clamp(3.125rem, 2.4038rem + 3.2051vw, 6.25rem)"></DynamicDropdown>
                                        </div>
                                    </div>
                                    <div className='d-flex d-flex-column'>
                                        <div className={`d-flex ${styles2["time-and-dosage-check-box"]}`}>
                                            <input className='m-0' type="checkbox"></input>
                                            <h5 className='l-22 f-400'>Evening</h5>
                                        </div>
                                        <div className={`${styles2["doasge-dropdown-wrapper"]}`}>
                                            <DynamicDropdown width="clamp(3.125rem, 2.4038rem + 3.2051vw, 6.25rem);"></DynamicDropdown>
                                        </div>
                                    </div>
                                    <div className='d-flex d-flex-column'>
                                        <div className={`d-flex ${styles2["time-and-dosage-check-box"]}`}>
                                            <input className='m-0' type="checkbox"></input>
                                            <h5 className='l-22 f-400'>Night</h5>
                                        </div>
                                        <div className={`${styles2["doasge-dropdown-wrapper"]}`}>
                                            <DynamicDropdown width="clamp(3.125rem, 2.4038rem + 3.2051vw, 6.25rem);"></DynamicDropdown>
                                        </div>
                                    </div>
                                    <div className={`d-flex d-align-center d-justify-center cursor-pointer ${styles2["delete-icon-wrapper"]}`}>
                                        <img src='delete-icon.png'></img>
                                    </div>
                                </div>
                            </div>

                            <div className={`d-flex d-flex-column ${styles2["duration-wrapper"]}`}>
                                <h6 className='l-20 f-600 text-secondary'>Duration</h6>
                                <div className={`d-flex col-12 ${styles2["duration-input-dropdown-wrapper"]}`}>
                                    <input className='col-8' type="text"></input>
                                    <DynamicDropdown width="150px"></DynamicDropdown>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>

                <div className={`d-flex ${styles2["drug-detail-wrapper"]}`}>
                    <div className='col-5 d-flex d-flex-column'>
                        <div className={`d-flex d-flex-column ${styles2["drug-detail-left"]}`}>
                            <h6 className='l-20 f-600 text-secondary'>Drug</h6>
                            <input type="text" placeholder='Add the Drug'></input>
                        </div>
                        <div className={`d-flex d-flex-column ${styles2["drug-detail-left-instruction"]}`}>
                            <h6 className='l-20 f-600 text-secondary'>Instructions</h6>
                            <input className='l-22' type="text" placeholder='Instructions'></input>
                        </div>
                    </div>
                    
                    <div className='col-5 offset-1 d-flex d-flex-column'>
                        <div className={`${styles2["drug-detail-right"]}`}>
                            <h6 className='l-20 f-600 text-secondary'>Instructions</h6>
                            <div className={`col-12 d-flex ${styles2["instruction-radio-btn-details"]}`}>
                                <div className={`d-flex ${styles2["instruction-radio-btn"]}`}>
                                    <input className='m-0' type="radio" name='instruction'></input>
                                    <h5 className='l-22 f-400'>Before food</h5>
                                </div>
                                <div className={`d-flex ${styles2["instruction-radio-btn"]}`}>
                                    <input className='m-0' type="radio" name='instruction'></input>
                                    <h5 className='l-22 f-400'>After food</h5>
                                </div>
                            </div>

                            <div className={`${styles2['time-and-dosage-wrapper']}`}>
                                <h6 className='l-20 f-600 text-secondary'>Time and dosage</h6>
                                <div className={`d-flex ${styles2["time-and-dosage-check-box-details"]}`}>
                                    <div className='d-flex d-flex-column'>
                                        <div className={`d-flex ${styles2["time-and-dosage-check-box"]}`}>
                                            <input className='m-0' type="checkbox"></input>
                                            <h5 className='l-22 f-400'>Morning</h5>
                                        </div>
                                        <div className={`${styles2["doasge-dropdown-wrapper"]}`}>
                                            <DynamicDropdown width="clamp(3.125rem, 2.4038rem + 3.2051vw, 6.25rem)"></DynamicDropdown>
                                        </div>
                                    </div>
                                    <div className='d-flex d-flex-column'>
                                        <div className={`d-flex ${styles2["time-and-dosage-check-box"]}`}>
                                            <input className='m-0' type="checkbox"></input>
                                            <h5 className='l-22 f-400'>Evening</h5>
                                        </div>
                                        <div className={`${styles2["doasge-dropdown-wrapper"]}`}>
                                            <DynamicDropdown width="clamp(3.125rem, 2.4038rem + 3.2051vw, 6.25rem)"></DynamicDropdown>
                                        </div>
                                    </div>
                                    <div className='d-flex d-flex-column'>
                                        <div className={`d-flex ${styles2["time-and-dosage-check-box"]}`}>
                                            <input className='m-0' type="checkbox"></input>
                                            <h5 className='l-22 f-400'>Night</h5>
                                        </div>
                                        <div className={`${styles2["doasge-dropdown-wrapper"]}`}>
                                            <DynamicDropdown width="clamp(3.125rem, 2.4038rem + 3.2051vw, 6.25rem)"></DynamicDropdown>
                                        </div>
                                    </div>
                                    <div className={`d-flex d-align-center d-justify-center cursor-pointer ${styles2["delete-icon-wrapper"]}`}>
                                        <img src='delete-icon.png'></img>
                                    </div>
                                </div>
                            </div>

                            <div className={`d-flex d-flex-column ${styles2["duration-wrapper"]}`}>
                                <h6 className='l-20 f-600 text-secondary'>Duration</h6>
                                <div className={`d-flex col-12 ${styles2["duration-input-dropdown-wrapper"]}`}>
                                    <input className='col-8' type="text"></input>
                                    <DynamicDropdown width="150px"></DynamicDropdown>
                                </div>  
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`bg-grey7 col-4 ${styles2["template-wrapper"]}`}>
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

export default Prescription