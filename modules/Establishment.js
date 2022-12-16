import React, { useEffect,useState } from 'react'
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

    //tab2 
    const[fees,setFees] = useState("")
    const[duration,setDuration] = useState("")
    const[dayArray1,setDayArray1] = useState([])
    const[endDate,setEndDate] = useState("");

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
                setInputList([{startTime:parsedResult.slots[i].startTime,endTime:parsedResult.slots[i].endTime,video:parsedResult.slots[i].sessionType[0]=="video"?true:false,clinic:parsedResult.slots[i].sessionType[0]=="in-clinic"?true:false}])
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
        myHeaders.append("Content-Type", "application/json");

        var timingSlot = [];       
        for(var i = 0;i<inputList.length;i++){
            var timing = {
                "startTime":inputList[i].startTime,
                "endTime":inputList[i].endTime,
                "appointmentNum":i+1,
                "sessionType":[inputList[i].clinic?"in-clinic":"video"]
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
                                <input type="text" placeholder='Select or add title' onChange={estHandler} value={estName}/>
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
                        <div className='col-12 d-flex d-flex-wrap'>
                            <img src="build.png" />
                            <img src="build.png" className='ml-2' />
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
                        <div className={`${styles["timing-message"]} mt-1 col-12 `}>
                            <h6 className='f-500 l-20 text-green-5'>Inclinic timings should be within practice timings Mon-Sun 9:00AM-7:00PM. Video consultation timings can be outside practice timings.</h6>
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
                                        <div className={` d-flex d-align-center`}>
                                            <input value={item.video} onClick={e => handleInputChange(e,index)} name="video" type="checkbox" style={{width:"auto"}}></input>
                                            <h5 className='f-500 text-secondary ml-2 mb-0' htmlFor="video">Video Appointment</h5>
                                        </div>
                                        <div className={` d-flex d-align-center ml-4`}>
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
                                        <div onClick={addSessionHandler} className='d-flex d-align-center mt-6'>
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