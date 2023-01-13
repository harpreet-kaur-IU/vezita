import React, { useState } from 'react'
import styles from '../css/AddEvent.module.css'
import DropDown from '../DropDown'
import DropDownDate from '../DropDownDate'
const AddEvent = (props) => {

    const[type,setType] = useState("all")
    const[data,setData] = useState(
        [
            {
                "name": "Video Appointment",
                "dial_code":"Video Appointment"
            },
            {
                "name": "In-clinic Appointment",
                "dial_code":"In-clinic Appointment"
            },
            {
                "name": "Leave",
                "dial_code":"Leave"
            }
        ]
    )
    const appointmentHandler = (val) =>{
        if(val == "Leave")
            setType("leave")
    }

    const patientHandler = (val) =>{
        console.log(val)
    }
  return (
    <>
        {type == "all" &&
            <div className={`p-5 ${styles["wrapper"]}`}>
                <div className={`d-flex d-justify-space-between d-align-center`}>
                    <h2 className='l-22 f-600 text-secondary'>Add new Event</h2>
                    <img onClick={props.handler} className='cursor-pointer' src='cross-grey.png'></img>
                </div>
                <div className='d-flex d-flex-column mt-5'>
                    <div className={`d-flex d-flex-column`}>
                        <label className='mb-1 h5 f-600 l-22 text-secondary'>Event</label>
                        <DropDown handler={appointmentHandler} data={data} placeholder="Select Appointment Type"></DropDown>
                    </div>
                    <div className={`col-12 d-flex gap-5 mt-5`}>
                        <div className={`col-6 d-flex d-flex-column`}>
                            <label className='mb-1 h5 f-600 l-22 text-secondary'>Doctor</label>
                            <div className={`d-flex d-align-center gap-1 mt-2 ${styles["doctor-name-wrapper"]}`}>
                                <img></img>
                                <h5 className='l-22 f-500 text-grey-3'>Dr. Jane Fernandes</h5>
                            </div>
                        </div>
                        <div className={`col-6 d-flex d-flex-column`}>
                            <label className='mb-2 h5 f-600 l-22 text-secondary'>Patient</label>
                            <DropDown handler={patientHandler} data={data} placeholder="Select Patient"></DropDown>
                        </div>
                    </div>
                    <div className={`mt-5 d-flex d-flex-column`}>
                        <label className='mb-1 h5 f-600 l-22 text-secondary'>Event</label>
                        <input className={`${styles["date-input-field"]}`} type="date"></input>
                    </div>
                    <div className={`col-12 d-flex gap-3 mt-5`}>
                        <div className={`col-6 d-flex d-flex-column`}>
                            <label className='mb-2 h5 f-600 l-22 text-secondary'>From</label>
                            <div className={`d-flex d-align-center ${styles["timing"]}`}>
                                <DropDownDate index="1" handler={patientHandler} placeholder="From"/>
                            </div>
                        </div>
                        <div className={`col-6 d-flex d-flex-column`}>
                            <label className='mb-2 h5 f-600 l-22 text-secondary'>To</label>
                            <div className={`d-flex d-align-center ${styles["timing"]}`}>
                                <DropDownDate index="1" handler={patientHandler} placeholder="To"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        }
        {type == "leave" &&
            <div className={`p-5 ${styles["wrapper-2"]}`}>
                <div className={`d-flex d-justify-space-between d-align-center`}>
                    <h2 className='l-22 f-600 text-secondary'>Add new Event</h2>
                    <img onClick={props.handler} className='cursor-pointer' src='cross-grey.png'></img>
                </div>
                
                <div className='d-flex d-flex-column mt-5'>
                    <div className={`d-flex d-flex-column`}>
                        <label className='mb-1 h5 f-600 l-22 text-secondary'>Event</label>
                        <input className={`${styles["date-input-field"]}`} value="Leave" type="text" readOnly></input>
                    </div>
                    
                    <div className={`mt-5 d-flex d-flex-column`}>
                        <label className='mb-1 h5 f-600 l-22 text-secondary'>Starting Date</label>
                        <input className={`${styles["date-input-field"]}`} type="date"></input>
                    </div>

                    <div className={`mt-5 d-flex d-flex-column`}>
                        <label className='mb-2 h5 f-600 l-22 text-secondary'>From</label>
                        <div className={`d-flex d-align-center ${styles["timing"]}`}>
                            <DropDownDate index="1" handler={patientHandler} placeholder="From"/>
                        </div>
                    </div>
                    <div className={`mt-5 ${styles["divider"]}`}></div>
                    <div className={`mt-5 d-flex d-flex-column`}>
                        <label className='mb-1 h5 f-600 l-22 text-secondary'>End Date</label>
                        <input className={`${styles["date-input-field"]}`} type="date"></input>
                    </div>
                    <div className={`mt-5 d-flex d-flex-column`}>
                        <label className='mb-2 h5 f-600 l-22 text-secondary'>To</label>
                        <div className={`d-flex d-align-center ${styles["timing"]}`}>
                            <DropDownDate index="1" handler={patientHandler} placeholder="To"/>
                        </div>
                    </div>
                </div>
            </div>
        }
    </>
  )
}

export default AddEvent