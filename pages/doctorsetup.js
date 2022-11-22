import React,{useEffect, useRef, useState} from 'react';
import styles from '../modules/css/doctorSignup.module.css';
import DropDown from '../modules/DropDown';
import DaySelector from '../modules/DaySelector';
import DropDownDate from '../modules/DropDownDate';
import Stepper from '../modules/Stepper';
import { useRouter } from 'next/router';
import PlacesAutocomplete from 'react-places-autocomplete';
import { getVezitaOnBoardFromCookie } from '../auth/userCookies';
import { GoogleMap,useJsApiLoader  } from '@react-google-maps/api';
import CountryCode from '../modules/CountryCode.json'
import Modal from '../modules/Modals/Modal';
import Verify from '../modules/Modals/Verify';
const containerStyle = {
    width: '500px',
    height: '160px'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };
  
export default function DoctorSetup() {
    const [map, setMap] = useState(null)
    const {isLoaded } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: "AIzaSyBGTPA5a9Z0p_9WMrmgaJDsQMggDn0-XY0"
    })
    
    const onLoad = React.useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);
        setMap(map)
    }, [])

    const onUnmount = React.useCallback(function callback(map) {
        setMap(null)
    }, [])


    const [tab, setTab] = useState(0);
    const router = useRouter();
    const JWTToken = getVezitaOnBoardFromCookie();
    const [skip,setSkip] = useState(false)
    const [estId,setEstId] = useState("")
    
    //tab1 state
    const [specialization,setSpecialization] = useState("");
    const [city,setCity] = useState("")
    const [doctorName,setDoctorName] = useState("")
    const [gender,setGender] = useState("female")
    const [specializationId,setSpecializationId] = useState("")
    //tab2 state
    const [regNumber,setRegNumber] = useState("");
    const [regCouncil,setRegCouncil] = useState("");
    const [regYear,setRegYear] = useState("");
    const [doctorId,setDoctorId] = useState("");

    //tab3 state
    const [degree,setDegree] = useState("");
    const [college,setCollege] = useState("");
    const [yearComp,setYearComp] = useState("");
    const [yearExp,setYearExp] = useState("");

    //tab4 state
    const [establishment,setEstablishment] = useState("")

    //tab5 state
    const [estName,setEstName] = useState("")
    const [estCity,setEstCity] = useState("")
    const [lat,setLat] = useState("")
    const [long,setLong] = useState("")

    //tab6 state
    const idRef = useRef();
    const [idProof,setIdProof] = useState("")
    const [isIdUploaded,SetIdUploaded] = useState(false)

    //tab7 state
    const medicalRef = useRef();
    const [medReg,setMedReg] = useState("")
    const [isMedUploaded,SetMedUploaded] = useState(false)

    //tab8 state
    const estRef = useRef();
    const [estProof,setEstProof] = useState("")
    const [clinicProof,setClinicProof] = useState("")
    const [isClinic,setIsClinic] = useState(false)

    //tab11 state
    const [contact,setContact] = useState()
    const [address,setAddress] = useState()
    const[countryCode,setCountryCode] = useState("+91")
    const [countryCodeList,setCountryCodeList] = useState([])
    const[modal,setModal] = useState(false)

    //tab12
    const dayArray = [];
    const[inputList,setInputList] = useState([{startTime:"",endTime:""}])  

    //tab13 state
    const [fees,setFees] = useState("")
    const [hour,setHour] = useState("")

    const continueHandler = () =>{
        router.push("/subscription");
    }
    const nextHandler = () =>{
        if(tab == 0 || tab == 1){
            setTab(prev => prev+1)
        }else if(tab == 6 || tab == 10){
            setTab(prev => prev+1)
        }
        else{
            getProfile()
        }
    }
    const prevHandler = () =>{
        setTab(prev => prev-1)
    }
    const detailChangeHandler = () => {
        setTab(1);
    }
    const verificationSkipHandler = () =>{
        setTab(10)
        setSkip(true)
    }
    const verificationChangeHandler = () => {
        setTab(7);
    }
    const getPatientSkipHandler = () => {
        setTab(14)
    }
    const getPatientsChangeHandler = () => {
        setTab(11)
    }


    const handleSelect = async value => { }

    //tab 1 handler
    const nameHandler = (e) =>{
        setDoctorName(e.target.value);
    }
    const specializationHandler = (val) =>{
        setSpecializationId(val)
    }
    const genderHandler = (e) =>{
        setGender(e.target.value)
    }

    //tab2 handler
    const RegNumberHandler = (e) => {
        setRegNumber(e.target.value)
    }
    const RegCouncilHandler = (e) =>{
        setRegCouncil(e.target.value)
    }
    const RegYearHandler = (e) =>{
        setRegYear(e.target.value)
    }

    //tab3 handler
    const degreeHandler = (e) =>{
        setDegree(e.target.value)
    }
    const collegeHandler = (e) =>{
        setCollege(e.target.value)
    }
    const yearCompHandler  = (e) =>{
        setYearComp(e.target.value)
    }
    const yearExpHandler = (e) =>{
        setYearExp(e.target.value)
    }

    //tab4 handler
    const establishmentHandler = (e) =>{
        setEstablishment(e.target.value)
    }

    //tab5 handler
    const estHandler = (e) =>{
        setEstName(e.target.value)
    }
    const estCityHandler = (e) =>{
        setEstCity(e.currentTarget.id)
        // geocodeByAddress(e.currentTarget.id)
        // .then(results => getLatLng(results[0]))
        // .then(({ lat, lng }) =>{
        //     setLong(lng),
        //     setLat(lat)
        // });
    }

    //tab6 handler
    const idHandler = (e) =>{
        setIdProof(e.target.files[0].name)
        SetIdUploaded(true)
    }
    //tab7 handler 
    const medRegHandler = (e) =>{
        setMedReg(e.target.files[0].name)
        SetMedUploaded(true)
    }
    //tab8 Handler
    const estProofHandler = (e) =>{
        setEstProof(e.currentTarget.value)
    }
    const clinicProofHandler = (e) =>{
        setClinicProof(e.target.files[0].name)
        setIsClinic(true)
    }

    //tab11 Handler
    const getLatLang = (e) =>{
        const lat = e.latLng.lat()
        const long = e.latLng.lng()
        setLat(lat)
        setLong(long)
    }
    const countryCodeHandler = (val) =>{
        setCountryCode(val)
    }
    const addressHandler = (e) =>{
        setAddress(e.target.value)
    }
    const contactHandler = (e) =>{
        setContact(e.target.value)
    }
    const modalHandler = () =>{
        setModal(!modal)
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "contactNumber": contact,
            "location": {
                "type": "Point",
                "coordinates": [
                    long,
                    lat
                ],
                "address":address
            },
        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}establishment/update/${estId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setTab(12)
        })
        .catch(error => console.log('error', error));
    }
    //Tab 12 Handler
    const dayHandler = (day,val) =>{
        if(val){
            dayArray.push(day)
        }
        else{
            for(var i = 0;i<dayArray.length;i++){
                if(dayArray[i] === day){
                    dayArray.splice(i,1);
                }
            }
        }
    }
    //add session slot
    const addSessionHandler = () =>{
        setInputList([...inputList,{startTime:"",endTime:""}])
    }

    //
    //handle session slots input
    
    const startHandler = (value,index) =>{
        const name = "startTime";
        const val = value;
        const list = [...inputList];
        list[index][name] = val;
        setInputList(list);
    }
    const endHandler = (value,index) =>{
        const name = "endTime";
        const val = value;
        const list = [...inputList];
        list[index][name] = val;
        setInputList(list);
    }
   
    //remove a full slot of session
    // const removeSessionHandler = (index) =>{
    //     const list = [...inputList];
    //     list.splice(index,1);
    //     setInputList(list)
    // }

    //tab13 handler
    const feesHandler = (e) =>{
        setFees(e.target.value)
    }
    const hourHandler = (e) =>{
        setHour(e.target.value)
    }

    useEffect(()=>{
        for(var i = 0;i<CountryCode.length;i++){
            setCountryCodeList(CountryCode)
        }
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}service/specializations`, requestOptions)
        .then(response => response.text())
        .then(result => {
            var parsedResult = JSON.parse(result)
            setSpecialization(parsedResult.specialization)
        }) 
        .catch(error => console.log('error', error));
        getProfile();
    },[])

    //get profile Handler
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
            setDoctorId(parsedResult.docter._id)
            if(parsedResult.docter.fullName){
                setTab(2)
            }
            if(parsedResult.docter.medicalRegistrationDetails[0].councilName){
               setTab(3)
            }
            console.log(parsedResult.docter.education[0].degree)
            if(parsedResult.docter.education[0].degree){
                setTab(4)
            }
            if(parsedResult.docter.establishment[0].establishmentName){
                setTab(6)
                setEstId(parsedResult.docter.establishment[0]._id)
            }
            if(parsedResult.docter.establishment[0].contactNumber){
                setTab(12)
            }
            if(parsedResult.docter.establishment[0].consultationDay[0]){
                setTab(13)
            }
            if(parsedResult.docter.establishment[0].consultationFee){
                setTab(14)
            }
            if(parsedResult.docter.isDocumentUploaded == false)
                getDocument(parsedResult.docter._id)
        })
        .catch(error => console.log('error', error));
    }

    //get document Handler 
    const getDocument = (doctorID) =>{
        console.log(tab)
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}document/${doctorID}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            const doc = JSON.parse(result)
            if(doc.documents[0].documentType == "identity"){
                setTab(8)
            }
            if(doc.documents[1].documentType == "medical"){
                setTab(9)
            }
            if(doc.documents[2].documentType == "establishment"){
                updateDocumentStatus(doctorID)
                setTab(10)
            }
            else{
                setTab(prev => prev+1)
            }
        })
        .catch(error => console.log('error', error));
    }

    //update document status
    const updateDocumentStatus = (doctorID) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "isDocumentUploaded": true
        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/update/${doctorID}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    //Basic details from
    const formSubmit = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type","application/json");

        var raw = JSON.stringify({
            "basicDetails":{
                "title": "Dr.",
                "fullName":doctorName,
                "gender":gender,
                "city":city,
                "specialization":specializationId
            }
        });

        var requestOptions = {
            method: 'PUT',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/profile`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setTab(prev => prev+1)
            getProfile()
        })
        .catch(error => console.log('error', error));
    }

    //Medical Details from 
    const medicalFormHandler = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "registrationNumber":regNumber,
            "councilName": regCouncil,
            "year": regYear,
            "docter":doctorId
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}registration`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setTab(3)
            getProfile()
        })
        .catch(error => console.log('error', error));
    }

    //Education Details form
    const educationFormHandler = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "degree":degree,
            "institute": college,
            "year": yearComp,
            "experience": yearExp,
            "docter":doctorId
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}qualification`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setTab(4)
            getProfile()
        })
        .catch(error => console.log('error', error));
    }

    //connect practice
    const estabForm = (e)=>{
        e.preventDefault()
        if(establishment){
            setTab(5)
        }
    }
    //establishment 
    const estabNameHandler = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "establishmentName": estName,
            "establishmentType":establishment,
            "location":{
                "type":"Point",
                "coordinates":[0,0]
            }
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}establishment`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setTab(6)
            getProfile()
        })
        .catch(error => console.log('error', error));
    }

    //Identity Proof
    const idProofForm = (e) =>{
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "documentType": "identity",
            "document": idProof
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}document`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setTab(8)
        })
        .catch(error => console.log('error', error));
    }

    //Medical Reg Proof
    const medicalHandler = (e) =>{
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "documentType": "medical",
            "document": medReg
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}document`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setTab(9)
        })
        .catch(error => console.log('error', error));
    }

    //Establishment Proof
    const estProofForm = (e) =>{
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "documentType": "establishment",
            "document": clinicProof
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}document`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setTab(10)
        })
        .catch(error => console.log('error', error));
    }

    //Location and Timing
    const locationForm = (e) =>{
        e.preventDefault();
        // setModal(prev => prev+1)
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "contactNumber": contact,
            "location": {
                "type": "Point",
                "coordinates": [
                    long,
                    lat
                ],
                "address":address
            },
        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}establishment/update/${estId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            setTab(12)
        })
        .catch(error => console.log('error', error));
    }

    //session form
    const sessionForm = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "consultationDay":dayArray
        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}establishment/update/${estId}`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
      
        var raw2 = JSON.stringify(inputList);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw2,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}slot`, requestOptions)
        .then(response => response.text())
        .then(result => { 
            setTab(13)
        })
        .catch(error => console.log('error', error));
    }

    //consult form
    const consultForm = (e) =>{
        e.preventDefault()
        console.log(fees,hour)
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "consultationFee": fees
        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}establishment/update/${estId}`, requestOptions)
        .then(response => response.text())
        .then(result => setTab(14))
        .catch(error => console.log('error', error));
    }
  return (
    <>
        <div className='col-12 d-flex d-flex-wrap '>

            <div className='col-6 bg-primary vh-100 d-flex-wrap d-flex  d-justify-center'>
                <div className='col-12 d-flex d-align-end d-justify-center'>
                    <img src="logo.png"/>
                </div>

                <div className='col-8 mt-76'>
                    {tab == 0 && <img src="doctor-setup.png" className='w-100'/>}
                    {tab == 1 && <img src="step1.png" className='w-100'/>}
                    {tab == 2 && <img src="steps.png" className='w-100'/>}
                    {tab == 3 && <img src="steps.png" className='w-100'/>}
                    {tab == 4 && <img src="steps.png" className='w-100'/>}
                    {tab == 5 && <img src="steps.png" className='w-100'/>}
                    {tab == 6 && <img src="doctor-setup.png" className='w-100'/>}
                    {tab == 7 && <img src="step1.png" className='w-100'/>}
                    {tab == 8 && <img src="step1.png" className='w-100'/>}
                    {tab == 9 && <img src="steps.png" className='w-100'/>}
                    {tab == 10 && <img src="doctor-setup.png" className='w-100'/>}
                    {tab == 11 && <img src="step1.png" className='w-100'/>}
                    {tab == 12 && <img src="steps.png" className='w-100'/>}
                    {tab == 13 && <img src="steps.png" className='w-100'/>}
                    {tab == 14 && <img src="doctor-setup.png" className='w-100'/>}
                </div>
            </div>

            <div className={`col-6 h-100 d-flex-wrap d-flex  d-justify-center ${styles["doctor-form-col-6"]}`}>
                <div className='col-10 col-md-11 offset-xl-1 offset-xxl-2 offset-xxxl-3 d-flex d-flex-wrap'>
                    <div className={styles["doctors-form"]}>
                        {tab == 0 &&
                            <>
                                <h1 className='f-600 l-40 text-secondary col-12'>Get started as a doctor</h1>
                                <h5 className='f-500 l-22 text-grey-3 mt-2 col-12'>Complete your profile to earn as a doctor is just a few steps</h5>
                                <div className='bg-light-blue p-5 rounded-12 mt-50'>
                                    <h3 className='f-500 l-28 text-dark-blue'>Step A: Profile details</h3>
                                    <h4 className='f-400 mt-2 l-22 text-grey-2'>Doctors basic details, medical registration, education qualification, establishment details etc.</h4>
                                    <button className='btn btn-primary mt-4' onClick={nextHandler}>Continue</button>
                                </div>
                                <h3 className='col-12 f-500 l-28 text-secondary mt-8'>Step B: Profile verification</h3>
                                <h4 className='col-12 f-400 mt-2 l-22 text-grey-2'>Doctor identity proof, registration proof, establishment ownership proof etc.</h4>
                                <h3 className='col-12 f-500 l-28 text-secondary mt-50'>Step C: Start getting patients</h3>
                                <h4 className='col-12 f-400 mt-2 l-22 text-grey-2'>Location, Timings, Fees</h4>
                            </>
                        }
                        {tab == 1 && 
                        <>
                            <Stepper title="5" active="0"></Stepper>
                            <h1 className='f-600 mt-60 l-40 text-secondary col-12'>Basic Details</h1>
                            <form onSubmit={formSubmit}>
                                <div className='d-flex mt-7 col-12 gap-2'>
                                    <div className='col-3'>
                                        <label>Prefix</label>
                                        <input placeholder="Dr" readOnly></input>
                                    </div>
                                    <div className='col-9'>
                                        <label>Name</label><br/>
                                        <input type="text" value={doctorName} onChange={nameHandler} placeholder='Jane Doe' required/>
                                    </div>
                                </div>

                                <label className='d-flex'>Specialization</label>
                                <DropDown name="specialization" handler={specializationHandler} data={specialization} placeholder="Select Specialization"></DropDown>
                                
                                <label className='d-flex'>Gender</label>
                                <div className="d-flex">
                                    {gender==="male"?
                                        <>
                                            <div className={`${styles["radio-buttons"]} d-flex`}>
                                                <input onClick={genderHandler} type="radio" id="male" name="gender" value="male" checked/>
                                                <label htmlFor="male">Male</label>
                                            </div>
                                            <div className={`${styles["radio-buttons"]} d-flex ml-4`}>
                                                <input onClick={genderHandler} type="radio" id="female" name="gender" value="female"/>
                                                <label htmlFor="female">Female</label>
                                            </div>
                                        </>
                                        :  
                                        <>
                                            <div className={`${styles["radio-buttons"]} d-flex`}>
                                                <input onClick={genderHandler} type="radio" id="male" name="gender" value="male" />
                                                <label htmlFor="male">Male</label>
                                            </div>
                                            <div className={`${styles["radio-buttons"]} d-flex ml-4`}>
                                                <input onClick={genderHandler} type="radio" id="female" name="gender" value="female" checked/>
                                                <label htmlFor="female">Female</label>
                                            </div>
                                        </>
                                    }
                                </div>

                                <label className='d-flex'>City</label>
                                <PlacesAutocomplete value={city} onChange={setCity} onSelect={handleSelect}>
                                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                        <>
                                            <input {...getInputProps({placeholder:"Select your City"})}></input>
                                            <div className={`${styles["city-suggestion-list"]}`}>
                                                {loading ?<h6 className='f-400'>...loading</h6>: null}
                                                {suggestions.map((suggestion,index) => {
                                                    return (
                                                        <div key={index}
                                                        {...getSuggestionItemProps(suggestion)}
                                                        >
                                                            <h6 onClick={()=>setCity(suggestion.description)} className='cursor-pointer f-400'>{suggestion.description}</h6>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                    )}
                                </PlacesAutocomplete>
                                {/* <input placeholder="Select your city" ></input> */}
                                <div className='d-flex mt-7 gap-2'>
                                    {/* <div className='col-6 btn btn-outline-grey' onClick={prevHandler}>Previous</div> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>
                        </> 
                        }
                        {tab == 2 &&
                        <>
                            <Stepper title="5" active="1"></Stepper>
                            <h1 className='f-600 mt-60 l-40 text-secondary col-12 mb-7'>Medical Registration</h1>
                            <form onSubmit={medicalFormHandler}>
                                <label className='d-flex'>Registration number</label>
                                <input value={regNumber} onChange={RegNumberHandler} type="text" placeholder="Enter your registration number"/>

                                <label className='d-flex'>Registration council</label>
                                <input value={regCouncil} onChange={RegCouncilHandler} type="text" placeholder="Enter your registration council"/>

                                <label className='d-flex'>Registration year</label>
                                <input value={regYear} onChange={RegYearHandler} type="text" placeholder="Enter your registration year"/>

                                <div className='d-flex mt-7 gap-2'>
                                    {/* <button className='col-6 btn btn-outline-grey' onClick={prevHandler}>Previous</button> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>
                        </>}
                        {tab == 3 &&
                        <>
                            <Stepper title="5" active="2"></Stepper>
                            <h1 className='f-600 mt-60 l-40 text-secondary col-12 mb-7'>Education Qualification</h1>
                            <form onSubmit={educationFormHandler}>
                                <label className='d-flex'>Degree</label>
                                <input value={degree} onChange={degreeHandler} type="text" placeholder="Enter your degree"/>

                                <label  className='d-flex'>College/Institute</label>
                                <input value={college} onChange={collegeHandler} type="text" placeholder="Enter your college/institute"/>
                                
                                <label className='d-flex'>Year of Completion</label>
                                <input value={yearComp} onChange={yearCompHandler} type="text" placeholder="Enter year of completion"/>

                                <label className='d-flex'>Years of Experience</label>
                                <input value={yearExp} onChange={yearExpHandler} type="text" placeholder="Type years of experience (between 0-70 years)"/>

                                <div className='d-flex mt-7 gap-2'>
                                    {/* <button className='col-6 btn btn-outline-grey' onClick={prevHandler}>Previous</button> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>
                        </>}
                        {tab == 4 &&
                        <>
                            <Stepper title="5" active="3"></Stepper>
                            <h1 className='f-600 mt-60 l-40 text-secondary col-12 mb-7'>Connect a practice</h1>
                            
                            <form onSubmit={estabForm}>
                                <div className={`${styles["background-wrapper"]} d-flex`}>
                                    <input onClick={establishmentHandler} type="radio" id="own" name="connect" value="own"/>
                                    <h5 className='f-500  text-secondary ml-3 mb-0' htmlFor="own">I own an establishment</h5>
                                </div>
                                <div className={`${styles["background-wrapper"]} d-flex mt-4`}>
                                    <input onClick={establishmentHandler} type="radio" id="visit" name="connect" value="visit"/>
                                    <h5 className='f-500  text-secondary ml-3 mb-0' htmlFor="visit">I visit an establishment</h5>
                                </div>
                                <div className='d-flex mt-7 gap-2'>
                                    {/* <button className='col-6 btn btn-outline-grey' onClick={prevHandler}>Previous</button> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>
                        </>}
                        {tab == 5 &&
                        <>
                            <Stepper title="5" active="4"></Stepper>
                            <h1 className='f-600 l-40 mt-60 text-secondary col-12 mb-7'>Establishment basic details</h1>
                            <form onSubmit={estabNameHandler}>
                                <label className='d-flex'>Establishment name</label>
                                <input value={estName} onChange={estHandler} type="text" placeholder="Enter establishment name"/>
                                
                                <label  className='d-flex'>City</label>
                                <PlacesAutocomplete value={estCity} onChange={setEstCity} onSelect={handleSelect}>
                                    {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                                        <>
                                            <input {...getInputProps({placeholder:"Type or select your college/institute"})}></input>
                                            <div className={`${styles["city-suggestion-list"]}`}>
                                                {loading ?<h6 className='f-400'>...loading</h6>: null}
                                                {suggestions.map((suggestion,index) => {
                                                    return (
                                                        <div key={index}
                                                        {...getSuggestionItemProps(suggestion)}
                                                        >
                                                            <h6 id={suggestion.terms[0].value} onClick={estCityHandler} className='cursor-pointer f-400'>{suggestion.terms[0].value}</h6>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                    )}
                                </PlacesAutocomplete>
                                <div className='d-flex mt-7 gap-2'>
                                    {/* <button className='col-6 btn btn-outline-grey' onClick={prevHandler}>Previous</button> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>    
                        </>}
                        {tab == 6 && 
                        <>
                            <h1 className='f-600 l-40 pl-5 text-secondary col-12'>Great Progress!</h1>
                            <h5 className='f-500 l-22 pl-5 text-grey-3 mt-2 col-12'>Your profile is just a few steps away from going live</h5>
                            <div className='mt-76 pl-5'>
                                <h3 className='f-500 l-28 text-dark-blue'>Step A: Profile details</h3>
                                <h4 className='f-400 mt-2 l-22 text-grey-2'>Doctors basic details, medical registration, education qualification, establishment details etc.</h4>
                                <div className='d-flex d-align-center mt-4'>
                                    <span className='btn btn-light-green d-flex d-align-center d-justify-center' >
                                        <h4 className='f-400 l-26 text-green-4'>Completed</h4>
                                        <svg className='ml-3' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.25C8.57164 0.25 6.68657 0.821828 5.08319 1.89317C3.47982 2.96451 2.23013 4.48726 1.49218 6.26884C0.754225 8.05042 0.561142 10.0108 0.937348 11.9021C1.31355 13.7934 2.24215 15.5307 3.60571 16.8943C4.96928 18.2579 6.70656 19.1865 8.59787 19.5627C10.4892 19.9389 12.4496 19.7458 14.2312 19.0078C16.0127 18.2699 17.5355 17.0202 18.6068 15.4168C19.6782 13.8134 20.25 11.9284 20.25 10C20.245 7.41566 19.2162 4.93859 17.3888 3.11118C15.5614 1.28378 13.0843 0.254956 10.5 0.25ZM15.1406 8.29375L9.64688 13.5438C9.50485 13.6774 9.31687 13.7512 9.12188 13.75C9.02657 13.7514 8.93194 13.7338 8.84344 13.6984C8.75494 13.663 8.67433 13.6105 8.60625 13.5438L5.85938 10.9188C5.78319 10.8523 5.72123 10.7711 5.67722 10.6801C5.63321 10.589 5.60806 10.49 5.60328 10.389C5.5985 10.2881 5.61419 10.1871 5.64941 10.0924C5.68463 9.99758 5.73865 9.9109 5.80822 9.83754C5.8778 9.76417 5.96149 9.70563 6.05426 9.66543C6.14703 9.62523 6.24698 9.6042 6.34809 9.60362C6.44919 9.60303 6.54938 9.62289 6.64261 9.66201C6.73585 9.70113 6.82021 9.7587 6.89063 9.83125L9.12188 11.9594L14.1094 7.20625C14.2552 7.07902 14.4446 7.01309 14.6379 7.02223C14.8312 7.03138 15.0135 7.1149 15.1467 7.25533C15.2798 7.39576 15.3536 7.58222 15.3524 7.77575C15.3513 7.96928 15.2754 8.15488 15.1406 8.29375Z" fill="#19B46E"/>
                                        </svg>
                                    </span>
                                    {/* <h5 className='f-600 l-22 text-green-4 ml-6 cursor-pointer' onClick={detailChangeHandler}>CHANGE</h5> */}
                                </div>
                            </div>
                            <div className='bg-light-blue p-5 rounded-12 mt-8'>
                                <h3 className='col-12 f-500 l-28 text-secondary'>Step B: Profile verification</h3>
                                <h4 className='col-12 f-400 mt-2 l-22 text-grey-2'>Doctor identity proof, registration proof, establishment ownership proof etc.</h4>
                                <div className='d-flex d-align-center mt-4'>
                                    <button className='btn btn-primary' onClick={nextHandler}>Continue</button>
                                    <h5 className='f-600 l-22 text-dark-blue ml-6 cursor-pointer' onClick={verificationSkipHandler}>Skip</h5>
                                </div>
                            </div>
                            <h3 className='col-12 pl-5 f-500 l-28 text-secondary mt-50'>Step C: Start getting patients</h3>
                            <h4 className='col-12 pl-5 f-400 mt-2 l-22 text-grey-2'>Location, Timings, Fees</h4>
                        </>}
                        {tab == 7 && 
                        <>
                            <Stepper title="3" active="0"></Stepper>
                            <h1 className='f-600 l-40 mt-60  text-secondary col-12'>Identity Proof</h1>
                            <form onSubmit={idProofForm}>
                                <h5 className='f-400 l-22  text-secondary mt-7 col-12'>Please upload your identity proof to ensure that the ownership of your profile remains only with you</h5>
                                <h6 className='f-500 l-20 text-grey-3 mt-2'>Acceptable documents includes Driving license, Voter card or any other government ID</h6>
                                
                                <div className={`p-relative col-12 mt-2 d-flex d-justify-center d-align-center ${styles["file-uploader-wrapper"]}`}>
                                    <input
                                        className={`${styles["file-uploader-input"]}`} 
                                        type='file'
                                        ref={idRef}
                                        multiple={false}
                                        onChange={idHandler}
                                    >
                                    </input>
                                    <div className={`d-flex d-align-center ${styles["file-upload-text-and-img"]}`}>
                                        <img src='file-upload.png'></img>
                                        {isIdUploaded?<h6 className='f-400 l-20 text-grey-3'>File Uploaded Sucessfully</h6>:<h6 className='f-400 l-20 text-grey-3'>Upload (PDF, JPG, PNG)</h6>}
                                    </div>
                                </div>
                            
                                <div className='d-flex mt-7 gap-2'>
                                    {/* <button className='col-6 btn btn-outline-grey' onClick={prevHandler}>Previous</button> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>
                        </>
                        }
                        {tab == 8 && 
                        <>
                            <Stepper title="3" active="1"></Stepper>
                            <h1 className='f-600 l-40 mt-60 text-secondary col-12'>Medical Registration Proof</h1>
                            <form onSubmit={medicalHandler}>
                                <h5 className='f-400 l-22  text-secondary mt-7 col-12'>Please upload your identity proof to ensure that the ownership of your profile remains only with you</h5>
                                <h6 className='f-500 l-20 text-grey-3 mt-2'>Acceptable documents includes medical registration certtification</h6>
                                <div className={`p-relative col-12 mt-2 d-flex d-justify-center d-align-center ${styles["file-uploader-wrapper"]}`}>
                                    <input 
                                        className={`${styles["file-uploader-input"]}`} 
                                        type='file'
                                        ref={medicalRef}
                                        multiple={false}
                                        onChange={medRegHandler}
                                    >
                                    </input>
                                    <div className={`d-flex d-align-center ${styles["file-upload-text-and-img"]}`}>
                                        <img src='file-upload.png'></img>
                                        {isMedUploaded?<h6 className='f-400 l-20 text-grey-3'>File Uploaded Sucessfully</h6>:<h6 className='f-400 l-20 text-grey-3'>Upload (PDF, JPG, PNG)</h6>}
                                    </div>
                                </div>
                                <div className='d-flex mt-7 gap-2'>
                                    {/* <button className='col-6 btn btn-outline-grey' onClick={prevHandler}>Previous</button> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>
                        </>
                        }
                        {tab == 9 && 
                        <>
                            <Stepper title="3" active="2"></Stepper>
                            <h1 className='f-600 l-40 mt-40 text-secondary col-12'>Establishment Proof</h1>
                            <h6 className='f-400 l-22  text-secondary mt-4 d-flex'>I am</h6>
                            <form onSubmit={estProofForm}>
                                <div className={`d-flex mt-2`}>
                                    <input onClick={estProofHandler} type="radio" id="owner" name="establishment" value="owner"/>
                                    <h4 className='f-400 l-26 text-secondary ml-4' htmlFor="owner">Owner of the establishment</h4>
                                </div>
                                <div className={`d-flex mt-3`}>
                                    <input onClick={estProofHandler} type="radio" id="Rented other establishment" name="establishment" value="c"/>
                                    <h4 className='f-400 l-26 text-secondary ml-4' htmlFor="v">Rented other establishment</h4>
                                </div>
                                <div className={`d-flex mt-3`}>
                                    <input onClick={estProofHandler} type="radio" id="consultant" name="establishment" value="consultant"/>
                                    <h4 className='f-400 l-26 text-secondary ml-4' htmlFor="consultant">Consultant doctor</h4>
                                </div>
                                <div className={`d-flex mt-3`}>
                                    <input onClick={estProofHandler} type="radio" id="practice" name="establishment" value="practice"/>
                                    <h4 className='f-400 l-26 text-secondary ml-4' htmlFor="practice">Practising at home</h4>
                                </div>
                                <h5 className='f-400 l-22  text-secondary mt-4 col-12'>Accepted Proof</h5>
                                <h6 className='f-500 l-20 text-grey-3 mt-2'>Clinic registration, proof Waste disposal proof, Tax receipt</h6>
                                <div className={`p-relative col-12 mt-2 d-flex d-justify-center d-align-center ${styles["file-uploader-wrapper"]}`}>
                                    <input 
                                        className={`${styles["file-uploader-input"]}`} 
                                        type='file'
                                        ref={estRef}
                                        multiple={false}
                                        onChange={clinicProofHandler}
                                    >
                                    </input>
                                    <div className={`d-flex d-align-center ${styles["file-upload-text-and-img"]}`}>
                                        <img src='file-upload.png'></img>
                                        {isClinic?<h6 className='f-400 l-20 text-grey-3'>File Uploaded Sucessfully</h6>:<h6 className='f-400 l-20 text-grey-3'>Upload (PDF, JPG, PNG)</h6>}
                                    </div>
                                </div>
                                <div className='d-flex mt-7 gap-2'>
                                    {/* <button className='col-6 btn btn-outline-grey' onClick={prevHandler}>Previous</button> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>
                        </>
                        }
                        {tab == 10 && 
                        <>
                            <h1 className='f-600 l-40 pl-5 text-secondary col-12'>Great Progress!</h1>
                            <h5 className='f-500 l-22 pl-5 text-grey-3 mt-2 col-12'>Your profile is just a few steps away from going live</h5>
                            <div className='mt-40 pl-5'>
                                <h3 className='f-500 l-28 text-dark-blue'>Step A: Profile details</h3>
                                <h4 className='f-400 mt-2 l-22 text-grey-2'>Doctors basic details, medical registration, education qualification, establishment details etc.</h4>
                                <div className='d-flex d-align-center mt-4'>
                                    <button className='btn btn-light-green d-flex d-align-center d-justify-center'>
                                        <h4 className='f-400 l-26 text-green-4'>Completed</h4>
                                        <svg className='ml-3' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.25C8.57164 0.25 6.68657 0.821828 5.08319 1.89317C3.47982 2.96451 2.23013 4.48726 1.49218 6.26884C0.754225 8.05042 0.561142 10.0108 0.937348 11.9021C1.31355 13.7934 2.24215 15.5307 3.60571 16.8943C4.96928 18.2579 6.70656 19.1865 8.59787 19.5627C10.4892 19.9389 12.4496 19.7458 14.2312 19.0078C16.0127 18.2699 17.5355 17.0202 18.6068 15.4168C19.6782 13.8134 20.25 11.9284 20.25 10C20.245 7.41566 19.2162 4.93859 17.3888 3.11118C15.5614 1.28378 13.0843 0.254956 10.5 0.25ZM15.1406 8.29375L9.64688 13.5438C9.50485 13.6774 9.31687 13.7512 9.12188 13.75C9.02657 13.7514 8.93194 13.7338 8.84344 13.6984C8.75494 13.663 8.67433 13.6105 8.60625 13.5438L5.85938 10.9188C5.78319 10.8523 5.72123 10.7711 5.67722 10.6801C5.63321 10.589 5.60806 10.49 5.60328 10.389C5.5985 10.2881 5.61419 10.1871 5.64941 10.0924C5.68463 9.99758 5.73865 9.9109 5.80822 9.83754C5.8778 9.76417 5.96149 9.70563 6.05426 9.66543C6.14703 9.62523 6.24698 9.6042 6.34809 9.60362C6.44919 9.60303 6.54938 9.62289 6.64261 9.66201C6.73585 9.70113 6.82021 9.7587 6.89063 9.83125L9.12188 11.9594L14.1094 7.20625C14.2552 7.07902 14.4446 7.01309 14.6379 7.02223C14.8312 7.03138 15.0135 7.1149 15.1467 7.25533C15.2798 7.39576 15.3536 7.58222 15.3524 7.77575C15.3513 7.96928 15.2754 8.15488 15.1406 8.29375Z" fill="#19B46E"/>
                                        </svg>

                                    </button>
                                    {/* <h5 className='f-600 l-22 text-green-4 ml-6' onClick={detailChangeHandler}>CHANGE</h5> */}
                                </div>
                            </div>
                            <div className='mt-50 pl-5'>
                                {skip?
                                    <>
                                        <h3 className='col-12 f-500 l-28 text-secondary'>Step B: Profile verification</h3>
                                        <h4 className='col-12 f-400 mt-2 l-22 text-grey-2'>Doctor identity proof, registration proof, establishment ownership proof etc.</h4>
                                        <div className='d-flex d-align-center mt-4'>
                                            <button className='btn btn-primary' onClick={nextHandler}>Continue</button>
                                            {/* <h5 className='f-600 l-22 text-dark-blue ml-6 cursor-pointer' onClick={verificationSkipHandler}>Skip</h5> */}
                                        </div>
                                    </>
                                    
                                    :
                                    <>
                                        <h3 className='col-12 f-500 l-28 text-secondary'>Step B: Profile verification</h3>
                                        <h4 className='col-12 f-400 mt-2 l-22 text-grey-2'>Doctor identity proof, registration proof, establishment ownership proof etc.</h4>
                                        <div className='d-flex d-align-center mt-4'>
                                            <span className='btn btn-light-green d-flex d-align-center d-justify-center'>
                                                <h4 className='f-400 l-26 text-green-4'>Completed</h4>
                                                <svg className='ml-3' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M10.5 0.25C8.57164 0.25 6.68657 0.821828 5.08319 1.89317C3.47982 2.96451 2.23013 4.48726 1.49218 6.26884C0.754225 8.05042 0.561142 10.0108 0.937348 11.9021C1.31355 13.7934 2.24215 15.5307 3.60571 16.8943C4.96928 18.2579 6.70656 19.1865 8.59787 19.5627C10.4892 19.9389 12.4496 19.7458 14.2312 19.0078C16.0127 18.2699 17.5355 17.0202 18.6068 15.4168C19.6782 13.8134 20.25 11.9284 20.25 10C20.245 7.41566 19.2162 4.93859 17.3888 3.11118C15.5614 1.28378 13.0843 0.254956 10.5 0.25ZM15.1406 8.29375L9.64688 13.5438C9.50485 13.6774 9.31687 13.7512 9.12188 13.75C9.02657 13.7514 8.93194 13.7338 8.84344 13.6984C8.75494 13.663 8.67433 13.6105 8.60625 13.5438L5.85938 10.9188C5.78319 10.8523 5.72123 10.7711 5.67722 10.6801C5.63321 10.589 5.60806 10.49 5.60328 10.389C5.5985 10.2881 5.61419 10.1871 5.64941 10.0924C5.68463 9.99758 5.73865 9.9109 5.80822 9.83754C5.8778 9.76417 5.96149 9.70563 6.05426 9.66543C6.14703 9.62523 6.24698 9.6042 6.34809 9.60362C6.44919 9.60303 6.54938 9.62289 6.64261 9.66201C6.73585 9.70113 6.82021 9.7587 6.89063 9.83125L9.12188 11.9594L14.1094 7.20625C14.2552 7.07902 14.4446 7.01309 14.6379 7.02223C14.8312 7.03138 15.0135 7.1149 15.1467 7.25533C15.2798 7.39576 15.3536 7.58222 15.3524 7.77575C15.3513 7.96928 15.2754 8.15488 15.1406 8.29375Z" fill="#19B46E"/>
                                                </svg>

                                            </span>
                                            {/* <h5 className='f-600 l-22 text-green-4 ml-6 cursor-pointer' onClick={verificationChangeHandler}>CHANGE</h5> */}
                                        </div>
                                    </>
                                }
                            </div>
                            <div className='bg-light-blue p-5 rounded-12 mt-8'>
                                <h3 className='col-12 pl-5 f-500 l-28 text-secondary'>Step C: Start getting patients</h3>
                                <h4 className='col-12 pl-5 f-400 mt-2 l-22 text-grey-2'>Location, Timings, Fees</h4>
                                <div className='d-flex d-align-center mt-4'>
                                    <button className='btn btn-primary' onClick={nextHandler}>Continue</button>
                                    <h5 className='f-600 l-22 text-dark-blue ml-6 cursor-pointer' onClick={getPatientSkipHandler}>Skip</h5>
                                </div>
                            </div>
                        </>}
                        {tab == 11 && 
                        <>
                            <Stepper title="3" active="0"></Stepper>
                            <h1 className='f-600 l-40 mt-40 text-secondary col-12 mb-7'>Location & Timings</h1>
                            <label className='d-flex'>Contact</label>
                            <form onSubmit={locationForm}>
                                <div className='d-flex col-12 gap-2'>
                                    <div className='col-3'>
                                        <DropDown handler={countryCodeHandler} data={countryCodeList} placeholder="+91"></DropDown>
                                    </div>
                                    <div className='col-9'>
                                        <input value={contact} onChange={contactHandler} type="tel" placeholder='Contact Number' required/>
                                    </div>
                                </div>
                                <label className='d-flex'>Your Clinic Address</label>
                                <input value={address} onChange={addressHandler} type="text" placeholder='4517 Washington Ave. Manchester, Kentucky 39495' required/>
                                <h6 className='f-500 mt-5 mb-1 l-20 text-grey-3'>Drop a pin to link your Clinic address</h6>
                                <div className={`col-12 ${styles["map-location-img"]}`}>
                                <GoogleMap
                                    onClick={getLatLang}
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                    onLoad={onLoad}
                                    onUnmount={onUnmount}
                                ></GoogleMap>
                                </div>
                                <div className='d-flex mt-7 gap-2'>
                                    {/* <button className='col-6 btn btn-outline-grey' onClick={prevHandler}>Previous</button> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>
                        </>}
                        {tab == 12 && 
                        <>
                            <Stepper title="3" active="1"></Stepper>
                            <h1 className='f-600 l-40 mt-60 text-secondary col-12 mb-7'>Location & Timings</h1>
                            <label className='d-flex'>Days</label>
                            <form onSubmit={sessionForm}>
                                <div className={`${styles["days-wrapper"]} col-12`}>
                                    <DaySelector isActive={false} handler={dayHandler} title="Mon"/>
                                    <DaySelector isActive={false} handler={dayHandler} title="Tue"/>
                                    <DaySelector isActive={false} handler={dayHandler} title="Wed"/>
                                    <DaySelector isActive={false} handler={dayHandler} title="Thu"/>
                                    <DaySelector isActive={false} handler={dayHandler} title="Fri"/>
                                    <DaySelector isActive={false} handler={dayHandler} title="Sat"/>
                                    <DaySelector isActive={false} handler={dayHandler} title="Sun"/>
                                </div>
                                {inputList.map((item,index)=>(
                                    <>
                                        <label className='d-flex'>Session {index+1}</label>
                                        <div className={`${styles["timing"]} mt-1 d-flex d-align-center gap-3`}>
                                            <DropDownDate index={index} handler={startHandler} placeholder="From"/>
                                        
                                            <DropDownDate  index={index} handler={endHandler} placeholder="To"/>
                                        </div>
                               
                                        {/* <label className='d-flex'>Session {index+1}</label>
                                        <div className={`${styles["timing"]} mt-1 d-flex d-align-center gap-3`}>
                                            <DropDownDate placeholder="From"/>
                                            
                                            <DropDownDate placeholder="To"/>
                                        </div>  */}
                                    
                                
                                        {inputList.length - 1 === index &&
                                            <div onClick={addSessionHandler} className='cursor-pointer d-flex d-align-center mt-6'>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z" fill="#3085F4"/>
                                                </svg>
                                                <h5 className='ml-2 f-600 l-20 text-primary'>ADD TIMING</h5>
                                            </div>
                                        }
                                    </>
                                ))}
                                <div className='d-flex mt-7 gap-2'>
                                    {/* <button className='col-6 btn btn-outline-grey'>Previous</button> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>
                        </>
                        }
                        {tab == 13 && 
                        <>
                            <Stepper title="3" active="2"></Stepper>
                            <h1 className='f-600 l-40 mt-60 text-secondary col-12 mb-7'>Location & Timings</h1>
                            <label className='d-flex'>Consultation Fees</label>
                            <form onSubmit={consultForm}>
                                <div className={`${styles["background-wrapper"]} d-flex d-align-center`}>
                                    <h5 className='f-400 l-22 text-secondary' htmlFor="same">USD</h5>
                                    <input value={fees} onChange={feesHandler} type="number" placeholder='30' />
                                </div>
                                <label className='d-flex'>Doctor hours</label>
                                <div className={`${styles["background-wrapper"]} d-flex`}>
                                    <input onClick={hourHandler} type="radio" id="same" name="hours" value="same"/>
                                    <h5 className='f-500  text-secondary ml-3 mb-0' htmlFor="same">Same as establishment hours</h5>
                                </div>
                                <div className={`${styles["background-wrapper"]} d-flex mt-4`}>
                                    <input onClick={hourHandler} type="radio" id="differ" name="hours" value="differ"/>
                                    <h5 className='f-500  text-secondary ml-3 mb-0' htmlFor="differ">Different hours</h5>
                                </div>
                                <div className='d-flex mt-7 gap-2'>
                                    {/* <button className='col-6 btn btn-outline-grey' onClick={prevHandler}>Previous</button> */}
                                    <button className='col-6 btn btn-primary'>Next</button>
                                </div>
                            </form>
                        </>
                        }
                        {tab == 14 && 
                        <>
                            <h1 className='f-600 l-40 text-secondary col-12'>Profile is under verification</h1>
                            <h5 className='f-500 l-22 text-grey-3 mt-2 col-12'>Our team is verifying your profile details which you have provided. Kindly give us 7 working days to verify the information</h5>
                            <div className={`mt-4 ${styles["wrapper-with-bottom-border"]}`}>
                                <h3 className='f-500 l-28 text-secondary'>Step A: Profile details</h3>
                                <h4 className='f-400 mt-2 l-22 text-grey-2'>Doctors basic details, medical registration, education qualification, establishment details etc.</h4>
                                <div className='d-flex d-align-center mt-4'>
                                    <span className='btn btn-light-green d-flex d-align-center d-justify-center'>
                                        <h4 className='f-400 l-26 text-green-4'>Completed</h4>
                                        <svg className='ml-3' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.25C8.57164 0.25 6.68657 0.821828 5.08319 1.89317C3.47982 2.96451 2.23013 4.48726 1.49218 6.26884C0.754225 8.05042 0.561142 10.0108 0.937348 11.9021C1.31355 13.7934 2.24215 15.5307 3.60571 16.8943C4.96928 18.2579 6.70656 19.1865 8.59787 19.5627C10.4892 19.9389 12.4496 19.7458 14.2312 19.0078C16.0127 18.2699 17.5355 17.0202 18.6068 15.4168C19.6782 13.8134 20.25 11.9284 20.25 10C20.245 7.41566 19.2162 4.93859 17.3888 3.11118C15.5614 1.28378 13.0843 0.254956 10.5 0.25ZM15.1406 8.29375L9.64688 13.5438C9.50485 13.6774 9.31687 13.7512 9.12188 13.75C9.02657 13.7514 8.93194 13.7338 8.84344 13.6984C8.75494 13.663 8.67433 13.6105 8.60625 13.5438L5.85938 10.9188C5.78319 10.8523 5.72123 10.7711 5.67722 10.6801C5.63321 10.589 5.60806 10.49 5.60328 10.389C5.5985 10.2881 5.61419 10.1871 5.64941 10.0924C5.68463 9.99758 5.73865 9.9109 5.80822 9.83754C5.8778 9.76417 5.96149 9.70563 6.05426 9.66543C6.14703 9.62523 6.24698 9.6042 6.34809 9.60362C6.44919 9.60303 6.54938 9.62289 6.64261 9.66201C6.73585 9.70113 6.82021 9.7587 6.89063 9.83125L9.12188 11.9594L14.1094 7.20625C14.2552 7.07902 14.4446 7.01309 14.6379 7.02223C14.8312 7.03138 15.0135 7.1149 15.1467 7.25533C15.2798 7.39576 15.3536 7.58222 15.3524 7.77575C15.3513 7.96928 15.2754 8.15488 15.1406 8.29375Z" fill="#19B46E"/>
                                        </svg>
                                    </span>
                                    {/* <h5 className='f-600 l-22 text-green-4 ml-6 cursor-pointer' onClick={detailChangeHandler}>CHANGE</h5> */}
                                </div>
                            </div>
                            <div className={`mt-4 ${styles["wrapper-with-bottom-border"]}`}>
                                <h3 className='col-12 f-500 l-28 text-secondary'>Step B: Profile verification</h3>
                                <h4 className='col-12 f-400 mt-2 l-22 text-grey-2'>Doctor identity proof, registration proof, establishment ownership proof etc.</h4>
                                <div className='d-flex d-align-center mt-4'>
                                    <span className='btn btn-light-green d-flex d-align-center d-justify-center'>
                                        <h4 className='f-400 l-26 text-green-4'>Completed</h4>
                                        <svg className='ml-3' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.25C8.57164 0.25 6.68657 0.821828 5.08319 1.89317C3.47982 2.96451 2.23013 4.48726 1.49218 6.26884C0.754225 8.05042 0.561142 10.0108 0.937348 11.9021C1.31355 13.7934 2.24215 15.5307 3.60571 16.8943C4.96928 18.2579 6.70656 19.1865 8.59787 19.5627C10.4892 19.9389 12.4496 19.7458 14.2312 19.0078C16.0127 18.2699 17.5355 17.0202 18.6068 15.4168C19.6782 13.8134 20.25 11.9284 20.25 10C20.245 7.41566 19.2162 4.93859 17.3888 3.11118C15.5614 1.28378 13.0843 0.254956 10.5 0.25ZM15.1406 8.29375L9.64688 13.5438C9.50485 13.6774 9.31687 13.7512 9.12188 13.75C9.02657 13.7514 8.93194 13.7338 8.84344 13.6984C8.75494 13.663 8.67433 13.6105 8.60625 13.5438L5.85938 10.9188C5.78319 10.8523 5.72123 10.7711 5.67722 10.6801C5.63321 10.589 5.60806 10.49 5.60328 10.389C5.5985 10.2881 5.61419 10.1871 5.64941 10.0924C5.68463 9.99758 5.73865 9.9109 5.80822 9.83754C5.8778 9.76417 5.96149 9.70563 6.05426 9.66543C6.14703 9.62523 6.24698 9.6042 6.34809 9.60362C6.44919 9.60303 6.54938 9.62289 6.64261 9.66201C6.73585 9.70113 6.82021 9.7587 6.89063 9.83125L9.12188 11.9594L14.1094 7.20625C14.2552 7.07902 14.4446 7.01309 14.6379 7.02223C14.8312 7.03138 15.0135 7.1149 15.1467 7.25533C15.2798 7.39576 15.3536 7.58222 15.3524 7.77575C15.3513 7.96928 15.2754 8.15488 15.1406 8.29375Z" fill="#19B46E"/>
                                        </svg>
                                    </span>
                                    {/* <h5 className='f-600 l-22 text-green-4 ml-6 cursor-pointer' onClick={verificationChangeHandler}>CHANGE</h5> */}
                                </div>
                            </div>
                            <div className='mt-4'>
                                <h3 className='col-12 pl-5 f-500 l-28 text-secondary'>Step C: Start getting patients</h3>
                                <h4 className='col-12 pl-5 f-400 mt-2 l-22 text-grey-2'>Location, Timings, Fees</h4>
                                <div className='d-flex d-align-center mt-4'>
                                    <span className='btn btn-light-green d-flex d-align-center d-justify-center'>
                                        <h4 className='f-400 l-26 text-green-4'>Completed</h4>
                                        <svg className='ml-3' width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M10.5 0.25C8.57164 0.25 6.68657 0.821828 5.08319 1.89317C3.47982 2.96451 2.23013 4.48726 1.49218 6.26884C0.754225 8.05042 0.561142 10.0108 0.937348 11.9021C1.31355 13.7934 2.24215 15.5307 3.60571 16.8943C4.96928 18.2579 6.70656 19.1865 8.59787 19.5627C10.4892 19.9389 12.4496 19.7458 14.2312 19.0078C16.0127 18.2699 17.5355 17.0202 18.6068 15.4168C19.6782 13.8134 20.25 11.9284 20.25 10C20.245 7.41566 19.2162 4.93859 17.3888 3.11118C15.5614 1.28378 13.0843 0.254956 10.5 0.25ZM15.1406 8.29375L9.64688 13.5438C9.50485 13.6774 9.31687 13.7512 9.12188 13.75C9.02657 13.7514 8.93194 13.7338 8.84344 13.6984C8.75494 13.663 8.67433 13.6105 8.60625 13.5438L5.85938 10.9188C5.78319 10.8523 5.72123 10.7711 5.67722 10.6801C5.63321 10.589 5.60806 10.49 5.60328 10.389C5.5985 10.2881 5.61419 10.1871 5.64941 10.0924C5.68463 9.99758 5.73865 9.9109 5.80822 9.83754C5.8778 9.76417 5.96149 9.70563 6.05426 9.66543C6.14703 9.62523 6.24698 9.6042 6.34809 9.60362C6.44919 9.60303 6.54938 9.62289 6.64261 9.66201C6.73585 9.70113 6.82021 9.7587 6.89063 9.83125L9.12188 11.9594L14.1094 7.20625C14.2552 7.07902 14.4446 7.01309 14.6379 7.02223C14.8312 7.03138 15.0135 7.1149 15.1467 7.25533C15.2798 7.39576 15.3536 7.58222 15.3524 7.77575C15.3513 7.96928 15.2754 8.15488 15.1406 8.29375Z" fill="#19B46E"/>
                                        </svg>
                                    </span>
                                    {/* <h5 className='f-600 l-22 text-green-4 ml-6 cursor-pointer' onClick={getPatientsChangeHandler}>CHANGE</h5> */}
                                </div>
                            </div>
                            <button onClick={continueHandler} className='btn btn-primary mt-5'>Continue</button>
                        </>}
                    </div>
                </div>
            </div>
        </div>
        {/* {modal && 
            <Modal modalClass="modal-verify">
                <Verify code={countryCode} number={contact} handler={modalHandler}></Verify>
            </Modal>
        } */}
    </>
   
  )
}
