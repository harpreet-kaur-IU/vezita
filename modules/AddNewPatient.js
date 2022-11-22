import React, { useEffect,useState,useRef } from 'react';
import {useRouter} from 'next/router';
import styles from './css/AddNewPatient.module.css';
import DynamicDropdown from './DynamicDropdown';
import Header from './Header';
import Modal from './Modals/Modal';
import Choice from './Modals/Choice';
import { getVezitaOnBoardFromCookie } from '../auth/userCookies';
import useFirebaseAuth from '../auth/useFirebaseAuth';
import DropDown from './DropDown';
import CountryCode from './CountryCode.json';
const AddNewPatient = () => {
    const JWTToken = getVezitaOnBoardFromCookie();
    const[add,setAdd] = useState(false);
    const[fieldId,setFieldId] = useState("");
    const [activeTab, setActiveTab] = useState("tab1");
    const router = useRouter();
    const {createUserWithEmailAndPassword,signOutOnBoard} = useFirebaseAuth(); 
    //states
    const avatarRef = useRef();
    const[avatar,setAvatar] = useState("")
    const[name,setName] = useState("")
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[contact,setContact] = useState("")
    const[gender,setGender] = useState("")
    const[relation,setRelation] = useState("")
    const[martial,setMartial] = useState("")
    const[height,setHeight] = useState("")
    const[weight,setWeight] = useState("")
    const[emergencyName,setEmergencyName] = useState("")
    const[emergencyNumber,setEmergencyNumber] = useState("")
    const[location,setLocation] = useState("")
    const [countryCodeList,setCountryCodeList] = useState([])
    const[countryCode1,setCountryCode1] = useState("")
    const[countryCode2,setCountryCode2] = useState("")
    const[day,setDay] = useState("")
    const[month,setMonth] = useState("")
    const[year,setYear] = useState("")
    //medical data states
    const[blood,setBlood] = useState("");
    const[allergies,setAllergies] = useState([]);
    const[currentMed,setCurrentMed] = useState([]);
    const[passtMed,setPastMed] = useState([]);
    const[chronic,setChronic] = useState([]);
    const[injuries,setInjuries] = useState([]);
    const[surgeries,setSurgeries] = useState([]);
    const[reports,setReports] = useState();

    //report states
    const[reportType,setReportType] = useState([])
    const[diseaseName,setDisease] = useState([])
    const[reportFile,setReportFile] = useState([])

    //userid
    const[userId,setUserId] = useState("")

    //patient id
    const[patientId,setPatientId] = useState("")

    //doctor id
    const[doctorId,setDoctorId] = useState("")

    useEffect(()=>{
        for(var i = 0;i<CountryCode.length;i++){
            setCountryCodeList(CountryCode)
        }
    },[])
    const avatarHandler = (e) =>{
        setAvatar(e.target.files[0])
    }
    const nameHandler = (e) =>{
        setName(e.target.value)
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }
    const passwordHandler = (e) =>{
        setPassword(e.target.value)
    }
    const relationHandler = (e) =>{
        setRelation(e.target.value)
    }
    const contactHandler = (e) =>{
        setContact(e.target.value)
    }
    const genderHandler = (e) =>{
        setGender(e.currentTarget.value)
    }
    const martialHandler = (e) =>{
        setMartial(e.currentTarget.value)
    }
    const heightHandler = (e) =>{
        setHeight(e.target.value)
    }
    const weightHandler = (e) =>{
        setWeight(e.target.value)
    }
    const emergencyNameHandler = (e) =>{
        setEmergencyName(e.target.value)
    }
    const emergencyNumberHandler = (e) =>{
        setEmergencyNumber(e.target.value)
    }
    const locationHandler = (e) =>{
        setLocation(e.target.value)
    }
    const countryCodeHandler = (val) =>{
        setCountryCode1(val)
    }
    const countryCodeHandler1 = (val) =>{
        setCountryCode2(val)
    }
    const dayHandler = (e) =>{
        setDay(e.target.value)
    }
    const monthHandler = (e) =>{
        setMonth(e.target.value)
    }
    const yearHandler = (e) =>{
        setYear(e.target.value)
    }
    //other states
    const AddDetails = (e) =>{
        setAdd(!add);
        setFieldId(e.currentTarget.id);
    }
    const closeHandler = () =>{
        setAdd(!add);
    }
    const handleClick = (e) =>{
        setActiveTab(e.target.id);
    }

    const navigateHandler = () =>{
        router.push("/patientdetails")
    }

    const valueHandler = (type,val) => {
        
        if(type == "Blood Group"){
            setBlood(val)
        }
        else if(type == "Allergies"){
            setAllergies(val)
        }
        else if(type == "Current medications"){
            setCurrentMed(val)
        }
        else if(type == "Past medications"){
            setPastMed(val)
        }
        else if(type == "Chronic diseases"){
            setChronic(val)
        }
        else if(type == "Injuries"){
            setInjuries(val)
        }
        else if(type == "Surgeries"){
            setSurgeries(val)
        }
    }

    const reportsHandler = (type,disease,file) =>{
        reportType.push(type)
        diseaseName.push(disease)
        reportFile.push(file)
    }

//form submit
const formSubmit = (e) =>{
    e.preventDefault();
    
    createUserWithEmailAndPassword(email,password)
    .then(authUser =>{
        var myHeaders = new Headers();
        myHeaders.append("Content-Type","application/json");
        
        var raw = JSON.stringify({
            "name":name,
            "email":email,
            "password":password
        });
            
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/register`, requestOptions)
        .then(response => response.json())
        .then(result => {
            authUser.user.sendEmailVerification()
            userOnBoard(authUser)
            signOutOnBoard()
        })
        .catch(error => console.log('error', error));            
    })
    .catch(error => {
        if(error.message == 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).'){
            toast.error("Email Already Exists",{
                toastId:"2"
            });
        }
    })
}

//user OnBoard API, (userID from here)
const userOnBoard = (authUser) =>{
    var myHeaders = new Headers();
    myHeaders.append("token",authUser.user.multiFactor.user.accessToken);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
        "role": "docter",
        "email":email
    });

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
        redirect: 'follow'
    };

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/onboarding`, requestOptions)
    .then(response => response.text())
    .then(result => {
        var parse = JSON.parse(result)
        setUserId(parse.user._id)
        console.log(parse.user._id)
        if(parse.user._id){
            getDoctor(parse.user._id);
        }else{
            console.log("error occured while calling getDoctor")
        }
    })
    .catch(error => console.log('error', error));
}

//getDoctor Details (doctorID from here)
const getDoctor = (userID) =>{
    var myHeaders = new Headers();
    myHeaders.append("token",JWTToken);

    var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
    };

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/profile-me`, requestOptions)
    .then(response => response.text())
    .then(result => {
        var parse = JSON.parse(result)
        setDoctorId(parse.docter._id);
        if(parse.docter._id){
            addNewPatient(userID,parse.docter._id);
        }else{
            console.log("error occured while calling addNewPatient")
        }
        
    })
    .catch(error => console.log('error', error));
}

//add new patient API (patientID from here)
const addNewPatient = (userID,doctorID) =>{
    var myHeaders = new Headers();
    myHeaders.append("token",JWTToken);
    myHeaders.append("Content-Type", "application/json");

    var personalData = JSON.stringify({
        "user":userID,
        "name":name,
        "phone":contact,
        "email":email,
        "relation":relation,
        "gender":gender,
        "dob":year+"-"+month+"-"+day,
        "martialStatus":martial,
        "height":height,
        "weight":weight,
        "emergencyNumber":emergencyNumber,
        "emergencyContactName":emergencyName,
        "location":location,
        "avatar":""
    })

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body:personalData,
        redirect: 'follow'
    };

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}patient/add`, requestOptions)
    .then(response => response.text())
    .then(result => {
        const parsedResult = JSON.parse(result)
        setPatientId(parsedResult.patient._id)
        if(parsedResult.patient._id){
            addPatientMedicalData(parsedResult.patient._id,userID,doctorID)
        }else{
            console.log("error occured while calling addPatientMedicalData")
        }
    })
    .catch(error => console.log('error', error));
}

