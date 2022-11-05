import React, { useEffect, useState } from 'react'
import styles from './css/BookingTable.module.css'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies'
import Link from 'next/link'
import Moment from 'react-moment';
const BookingTable = (props) => {
    const JWTToken = getVezitaOnBoardFromCookie();
    const[status,setStatus] = useState('0');
    const[bookingData,setBookingData] = useState("")

    const declineHandler = () =>{
        setStatus('decline');
    }
    const acceptHandler = () =>{
        setStatus('accept');
    }
   
    useEffect(()=>{
        if(props.title === "All"){
            var myHeaders = new Headers();
            myHeaders.append("token",JWTToken);
            
            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}booking`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const parsedResult = JSON.parse(result)
                setBookingData(parsedResult.booking)
            })
            .catch(error => console.log('error', error));
        }
    },[])
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
            {bookingData && bookingData.map((item)=>(
                <div className={`${styles["booking-table-column"]} d-flex d-align-center`}>
                    <span className={`d-flex d-align-center ${styles["patient-details-column"]}`}>
                        <img src={item.patient.avatar}></img>
                        <h5 className='l-22 f-400'>{item.patient.name}</h5>
                    </span>
                    <span className='d-flex '>
                        <h5 className='l-22 f-400'>
                            <Moment format="D MMM YYYY" withTitle>
                                {item.slotId.sessionDate}
                            </Moment>
                        </h5>
                    </span>
                    <span className='d-flex '>
                        <h5 className='l-22 f-400'>
                            <Moment format="HH:mm" withTitle>
                                {item.slotId.startTime}
                            </Moment>
                        </h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-400'>Video call</h5>
                    </span>
                    <span className='d-flex'>
                        <h5 className='l-22 f-400'>{item.numOfPreConsultation}</h5>
                    </span>
                    {item.status === "pending" &&
                        <span className='d-flex'>
                             <div className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["status-btn"]}`} onClick={declineHandler}>
                                <img src='cross.png'></img>
                                Decline
                            </div>
                            <div className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["status-btn-green"]}`} onClick={acceptHandler}>
                                <img src='tick.png'></img>
                                Accept
                            </div>
                        </span>
                    }
                    {item.status === "completed" && 
                        <span className={`f-500 d-flex ${styles["status-accept-text"]}`}>COMPLETED</span>
                    }
                    {item.status === "confirmed" &&
                        <span className={`f-500 d-flex ${styles["status-accept-text"]}`}>CONFIRMED</span>
                    }
                    <span className={`cursor-pointer d-flex d-justify-center ${styles["column-arrow"]}`}>
                        <Link href={`/choose/${item._id}`}><img src='arrow.png'></img></Link>
                    </span>
                </div>
            ))}
           
           
                {/* <span className='d-flex'>
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
                </span> */}
                
            
            
        </div>
    </div>
  )
}

export default BookingTable