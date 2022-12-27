import React ,{useEffect, useState} from 'react'
import Header from './Header'
import styles from './css/BookingDetails.module.css'
import styles2 from './css/TableTemplate.module.css'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies';
import Loader from './Loader'
import { useRouter } from 'next/router';
const CreateRecord = (props) => {
  const router = useRouter();
  const JWTToken = getVezitaOnBoardFromCookie();
  const[template,setTemplate] = useState("");
  const[loading,setLoading] = useState(false);
  const[drugData,setDrugData] = useState("");
  const[patientSlotId,setPatientSlotId] = useState("");
  const[patientId,setPatientId] = useState("");
  const[todayDate,setTodayDate] = useState("");

  useEffect(()=>{ 
    var date = new Date().toISOString().slice(0,10);
    setTodayDate(date);
    getTemplate();
    setPatientId(router.query["id"])
    setPatientSlotId(router.query["slotId"])
  },[])

  //get all templates
  const getTemplate = () =>{
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

  //get and add one template 
  const getTemplateById = (templateId) =>{
    var myHeaders = new Headers();
    myHeaders.append("token",JWTToken);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    setLoading(true)
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}template/${templateId}`, requestOptions)
    .then(response => response.text())
    .then(result => {
      var parseTemp = JSON.parse(result)
      setDrugData(parseTemp.template.drunInstruction)
      setLoading(false)
    })
    .catch(error => console.log('error', error));
  }

  //get a single patients record
  const getPatient = () =>{
    var myHeaders = new Headers();
    myHeaders.append("token",JWTToken);
    myHeaders.append("Content-Type", "application/json");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}patient/get/${patientId}`, requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  //add prescription
  const savePrescription = () =>{
    var myHeaders = new Headers();
    myHeaders.append("token",JWTToken);
    myHeaders.append("Content-Type", "application/json");

    var drugArray = [];
    for(var i=0;i<drugData.length;i++){
      var drugSingle = {
        "drug": drugData[i].drug,
        "inst": drugData[i].inst,
        "instruction": drugData[i].instruction,
        "timeAndDosage": [
          {
            "time": "morning",
            "dosage": drugData[i].morningDosae
          },
          {
            "time": "evening",
            "dosage": drugData[i].eveningDosae
          },
          {
            "time": "night",
            "dosage": drugData[i].nightDosae
          }
        ],
        "duration": drugData[i].duration,
        "durationType": drugData[i].durationType
      }  
      drugArray.push(drugSingle)
    }
    var raw = JSON.stringify({
      "slotId": patientSlotId,
      "patientId": patientId,
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
    .then(result => console.log(result))
    .catch(error => console.log('error', error));
  }
  return (
    <>
      {loading && <Loader></Loader>}
      <Header title="Create a medical record"></Header>
      <div className={`d-flex ${styles["wrapper"]}`} style={{paddingBottom:"18px"}}>
          <div className={`col-12 ${styles["left-column"]}`} style={{marginRight: "0px"}}>
              <div className={`bg-grey-7 ${styles["left-col-2"]}`} style={{marginTop:"0px"}}>
                  <div className={`d-flex d-align-center d-justify-space-between ${styles["patient-details-wrapper"]}`} style={{paddingBottom:"20px"}}>
                    <div className={`d-flex d-align-center ${styles["patient-details"]}`}>
                      <img className={`${styles["patient-img"]}`} src={props.data.patient.avatar} alt="patients Image"></img>
                      <div className='d-flex d-flex-column'>
                        <h5>{props.data.patient.name}</h5>
                        <h5>ID: {props.data.patient._id}</h5>
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
                      <div className={`d-flex d-align-center cursor-pointer ${styles["view-details-btn"]}`}>
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
        <div className={`col-8 ${styles2["booking-table-scroll-section"]}`}>
          <div className={`${styles2["booking-table-wrapper"]}`}>
            <div className={`${styles2["booking-table-header-row"]} d-flex d-align-center`}>
              <span className='d-flex'>
                <h5 className='l-22 f-500'>Drug</h5>
              </span>
              <span className='d-flex'>
                <h5 className='l-22 f-500'>Frequency</h5>
              </span>
              <span className='d-flex'>
                <h5 className='l-22 f-500'>Duration</h5>
              </span>
              <span className='d-flex'>
                <h5 className='l-22 f-500'>Instructions</h5>
              </span>
            </div>
            {drugData && drugData.map((item)=>(
              <div key={item._id} className={`${styles2["booking-table-column"]} d-flex d-align-center`}>
                <span className='d-flex'>
                  <h5 className='l-22 f-400'>{item.drug}</h5>
                </span>
                <span className='d-flex'>
                  <h5 className='l-22 f-400'>{item.duration} {item.durationType == "day"?"daily":item.durationType}</h5>
                </span>
                <span className='d-flex'>
                  <h5 className='l-22 f-400'>{item.duration} {item.durationType}</h5>
                </span>
                <span className='d-flex'>
                  <h5 className='l-22 f-400'>{item.inst}</h5>
                </span>
              </div>
            ))}
          </div>
        </div>
        <div className={`bg-grey-7 col-4 ${styles2["template-wrapper"]}`}>
          <h3 className={`f-500 l-28 ${styles2["template-heading"]}`}>Template</h3>
          <div className={`d-flex d-align-center ${styles2["template-search-input"]}`}>
            <img src='search-icon.png'></img>
            <input className='col-12' type="text" placeholder='Search'></input>
          </div>
          {template && template.map((item)=>(
            <div className={`d-flex d-align-center d-justify-space-between ${styles2["template-search-suggestions"]}`}>
              <h6 className='l-20 f-500 text-grey-2'>{item.name}</h6>
              <img onClick={()=>getTemplateById(item.id)} src="plus-grey.png"></img>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CreateRecord