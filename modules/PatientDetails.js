import React, { useState,useEffect } from 'react'
import Header from './Header'
import styles from './css/BookingDetails.module.css'
import { useRouter } from 'next/router';
import { getVezitaOnBoardFromCookie } from '../auth/userCookies';
import Moment from 'react-moment';
const PatientDetails = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const router = useRouter();
    const JWTToken = getVezitaOnBoardFromCookie();
    const bookingId = router.query["id"];
    const [bookingData,setBookingData] = useState("")
    const [loading,setLoading] = useState(false)
    const [medicalData,setMedicalData] = useState("")
    const [appointment,setAppointment] = useState("")
    const [doctorReports,setDoctorReports] = useState("")
    const [patientReports,setPatientReports] = useState("")

    const handleClick = (e) =>{
        setActiveTab(e.target.id);
    }

    useEffect(()=>{
        var patientId = "";
        var docterId = "";
        if(bookingId){
            var myHeaders = new Headers();
            myHeaders.append("token",JWTToken);

            var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
            };
            setLoading(true)
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}booking/${bookingId}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                setLoading(false)
                var parsedResult = JSON.parse(result)
                setBookingData(parsedResult.booking)

                patientId = parsedResult.booking.patient._id;
                docterId = parsedResult.booking.docter._id;

                var requestOptions1 = {
                    headers: myHeaders,
                    method: 'GET',
                    redirect: 'follow'
                };
                    
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}doctor-patient/single-patient?docterId=${docterId}&patientId=${patientId}`, requestOptions1)
                .then(response => response.text())
                .then(result => {
                    var medical = JSON.parse(result)
                    setMedicalData(medical.patientMedicalDetails)
                    setAppointment(medical.docterPatient.apointments)
                })
                .catch(error => console.log('error', error));

                //patient reports by doctor
                var requestOptions3 = {
                    method: 'GET',
                    redirect: 'follow'
                };

                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter-report-of-patient/get/${patientId}?docter=${docterId}`, requestOptions3)
                .then(response => response.text())
                .then(result => {
                    const parsedResult = JSON.parse(result)
                    setDoctorReports(parsedResult.docterReports)
                })
                .catch(error => console.log('error', error));

                //patient reports by patient
                var requestOptions = {
                    method: 'GET',
                    redirect: 'follow'
                };
                  
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}report/get/patient-report/${patientId}?lastWeek=true`, requestOptions)
                .then(response => response.text())
                .then(result =>{
                    const reportsPatient = JSON.parse(result)
                    setPatientReports(reportsPatient.patientReport)
                })
                .catch(error => console.log('error', error));
            })
            .catch(error => console.log('error', error));
        }
        
    },[bookingId])

  return (
    <>
        <Header title="Bookings Details"></Header>
        <div className={`d-flex ${styles["wrapper"]}`}>
            <div className={`col-8 ${styles["left-column"]}`}>
                <div className={`bg-grey7 ${styles["left-col-2"]}`} style={{marginTop:"0px"}}>
                    <div className={`d-flex d-align-center d-justify-space-between ${styles["patient-details-wrapper"]}`}>
                        <div className={`d-flex  d-align-center ${styles["patient-details"]}`}>
                            <img className={`${styles["patient-img"]}`} src={bookingData.patient && bookingData.patient.avatar}></img>
                            <div className='d-flex d-flex-column'>
                                <h5>{bookingData.patient && bookingData.patient.name}</h5>
                                <h5>ID: {bookingData.patient && bookingData.patient._id}</h5>
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
                            <h5 className='text-grey-2 l-22 f-400'>{bookingData.patient && bookingData.patient.gender}</h5>
                        </div>
                        <div className={`col-4 d-flex d-flex-column d-align-center ${styles["patient-age-details-col"]}`}>
                            <h6 className='text-secondary l-20 f-500'>Marital status</h6>
                            <h5 className='text-grey-2 l-22 f-400'>{bookingData.patient && bookingData.patient.martialStatus}</h5>
                        </div>
                        <div className={`col-4 d-flex d-flex-column d-align-center`}>
                            <h6 className='text-secondary l-20 f-500'>Blood Group</h6>
                            <h5 className='text-grey-2 l-22 f-400'>{medicalData && medicalData.bloodGroup}</h5>
                        </div>
                    </div>
                </div>
                <div className={`bg-grey7 ${styles["left-col-3"]}`}>
                    <h3 className='text-secondary f-500 l-28'>More details</h3>
                    <div>
                        <div className={`d-flex col-12 ${styles["more-details-row"]}`}>
                            <h5 className='text-secondary col-6 f-400 l-22'>Chronic Disease</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>
                                {medicalData && medicalData.chronicDisease.map(index=>(
                                    <span>{index},</span>
                                ))}
                            </h5>
                        </div>
                        <div className={`d-flex col-12 ${styles["more-details-row"]}`}>
                            <h5 className='text-secondary col-6 f-400 l-22'>Allergies</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>
                                {medicalData && medicalData.allergies.map(index=>(
                                    <span>{index},</span>
                                ))}
                            </h5>
                        </div>
                        <div className={`d-flex col-12 ${styles["more-details-row"]}`}>
                            <h5 className='text-secondary col-6 f-400 l-22'>Current Medications</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>
                                {medicalData && medicalData.medications.map(index=>(
                                    <span>{index},</span>
                                ))}
                            </h5>
                        </div>
                        <div className={`d-flex col-12 ${styles["more-details-row"]}`}>
                            <h5 className='text-secondary col-6 f-400 l-22'>Past Medications</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>
                                {medicalData && medicalData.pastMedications.map(index=>(
                                    <span>{index},</span>
                                ))}
                            </h5>
                        </div>
                        <div className={`d-flex col-12 ${styles["more-details-row"]}`}>
                            <h5 className='text-secondary col-6 f-400 l-22'>Surgeries</h5>
                            <h5 className='text-secondary col-6 f-400 l-22'>
                                {medicalData && medicalData.surgeries.map(index=>(
                                    <span>{index},</span>
                                ))}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className={`bg-grey7 ${styles["right-col-2"]}`}>
                    <h3 className={`f-500 l-28 ${styles["docs-title"]}`}>Documents</h3>
                    <div className={`d-flex ${styles["tabs-wrapper"]}`}>
                        <h3 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab1" ? styles["active"] : ""} `}>By Doctor</h3>
                        <h3 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab2" ? styles["active"] : ""}`} >By Patient</h3>
                    </div>
                    {activeTab == "tab1" && doctorReports && doctorReports.map((item)=>(
                        <div className={`d-flex d-align-center d-justify-space-between ${styles["tabs-content-wrapper"]}`}>
                            <div className={`d-flex ${styles["docs-details-and-icon"]}`}>
                                <img src='files-icon.png'></img>
                                <div className={`d-flex d-flex-column ${styles["docs-details-wrapper"]}`}>
                                    <h4 className='l-26 f-500 text-secondary'>{item.reportType}</h4>
                                    <h5 className='l-22 f-400 text-grey-3'>
                                        <a className='underline-none text-grey-3' href={item.reportFile} target="_blank">Report.pdf</a>
                                    </h5>
                                    <h6 className='l-20 f-500 text-secondary'>Uploaded by doctor on <Moment format="D MMM YYYY" withTitle>{item.date}</Moment></h6>
                                </div>
                            </div>
                            <div className={`d-flex ${styles["docs-view-and-download"]}`}>
                                <img className='cursor-pointer' src='view-icon.png'></img>
                                <img className='cursor-pointer' src='download-icon.png'></img>
                            </div>
                        </div>
                    ))}
                    {activeTab == "tab2" && patientReports && patientReports.map((item)=>(
                        <div className={`d-flex d-align-center d-justify-space-between ${styles["tabs-content-wrapper"]}`}>
                            <div className={`d-flex ${styles["docs-details-and-icon"]}`}>
                                <img src='files-icon.png'></img>
                                <div className={`d-flex d-flex-column ${styles["docs-details-wrapper"]}`}>
                                    <h4 className='l-26 f-500 text-secondary'>{item.reportType}</h4>
                                    <h5 className='l-22 f-400 text-grey-3'>
                                        <a className='underline-none text-grey-3' href={item.reportFile} target="_blank">Report.pdf</a>
                                    </h5>
                                    <h6 className='l-20 f-500 text-secondary'>Uploaded by Patient on <Moment format="D MMM YYYY" withTitle>{item.date}</Moment></h6>
                                </div>
                            </div>
                            <div className={`d-flex ${styles["docs-view-and-download"]}`}>
                                <img className='cursor-pointer' src='view-icon.png'></img>
                                <img className='cursor-pointer' src='download-icon.png'></img>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className={`col-4 ${styles["right-column"]}`}>
                <div className={`bg-grey7 ${styles["right-col-1"]}`}>
                    <h3 className='f-500 l-28 text-secondary'>Previous appointments <span className='text-primary'>(4)</span></h3>
                    <div className={`${styles["previous-appointments-list"]}`}>
                        {appointment && appointment.map((index=>(
                            <div className={`d-flex ${styles["previousa-appoi-single-item"]}`}>
                                {index.slot.sessionType.map((item,index1)=>(
                                    index1 === 0 ?
                                        <div className={`d-flex d-align-center bg-purple-2 ${styles["appointment-icons-wrapper"]}`}>
                                            <img src="clinic-appointment.png"></img>
                                        </div>
                                    :
                                    <div className={`d-flex d-align-center bg-teal-2 ${styles["appointment-icons-wrapper"]}`}>
                                        <img src="video-appointment.png"></img>
                                    </div>
                                ))}
                                
                                <div>
                                    <h4 className='f-500 l-26 text-secondary'>
                                        {index.slot.sessionType.map(((item,index1)=>(
                                            <span>{index1 === 0 && item}</span>
                                        )))}
                                    </h4>
                                    <h5 className='text-grey-3 f-400 l-22'>
                                        <Moment format="D MMM YYYY" withTitle>
                                            {index.slot.sessionDate}
                                        </Moment>
                                    </h5>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
                <div className={`bg-grey7 ${styles["right-col-note"]}`}>
                    <div className={`d-flex d-flex-column ${styles["notes-wrapper"]}`}>
                        <h3 className='l-28 f-500 text-secondary'>Notes</h3>
                        <input placeholder='Add a note'></input>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default PatientDetails