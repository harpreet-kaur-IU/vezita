import React, { useEffect, useState } from 'react'
import styles from './css/AllPatientsTable.module.css'
import Link from 'next/link'
import Loader from './Loader'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies'
import Moment from 'react-moment'
const AllPatientTable = () => {
    const JWTToken = getVezitaOnBoardFromCookie()
    const[patient,setPatient] = useState("")
    const[loading,setLoading] = useState(false)


    useEffect(()=>{
        if(JWTToken){
            var myHeaders = new Headers();
            myHeaders.append("token",JWTToken);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };

            setLoading(true)
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}doctor-patient`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const parsedResult = JSON.parse(result)
                setPatient(parsedResult.docterPatient)
                setLoading(false)
            })
            .catch(error => console.log('error', error));
        }
    },[])
  return (
    <>
        {loading && <Loader></Loader>}
        <div className={`${styles["booking-table-scroll-section"]}`}>
            <div className={`${styles["booking-table-wrapper"]}`}>
                <div className={`${styles["booking-table-header-row"]} d-flex d-align-center`}>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Patient name</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Email</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Contact Number</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Created on</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>Status</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-500'>View details</h5>
                    </span>
                </div>
                {patient && patient.map((item,index)=>(
                    <div key={index} className={`${styles["booking-table-column"]} d-flex d-align-center`}>
                        <span className={`d-flex d-align-center ${styles["patient-details-column"]}`}>
                            <img src={item.patient.avatar}></img>
                            <h5 className='l-22 f-400'>{item.patient.name}</h5>
                        </span>
                  
                            <span className='d-flex'>
                                <h5 className='l-22 f-400'>{item.patient.email}</h5>
                            </span>
                       
                        <span className='d-flex'>
                            <h5 className='l-22 f-400'>{item.patient.phone}</h5>
                        </span>
                        <span className='d-flex'>
                            <h5 className='l-22 f-400'>
                                <Moment format="D MMM YYYY" withTitle>
                                    {item.createdAt}
                                </Moment> 
                                ,&nbsp;
                                <Moment format="HH:mm" withTitle>
                                    {item.createdAt}
                                </Moment>
                            </h5>
                        </span>
                        <span className={`f-500 d-flex ${styles["status-decline-text"]}`}>
                            <h5 className='l-22 f-400'>{item.status}</h5>
                        </span>
                        
                        <span className={`cursor-pointer d-flex d-justify-center ${styles["column-arrow"]}`}>
                            <Link href={`/patientdetails/${item.patient._id}`}><img src='arrow.png'></img></Link>
                        </span>
                    </div>
                ))}
             
                {/* <div className={`${styles["booking-table-column"]} ${styles["booking-table-column-data"]} d-flex d-align-center`}>
                    <span className={`d-flex d-align-center ${styles["patient-details-column"]}`}>
                        <img src='title-img.png'></img>
                        <h5 className='l-22 f-400'>Cameron Williamson</h5>
                    </span>
                    <span className='d-flex '>
                        <h5 className='l-22 f-400'>Stroke treatment</h5>
                    </span>
                    <span className='d-flex '>
                        <h5 className='l-22 f-400'>1</h5>
                    </span>
                    <span className='d-flex '>
                        <h5 className='l-22 f-400'>Feb 12, 2021, 4:00 PM</h5>
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
                        <Link href="/addnewpatient"><img src='arrow.png'></img></Link>
                    </span>
                </div>
                <div className={`${styles["booking-table-column"]} d-flex d-align-center`}>
                    <span className={`d-flex d-align-center ${styles["patient-details-column"]}`}>
                        <img src='title-img.png'></img>
                        <h5 className='l-22 f-400'>Cameron Williamson</h5>
                    </span>
                    <span className='d-flex '>
                        <h5 className='l-22 f-400'>Stroke treatment</h5>
                    </span>
                    <span className='d-flex '>
                        <h5 className='l-22 f-400'>1</h5>
                    </span>
                    <span className='d-flex '>
                        <h5 className='l-22 f-400'>Feb 12, 2021, 4:00 PM</h5>
                    </span>
                    <span className={`f-500 d-flex ${styles["status-noshow-text"]}`}>
                        <h5 className='l-22 f-400'>NO SHOW</h5>
                    </span>
                    <span className={`cursor-pointer d-flex d-justify-center ${styles["column-arrow"]}`}>
                        <Link href="/addnewpatient"><img src='arrow.png'></img></Link>
                    </span>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default AllPatientTable