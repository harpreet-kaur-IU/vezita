import React, { useEffect,useRef,useState } from 'react'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies';
import styles from './css/profile.module.css'
import DropDown from './DropDown';
import DaySelector from './DaySelector';
import DropDownDate from './DropDownDate';
import { GoogleMap,useJsApiLoader  } from '@react-google-maps/api';
import CountryCode from './CountryCode.json'
import Loader from './Loader';
import DaysCheckBox from './DaysCheckBox';
const containerStyle = {
    width: '100%',
    height: '200px',
    borderRadius: "20px"
};
  
const center = {
    lat: -3.745,
    lng: -38.523
};
const Establishment = () => {

    //google map code starts here
    const [lat,setLat] = useState("")
    const [long,setLong] = useState("")
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

    const getLatLang = (e) =>{
        const lat = e.latLng.lat()
        const long = e.latLng.lng()
        setLat(lat)
        setLong(long)
    }

    //google map code ends here
    const[loading,setLoading] = useState(false)
    const [subTab, setSubTab] = useState(0);
    const JWTToken = getVezitaOnBoardFromCookie();
    const[estName,setEstName] = useState("")
    const[city,setCity] = useState("")
    const[contactNumber,setContactNumber] = useState("")
    const[estAddress,setEstAddress] = useState("")
    const[sun,setSun] = useState()
    const[mon,setMon] = useState()
    const[tue,setTue] = useState()
    const[wed,setWed] = useState()
    const[thu,setThu] = useState()
    const[fri,setFri] = useState()
    const[sat,setSat] = useState()
    const[countryCode,setCountryCode] = useState("+91")
    const [countryCodeList,setCountryCodeList] = useState([])
    const[inputList,setInputList] = useState([{startTime:"",endTime:"",video:false,clinic:false}])  
    const[estId,setEstId] = useState("")
    const[estImages,setEstImages] = useState("")
    const[estImageList,setEstImageList] = useState([])

    //tab2 
    const[fees,setFees] = useState("")
    const[duration,setDuration] = useState("")
    const[dayArray1,setDayArray1] = useState([])
    const[endDate,setEndDate] = useState("");
    const[todaySlots,setTodaySlots] = useState([{id:"",startTime:"",endTime:""}])

    const idRef = useRef()

    useEffect(()=>{
        if(JWTToken){
            getProfile()
        }
        for(var i = 0;i<CountryCode.length;i++){
            setCountryCodeList(CountryCode)
        }
    },[])

    const subTabHandler = () => {
        setSubTab(prev => prev+1)
    }
    const countryCodeHandler = (val) =>{
        setCountryCode(val)
    }

    //get doctor profile Handler
    const getProfile = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        setLoading(true)
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/profile-me`, requestOptions)
        .then(response => response.text())
        .then(result =>{
           
            const parsedResult =  JSON.parse(result)
            setLoading(false)
            getSlots(parsedResult.docter._id)
            if(parsedResult.docter.establishment[0]){
                setEstName(parsedResult.docter.establishment[0].establishmentName)
                setCity(parsedResult.docter.establishment[0].city)
                var days = parsedResult.docter.establishment[0].consultationDay;
                var length = parsedResult.docter.establishment[0].consultationDay.length;
                // for(var i=0;i<length;i++){
                //     if(dayArray[i]!== days[i]){
                //         dayArray.push(days[i])
                //     }
                   
                //     if(days[i] == "mon"){
                //         setMon(true)
                //         // dayArray.push("Mon")
                //     }  
                //     if(days[i] == "tue"){
                //         setTue(true)
                //         // dayArray.push("Tue")
                //     }  
                //     else if(days[i] == "wed"){
                //         setWed(true)
                //         // dayArray.push("Wed")
                //     }
                //     else if(days[i] == "thu"){
                //         setThu(true)
                //         // dayArray.push("Thu")
                //     }
                //     else if(days[i] == "fri"){
                //         setFri(true)
                //         // dayArray.push("Fri")
                //     }
                //     else if(days[i] == "sat"){
                //         setSat(true)
                //         // dayArray.push("Sat")
                //     }
                //     else if(days[i] == "sun"){
                //         setSun(true) 
                //         // dayArray.push("Sun")
                //     }
                           
                // }
                setEstAddress(parsedResult.docter.establishment[0].location.address)
                setLong(parsedResult.docter.establishment[0].location.coordinates[0])
                setLat(parsedResult.docter.establishment[0].location.coordinates[0])
                setContactNumber(parsedResult.docter.establishment[0].contactNumber)
                setEstId(parsedResult.docter.establishment[0]._id)
                setEstImages(parsedResult.docter.establishment[0].images)
            }
        })
        .catch(error => console.log('error', error));
    }

    //get all slots
    const getSlots = (docterID) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        setLoading(true)
        var date = new Date().toISOString().slice(0,10);
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}slot/docter-panel?docter=${docterID}&sessionDate=${date}`, requestOptions)
        .then(response => response.text())
        .then(result =>{
            setLoading(false)
            const parsedResult = JSON.parse(result)
            for(var i=0;i<parsedResult.slots.length;i++){
                // setInputList([{startTime:parsedResult.slots[i].startTime,endTime:parsedResult.slots[i].endTime,video:parsedResult.slots[i].sessionType[0]=="video"?true:false,clinic:parsedResult.slots[i].sessionType[0]=="in-clinic"?true:false}])
                var start = parsedResult.slots[i].startTime.substring(parsedResult.slots[i].startTime.lastIndexOf('T0')+1)
                var startSliced = start.slice(0,-5)

                var end = parsedResult.slots[i].endTime.substring(parsedResult.slots[i].endTime.lastIndexOf('T0')+1)
                var endSliced = end.slice(0,-5)

                setTodaySlots([{id:parsedResult.slots[i]._id,startTime:startSliced,endTime:endSliced}])
            }
        })
        .catch(error => console.log('error', error));
    }
    
    //add session slot
    const addSessionHandler = () =>{
        setInputList([...inputList,{startTime:"",endTime:"",video:false,clinic:false}])
    }

    //input Handler
    const handleInputChange = (e,index) =>{
        var val = e.target.value;
        if(val == "true"){
            const name = e.target.name;
            const value = false;
            const list = [...inputList];
            list[index][name] = value;
            setInputList(list);
        }
        else{
            const name = e.target.name;
            const value = true;
            const list = [...inputList];
            list[index][name] = value;
            setInputList(list);
        }
    }

    //handle session slots input
    
    const startHandler = (value,index) =>{
        const name = "startTime";
        const val = value+":00";
        const list = [...inputList];
        list[index][name] = val;
        setInputList(list);
    }
    const endHandler = (value,index) =>{
        const name = "endTime";
        const val = value+":00";
        const list = [...inputList];
        list[index][name] = val;
        setInputList(list);
    }
    const estHandler = (e) =>{
        setEstName(e.target.value)
    }
    const cityHandler = (e) =>{
        setCity(e.target.value)
    }
    const contactHandler = (e) =>{
        setContactNumber(e.target.value)
    }
    const addressHandler = (e) =>{
        setEstAddress(e.target.value)
    }

    //establishment Save
    const estForm = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type","application/json");

        var raw = JSON.stringify({
            "establishmentName":estName,
            "city":city,
            "contactNumber": contactNumber,
            "location": {
                "type": "Point",
                "coordinates": [
                    long,
                    lat
                ],
                "address":estAddress
            },
            "images":estImageList
        });
        
        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}establishment/update/${estId}`, requestOptions)
        .then(response => response.text())
        .then(result => subTabHandler())
        .catch(error => console.log('error', error));
    }

    //tab2 Handlers Start
    const feesHandler = (e) =>{
        setFees(e.target.value)
    }
    const durationHandler = (e) =>{
        setDuration(e.target.value)
    }
    
    const dayCheckboxHandler = (day,val) =>{
        if(val){       
            dayArray1.push(day)
        }
        else{
            for(var i = 0;i<dayArray1.length;i++){
                if(dayArray1[i] === day){
                    dayArray1.splice(i,1);
                }
            }
        }
    }

    const handleDateChange = (e) =>{
        setEndDate(e.target.value)
    }

    //add slots 
    const addslot = (e) =>{
        e.preventDefault();
        addConsultation();
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type","application/json");

        var timingSlot = [];       
        for(var i = 0;i<inputList.length;i++){
            var timing = {
                "startTime":inputList[i].startTime,
                "endTime":inputList[i].endTime,
                "appointmentNum":i+1,
                "sessionType":inputList[i].clinic && inputList[i].video?["in-clinic","video"]:(inputList[i].clinic?"in-clinic":"video")
            }
            timingSlot.push(timing)
        }
        var date = new Date().toISOString().slice(0,10);
        
        var slotBody = JSON.stringify({
            "startDate":date,
            "endDate":endDate,
            "days":dayArray1,
            "timings":timingSlot
        })
     
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: slotBody,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}slot/docter-panel`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    //add consultation fees and duration
    const addConsultation = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type","application/json");

        var raw = JSON.stringify({
            "consultationDuration":duration,
            "consultationFee":fees,
            "consultationDay":dayArray1
        });
        
        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}establishment/update/${estId}`, requestOptions)
        .then(response => response.text())
        .then(result =>console.log(result))
        .catch(error => console.log('error', error));
    }

    //add establishment photos
    const establishmentPhotos = (e) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var formdata = new FormData();
        formdata.append("type","establishment");
        formdata.append("file",e.currentTarget.files[0]);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}file-upload`, requestOptions)
        .then(response => response.text())
        .then(result => {
            var parsedResult = JSON.parse(result)
            const value = parsedResult.urls[0];
            estImageList.push(value)
            console.log(estImageList)
        })
        .catch(error => console.log('error', error));
    }
  return (
    <>
        {loading && <Loader></Loader>}
        <h4 className='f-600 l-26 col-12 text-primary'>Establishments(Fees, Timings)</h4>
        {subTab == 0 &&
            <form onSubmit={estForm}>
                <div className='d-flex col-11 d-flex-wrap'>
                    <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                        <h4 className='f-600 l-26 col-12 text-black mt-5'>Establishment address</h4>
                        <div className='d-flex d-flex-wrap col-12'>
                            <div className='col-5'>
                                <label className='d-flex'>Establishment name</label>
                                <input type="text" placeholder='Enter establishment name' onChange={estHandler} value={estName}/>
                            </div>

                            <div className='col-3 d-flex d-flex-wrap border-box'>
                                <div className='ml-5 col-12'>
                                    <label className='d-flex'>City</label>
                                    <input type="text" placeholder='Enter city' onChange={cityHandler} value={city}/>
                                </div>
                            </div>

                            <div className='col-2 d-flex d-flex-wrap border-box'>
                                <div className='ml-5 col-12'>
                                    <label className='d-flex'>Code</label>
                                    <DropDown handler={countryCodeHandler} data={countryCodeList} placeholder="+91"></DropDown>
                                </div>
                            </div>
                            <div className='col-2 d-flex d-flex-wrap border-box'>
                                <div className='ml-2 col-12'>
                                    <label className='d-flex'>Contact</label>
                                    <input type="text" placeholder='9876543210' onChange={contactHandler} value={contactNumber}/>
                                </div>
                            </div>
                        </div>
                        <label className='d-flex'>Establishment address</label>
                        <input type="text" placeholder='4517 Washington Ave. Manchester, Kentucky 39495' onChange={addressHandler} value={estAddress}/>
                        <div className='d-flex d-flex-column col-12'>
                            <h6 className='f-500 l-20 text-grey-3 mt-5 mb-1'>Drop a pin to link your Clinic address</h6>
                            <div className='col-12'>
                                <GoogleMap
                                    width = {100}
                                    onClick={getLatLang}
                                    mapContainerStyle={containerStyle}
                                    center={center}
                                    zoom={10}
                                    onLoad={onLoad}
                                    onUnmount={onUnmount}
                                ></GoogleMap>
                            </div>
                        </div>
                        <label className='d-flex'>Establishment photos</label>
                        <div className='col-12 d-flex d-flex-wrap mt-3'>
                            {estImageList && estImageList.map((images)=>(
                                <div className={`${styles["uploaded-photos"]}`}>
                                    <img src={images} alt='establishment photos'></img>
                                </div>
                            ))}
                            <div className={`p-relative d-flex d-flex-column d-align-center d-justify-center gap-1 ${styles["add-photos-box"]}`}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M17.8125 10C17.8125 10.2486 17.7137 10.4871 17.5379 10.6629C17.3621 10.8387 17.1236 10.9375 16.875 10.9375H10.9375V16.875C10.9375 17.1236 10.8387 17.3621 10.6629 17.5379C10.4871 17.7137 10.2486 17.8125 10 17.8125C9.75136 17.8125 9.5129 17.7137 9.33709 17.5379C9.16127 17.3621 9.0625 17.1236 9.0625 16.875V10.9375H3.125C2.87636 10.9375 2.6379 10.8387 2.46209 10.6629C2.28627 10.4871 2.1875 10.2486 2.1875 10C2.1875 9.75136 2.28627 9.5129 2.46209 9.33709C2.6379 9.16127 2.87636 9.0625 3.125 9.0625H9.0625V3.125C9.0625 2.87636 9.16127 2.6379 9.33709 2.46209C9.5129 2.28627 9.75136 2.1875 10 2.1875C10.2486 2.1875 10.4871 2.28627 10.6629 2.46209C10.8387 2.6379 10.9375 2.87636 10.9375 3.125V9.0625H16.875C17.1236 9.0625 17.3621 9.16127 17.5379 9.33709C17.7137 9.5129 17.8125 9.75136 17.8125 10Z" fill="#60606C"/>
                                </svg>
                                <h6 className='l-14 f-500 text-secondary'>Add Photos</h6>
                                <input
                                    id="file-input-field-establishment"
                                    type='file'
                                    ref={idRef}
                                    multiple={true}
                                    onChange={establishmentPhotos}
                                >
                                </input>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-12 mt-7 d-flex d-flex-wrap'>
                        <h4 className='f-600 l-26 col-12 text-black mt-7'>Practice timings</h4>
                        <label className='d-flex'>Days</label>
                        <div className='mt-5 d-flex gap-2 col-12'>
                            <DaySelector isActive={mon?true:false} handler={dayHandler} title="mon"/>
                            <DaySelector isActive={tue?true:false} handler={dayHandler} title="tue"/>
                            <DaySelector isActive={wed?true:false} handler={dayHandler} title="wed"/>
                            <DaySelector isActive={thu?true:false} handler={dayHandler} title="thu"/>
                            <DaySelector isActive={fri?true:false} handler={dayHandler} title="fri"/>
                            <DaySelector isActive={sat?true:false} handler={dayHandler} title="sat"/>
                            <DaySelector isActive={sun?true:false} handler={dayHandler} title="sun"/>
                        </div>
                        <div className='col-12 d-grid grid-col-2'>
                            {inputList.map((item,index)=>(
                                <>
                                    <div className='mt-5 d-flex d-flex-column'>
                                        <h5 className='col-12 f-600 l-26 text-black'>Session {index+1}</h5>
                                        <h6 className='f-600 l-20 text-secondary mt-2'>Session type</h6>
                                        <div className='d-flex col-12 mt-3'>
                                            <div className={` d-flex d-align-center`}>
                                                <input type="checkbox" value={item.video} onClick={e => handleInputChange(e,index)} name="video" style={{width:"auto"}}/>
                                                <h6 className='f-500  text-secondary ml-2 mb-0' htmlFor="video">Video Appointment</h6>
                                            </div>

                                            <div className={` d-flex d-align-center ml-4`}>
                                                <input type="checkbox" value={item.clinic} onClick={e => handleInputChange(e,index)} name="video" style={{width:"auto"}}/>
                                                <h6 className='f-500  text-secondary ml-2 mb-0' htmlFor="inclinic">In-clinic appointment</h6>
                                            </div>
                                        </div>
                                        <div className='mt-8 d-flex d-align-center gap-3 col-12 '>
                                            <h6 className='col-6 f-400 text-secondary ml-2 mb-0'>Start Time</h6>
                                            <h6 className='col-6 f-400 text-secondary ml-2 mb-0'>End Time</h6>
                                        </div>
                                        <div className={`mt-2 d-flex d-align-center gap-3 col-12 ${styles["timing"]}`}>
                                            <DropDownDate  index={index} handler={startHandler} placeholder={item.startTime?item.startTime:"From"}/>
                                            <img src="arrow.png"/>
                                            <DropDownDate  index={index} handler={endHandler} placeholder={item.endTime?item.endTime:"To"}/>
                                        </div>
                                        {inputList.length - 1 === index &&
                                            <div onClick={addSessionHandler} className='d-flex d-align-center mt-6'>
                                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z" fill="#3085F4"/>
                                                </svg>
                                                <h5 className='ml-2 f-600 l-20 text-primary'> ADD TIMING</h5>
                                            </div>
                                        }
                                    </div>
                                </>
                            ))}
                        </div>
                    </div> */}
                    <div className='col-12 mt-60 d-flex d-justify-end'>
                        <button className='col-3 btn btn-primary d-flex d-justify-center'>Save</button>
                    </div>
                </div>
            </form>
        }
       
        {subTab == 1 &&
        <>
            <form onSubmit={addslot}>
                <div className='d-flex col-11 d-flex-wrap '>
                    <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                        <h4 className='f-600 l-26 col-12 text-black mt-5'>Consultation</h4>
                        <div className='d-flex d-flex-wrap col-12'>
                            <div className='col-6 d-flex d-flex-wrap'>
                                <label className='d-flex'>Consultation duration</label>
                                <input type="text" placeholder='30 mintues' value={duration} onChange={durationHandler} />
                            </div>
                            <div className='col-6 d-flex d-flex-wrap'>
                                <div className='ml-5 col-12 d-flex d-flex-wrap'>
                                    <label className='d-flex'>Consultation fees</label>
                                    <div className={`col-12 ${styles["fees"]} d-flex d-align-center`}>
                                        <h5 className='f-400 l-22 text-secondary' htmlFor="same">USD</h5>
                                        <input type="text" placeholder='30' value={fees} onChange={feesHandler} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        {/* <label className='d-flex col-12'>Doctor's hours</label>
                        <div className='d-flex d-flex-wrap col-6 mt-1'>
                            <div className={`${styles["wrapper"]} d-flex d-align-center`}>
                                <input type="radio" id="same" name="hours" value="same"/>
                                <h5 className='f-500  text-secondary ml-2 mb-0' htmlFor="same">Same as establishment hours</h5>
                            </div>
                            <div className={`${styles["wrapper"]} ml-5 d-flex d-align-center`}>
                                <input type="radio" id="differ" name="hours" value="differ"/>
                                <h5 className='f-500  text-secondary ml-2 mb-0' htmlFor="differ">Different hours</h5>
                            </div>
                        </div> */}
                        <label className='d-flex col-12 mt-2'>Consultation timings</label>
                        {/* Todays Slots */}
                    
                        <div className='col-12 d-flex d-flex-column mb-5'>
                            <label>Today's Slots</label>
                            <div className='mt-5 d-flex gap-2 col-12'>
                                {todaySlots && todaySlots.map((slot,index)=>(
                                    <div className={`col-4 d-flex d-align-center gap-2`}>
                                        
                                        <div className={`col-10 d-flex d-align-center d-justify-space-around ${styles["timing"]}`}>
                                            <h5 className='f-400 l-22'>{slot.startTime}</h5>
                                            <h5 className='f-400 l-22'>{slot.endTime}</h5>
                                        </div>

                                        <div className={`col-2 d-flex d-align-center d-justify-center ${styles["delete-slot"]}`}>
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M20.25 4.5H16.5V3.75C16.4975 3.15402 16.2597 2.58316 15.8383 2.16174C15.4168 1.74031 14.846 1.50247 14.25 1.5H9.75C9.15402 1.50247 8.58316 1.74031 8.16174 2.16174C7.74031 2.58316 7.50247 3.15402 7.5 3.75V4.5H3.75C3.55109 4.5 3.36032 4.57902 3.21967 4.71967C3.07902 4.86032 3 5.05109 3 5.25C3 5.44891 3.07902 5.63968 3.21967 5.78033C3.36032 5.92098 3.55109 6 3.75 6H4.5V19.5C4.5 19.8978 4.65804 20.2794 4.93934 20.5607C5.22064 20.842 5.60218 21 6 21H18C18.3978 21 18.7794 20.842 19.0607 20.5607C19.342 20.2794 19.5 19.8978 19.5 19.5V6H20.25C20.4489 6 20.6397 5.92098 20.7803 5.78033C20.921 5.63968 21 5.44891 21 5.25C21 5.05109 20.921 4.86032 20.7803 4.71967C20.6397 4.57902 20.4489 4.5 20.25 4.5ZM10.5 15.75C10.5 15.9489 10.421 16.1397 10.2803 16.2803C10.1397 16.421 9.94891 16.5 9.75 16.5C9.55109 16.5 9.36032 16.421 9.21967 16.2803C9.07902 16.1397 9 15.9489 9 15.75V9.75C9 9.55109 9.07902 9.36032 9.21967 9.21967C9.36032 9.07902 9.55109 9 9.75 9C9.94891 9 10.1397 9.07902 10.2803 9.21967C10.421 9.36032 10.5 9.55109 10.5 9.75V15.75ZM15 15.75C15 15.9489 14.921 16.1397 14.7803 16.2803C14.6397 16.421 14.4489 16.5 14.25 16.5C14.0511 16.5 13.8603 16.421 13.7197 16.2803C13.579 16.1397 13.5 15.9489 13.5 15.75V9.75C13.5 9.55109 13.579 9.36032 13.7197 9.21967C13.8603 9.07902 14.0511 9 14.25 9C14.4489 9 14.6397 9.07902 14.7803 9.21967C14.921 9.36032 15 9.55109 15 9.75V15.75ZM15 4.5H9V3.75C9 3.55109 9.07902 3.36032 9.21967 3.21967C9.36032 3.07902 9.55109 3 9.75 3H14.25C14.4489 3 14.6397 3.07902 14.7803 3.21967C14.921 3.36032 15 3.55109 15 3.75V4.5Z" fill="#D91F11"/>
                                            </svg>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className={`${styles["timing-message"]} mt-1 col-12 `}>
                            <h6 className='f-5 t00 l-20 text-green-5'>Inclinic timings should be within practice timings Mon-Sun 9:00AM-7:00PM. Video consultation timings can be outside practice timings.</h6>
                        </div>
                        <div className={`col-12 mt-6 d-flex d-flex-wrap d-align-center d-justify-space-between`}>
                            <DaysCheckBox handler={dayCheckboxHandler} value="mon"></DaysCheckBox>
                            <DaysCheckBox handler={dayCheckboxHandler} value="tue"></DaysCheckBox>
                            <DaysCheckBox handler={dayCheckboxHandler} value="wed"></DaysCheckBox>
                            <DaysCheckBox handler={dayCheckboxHandler} value="thu"></DaysCheckBox>
                            <DaysCheckBox handler={dayCheckboxHandler} value="fri"></DaysCheckBox>
                            <DaysCheckBox handler={dayCheckboxHandler} value="sat"></DaysCheckBox>
                            <DaysCheckBox handler={dayCheckboxHandler} value="sun"></DaysCheckBox>
                        </div>
                        <div className='col-5 gap-1 d-flex d-flex-column'>
                            <label>Session End Date</label>
                            <input value={endDate} onChange={handleDateChange} name="endDate" type="date"></input>
                        </div>
                        <div className='col-12 d-grid grid-col-2'>
                            {inputList.map((item,index)=>(
                                <div className='mt-2'>
                                    <label className='d-flex'>Session {index+1}</label>
                                    <h6 className='f-400 l-20 text-secondary mt-2'>Session type</h6>
                                    <div className='d-flex col-12 mt-3'>
                                        <div className={`d-flex d-align-center`}>
                                            <input value={item.video} onClick={e => handleInputChange(e,index)} name="video" type="checkbox" style={{width:"auto"}}></input>
                                            <h5 className='f-500 text-secondary ml-2 mb-0' htmlFor="video">Video Appointment</h5>
                                        </div>
                                        <div className={`d-flex d-align-center ml-4`}>
                                            <input value={item.clinic} onClick={e => handleInputChange(e,index)} name="clinic" type="checkbox" style={{width:"auto"}}></input>
                                            <h5 className='f-500 text-secondary ml-2 mb-0' htmlFor="inclinic">In-clinic appointment</h5>
                                        </div>
                                    </div>
                                    <div className='mt-5 d-flex gap-2 col-12'>
                                        <div className='d-flex d-flex-column col-12'>
                                            <div className={`mt-2 d-flex d-align-center gap-3 col-12 ${styles["timing"]}`}>
                                                <DropDownDate  index={index} handler={startHandler} placeholder="From"/>
                                                <img src="arrow.png"/>
                                                <DropDownDate  index={index} handler={endHandler} placeholder="To"/>
                                            </div>
                                        </div>
                                    </div>
                                    {inputList.length - 1 === index &&
                                        <div onClick={addSessionHandler} className='cursor-pointer d-flex d-align-center mt-6'>
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z" fill="#3085F4"/>
                                            </svg>
                                            <h5 className='ml-2 f-600 l-20 text-primary'> ADD TIMING</h5>
                                        </div>
                                    }                            
                                </div>
                            ))}

                        </div>
                    </div>
                    <div className='col-12 mt-60 d-flex d-justify-end'>
                        <button className='col-3 btn btn-primary d-flex d-justify-center'>Save</button>
                    </div>
                </div>
            </form>
        </>}
    </>
  )
}

export default Establishment