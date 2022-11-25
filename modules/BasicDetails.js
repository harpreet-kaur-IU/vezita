import React, { useEffect,useState } from 'react'
import CountryCode from './CountryCode.json'
import PlacesAutocomplete from 'react-places-autocomplete';
import { getVezitaOnBoardFromCookie } from '../auth/userCookies';
import styles from './css/profile.module.css'
import DropDown from './DropDown';
import Loader from './Loader';
const BasicDetails = (props) => {
    const JWTToken = getVezitaOnBoardFromCookie();
    const[name,setName] = useState("")
    const[city,setCity] = useState("")
    const[profileImg,setProfileImg] = useState("")
    const[bio,setBio] = useState("")
    const[gender,setGender] = useState("")
    const[contactNumber,setContactNumber] = useState("")
    const[docterId,setDoctorId] = useState("")
    const[exp,setExp] = useState("")
    const[countryCode,setCountryCode] = useState("+91")
    const [countryCodeList,setCountryCodeList] = useState([])
    const[loading,setLoading] = useState(false)
    //basic details form handler
    const nameHandler = (e) =>{
        setName(e.target.value)
    }
    const genderHandler = (e) =>{
        setGender(e.currentTarget.value)
    }
    const bioHandler = (e) =>{
        setBio(e.target.value)
    }
    const expHandler = (e) =>{
        setExp(e.target.value)
    }
    const cityHandler = (e) =>{
        setCity(e.currentTarget.id)
    }
    const contactHandler = (e) =>{
        setContactNumber(e.target.value)
    }
    const countryCodeHandler = (val) =>{
        setCountryCode(val)
    }

    useEffect(()=>{
        if(JWTToken){
            getProfile()
        }
        for(var i = 0;i<CountryCode.length;i++){
            setCountryCodeList(CountryCode)
        }
    },[])

    //get basic details
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
            setDoctorId(parsedResult.docter._id)
            setName(parsedResult.docter.fullName)
            setGender(parsedResult.docter.gender)
            setExp(parsedResult.docter.totalExperiences)
            setCity(parsedResult.docter.city)
            setBio(parsedResult.docter.bio)
            setProfileImg(parsedResult.docter.image)
            setCountryCode(parsedResult.docter.countryCode?"":"+91")
            setContactNumber(parsedResult.docter.phone)
            setLoading(false)
        })
        .catch(error => console.log('error', error));
    }

    //city select Handler
    const handleSelect = async value => { }

    //form submit
    const basicDetailsForm = (e) =>{
        e.preventDefault();
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type","application/json");

        var raw = JSON.stringify({
            "fullName":name,
            "gender":gender,
            "city":city,
            "totalExperiences":exp,
            "bio":bio,
            "countryCode":countryCode,
            "phone":contactNumber,
            "image":profileImg
        });
        
        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/update/${docterId}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            console.log(result)
            props.handler();
            // setTab(prev => prev+1)
        })
        .catch(error => console.log('error', error));
    }
  return (
    <>
        {loading && <Loader></Loader>}
        <form  className='col-12' onSubmit={basicDetailsForm}>
            <div className='d-flex gap-5'>
                <div className='d-flex col-9 d-flex d-flex-wrap border-box'>
                    <h4 className='f-600 l-26 col-12 text-primary'>Personal and Contact details</h4>
                    <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                        <h4 className='f-600 l-26 col-12 mt-5 text-black'>Personal  details</h4>
                        <div className='d-flex col-12 d-flex-wrap border-box'>
                            <div className='col-2'>
                                <label className='d-flex'>Prefix</label>
                                <input type="text" placeholder="Dr" readOnly></input>
                            </div>
                            <div className='col-10 d-flex d-flex-wrap border-box'>
                                <div className='ml-3 col-12'>
                                    <label className='d-flex'>Name</label>
                                    <input type="text" placeholder='Jane Doe' onChange={nameHandler} value={name}/>
                                </div>
                            </div>
                        </div>
                        <label className='d-flex col-12'>Gender</label>
                        <div className="d-flex col-12">
                            {gender==="male"?
                                <>
                                    <div className={`${styles["radio-buttons"]} d-flex d-align-center`}>
                                        <input onClick={genderHandler} type="radio" id="male" name="gender" value="male" checked/>
                                        <label htmlFor="male">Male</label>
                                    </div>
                                    <div className={`${styles["radio-buttons"]} d-flex ml-4`}>
                                        <input onClick={genderHandler} type="radio" id="female" name="gender" value="female" />
                                        <label htmlFor="female">Female</label>
                                    </div>
                                </>
                                :
                                <>
                                    <div className={`${styles["radio-buttons"]} d-flex d-align-center`}>
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
                        <div className='d-flex col-12'>
                            <div className='col-6'>
                                <label className='d-flex'>Enter City</label>
                                {/* <input type="text" placeholder="Enter your city" onChange={cityHandler} value={city}></input> */}
                                <PlacesAutocomplete value={city} onChange={setCity} onSelect={handleSelect}>
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
                                                            <h6 id={suggestion.terms[0].value} onClick={cityHandler} className='cursor-pointer f-400'>{suggestion.terms[0].value}</h6>
                                                        </div>
                                                    );
                                                })}
                                            </div>
                                        </>
                                    )}
                                </PlacesAutocomplete>
                            </div>
                            <div className='col-6 d-flex d-flex-wrap border-box'>
                                <div className='ml-3 col-12'>
                                    <label className='d-flex'>Enter years of experience</label>
                                    <input type="text" placeholder='Enter years of experience' onChange={expHandler} value={exp}/>
                                </div>
                            </div>
                        </div>
                        <label className='d-flex col-12'>About</label>
                        <textarea className='col-12' placeholder='Add your Bio' rows="3" onChange={bioHandler} value={bio}></textarea> 
                    </div>
                    <h4 className='f-600 l-26 col-12 mt-5 text-black'>Contact  details</h4>
                    <div className='d-flex col-12 d-flex-wrap d-align-center border-box mt-2'>
                        <label className='d-flex col-12'>Contact</label>
                        <div className='d-flex col-12'>
                            <div className='d-flex col-11'>
                                <div className="col-2">
                                    <DropDown handler={countryCodeHandler} data={countryCodeList} placeholder="+91"></DropDown>
                                </div>
                                <div className='col-10 d-flex d-flex-wrap border-box'>
                                    <div className='ml-3 col-12'>
                                        <input type="text" placeholder='Enter contact number' onChange={contactHandler} value={contactNumber}/>
                                    </div>
                                </div>
                            </div>
                            <div className='ml-3 col-1 d-flex d-align-center'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xns="http://www.w3.org/2000/svg">
                                    <path d="M4.035 15.4791C4.01193 15.6518 4.00024 15.8258 4 16.0001C4 18.3781 6.138 20.2841 8.521 19.9641C9.214 21.1981 10.534 22.0001 12 22.0001C13.466 22.0001 14.786 21.1981 15.479 19.9641C17.857 20.2841 20 18.3781 20 16.0001C20 15.8271 19.988 15.6531 19.965 15.4791C21.198 14.7861 22 13.4651 22 12.0001C22 10.5351 21.198 9.21409 19.965 8.52109C19.988 8.34709 20 8.17309 20 8.00009C20 5.62209 17.857 3.71209 15.479 4.03609C14.786 2.80209 13.466 2.00009 12 2.00009C10.534 2.00009 9.214 2.80209 8.521 4.03609C6.138 3.71209 4 5.62209 4 8.00009C4 8.17309 4.012 8.34709 4.035 8.52109C2.802 9.21409 2 10.5351 2 12.0001C2 13.4651 2.802 14.7861 4.035 15.4791ZM5.477 10.0761L6.579 9.78309L6.145 8.73009C6.04981 8.49846 6.00056 8.25052 6 8.00009C6 6.89709 6.897 6.00009 8 6.00009C8.247 6.00009 8.499 6.05009 8.73 6.14509L9.784 6.57909L10.077 5.47709C10.1899 5.05326 10.4396 4.67858 10.7873 4.4113C11.1351 4.14402 11.5614 3.99912 12 3.99912C12.4386 3.99912 12.8649 4.14402 13.2127 4.4113C13.5604 4.67858 13.8101 5.05326 13.923 5.47709L14.216 6.57909L15.27 6.14509C15.501 6.05009 15.753 6.00009 16 6.00009C17.103 6.00009 18 6.89709 18 8.00009C18 8.24709 17.95 8.50009 17.855 8.73009L17.421 9.78309L18.523 10.0761C18.9458 10.1903 19.3193 10.4407 19.5856 10.7885C19.8518 11.1363 19.9961 11.5621 19.9961 12.0001C19.9961 12.4381 19.8518 12.8639 19.5856 13.2117C19.3193 13.5595 18.9458 13.8098 18.523 13.9241L17.421 14.2171L17.855 15.2701C17.95 15.5001 18 15.7531 18 16.0001C18 17.1031 17.103 18.0001 16 18.0001C15.753 18.0001 15.501 17.9501 15.27 17.8551L14.216 17.4211L13.923 18.5231C13.8101 18.9469 13.5604 19.3216 13.2127 19.5889C12.8649 19.8562 12.4386 20.0011 12 20.0011C11.5614 20.0011 11.1351 19.8562 10.7873 19.5889C10.4396 19.3216 10.1899 18.9469 10.077 18.5231L9.784 17.4211L8.73 17.8551C8.49834 17.9502 8.25042 17.9995 8 18.0001C6.897 18.0001 6 17.1031 6 16.0001C6 15.7531 6.05 15.5001 6.145 15.2701L6.579 14.2171L5.477 13.9241C5.05416 13.8098 4.68073 13.5595 4.41445 13.2117C4.14817 12.8639 4.00388 12.4381 4.00388 12.0001C4.00388 11.5621 4.14817 11.1363 4.41445 10.7885C4.68073 10.4407 5.05416 10.1903 5.477 10.0761Z" fill="#3085F4"/>
                                    <path d="M15.742 10.7101L14.334 9.2901L11.003 12.5891L9.70697 11.2931L8.29297 12.7071L10.997 15.4111L15.742 10.7101Z" fill="#3085F4"/>
                                </svg>
                                <h5 className='f-600 l-22 text-primary'>verified</h5>
                            </div>
                        </div>
                        {/* <label className='d-flex'>Email</label>
                        <div className='d-flex col-12'>
                            <div className='d-flex col-11'>
                                <input type="email" placeholder="example@gmail.com"></input>
                            </div>
                            <div className='ml-3 col-1 d-flex d-align-center'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xns="http://www.w3.org/2000/svg">
                                    <path d="M4.035 15.4791C4.01193 15.6518 4.00024 15.8258 4 16.0001C4 18.3781 6.138 20.2841 8.521 19.9641C9.214 21.1981 10.534 22.0001 12 22.0001C13.466 22.0001 14.786 21.1981 15.479 19.9641C17.857 20.2841 20 18.3781 20 16.0001C20 15.8271 19.988 15.6531 19.965 15.4791C21.198 14.7861 22 13.4651 22 12.0001C22 10.5351 21.198 9.21409 19.965 8.52109C19.988 8.34709 20 8.17309 20 8.00009C20 5.62209 17.857 3.71209 15.479 4.03609C14.786 2.80209 13.466 2.00009 12 2.00009C10.534 2.00009 9.214 2.80209 8.521 4.03609C6.138 3.71209 4 5.62209 4 8.00009C4 8.17309 4.012 8.34709 4.035 8.52109C2.802 9.21409 2 10.5351 2 12.0001C2 13.4651 2.802 14.7861 4.035 15.4791ZM5.477 10.0761L6.579 9.78309L6.145 8.73009C6.04981 8.49846 6.00056 8.25052 6 8.00009C6 6.89709 6.897 6.00009 8 6.00009C8.247 6.00009 8.499 6.05009 8.73 6.14509L9.784 6.57909L10.077 5.47709C10.1899 5.05326 10.4396 4.67858 10.7873 4.4113C11.1351 4.14402 11.5614 3.99912 12 3.99912C12.4386 3.99912 12.8649 4.14402 13.2127 4.4113C13.5604 4.67858 13.8101 5.05326 13.923 5.47709L14.216 6.57909L15.27 6.14509C15.501 6.05009 15.753 6.00009 16 6.00009C17.103 6.00009 18 6.89709 18 8.00009C18 8.24709 17.95 8.50009 17.855 8.73009L17.421 9.78309L18.523 10.0761C18.9458 10.1903 19.3193 10.4407 19.5856 10.7885C19.8518 11.1363 19.9961 11.5621 19.9961 12.0001C19.9961 12.4381 19.8518 12.8639 19.5856 13.2117C19.3193 13.5595 18.9458 13.8098 18.523 13.9241L17.421 14.2171L17.855 15.2701C17.95 15.5001 18 15.7531 18 16.0001C18 17.1031 17.103 18.0001 16 18.0001C15.753 18.0001 15.501 17.9501 15.27 17.8551L14.216 17.4211L13.923 18.5231C13.8101 18.9469 13.5604 19.3216 13.2127 19.5889C12.8649 19.8562 12.4386 20.0011 12 20.0011C11.5614 20.0011 11.1351 19.8562 10.7873 19.5889C10.4396 19.3216 10.1899 18.9469 10.077 18.5231L9.784 17.4211L8.73 17.8551C8.49834 17.9502 8.25042 17.9995 8 18.0001C6.897 18.0001 6 17.1031 6 16.0001C6 15.7531 6.05 15.5001 6.145 15.2701L6.579 14.2171L5.477 13.9241C5.05416 13.8098 4.68073 13.5595 4.41445 13.2117C4.14817 12.8639 4.00388 12.4381 4.00388 12.0001C4.00388 11.5621 4.14817 11.1363 4.41445 10.7885C4.68073 10.4407 5.05416 10.1903 5.477 10.0761Z" fill="#3085F4"/>
                                    <path d="M15.742 10.7101L14.334 9.2901L11.003 12.5891L9.70697 11.2931L8.29297 12.7071L10.997 15.4111L15.742 10.7101Z" fill="#3085F4"/>
                                </svg>
                                <h5 className='f-600 l-22 text-primary'>verified</h5>
                            </div>
                        </div> */}
                        
                    </div>
                </div>
                <div className={`col-2 mt-8`}>
                    <h6 className='f-600 l-20 text-secondary'>Profile picture</h6>
                    <h6 className='f-400 l-20 text-grey-3 mt-1'>Recommended Image size: 400x400px</h6>
                    {profileImg?
                        
                        <div className={styles["profile-picture-upload"]}>
                            <img src={profileImg}></img>
                        </div>
                        :
                        <div className={styles["profile-picture-upload"]}>
                            <svg width="41" height="51" viewBox="0 0 41 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.885 30.5C35.6236 30.5 36.3549 30.6455 37.0372 30.9282C37.7195 31.2109 38.3395 31.6253 38.8616 32.1477C39.3837 32.67 39.7978 33.2901 40.0802 33.9726C40.3627 34.655 40.5078 35.3864 40.5075 36.125V38.42C40.5067 39.8528 40.0584 41.2495 39.225 42.415C35.3625 47.825 29.05 50.5025 20.5 50.5025C11.9475 50.5025 5.64001 47.8225 1.78501 42.4125C0.955325 41.2475 0.509633 39.8527 0.51001 38.4225V36.1225C0.510009 34.6322 1.10169 33.2028 2.15503 32.1486C3.20838 31.0943 4.6372 30.5013 6.12751 30.5H34.8825H34.885ZM20.5 0.512497C22.1415 0.512497 23.767 0.835818 25.2836 1.464C26.8001 2.09219 28.1781 3.01293 29.3388 4.17366C30.4996 5.33439 31.4203 6.71238 32.0485 8.22895C32.6767 9.74552 33 11.371 33 13.0125C33 14.654 32.6767 16.2795 32.0485 17.796C31.4203 19.3126 30.4996 20.6906 29.3388 21.8513C28.1781 23.0121 26.8001 23.9328 25.2836 24.561C23.767 25.1892 22.1415 25.5125 20.5 25.5125C17.1848 25.5125 14.0054 24.1955 11.6612 21.8513C9.31697 19.5071 8.00001 16.3277 8.00001 13.0125C8.00001 9.69729 9.31697 6.51787 11.6612 4.17366C14.0054 1.82946 17.1848 0.512497 20.5 0.512497Z" fill="#82829B"/>
                            </svg>
                        </div>
                    }
                </div>
            </div>
            <div className='col-12 mt-60 d-flex d-justify-end'>
                <button className='col-3 btn btn-primary d-flex d-justify-center'>Save</button>
            </div>
        </form>
    </>
  )
}

export default BasicDetails