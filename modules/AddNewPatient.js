import {useRouter} from 'next/router'
import React, { useState } from 'react'
import styles from './css/AddNewPatient.module.css'
import DynamicDropdown from './DynamicDropdown';
import Header from './Header'
import Modal from './Modals/Modal'
import Choice from './Modals/Choice'
const AddNewPatient = () => {
    const[add,setAdd] = useState(false);
    const[fieldId,setFieldId] = useState("");
    const [activeTab, setActiveTab] = useState("tab1");
    const router = useRouter();

    const AddDetails = (e) =>{
        setAdd(!add);
        setFieldId(e.currentTarget.id);
    }
    const handleClick = (e) =>{
        setActiveTab(e.target.id);
    }
    const navigateHandler = () =>{
        router.push("/patientdetails")
    }
  return (
    <>
        <Header title="Add a new patient"></Header>
        <div className={`${styles["wrapper"]}`}>
            <div className='d-flex d-justify-space-between'>
                <div className={`d-flex ${styles["tabs-wrapper"]}`}>
                    <h3 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab1" ? styles["active"] : ""} `}>Personal</h3>
                    <h3 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab2" ? styles["active"] : ""}`} >Medical</h3>
                </div>
                <button onClick={navigateHandler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["save-btn"]}`}>
                    <h5 className='text-primary f-500 l-22'>Save</h5>
                    <img src='save-tick.png'></img>
                </button>
            </div>
            {activeTab === "tab1" &&
                <div className={`d-flex d-flex-column ${styles["personal-details-wrapper"]}`}>
                    <div className='col-12'><img src='dr.png'></img></div>
                    <form className='d-flex col-12'>
                        <div className='col-5 '>
                            <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Name</h6>
                                <input className='text-secondary l-22 f-400' type="text"></input>
                            </div>
                            <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Email (Optional)</h6>
                                <input className='text-secondary l-22 f-400' type="email"></input>
                            </div>
                            <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Relationship</h6>
                                <input className='text-secondary l-22 f-400' type="text"></input>
                            </div>
                           
                            <div className={`d-flex d-flex-column ${styles["contact-field"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Contact</h6>
                                <div className='d-flex'>
                                    <DynamicDropdown width="92px"></DynamicDropdown>
                                    <input className={`col-12 text-secondary l-22 f-400 ${styles["contact-input"]}`} type="text"></input>
                                </div>
                            </div>
                            
                            <div className={`${styles["gender-radio-btn-wrapper"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Gender</h6>   
                                <div className={`d-flex ${styles["gender-radio-btns"]}`}>
                                    <div className={`d-flex d-align-center ${styles["gender-radio-btn-1"]}`}>
                                        <input className='cursor-pointer' type="radio" name="gender" id="male"></input>
                                        <label className='cursor-pointer l-22 f-400' for="male">Male</label>
                                    </div>
                                    <div className={`d-flex d-align-center ${styles["gender-radio-btn-2"]}`}>
                                        <input className='cursor-pointer' type="radio" name="gender" id='female' checked></input>
                                        <label className='cursor-pointer l-22 f-400' for="female">Female</label>
                                    </div>
                                </div>                                 
                            </div>
                            <div className={`d-flex d-flex-column ${styles["contact-field"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Date of Birth</h6>
                                <div className={`d-flex ${styles["date-of-birth-drp"]}`}>
                                    <DynamicDropdown width="200px"></DynamicDropdown>
                                    <DynamicDropdown width="200px"></DynamicDropdown>
                                    <DynamicDropdown width="200px"></DynamicDropdown>
                                </div>
                            </div>
                        </div>

                        <div className='col-5 offset-1'>
                            <div className={`${styles["gender-radio-btn-wrapper"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Martital Status</h6>   
                                <div className={`d-flex ${styles["gender-radio-btns"]}`}>
                                    <div className={`d-flex d-align-center ${styles["gender-radio-btn-1"]}`}>
                                        <input className='cursor-pointer' type="radio" name="martial" id="single"></input>
                                        <label className='cursor-pointer l-22 f-400' for="single">Single</label>
                                    </div>
                                    <div className={`d-flex d-align-center ${styles["gender-radio-btn-2"]}`}>
                                        <input className='cursor-pointer' type="radio" name="martial" id='married' checked></input>
                                        <label className='cursor-pointer l-22 f-400' for="married">Married</label>
                                    </div>
                                </div>                                 
                            </div>
                            <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Height</h6>
                                <input className='text-secondary l-22 f-400' type="text"></input>
                            </div>
                            <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Weight</h6>
                                <input className='text-secondary l-22 f-400' type="text"></input>
                            </div>
                            <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Emergency Contact name</h6>
                                <input className='text-secondary l-22 f-400' type="text"></input>
                            </div>
                            <div className={`d-flex d-flex-column ${styles["contact-field"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Emergency Contact number</h6>
                                <div className='d-flex'>
                                    <DynamicDropdown width="92px"></DynamicDropdown>
                                    <input className={`col-12 text-secondary l-22 f-400 ${styles["contact-input"]}`} type="text"></input>
                                </div>
                            </div>
                            <div className={`d-flex d-flex-column ${styles["name-field"]}`}>
                                <h6 className='text-secondary l-20 f-600'>Location</h6>
                                <input className='text-secondary l-22 f-400' type="text"></input>
                            </div>
                        </div>
                    </form>
                </div>
            }
            {activeTab === "tab2" && 
            <>
                <div className={`d-flex d-align-center d-justify-space-between col-6 ${styles["medical-details-wrapper"]}`}>
                    <h6 className='f-600 l-20 text-secondary'>Blood Group</h6>
                    <div className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                        <img src='plus-icon.png'></img>
                        <h6 className='text-primary'>Add</h6>
                    </div>
                </div>
                <div className={`d-flex d-flex-column  col-6 ${styles["medical-details-wrapper"]}`}>
                    <div className={`col-12 d-flex d-align-center d-justify-space-between`}>
                        <h6 className='f-600 l-20 text-secondary'>Allergies</h6>
                        <div onClick={AddDetails} id="Allergies" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                            <img src='plus-icon.png'></img>
                            <h6 className='text-primary'>Add</h6>
                        </div>
                    </div>
                    <div className={`d-flex ${styles["badeges-wrapper"]}`}>
                        <div className={`d-flex d-align-center d-justify-center ${styles["badges-item"]}`}>
                            <span className='text-grey-2 l-22 f-400 h6'>Eggs</span>
                            <img className='cursor-pointer' src='cross-grey.png'></img>
                        </div>
                        <div className={`d-flex d-align-center d-justify-center ${styles["badges-item"]}`}>
                            <span className='text-grey-2 l-22 f-400 h6'>Soy</span>
                            <img className='cursor-pointer' src='cross-grey.png'></img>
                        </div>
                        <div className={`d-flex d-align-center d-justify-center ${styles["badges-item"]}`}>
                            <span className='text-grey-2 l-22 f-400 h6'>Tomato</span>
                            <img className='cursor-pointer' src='cross-grey.png'></img>
                        </div>
                    </div>
                </div>
                <div className={`d-flex d-align-center d-justify-space-between col-6 ${styles["medical-details-wrapper"]}`}>
                    <h6 className='f-600 l-20 text-secondary'>Current medications</h6>
                    <div onClick={AddDetails} id="Current medications" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                        <img src='plus-icon.png'></img>
                        <h6 className='text-primary'>Add</h6>
                    </div>
                </div>
                <div className={`d-flex d-align-center d-justify-space-between col-6 ${styles["medical-details-wrapper"]}`}>
                    <h6 className='f-600 l-20 text-secondary'>Past medications</h6>
                    <div onClick={AddDetails} id="Past medications" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                        <img src='plus-icon.png'></img>
                        <h6 className='text-primary'>Add</h6>
                    </div>
                </div>
                <div className={`d-flex d-align-center d-justify-space-between col-6 ${styles["medical-details-wrapper"]}`}>
                    <h6 className='f-600 l-20 text-secondary'>Chronic diseases</h6>
                    <div onClick={AddDetails} id="Chronic diseases" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                        <img src='plus-icon.png'></img>
                        <h6 className='text-primary'>Add</h6>
                    </div>
                </div>
                <div className={`d-flex d-align-center d-justify-space-between col-6 ${styles["medical-details-wrapper"]}`}>
                    <h6 className='f-600 l-20 text-secondary'>Injuries</h6>
                    <div onClick={AddDetails} id="Injuries" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                        <img src='plus-icon.png'></img>
                        <h6 className='text-primary'>Add</h6>
                    </div>
                </div>
                <div className={`d-flex d-align-center d-justify-space-between col-6 ${styles["medical-details-wrapper"]}`}>
                    <h6 className='f-600 l-20 text-secondary'>Surgeries</h6>
                    <div onClick={AddDetails} id="Surgeries" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                        <img src='plus-icon.png'></img>
                        <h6 className='text-primary'>Add</h6>
                    </div>
                </div>
                <div className={`d-flex d-flex-column col-6 ${styles["medical-details-wrapper"]}`}>
                    <div className={`d-flex d-align-center d-justify-space-between`}>
                        <h6 className='f-600 l-20 text-secondary'>Reports</h6>
                        <div onClick={AddDetails} id="Reports" className={`cursor-pointer bg-blue-1 d-flex d-align-center ${styles["add-wrapper"]}`}>
                            <img src='plus-icon.png'></img>
                            <h6 className='text-primary'>Add</h6>
                        </div>
                    </div>   
                    <div className={`d-flex col-6 ${styles["reports-details-wrapper"]}`}>
                        <div className='d-flex d-align-center'>
                            <img src='file-uploader.png'></img>
                            <h5 className='text-secondary f-500 l-22'>Diabetes (Jane Doe)</h5>
                            <img src='cross-grey.png'></img>
                        </div>
                    </div> 
                </div>
            </>  
            }
        </div>
        {add && 
            <Modal modalClass="modal-verify">
                <Choice name={fieldId} handler={AddDetails} ></Choice>
            </Modal>
        }
    </>
  )
}

export default AddNewPatient