import React,{useEffect, useState} from 'react'
import styles from '../modules/css/profile.module.css'
import ProfileSidebar from '../modules/ProfileSidebar';
import { getVezitaOnBoardFromCookie } from '../auth/userCookies';
import Header from '../modules/Header';
import BasicDetails from '../modules/BasicDetails';
import EducationDetails from '../modules/EducationDetails';
import Registration from '../modules/Registration';
import Establishment from '../modules/Establishment';
import Services from '../modules/Services';
export default function Profile() {
    const JWTToken = getVezitaOnBoardFromCookie();
    const [progress, setProgress] = useState(10);
    const [tab, setTab] = useState(0);
    const fill = progress+"%";
    const[name,setName] = useState("")

    //completed states
    const[basicComp,setBasicComp] = useState(false)
    const[eduComp,setEduComp] = useState(false)
    const[regComp,setRegComp] = useState(false)
    const[estComp,setEstComp] = useState(false)
    const[serviceComp,setServiceComp] = useState(false)

    const tabHandler = (val) => {
        setTab(val);
    }
    useEffect(()=>{
        if(JWTToken){
            getProfile();
        }
        
    },[])
    //get doctor profile Handler
    const getProfile = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/profile-me`, requestOptions)
        .then(response => response.text())
        .then(result =>{
            const parsedResult =  JSON.parse(result)
            setName(parsedResult.docter.fullName)
            if(parsedResult.docter.fullName && parsedResult.docter.gender && parsedResult.docter.totalExperiences && parsedResult.docter.city && parsedResult.docter.bio && parsedResult.docter.image && parsedResult.docter.countryCode && parsedResult.docter.phone)
            {
                setBasicComp(true)
                setProgress(20)
            }if(parsedResult.docter.education[0]){
                setEduComp(true)
                setProgress(35)
            }
            if(parsedResult.docter.medicalRegistrationDetails[0]){
                setRegComp(true)
                setProgress(50)
            }
            if(parsedResult.docter.establishment[0].contactNumber || docter.establishment[0].establishmentName){
                setEstComp(true)
                setProgress(70)
            }
            
        })
        .catch(error => console.log('error', error));
    }

  return (
  
    <>
        <Header title="Complete Profile"></Header>
        <div className='p-10 mt-40'>
            <div className={styles["top-header-section"]}>
                <div className={`${styles["section1"]} d-flex `}>
                    <div className={styles["profile-photo"]}>
                        <img src="dr.png"/>
                    </div>
                    <div className='ml-4'>
                        <h3 className='f-500 l-28'>Dr. {name}</h3>
                        <div className="d-flex d-align-center mt-3">
                            <img src="live.png"/>
                            <h6 className='f-400 l-20 ml-2'>Your profile is live on Vezita</h6>
                        </div>
                    </div>
                </div>
                <div className={`${styles["section2"]} d-flex d-flex-wrap`}>
                    <h2 className='f-600 l-32 text-secondary col-12' htmlFor="profile">{fill} <span className='h4 f-600'>profile completed</span></h2>
                    <div className={styles["progress-bar"]}>
                        <div className={styles["fill"]} style={{width:fill}}></div>
                        
                    </div>
                    {/* <div className='col-12'>
                        <ProgressBar completed={98} bgColor="#3085F4" baseBgColor="#D6E7FD" isLabelVisible={false} />
                    </div> */}
                </div>
                <div className={`${styles["section2"]} d-flex d-flex-wrap`}>
                    <div className='d-flex d-align-center'>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.7475 7.4149 18.7195 4.93639 16.8916 3.10845C15.0636 1.28051 12.5851 0.252482 10 0.25ZM9.25 5.5C9.25 5.30109 9.32902 5.11032 9.46967 4.96967C9.61033 4.82902 9.80109 4.75 10 4.75C10.1989 4.75 10.3897 4.82902 10.5303 4.96967C10.671 5.11032 10.75 5.30109 10.75 5.5V10.75C10.75 10.9489 10.671 11.1397 10.5303 11.2803C10.3897 11.421 10.1989 11.5 10 11.5C9.80109 11.5 9.61033 11.421 9.46967 11.2803C9.32902 11.1397 9.25 10.9489 9.25 10.75V5.5ZM10 15.25C9.7775 15.25 9.55999 15.184 9.37499 15.0604C9.18998 14.9368 9.04579 14.7611 8.96064 14.5555C8.87549 14.35 8.85321 14.1238 8.89662 13.9055C8.94003 13.6873 9.04718 13.4868 9.20451 13.3295C9.36184 13.1722 9.5623 13.065 9.78053 13.0216C9.99876 12.9782 10.225 13.0005 10.4305 13.0856C10.6361 13.1708 10.8118 13.315 10.9354 13.5C11.059 13.685 11.125 13.9025 11.125 14.125C11.125 14.4234 11.0065 14.7095 10.7955 14.9205C10.5845 15.1315 10.2984 15.25 10 15.25Z" fill="#FF8651"/>
                        </svg>
                        <h4 className='ml-2 f-500 l-26 text-secondary'>1 pending section</h4>
                    </div>
                    <h5 className='f-400 l-22 text-grey-3 mt-2'>Complete this sections to make your profile go live</h5>
                </div>
                <div className={`${styles["section3"]} d-flex d-flex-wrap`}>
                    <div className='d-flex d-align-center'>
                        <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10.25 9.875H9.125V4.625H9.5C10.1954 4.62747 10.8617 4.90483 11.3534 5.39657C11.8452 5.88832 12.1225 6.55457 12.125 7.25C12.125 7.54837 12.2435 7.83452 12.4545 8.0455C12.6655 8.25647 12.9516 8.375 13.25 8.375C13.5484 8.375 13.8345 8.25647 14.0455 8.0455C14.2565 7.83452 14.375 7.54837 14.375 7.25C14.375 5.95707 13.8614 4.71709 12.9471 3.80285C12.0329 2.88861 10.7929 2.375 9.5 2.375H9.125V1.25C9.125 0.951631 9.00647 0.665483 8.79549 0.454505C8.58452 0.243526 8.29837 0.125 8 0.125C7.70163 0.125 7.41548 0.243526 7.2045 0.454505C6.99353 0.665483 6.875 0.951631 6.875 1.25V2.375H6.125C4.83207 2.375 3.59209 2.88861 2.67785 3.80285C1.76361 4.71709 1.25 5.95707 1.25 7.25C1.25 8.54293 1.76361 9.78291 2.67785 10.6971C3.59209 11.6114 4.83207 12.125 6.125 12.125H6.875V17.375H5.75C5.05457 17.3725 4.38832 17.0952 3.89657 16.6034C3.40483 16.1117 3.12747 15.4454 3.125 14.75C3.125 14.4516 3.00647 14.1655 2.7955 13.9545C2.58452 13.7435 2.29837 13.625 2 13.625C1.70163 13.625 1.41548 13.7435 1.2045 13.9545C0.993526 14.1655 0.875 14.4516 0.875 14.75C0.875 16.0429 1.38861 17.2829 2.30285 18.1971C3.21709 19.1114 4.45707 19.625 5.75 19.625H6.875V20.75C6.875 21.0484 6.99353 21.3345 7.2045 21.5455C7.41548 21.7565 7.70163 21.875 8 21.875C8.29837 21.875 8.58452 21.7565 8.79549 21.5455C9.00647 21.3345 9.125 21.0484 9.125 20.75V19.625H10.25C11.5429 19.625 12.7829 19.1114 13.6971 18.1971C14.6114 17.2829 15.125 16.0429 15.125 14.75C15.125 13.4571 14.6114 12.2171 13.6971 11.3029C12.7829 10.3886 11.5429 9.875 10.25 9.875ZM6.125 9.875C5.42881 9.875 4.76113 9.59844 4.26884 9.10616C3.77656 8.61387 3.5 7.94619 3.5 7.25C3.5 6.55381 3.77656 5.88613 4.26884 5.39384C4.76113 4.90156 5.42881 4.625 6.125 4.625H6.875V9.875H6.125ZM10.25 17.375H9.125V12.125H10.25C10.9462 12.125 11.6139 12.4016 12.1062 12.8938C12.5984 13.3861 12.875 14.0538 12.875 14.75C12.875 15.4462 12.5984 16.1139 12.1062 16.6062C11.6139 17.0984 10.9462 17.375 10.25 17.375Z" fill="#3085F4"/>
                        </svg>

                        <h4 className='ml-2 f-500 l-26 text-secondary'>Subscription ending in 6 months</h4>
                    </div>
                    <h5 className='f-400 l-22 text-grey-3 mt-2'>You will be charged $200/ year after 12-8-2022. Manage</h5>
                </div>
            </div>
            <div className='d-flex d-flex-wrap mb-10'>
                <div className={`col-3 pr-4 ${styles["sidebar"]}`}>
                    <ProfileSidebar establishment={estComp} registration ={regComp} education={eduComp} basic={basicComp} handler={tabHandler}></ProfileSidebar>
                </div>

                <div className={`col-8 d-flex d-flex-wrap border-box ${styles["personal-detail-section"]}`}>
                    {tab == 0 &&
                        <BasicDetails></BasicDetails>
                    }
                    {tab == 1 &&
                        <EducationDetails></EducationDetails>
                    }
                    {tab == 2 &&
                        <Registration></Registration>
                    }
                    {tab == 3 &&
                        <Establishment></Establishment>
                    }
                
                    {tab == 4 &&
                        <Services></Services>
                    }
                </div>          
            </div>
        </div>
    </>
  )
}
