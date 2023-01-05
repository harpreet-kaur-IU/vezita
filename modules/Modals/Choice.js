import React, { useEffect, useRef, useState } from 'react'
import styles from '../css/Choice.module.css'
import styles2 from '../css/AddDetails.module.css'
import DynamicDropdown from '../DynamicDropdown'
import { getVezitaOnBoardFromCookie } from '../../auth/userCookies'
const Choice = (props) => {
    const JWTToken = getVezitaOnBoardFromCookie();
    const[add,setAdd] = useState(false)
    const[fieldName,setName] = useState(props.name)
    const[data,setData] = useState("")
    const[list,setList] = useState([])
    
    const[suggestion,setSuggestion] = useState("")
    const[dropdown,setDropdown] = useState("")

    const[reportType,setReportType] = useState("")
    const[disease,setDisease] = useState("")
    const[reportFile,setReportFile] = useState("")



    const[allergy,setAllergy] = useState([])
    const reportRef = useRef();
    //value states
    const [blood,setBlood] = useState("")

    //handlers
    const bloodHandler = (e) =>{
        setBlood(e.target.value)
    }

    const addDetails = () =>{
        setAdd(true)
    }

    //reports Handler
    const reportTypeHandler = (e) =>{
        setReportType(e.target.value)
    }

    const diseaseHandler = (e) =>{
        setDisease(e.target.value)
    }

    const reportFileHandler  = (e) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var formdata = new FormData();
        formdata.append("type","patientMedical");
        formdata.append("file", e.target.files[0]);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}file-upload`, requestOptions)
        .then(response => response.text())
        .then(result => {
            var parsedResult = JSON.parse(result)
            setReportFile(parsedResult.urls[0])
        })
        .catch(error => console.log('error', error));
    }

    const inputHandler = (e) =>{
        if(!list.includes(e.currentTarget.id)){
            list.push(e.currentTarget.id)
        }
        
        setData(e.currentTarget.id)
    }
    // useEffect(()=>{
    //     setTimeout(() => {
    //         console.log(list)
    //     }, 1000);
    // },[list])

    const removeHandler = (e) =>{
        const listing = [...list]
        const id = e.currentTarget.id;
        listing.splice(id,1)
        setList(listing)
    }
    useEffect(()=>{
        if(fieldName == "Allergies"){
            console.log(allergy)
        }
    },[add])

    const formSubmit = (e) =>{
        e.preventDefault()
        if(fieldName == "Blood Group"){
            props.values("Blood Group",blood)
            props.handler()
        }
        else if(fieldName == "Allergies"){
            props.values("Allergies",list)
            setAllergy(list)
            props.handler()
        }
        else if(fieldName == "Current medications"){
            props.values("Current medications",list)
            props.handler()
        }
        else if(fieldName == "Past medications"){
            props.values("Past medications",list)
            props.handler()
        }
        else if(fieldName == "Chronic diseases"){
            props.values("Chronic diseases",list)
            props.handler()
        }
        else if(fieldName == "Injuries"){
            props.values("Injuries",list)
            props.handler()
        }
        else if(fieldName == "Reports"){
            props.reports(reportType,disease,reportFile)
            props.handler()
        }
    }
    const searchHandler = (e) =>{
        setData(e.target.value)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        
        if(e.target.value.length>2 && fieldName == "Allergies"){
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}medical-data/allergy?search=${e.target.value}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const parsedResult = JSON.parse(result)
                setSuggestion(parsedResult.allergyData)
                setDropdown(true)
            })
            .catch(error => console.log('error', error));
        }
        else if(e.target.value.length>2 && fieldName == "Current medications"){
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}medical-data/current-medication?search=${e.target.value}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const parsedResult = JSON.parse(result)
                setSuggestion(parsedResult.currentMedication)
                setDropdown(true)
            })
            .catch(error => console.log('error', error));
        }
        else if(e.target.value.length>2 && fieldName == "Past medications"){
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}medical-data/past-medication?search=${e.target.value}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const parsedResult = JSON.parse(result)
                setSuggestion(parsedResult.pastMedication)
                setDropdown(true)
            })
            .catch(error => console.log('error', error));
        }
        else if(e.target.value.length>2 && fieldName == "Chronic diseases"){
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}medical-data/chronic-disease?search=${e.target.value}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const parsedResult = JSON.parse(result)
                setSuggestion(parsedResult.chronicDisease)
                setDropdown(true)
            })
            .catch(error => console.log('error', error));
        }
        else if(e.target.value.length>2 && fieldName == "Injuries"){
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}medical-data/injury?search=${e.target.value}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const parsedResult = JSON.parse(result)
                setSuggestion(parsedResult.injury)
                setDropdown(true)
            })
            .catch(error => console.log('error', error));
        }
        else if(e.target.value.length>2 && fieldName == "Surgeries"){
        
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}medical-data/surgery?search=${e.target.value}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const parsedResult = JSON.parse(result)
                setSuggestion(parsedResult.surgery)
                setDropdown(true)
            })
            .catch(error => console.log('error', error));
        }
    }
  return (
    <>
        {/* Add Allergies */}
        {add === false && fieldName == "Blood Group" &&
            <div className={`d-flex d-flex-column ${styles2["wrapper"]}`}>
                <form onSubmit={formSubmit}>
                    <div className={`d-flex d-justify-space-between`}>
                        <h2 className='f-600 l-32'>Add Blood Group</h2>
                        <button className={`cursor-pointer ${styles2["save-btn"]}`}>Save</button>
                    </div>
                    <input onChange={bloodHandler} value={blood} className={`${styles2["search-input"]}`} placeholder='Add your Blood Group'></input>
                </form>
            </div>
        }
        {/* Add Allergies */}
        {add === false && fieldName == "Allergies" &&
            <div className={`d-flex d-flex-column ${styles["wrapper"]}`}>
                <div className='d-flex d-justify-space-between'>
                    <h2>Do you have allergies?</h2>
                    {/* <button onClick={props.handler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["cancel-btn"]}`}><img src='cross.png'></img></button> */}
                </div>

                <div onClick={props.handler} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='choice'></input>
                    <h5 className='l-22 f-500'>No</h5>
                </div>
                <div onClick={addDetails} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='choice'></input>
                    <h5 className='l-22 f-500'>Yes,I am Allergic</h5>
                </div>
            </div>
        }

        {/* Current Medication */}
        {add === false && fieldName == "Current medications" &&
            <div className={`d-flex d-flex-column ${styles["wrapper"]}`}>
                <div className='d-flex d-justify-space-between'>
                    <h2>Are you on Medications?</h2>
                    {/* <button onClick={props.handler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["cancel-btn"]}`}><img src='cross.png'></img></button> */}
                </div>

                <div onClick={props.handler} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='current medication'></input>
                    <h5 className='l-22 f-500'>No</h5>
                </div>
                <div onClick={addDetails} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='current medication'></input>
                    <h5 className='l-22 f-500'>Yes,I am on Medications</h5>
                </div>
            </div>
        }

        {/* Past medications */}
        {add === false && fieldName == "Past medications" &&
            <div className={`d-flex d-flex-column ${styles["wrapper"]}`}>
                <div className='d-flex d-justify-space-between'>
                    <h2>Do you have any Past Medications History?</h2>
                    {/* <button onClick={props.handler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["cancel-btn"]}`}><img src='cross.png'></img></button> */}
                </div>

                <div onClick={props.handler} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='past medication'></input>
                    <h5 className='l-22 f-500'>No</h5>
                </div>
                <div onClick={addDetails} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='past medication'></input>
                    <h5 className='l-22 f-500'>Yes,I was on Medications</h5>
                </div>
            </div>
        }

        {/* Chronic diseases */}
        {add === false && fieldName == "Chronic diseases" &&
            <div className={`d-flex d-flex-column ${styles["wrapper"]}`}>
                <div className='d-flex d-justify-space-between'>
                    <h2>Do you have any Chronic disease History?</h2>
                    {/* <button onClick={props.handler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["cancel-btn"]}`}><img src='cross.png'></img></button> */}
                </div>

                <div onClick={props.handler} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='Chronic diseases'></input>
                    <h5 className='l-22 f-500'>No</h5>
                </div>
                <div onClick={addDetails} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='Chronic diseases'></input>
                    <h5 className='l-22 f-500'>Yes,I have</h5>
                </div>
            </div>
        }

        {/* Injuries */}
        {add === false && fieldName == "Injuries" &&
            <div className={`d-flex d-flex-column ${styles["wrapper"]}`}>
                <div className='d-flex d-justify-space-between'>
                    <h2>Do you have any Injury History?</h2>
                    {/* <button onClick={props.handler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["cancel-btn"]}`}><img src='cross.png'></img></button> */}
                </div>

                <div onClick={props.handler} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='Chronic diseases'></input>
                    <h5 className='l-22 f-500'>No</h5>
                </div>
                <div onClick={addDetails} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='Chronic diseases'></input>
                    <h5 className='l-22 f-500'>Yes,I have</h5>
                </div>
            </div>
        }

        {/* Surgeries */}
        {add === false && fieldName == "Surgeries" &&
            <div className={`d-flex d-flex-column ${styles["wrapper"]}`}>
                <div className='d-flex d-justify-space-between'>
                    <h2>Do you have any Surgeries Record?</h2>
                    {/* <button onClick={props.handler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["cancel-btn"]}`}><img src='cross.png'></img></button> */}
                </div>

                <div onClick={props.handler} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='Chronic diseases'></input>
                    <h5 className='l-22 f-500'>No</h5>
                </div>
                <div onClick={addDetails} className={`${styles["radio-button-no-wrapper"]}`}>
                    <input type="radio" name='Chronic diseases'></input>
                    <h5 className='l-22 f-500'>Yes,I have</h5>
                </div>
            </div>
        }

        {/* Reports */}
        {add === false && fieldName == "Reports" &&
            <div className={`d-flex d-flex-column ${styles["upload-wrapper"]}`}>
                <form onSubmit={formSubmit}>
                    <div className={`d-flex d-justify-space-between`}>
                        <h2 className='f-600 l-32'>Upload Report</h2>
                        <button className={`cursor-pointer ${styles2["save-btn"]}`}>Save</button>
                    </div>
                    <div className={`d-flex d-flex-column `}>
                    
                        <div className={`d-flex d-flex-column ${styles["report-content"]}`}>
                            <span className='h6 f-600 l-20'>Report type</span>
                            <input value={reportType} onChange={reportTypeHandler} className='l-22 f-400' type="text" placeholder='Report Type' required></input>
                        </div>
                        <div className={`col-12 d-flex d-flex-column ${styles["report-content"]}`}>
                            <span className='h6 f-600 l-20'>Diagonsed for</span>
                            <input value={disease} onChange={diseaseHandler} className='l-22 f-400' type="text" placeholder='Disease Name' required></input>
                        </div>
                        <div className={`col-12 d-flex d-flex-column ${styles["report-content-upload"]}`}>
                            <span className='h6 f-600 l-20'>Supported formats: JPG, PNG, PDF, DOC</span>
                            <div className={`d-flex d-align-center d-justify-center ${styles["report-upload-wrapper"]}`}>
                                <input 
                                    className='l-22 f-400'
                                    type='file'
                                    ref={reportRef}
                                    multiple={false}
                                    onChange={reportFileHandler}
                                    required
                                ></input>
                                <img src='file-upload.png'></img>
                                {reportFile ?<span className='h6'>File Uploaded Sucessfully</span> : <span className='h6'>Upload banner</span>}
                            </div>
                        </div>
                        
                    </div>
                </form>
            </div>
        }
        {add === true &&
            <div className={`d-flex d-flex-column ${styles2["wrapper"]}`}>
                <form onSubmit={formSubmit}>
                    <div className={`d-flex d-justify-space-between`}>
                        <h2 className='f-600 l-32'>Add an {fieldName}</h2>
                        <button className={`cursor-pointer ${styles2["save-btn"]}`}>Save</button>
                    </div>
                    <div className={`d-flex d-flex-wrap ${styles2["tags"]}`}>
                        {list && list.map((item,index)=>(
                            <div className={`d-flex d-align-center ${styles2["tags-wrapper"]}`}>
                                <h6 className='f-500 l-20'>{item}</h6>
                                <img id={index} onClick={removeHandler} className='cursor-pointer' src='cross-grey.png'></img>
                            </div>
                        ))}
                        {/* <div className={`d-flex d-align-center ${styles2["tags-wrapper"]}`}>
                            <h6 className='f-500 l-20'>Eggs</h6>
                            <img className='cursor-pointer' src='cross-grey.png'></img>
                        </div> */}
                    </div>
                    <div className='d-flex col-12'>
                        <input value={data} onChange={searchHandler} className={`col-12 ${styles2["search-input"]}`} placeholder={`Add your ${fieldName}`}></input>
                    </div>
                    <div className={`${styles2["suggestions-div"]}`}>
                        {dropdown && 
                            <>
                                <h6 className='f-600 l-20 text-grey-3'>SUGGESTIONS</h6>
                                <ul className={`${styles2["suggestion-items"]}`}>
                                    {suggestion && suggestion.map((item)=>(
                                        <li><h5 id={item.name} onClick={inputHandler} className='cursor-pointer text-secondary l-22 f-500'>{item.name}</h5></li>
                                    ))}
                                </ul>
                            </>
                        }
                    </div>
                </form>
            </div>
        }
     </>
    
  )
}

export default Choice