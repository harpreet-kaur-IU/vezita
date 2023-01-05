import React, { useEffect, useRef, useState } from 'react'
import Header from './Header'
import styles from './css/BookingDetails.module.css'
import styles2 from './css/TableTemplate.module.css'
import DynamicDropdown from './DynamicDropdown'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies'
import { useRouter } from 'next/router'
import Loader from './Loader'
const Prescription = (props) => {
    const router = useRouter();
    const [patientSlotId,setPatientSlotId] = useState();
    const JWTToken = getVezitaOnBoardFromCookie();
    const[inputList,setInputList] = useState([{_id:"",drug:"",inst:"",duration:"",morningDosae:"",eveningDosae:"",nightDosae:"",durationType:"",instruction:""}]) 
    const[template,setTemplate] = useState("")
    const[tempName,setTempName] = useState("")
    const[tempId,setTempId] = useState("")
    const[drugLength,setDrugLength] = useState("")
    const[patientData,setPatientData] = useState(props.data.patient)
    const[loading,setLoading] = useState(false)
    const[todayDate,setTodayDate] = useState("")

    const[doctorID,setDoctorId] = useState("");
    const[report,setReport] = useState([])
    const[reportType,setReportType] = useState([])
    const[diagnosedFor,setDiagnosedFor] = useState([])

    const fileRef = useRef();
    const durTypeData = [
        {
            "title":"day"
        },
        {
            "title":"week"
        },
        {
            "title":"month"
        }  
    ];

    useEffect(()=>{
        if(JWTToken){
            var date = new Date().toISOString().slice(0,10);
            setTodayDate(date);
            getAllTemplate();
            getProfile();
            setPatientSlotId(router.query["slotId"])
        }
    },[])

    //get patient Details
    // const getPatient = () =>{
    //     var myHeaders = new Headers();
    //     myHeaders.append("token",JWTToken);

    //     var requestOptions = {
    //         method: 'GET',
    //         redirect: 'follow'
    //     };
          
    //     setLoading(true)
    //     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}patient/get/${patientId}`, requestOptions)
    //     .then(response => response.text())
    //     .then(result => {
    //         const parsePatient = JSON.parse(result)
            
    //         setLoading(false)
    //     })
    //     .catch(error => console.log('error', error));
    // }
    //all input handlers
    const nameHandler = (e) =>{
        setTempName(e.target.value)
    }

    //instruction Handler
    const instHandler = (e,index) =>{
        const name = "instruction";
        const val = e.target.value;
        const list = [...inputList];
        list[index][name] = val;
        setInputList(list);
    }

    //duration Type handler
    const durationTypeHandler = (value,index) =>{
        const name = "durationType";
        const val = value;
        const list = [...inputList];
        list[index][name] = val;
        setInputList(list);
    }

    //add template API
    const addTemplate = (e) =>{
        e.preventDefault()
        var drug = []
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        if(tempId){
            var addDrug = {};
            if(drugLength!=inputList.length){
                for(var i=drugLength;i<inputList.length;i++){     
                    addDrug = {
                        "template":tempId,
                        "drug": inputList[i].drug,
                        "inst": inputList[i].inst,
                        "instruction": inputList[i].instruction?inputList[i].instruction:"after food",
                        "morningDosae" :inputList[i].morningDosae,
                        "eveningDosae":inputList[i].eveningDosae,
                        "nightDosae":inputList[i].nightDosae,
                        "duration":inputList[i].duration,
                        "durationType": inputList[i].durationType
                    }
                }

                var drugString = JSON.stringify(addDrug)
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: drugString,
                    redirect: 'follow'
                };
                
                setLoading(true)
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}template/drug-instruction/create`, requestOptions)
                .then(response => response.text())
                .then(result => setLoading(false))
                .catch(error => console.log('error', error));
            }else{
                console.log(inputList)
            }
            for(var i=0;i<drugLength;i++){
                var drugInstruction = {
                    "drug": inputList[i].drug,
                    "inst": inputList[i].inst,
                    "instruction": inputList[i].instruction?inputList[i].instruction:"after food",
                    "morningDosae" :inputList[i].morningDosae,
                    "eveningDosae":inputList[i].eveningDosae,
                    "nightDosae":inputList[i].nightDosae,
                    "duration":inputList[i].duration,
                    "durationType": inputList[i].durationType
                };
                
                var updateDrug = JSON.stringify(drugInstruction)
                
                var requestOptions = {
                    method: 'PATCH',
                    headers: myHeaders,
                    body: updateDrug,
                    redirect: 'follow'
                };
                  
                setLoading(true)
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}template/drug-instruction/${inputList[i]._id}`, requestOptions)
                .then(response => response.text())
                .then(result => setLoading(false))
                .catch(error => console.log('error', error));
            }
        }
        else{
            for(var i=0;i<inputList.length;i++){
                var drunInstruction = {
                    "drug": inputList[i].drug,
                    "inst": inputList[i].inst,
                    "instruction": inputList[i].instruction?inputList[i].instruction:"after food",
                    "morningDosae" :inputList[i].morningDosae,
                    "eveningDosae":inputList[i].eveningDosae,
                    "nightDosae":inputList[i].nightDosae,
                    "duration":inputList[i].duration,
                    "durationType": inputList[i].durationType
                };
                drug.push(drunInstruction);
            }

            var raw = JSON.stringify({
                "name":tempName,
                "drunInstruction":drug
            })

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };
        
            setLoading(true)
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}template`, requestOptions)
            .then(response => response.text())
            .then(result => {
                getAllTemplate()
                setLoading(false)
            })
            .catch(error => console.log('error', error));
        }
      
    }

    //get all templates
    const getAllTemplate = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        setLoading(true)
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}template`, requestOptions)
        .then(response => response.text())
        .then(result => {
            var parseTemp = JSON.parse(result)
            setTemplate(parseTemp.templates)
            setLoading(false)
        })
        .catch(error => console.log('error', error));
    }

    //input handler and add data in input list
    const handleInputChange = (e,index) =>{
        const {name,value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    //add drug slot
    const addDrugHandler = () =>{
        setInputList([...inputList,{drug:"",inst:"",duration:"",morningDosae:"",eveningDosae:"",nightDosae:"",durationType:"",instruction:""}])
    }

    //remove drug slot
    const removeDrugHandler = (index,item) =>{
        if(item._id){
            deleteDrug(item._id);
        }
        const list = [...inputList];
        list.splice(index,1);
        setInputList(list)
    }

    //add already build Template
    const addExistingTemplateHandler = (item,id) =>{
        var name = item.drunInstruction;
        setInputList(name)
        setTempId(id)
        setDrugLength(name.length)
        setTempName(item.name)
    } 

    //remove drug API
    const deleteDrug = (drugId) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            redirect: 'follow'
        };

        setLoading(true)
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}template/drug-instruction/${drugId}/delete`, requestOptions)
        .then(response => response.text())
        .then(result =>{
            var druglen = drugLength-1;
            setDrugLength(druglen)
            getAllTemplate()
            setLoading(false)
        })
        .catch(error => console.log('error', error));
    }

    //add prescription
    const savePrescription = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var drugArray = [];
        for(var i=0;i<inputList.length;i++){
            var drugSingle = {
                "drug": inputList[i].drug,
                "inst": inputList[i].inst,
                "instruction": inputList[i].instruction,
                "timeAndDosage": [
                  {
                    "time": "morning",
                    "dosage": inputList[i].morningDosae
                  },
                  {
                    "time": "evening",
                    "dosage": inputList[i].eveningDosae
                  },
                  {
                    "time": "night",
                    "dosage": inputList[i].nightDosae
                  }
                ],
                "duration": inputList[i].duration,
                "durationType": inputList[i].durationType
            }  
            drugArray.push(drugSingle)
        }
        var raw = JSON.stringify({
            "slotId": patientSlotId,
            "patientId": patientData._id,
            "drunInstruction": drugArray
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}drug-instruction-patient/prescribe`, requestOptions)
        .then(response => response.text())
        .then(result => {
            
        })
        .catch(error => console.log('error', error));
    }

    //view patients details
    const viewPatientDetails = () =>{
        router.push(`/patientdetails/${patientData._id}`)
    }

    //medical report uploaded by doctor
    const reportHandler = (e) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var formdata = new FormData();
        formdata.append("type","docterReport");
        for(var i=0;i<e.target.files.length;i++){
            formdata.append("file", e.target.files[i]);
        }

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}file-upload`, requestOptions)
        .then(response => response.text())
        .then(result => {
            var parsedResult = JSON.parse(result)
            // var allUrls = [];
            // for(var i=0;i<parsedResult.urls.length;i++){
            //     allUrls.push(parsedResult.urls[i])
            //     console.log(parsedResult.urls[i])
            // }
            setReport(parsedResult.urls[0])
        })
        .catch(error => console.log('error', error));
    }
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
        })
        .catch(error => console.log('error', error));
    }
    //save medical reports
    const reportTypeHandler = (e) =>{
        setReportType(e.target.value)
    }

    const diagnosedForHandler = (e) =>{
        setDiagnosedFor(e.target.value)
    }

    const saveReport = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "reportType": reportType,
            "diagonsedFor": diagnosedFor,
            "reportFile": report,
            "patient": patientData._id,
            "user": patientData.user,
            "docter": doctorID,
            "slotId":patientSlotId
        });
    
        console.log(raw)
        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: raw,
        //     redirect: 'follow'
        // };

        // setLoading(true)
        // fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter-report-of-patient`, requestOptions)
        // .then(response => response.text())
        // .then(result => setLoading(false))
        // .catch(error => console.log('error', error));
        
    }
    const doctorId = (val) =>{
        console.log(val)
    }
  return (
    <>
        {loading && <Loader></Loader>}
        <Header title="Prescription" DoctorIdHandler={doctorId}></Header>
        <div className={`d-flex ${styles["wrapper"]}`} style={{paddingBottom:"18px"}}>
            <div className={`col-12 ${styles["left-column"]}`} style={{marginRight: "0px"}}>
                <div className={`bg-grey7 ${styles["left-col-2"]}`} style={{marginTop:"0px"}}>
                    <div className={`d-flex d-align-center d-justify-space-between ${styles["patient-details-wrapper"]}`} style={{paddingBottom:"20px"}}>
                        <div className={`d-flex d-align-center ${styles["patient-details"]}`}>
                            <img className={`${styles["patient-img"]}`} src={patientData.avatar}></img>
                            <div className='d-flex d-flex-column'>
                                <h5>{patientData.name}</h5>
                                <h5>ID:{patientData._id}</h5>
                            </div>
                        </div>
                        <div className={`d-flex ${styles["icons-wrapper"]}`} style={{gap:"28px"}}>
                            <div className={`cursor-pointer ${styles["call-icon"]}`}>
                                <img src='phone.png'></img>
                            </div>
                            <div className={`cursor-pointer ${styles["mail-icon"]}`}>
                                <img src='mail.png'></img>
                            </div>
                            <div className={`cursor-pointer ${styles["message-icon"]}`}>
                                <img src='chat.png'></img>
                            </div>
                            <div onClick={viewPatientDetails} className={`d-flex d-align-center cursor-pointer ${styles["view-details-btn"]}`}>
                                <h5 className='l-22 f-500'>View all details</h5>
                                <img src='arrow.png'></img>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/* Appintment Details */}
        <div className={`d-flex d-align-center d-justify-space-between ${styles["wrapper-appointment-details"]}`}>
            <div className={`d-flex d-flex-column ${styles["appointment-details"]}`}>
                <h3 className='f-500 l-28 text-dark-blue'>Today, {todayDate}</h3>
                {/* <h5 className='f-400 l-22'>Appointment ID:<span className='f-500'> 89341908</span></h5> */}
            </div>
            <button onClick={savePrescription} className={`d-flex d-align-center ${styles["appointment-send-btn"]}`}>
                <h5 className='f-500 l-22 text-dark-blue'>Send</h5>
                <img src="send-icon.png"></img>
            </button>
        </div>
        {/* Table and template */}
        <div className={`d-flex ${styles2["wrapper"]}`}>
            <form className='col-8' onSubmit={addTemplate}>
                <div className='col-12'>
                    <div className={`d-flex d-align-center d-justify-space-between ${styles2["add-template-wrapper"]}`}>
                        <div className={`d-flex d-flex-column ${styles2["template-name-wrapper"]}`}>
                            <h6 className='l-20 f-600 text-secondary'>Template</h6>
                            <input type="text" placeholder='Name of the template' value={tempName} onChange={nameHandler} required></input>
                        </div>
                        <button className={`cursor-pointer d-flex d-align-center ${styles2["add-btn-wrapper"]}`}>
                            <img src="plus-white.png"></img>
                            <h4 className='l-26 f-600'>Add</h4>
                        </button>
                    </div>
                    {inputList.map((item,index)=>(
                        <>
                            <div className={`d-flex ${styles2["drug-detail-wrapper"]}`}>
                                <div className='col-5 d-flex d-flex-column'>
                                    <div className={`d-flex d-flex-column ${styles2["drug-detail-left"]}`}>
                                        <h6 className='l-20 f-600 text-secondary'>Drug</h6>
                                        <input type="text" placeholder='Add the Drug' name='drug' value={item.drug} onChange={e => handleInputChange(e,index)} required></input>
                                    </div>
                                    <div className={`d-flex d-flex-column ${styles2["drug-detail-left-instruction"]}`}>
                                        <h6 className='l-20 f-600 text-secondary'>Instructions</h6>
                                        <input type="text" placeholder='Instructions' name='inst' value={item.inst} onChange={e => handleInputChange(e,index)} required></input>
                                    </div>
                                </div>
                                
                                <div className='col-6 offset-1 d-flex d-flex-column'>
                                    <div className={`${styles2["drug-detail-right"]}`}>
                                        <h6 className='l-20 f-600 text-secondary'>Instructions</h6>
                                        <div className={`col-12 d-flex ${styles2["instruction-radio-btn-details"]}`}>
                                            {item.instruction == "before food" ?
                                                <>
                                                    <div className={`d-flex ${styles2["instruction-radio-btn"]}`}>
                                                        <input onClick={e => instHandler(e,index)} className='m-0' type="radio" name={index} value="before food" checked></input>
                                                        <h5 className='l-22 f-400'>Before food</h5>
                                                    </div>
                                                    <div className={`d-flex ${styles2["instruction-radio-btn"]}`}>
                                                        <input onClick={e => instHandler(e,index)} className='m-0' type="radio" name={index} value="after food"></input>
                                                        <h5 className='l-22 f-400'>After food</h5>
                                                    </div>
                                                </>
                                            :
                                            
                                                <>
                                                    <div className={`d-flex ${styles2["instruction-radio-btn"]}`}>
                                                        <input onClick={e => instHandler(e,index)} className='m-0' type="radio" name={index} value="before food"></input>
                                                        <h5 className='l-22 f-400'>Before food</h5>
                                                    </div>
                                                    <div className={`d-flex ${styles2["instruction-radio-btn"]}`}>
                                                        <input onClick={e => instHandler(e,index)} className='m-0' type="radio" name={index} value="after food" checked></input>
                                                        <h5 className='l-22 f-400'>After food</h5>
                                                    </div>
                                                </>
                                            }
                                        </div>

                                        <div className={`${styles2['time-and-dosage-wrapper']}`}>
                                            <h6 className='l-20 f-600 text-secondary'>Time and dosage</h6>
                                            <div className={`d-flex gap-2 ${styles2["time-and-dosage-check-box-details"]}`}>
                                                <div className='d-flex d-flex-column'>
                                                    <div className={`d-flex ${styles2["time-and-dosage-check-box"]}`}>
                                                        <input className='m-0' type="checkbox"></input>
                                                        <h5 className='l-22 f-400'>Morning</h5>
                                                    </div>
                                                    <div className={`${styles2["doasge-dropdown-wrapper"]}`}>
                                                        <input type="text" name='morningDosae' value={item.morningDosae} onChange={e => handleInputChange(e,index)}></input>
                                                    </div>
                                                </div>
                                                
                                                <div className='d-flex d-flex-column'>
                                                    <div className={`d-flex ${styles2["time-and-dosage-check-box"]}`}>
                                                        <input className='m-0' type="checkbox"></input>
                                                        <h5 className='l-22 f-400'>Evening</h5>
                                                    </div>

                                                    <div className={`${styles2["doasge-dropdown-wrapper"]}`}>
                                                        <input type="text" name='eveningDosae' value={item.eveningDosae} onChange={e => handleInputChange(e,index)}></input>
                                                    </div>
                                                </div>
                                                <div className='d-flex d-flex-column'>
                                                    <div className={`d-flex ${styles2["time-and-dosage-check-box"]}`}>
                                                        <input className='m-0' type="checkbox"></input>
                                                        <h5 className='l-22 f-400'>Night</h5>
                                                    </div>
            
                                                    <div className={`${styles2["doasge-dropdown-wrapper"]}`}>
                                                        <input type="text" name='nightDosae' value={item.nightDosae} onChange={e => handleInputChange(e,index)}></input>
                                                    </div>
                                                </div>
                                                {inputList.length>1 &&
                                                    <div onClick={() => removeDrugHandler(index,item)} className={`d-flex d-align-center d-justify-center cursor-pointer ${styles2["delete-icon-wrapper"]}`}>
                                                        <img src='delete-icon.png'></img>
                                                    </div>
                                                }
                                            </div>
                                        </div>

                                        <div className={`d-flex d-flex-column ${styles2["duration-wrapper"]}`}>
                                            <h6 className='l-20 f-600 text-secondary'>Duration</h6>
                                            <div className={`d-flex col-12 ${styles2["duration-input-dropdown-wrapper"]}`}>
                                            <input className='col-6' type="text" name='duration' value={item.duration} onChange={e => handleInputChange(e,index)} ></input>
                                                <DynamicDropdown index={index} handler={durationTypeHandler} placeholder={item.durationType} data={durTypeData} width="150px"></DynamicDropdown>
                                            </div>  
                                        </div>
                                    </div>
                                </div>
                            </div>
                    
                            {inputList.length - 1 === index &&
                                <div onClick={addDrugHandler} className='cursor-pointer d-flex d-align-center mt-4'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z" fill="#3085F4"/>
                                    </svg>
                                    <h5 className='ml-3 f-500 l-22 text-primary'>Add More</h5>
                                </div>
                            }
                        </>
                    ))}
                </div>
            </form>
            <div className='d-flex d-flex-column gap-5 col-4'>
                <div className={`bg-grey7 ${styles2["template-wrapper"]}`}>
                    <h3 className={`f-500 l-28 ${styles2["template-heading"]}`}>Template</h3>
                    <div className={`d-flex d-align-center ${styles2["template-search-input"]}`}>
                        <img src='search-icon.png'></img>
                        <input className='col-12' type="text" placeholder='Search'></input>
                    </div>
                    {template && template.map((item)=>(
                        <div className={`d-flex d-align-center d-justify-space-between ${styles2["template-search-suggestions"]}`}>
                            <h6 className='l-20 f-500 text-grey-2'>{item.name}</h6>
                            <img onClick={()=>addExistingTemplateHandler(item,item.id)} src="plus-grey.png"></img>
                        </div>
                    ))}
                </div>
                <div className={`p-5 d-flex d-flex-column gap-2 ${styles2["upload-doctor-report"]}`}>
                    <div className='d-flex d-align-center d-justify-space-between'>
                        <h3 className='f-500 l-28'>Add Documents</h3>
                        <button onClick={saveReport} className={`cursor-pointer d-flex d-align-center gap-1 ${styles["document-send-btn"]}`}>
                            <h5 className='f-500 l-22 text-dark-blue'>Save</h5>
                            <img src="send-icon.png"></img>
                        </button>
                    </div>
                    <h5 className='l-22 f-400 text-secondary text-center'>Upload any documents that you want to send along with prescription.</h5>
                    <div className='d-flex d-flex-column gap-1'>
                        <label className='h4 l-22 f-600'>Report</label>
                        <div className={`p-relative d-flex d-align-center d-justify-center d-flex-column gap-1 pt-5 pb-5 pl-4 pr-4 ${styles2["file-uploader-for-report"]}`}>
                            <img src='file-upload.png'></img>
                            {report.length>0?<h5 className='l-22 f-400 text-grey-3'>File Uploaded Sucessfully </h5>:<h5 className='l-22 f-400 text-grey-3'>Upload (PDF, JPG, PNG)</h5>}
                            <input 
                                type='file'
                                ref={fileRef}
                                onChange={reportHandler}
                                multiple={true}
                            >
                            </input>
                        </div>
                    </div>

                    <div className={`d-flex d-flex-column gap-1 ${styles2["drug-detail-left"]}`}>
                        <label className='h4 l-22 f-600'>Report type</label>
                        <input type="text" value={reportType} onChange={reportTypeHandler} placeholder='Enter Report Type' required></input>
                    </div>
                    <div className={`d-flex d-flex-column gap-1 ${styles2["drug-detail-left"]}`}>
                        <label className='h4 l-22 f-600'>Diagonsed For</label>
                        <input type="text" value={diagnosedFor} onChange={diagnosedForHandler} placeholder='Enter Diagnosed for Condition/Disease' required></input>
                    </div>
                    {/* {report && report.map((item,index)=>(
                        <h5 className='f-400 l-22 text-grey-3'>File {index}</h5>
                    ))} */}
                </div>
            </div>
        </div>
    </>
  )
}

export default Prescription