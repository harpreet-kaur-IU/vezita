import React, { useEffect, useState } from 'react'
import styles from '../css/Choice.module.css'
import styles2 from '../css/AddDetails.module.css'
import DynamicDropdown from '../DynamicDropdown'
const Choice = (props) => {
    const[add,setAdd] = useState(false)
    const[fieldName,setName] = useState(props.name)
    const addDetails = () =>{
        setAdd(true)
    }
     useEffect(()=>{
        // setName(props.name)
     },[])
  return (
    <>

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
                <div className={`d-flex d-justify-space-between`}>
                    <h2 className='f-600 l-32'>Upload Report</h2>
                    <button onClick={props.handler} className={`cursor-pointer ${styles2["save-btn"]}`}>Save</button>
                </div>
                <div className={`d-flex d-flex-column `}>
                    <div className={`d-flex d-flex-column ${styles["report-content"]}`}>
                        <span className='h6 f-600 l-20'>Report type</span>
                        <DynamicDropdown></DynamicDropdown>
                    </div>
                    <div className={`col-12 d-flex d-flex-column ${styles["report-content"]}`}>
                        <span className='h6 f-600 l-20'>Diagonsed for</span>
                        <input className='l-22 f-400' type="text" placeholder='Disease Name'></input>
                    </div>
                    <div className={`col-12 d-flex d-flex-column ${styles["report-content-upload"]}`}>
                        <span className='h6 f-600 l-20'>Supported formats: JPG, PNG, PDF, DOC</span>
                        <div className={`d-flex d-align-center d-justify-center ${styles["report-upload-wrapper"]}`}>
                            <input className='l-22 f-400' type="file"></input>
                            <img src='file-upload.png'></img>
                            <span className='h6'>Upload banner</span>
                        </div>
                    </div>
                </div>
            </div>
        }
        {add === true &&
            <div className={`d-flex d-flex-column ${styles2["wrapper"]}`}>
                <div className={`d-flex d-justify-space-between`}>
                    <h2 className='f-600 l-32'>Add an allergy</h2>
                    <button onClick={props.handler} className={`cursor-pointer ${styles2["save-btn"]}`}>Save</button>
                </div>
                <div className={`d-flex ${styles2["tags"]}`}>
                    <div className={`d-flex d-align-center ${styles2["tags-wrapper"]}`}>
                        <h6 className='f-500 l-20'>Fish</h6>
                        <img className='cursor-pointer' src='cross-grey.png'></img>
                    </div>
                    <div className={`d-flex d-align-center ${styles2["tags-wrapper"]}`}>
                        <h6 className='f-500 l-20'>Eggs</h6>
                        <img className='cursor-pointer' src='cross-grey.png'></img>
                    </div>
                </div>
                <input className={`${styles2["search-input"]}`} placeholder='Add your allergy'></input>
                <div className={`${styles2["suggestions-div"]}`}>
                    <h6 className='f-600 l-20 text-grey-3'>SUGGESTIONS</h6>
                    <ul className={`${styles2["suggestion-items"]}`}>
                        <li><h5 className='text-secondary l-22 f-500'>Lactose</h5></li>
                        <li><h5 className='text-secondary l-22 f-500'>Soy</h5></li>
                        <li><h5 className='text-secondary l-22 f-500'>Gluten</h5></li>
                    </ul>
                </div>
            </div>
        }
     </>
    
  )
}

export default Choice