//add Patients Medical Data
const addPatientMedicalData = (patientID,userID,doctorID) =>{
    var myHeaders = new Headers();
    myHeaders.append("token",JWTToken);
    myHeaders.append("Content-Type", "application/json");

    var medicalData = JSON.stringify({
        "patientId":patientID,
        "bloodGroup":blood,
        "allergies":allergies,
        "medications":currentMed,
        "pastMedications":passtMed,
        "chronicDisease":chronic,
        "injuries":injuries,
        "surgeries":surgeries
    })

    var requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body:medicalData,
        redirect: 'follow'
    };

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}patient/add-patientMedical`, requestOptions)
    .then(response => response.text())
    .then(result => {
        saveReport(patientID,userID,doctorID)
        console.log(result)
    })
    .catch(error => console.log('error', error));
}

//save Reports
const saveReport = (patientID,userID,doctorID) =>{
    for(var i=0;i<reportType.length;i++){
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "reportType": reportType[i],
            "diagonsedFor": diseaseName[i],
            "reportFile": "",
            "patient": patientID,
            "user": userID,
            "docter": doctorID
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter-report-of-patient`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
        })
        .catch(error => console.log('error', error));
    }
}

const removeHandler = (e) =>{
    if(e.target.name == "allergy"){
        const listing = [...allergies]
        const id = e.currentTarget.id;
        listing.splice(id,1)
        setAllergies(listing)
    }
}
  return (
    <>
        <Header title="Add a new patient"></Header>
        <div className={`${styles["wrapper"]}`}>
            <form onSubmit={formSubmit}>
                <div className='d-flex d-justify-space-between'>
                    <div className={`d-flex ${styles["tabs-wrapper"]}`}>
                        <h3 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab1" ? styles["active"] : ""} `}>Personal</h3>
                        <h3 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab2" ? styles["active"] : ""}`} >Medical</h3>
                    </div>
                    <button className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["save-btn"]}`}>
                        <h5 className='text-primary f-500 l-22'>Save</h5>
                        <img src='save-tick.png'></img>
                    </button>
                </div>
                {activeTab === "tab1" &&
                    <div className={`d-flex d-flex-column ${styles["personal-details-wrapper"]}`}>
                        <div className={`p-relative col-12 ${styles["personal-detail-img"]}`}>
                            <input 
                                type='file'
                                ref={avatarRef}
                                multiple={false}
                                onChange={avatarHandler}
                            >
                            </input>
                        </div>
                        <div className='d-flex col-12'>
                            <div className='col-5'>
                                <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Name</h6>
                                    <input value={name} onChange={nameHandler} className='text-secondary l-22 f-400' type="text" required></input>
                                </div>
                                <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Email</h6>
                                    <input value={email} onChange={emailHandler} className='text-secondary l-22 f-400' type="email" required></input>
                                </div>
                                <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Password</h6>
                                    <input value={password} onChange={passwordHandler} className='text-secondary l-22 f-400' type="password" required></input>
                                </div>
                                <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Relationship</h6>
                                    <input value={relation} onChange={relationHandler} className='text-secondary l-22 f-400' type="text" required></input>
                                </div>
                                <div className={`d-flex d-flex-column ${styles["contact-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Contact</h6>
                                    <div className='d-flex'>
                                        <DropDown handler={countryCodeHandler} data={countryCodeList} placeholder="+91"></DropDown>
                                        <input value={contact} onChange={contactHandler} className={`col-12 text-secondary l-22 f-400 ${styles["contact-input"]}`} type="text" required></input>
                                    </div>
                                </div>
                                
                                <div className={`${styles["gender-radio-btn-wrapper"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Gender</h6>   
                                    <div className={`d-flex ${styles["gender-radio-btns"]}`}>
                                        <div className={`d-flex d-align-center ${styles["gender-radio-btn-1"]}`}>
                                            <input onClick={genderHandler} value="male" className='cursor-pointer' type="radio" name="gender" id="male"></input>
                                            <label className='cursor-pointer l-22 f-400' htmlFor="male">Male</label>
                                        </div>
                                        <div className={`d-flex d-align-center ${styles["gender-radio-btn-2"]}`}>
                                            <input onClick={genderHandler} value="female" className='cursor-pointer' type="radio" name="gender" id='female'></input>
                                            <label className='cursor-pointer l-22 f-400' htmlFor="female">Female</label>
                                        </div>
                                    </div>                                 
                                </div>
                                <div className={`d-flex d-flex-column ${styles["contact-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Date of Birth</h6>
                                    <div className={`d-flex ${styles["date-of-birth-drp"]}`}>
                                        {/* <DynamicDropdown width="200px"></DynamicDropdown>
                                        <DynamicDropdown width="200px"></DynamicDropdown>
                                        <DynamicDropdown width="200px"></DynamicDropdown> */}
                                        
                                    </div>
                                    
                                </div>
                                <div className={`d-flex ${styles["name-field"]}`}>
                                    <input value={day} onChange={dayHandler} className='col-4 text-secondary l-22 f-400' type="text" required></input>
                                    <input value={month} onChange={monthHandler} className='col-4 text-secondary l-22 f-400' type="text" required></input>
                                    <input value={year} onChange={yearHandler} className='col-4 text-secondary l-22 f-400' type="text" required></input>
                                </div>
                            </div>

                            <div className='col-5 offset-1'>
                                <div className={`${styles["gender-radio-btn-wrapper"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Martial Status</h6>   
                                    <div className={`d-flex ${styles["gender-radio-btns"]}`}>
                                        <div className={`d-flex d-align-center ${styles["gender-radio-btn-1"]}`}>
                                            <input onClick={martialHandler} value="single" className='cursor-pointer' type="radio" name="martial" id="single"></input>
                                            <label className='cursor-pointer l-22 f-400' htmlFor="single">Single</label>
                                        </div>
                                        <div className={`d-flex d-align-center ${styles["gender-radio-btn-2"]}`}>
                                            <input onClick={martialHandler} value="married" className='cursor-pointer' type="radio" name="martial" id='married'></input>
                                            <label className='cursor-pointer l-22 f-400' htmlFor="married">Married</label>
                                        </div>
                                    </div>                                 
                                </div>
                                <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Height</h6>
                                    <input value={height} onChange={heightHandler} className='text-secondary l-22 f-400' type="text" required></input>
                                </div>
                                <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Weight</h6>
                                    <input value={weight} onChange={weightHandler} className='text-secondary l-22 f-400' type="text" required></input>
                                </div>
                                <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Emergency Contact name</h6>
                                    <input value={emergencyName} onChange={emergencyNameHandler} className='text-secondary l-22 f-400' type="text" required></input>
                                </div>
                                <div className={`d-flex d-flex-column ${styles["contact-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Emergency Contact number</h6>
                                    <div className='d-flex'>
                                        <DropDown handler={countryCodeHandler1} data={countryCodeList} placeholder="+91"></DropDown>
                                        <input value={emergencyNumber} onChange={emergencyNumberHandler} className={`col-12 text-secondary l-22 f-400 ${styles["contact-input"]}`} type="text"></input>
                                    </div>
                                </div>
                                <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                    <h6 className='text-secondary l-20 f-600'>Location</h6>
                                    <input value={location} onChange={locationHandler} className='text-secondary l-22 f-400' type="text" required></input>
                                </div>
                            </div>
                        </div>
                    </div>
                }
                {activeTab === "tab2" && 
                    <>
                        <div className={`d-flex d-align-center d-justify-space-between col-6 ${styles["medical-details-wrapper"]}`}>
                            <h6 className='f-600 l-20 text-secondary'>Blood Group</h6>
                            <div onClick={AddDetails} id="Blood Group" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                                <img src='plus-icon.png'></img>
                                <h6 className='text-primary'>Add</h6>
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column col-6 ${styles["medical-details-wrapper"]}`}>
                            <div className={`col-12 d-flex d-align-center d-justify-space-between`}>
                                <h6 className='f-600 l-20 text-secondary'>Allergies</h6>
                                <div onClick={AddDetails} id="Allergies" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                                    <img src='plus-icon.png'></img>
                                    <h6 className='text-primary'>Add</h6>
                                </div>
                            </div>
                            <div className={`d-flex ${styles["badeges-wrapper"]}`}>
                                {allergies && allergies.map((item,index)=>(
                                    <div className={`d-flex d-align-center d-justify-center ${styles["badges-item"]}`}>
                                        <span className='text-grey-2 l-22 f-400 h6'>{item}</span>
                                        <img name="allergy" id={index} onClick={removeHandler} className='cursor-pointer' src='cross-grey.png'></img>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column col-6 ${styles["medical-details-wrapper"]}`}>
                            <div className={`col-12 d-flex d-align-center d-justify-space-between`}>
                                <h6 className='f-600 l-20 text-secondary'>Current Medication</h6>
                                <div onClick={AddDetails} id="Current medications" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                                    <img src='plus-icon.png'></img>
                                    <h6 className='text-primary'>Add</h6>
                                </div>
                            </div>
                            <div className={`d-flex ${styles["badeges-wrapper"]}`}>
                                {currentMed && currentMed.map((item)=>(
                                    <div className={`d-flex d-align-center d-justify-center ${styles["badges-item"]}`}>
                                        <span className='text-grey-2 l-22 f-400 h6'>{item}</span>
                                        <img className='cursor-pointer' src='cross-grey.png'></img>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column col-6 ${styles["medical-details-wrapper"]}`}>
                            <div className={`col-12 d-flex d-align-center d-justify-space-between`}>
                                <h6 className='f-600 l-20 text-secondary'>Past Medication</h6>
                                <div onClick={AddDetails} id="Past medications" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                                    <img src='plus-icon.png'></img>
                                    <h6 className='text-primary'>Add</h6>
                                </div>
                            </div>
                            <div className={`d-flex ${styles["badeges-wrapper"]}`}>
                                {passtMed && passtMed.map((item)=>(
                                    <div className={`d-flex d-align-center d-justify-center ${styles["badges-item"]}`}>
                                        <span className='text-grey-2 l-22 f-400 h6'>{item}</span>
                                        <img className='cursor-pointer' src='cross-grey.png'></img>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column col-6 ${styles["medical-details-wrapper"]}`}>
                            <div className={`col-12 d-flex d-align-center d-justify-space-between`}>
                                <h6 className='f-600 l-20 text-secondary'>Chronic Disease</h6>
                                <div onClick={AddDetails} id="Chronic diseases" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                                    <img src='plus-icon.png'></img>
                                    <h6 className='text-primary'>Add</h6>
                                </div>
                            </div>
                            <div className={`d-flex ${styles["badeges-wrapper"]}`}>
                                {chronic && chronic.map((item)=>(
                                    <div className={`d-flex d-align-center d-justify-center ${styles["badges-item"]}`}>
                                        <span className='text-grey-2 l-22 f-400 h6'>{item}</span>
                                        <img className='cursor-pointer' src='cross-grey.png'></img>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column col-6 ${styles["medical-details-wrapper"]}`}>
                            <div className={`col-12 d-flex d-align-center d-justify-space-between`}>
                                <h6 className='f-600 l-20 text-secondary'>Injuries</h6>
                                <div onClick={AddDetails} id="Injuries" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                                    <img src='plus-icon.png'></img>
                                    <h6 className='text-primary'>Add</h6>
                                </div>
                            </div>
                            <div className={`d-flex ${styles["badeges-wrapper"]}`}>
                                {injuries && injuries.map((item)=>(
                                    <div className={`d-flex d-align-center d-justify-center ${styles["badges-item"]}`}>
                                        <span className='text-grey-2 l-22 f-400 h6'>{item}</span>
                                        <img className='cursor-pointer' src='cross-grey.png'></img>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column col-6 ${styles["medical-details-wrapper"]}`}>
                            <div className={`col-12 d-flex d-align-center d-justify-space-between`}>
                                <h6 className='f-600 l-20 text-secondary'>Surgeries</h6>
                                <div onClick={AddDetails} id="Surgeries" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                                    <img src='plus-icon.png'></img>
                                    <h6 className='text-primary'>Add</h6>
                                </div>
                            </div>
                            <div className={`d-flex ${styles["badeges-wrapper"]}`}>
                                {injuries && injuries.map((item)=>(
                                    <div className={`d-flex d-align-center d-justify-center ${styles["badges-item"]}`}>
                                        <span className='text-grey-2 l-22 f-400 h6'>{item}</span>
                                        <img className='cursor-pointer' src='cross-grey.png'></img>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column col-6 ${styles["medical-details-wrapper"]}`}>
                            <div className={`col-12 d-flex d-align-center d-justify-space-between`}>
                                <h6 className='f-600 l-20 text-secondary'>Reports</h6>
                                <div onClick={AddDetails} id="Reports" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                                    <img src='plus-icon.png'></img>
                                    <h6 className='text-primary'>Add</h6>
                                </div>
                            </div>
                            <div className='d-flex d-align-center gap-2'>
                                {reportFile && reportFile.map((item,index)=>(
                                    <div className={`d-flex col-4 ${styles["reports-details-wrapper"]}`}>
                                        <div className='d-flex d-align-center d-justify-space-between gap-2 '>
                                            <div>
                                                <img src='file-uploader.png'></img>
                                            </div>
                                            <div className='d-flex d-align-center d-justify-space-between gap-2'>
                                                <h5 className='text-secondary f-500 l-22'>
                                                    <a href={item} target="_blank">Reoprt{index+1}.png</a>
                                                </h5>
                                                <img className='cursor-pointer' src='cross-grey.png'></img>
                                            </div>
                                        </div>
                                    </div> 
                                ))}
                            </div>
                        </div>
                    </>  
                }
            </form>
        </div>
        {add && 
            <Modal modalClass="modal-verify">
                <Choice name={fieldId} handler={closeHandler} values={valueHandler} reports={reportsHandler} ></Choice>
            </Modal>
        }
    </>
  )
}

export default AddNewPatient