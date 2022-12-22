import React, { useEffect,useRef,useState } from 'react'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies'
import styles from './css/profile.module.css'
import Loader from './Loader'
const Registration = () => {
    const JWTToken = getVezitaOnBoardFromCookie();
    const[inputList,setInputList] = useState([{registrationNumber:"",councilName:"",year:""}])  
    const[docterId,setDoctorId] = useState("")
    const[loading,setLoading] = useState(false)
    //documnet states
    const[document,setDocument] = useState([{type:"",url:""}])
    const [index,setIndex] = useState(0);
    const idRef = useRef();

    useEffect(()=>{
        if(JWTToken){
            getProfile();
        }
    },[])

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
            setLoading(false)
            if(parsedResult.docter.medicalRegistrationDetails[0]){
                setInputList(parsedResult.docter.medicalRegistrationDetails)
            }
            // getDocument(parsedResult.docter._id)
        })
        .catch(error => console.log('error', error));
    }
    //delete reg API
    const deleteReg = (id) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");
        
        var requestOptions = {
            method:'DELETE',
            headers:myHeaders,
            redirect:'follow'
        };
        
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}registration/delete/${id}`,requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    //add new slot of reg details
    const addEduHandler = () =>{
        setInputList([...inputList,{registrationNumber:"",councilName:"",year:""}])
    }

    //handle reg details inputs
    const handleInputChange = (e,index) =>{
        const {name,value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    //remove a full slot of reg details
    const removeEducationHandler = (index,item) =>{
        if(item._id){
            deleteReg(item._id);
        }
        const list = [...inputList];
        list.splice(index,1);
        setInputList(list)
    }

    //identity proof Handler
    const idHandler = (e,type) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var formdata = new FormData();
        formdata.append("type","document");
        formdata.append("file", e.currentTarget.files[0]);

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
            addDocumentsUrl(type,value)
        })
        .catch(error => console.log('error', error));
    }

    const addDocumentsUrl = (type,value) =>{
        const list = [...document];
        list[index]["type"] = type;
        list[index]["url"] = value;
        setIndex(++index)
        setDocument(list);
        setDocument([...document,{type:"",url:""}])
    }

    //get all documnet of doctor
    // const getDocument = (docterid) =>{
    //     var myHeaders = new Headers();
    //     myHeaders.append("token",JWTToken);

    //     var requestOptions = {
    //         method: 'GET',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };

    //     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}document/${docterid}`, requestOptions)
    //     .then(response => response.text())
    //     .then(result => {
    //         const parseDoc = JSON.parse(result)
    //         console.log(parseDoc.documents)
    //     })
    //     .catch(error => console.log('error', error));
    // }

    //form to save Registration data
    const regForm = (e) =>{
        e.preventDefault();
        uploadDocument()
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type","application/json");

        for(var i = 0;i<inputList.length;i++){
            var raw = JSON.stringify({
                "registrationNumber":inputList[i].registrationNumber,
                "councilName":inputList[i].councilName,
                "year":inputList[i].year
            });

            var addBody = JSON.stringify({
                "registrationNumber":inputList[i].registrationNumber,
                "councilName":inputList[i].councilName,
                "year":inputList[i].year,
                "docter":docterId
            });

            var requestOptions = {
                method: 'PATCH',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            var requestOptionsAdd = {
                method: 'POST',
                headers: myHeaders,
                body: addBody,
                redirect: 'follow'
            };

            if(inputList[i]._id){
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}registration/update/${inputList[i]._id}`, requestOptions)
                .then(response => response.text())
                .then(result => result)
                .catch(error => console.log('error', error));
            }else{
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}registration`, requestOptionsAdd)
                .then(response => response.text())
                .then(result => result)
                .catch(error => console.log('error', error));
            }
            
        }
    }

    const uploadDocument = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        for(var i=0;i<document.length;i++){
            if(document[i].type){
                var raw = JSON.stringify({
                    "documentType":document[i].type,
                    "document": document[i].url,
                    "docter": docterId,
                })

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}document`, requestOptions)
                .then(response => response.text())
                .then(result => result)
                .catch(error => console.log('error', error));
            }
        }
    }
  return (
    <>
        {loading && <Loader></Loader>}
        <h4 className='f-600 l-26 col-12 text-primary'>Registration and Documents</h4>
        <form onSubmit={regForm}>
            <div className='d-flex col-11 d-flex-wrap '>
                <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                    <h4 className='f-600 l-26 col-12 text-black mt-5'>Registration details</h4>
                    {inputList.map((item,index)=>(
                        <>
                            <div className='d-flex d-flex-wrap col-12 gap-2'>
                                <div className='col-4'>
                                    <label className='d-flex'>Council registration number</label>
                                    <input type="text" placeholder='Enter Council registration number' name='registrationNumber' value={item.registrationNumber} onChange={e => handleInputChange(e,index)} />
                                </div>
                                <div className='col-3 d-flex d-flex-wrap border-box'>
                                    <div className='col-12'>
                                        <label className='d-flex'>Council name</label>
                                        <input type="text" placeholder='Enter Council name' name='councilName' value={item.councilName} onChange={e => handleInputChange(e,index)} />
                                    </div>
                                </div>
                                <div className='col-3 d-flex d-flex-wrap border-box'>
                                    <div className='col-12'>
                                        <label className='d-flex'>Council Year</label>
                                        <input type="text" placeholder='Enter Council Year' name='year' value={item.year} onChange={e => handleInputChange(e,index)} />
                                    </div>
                                </div>
                                {inputList.length>1 &&
                                    <div onClick={() => removeEducationHandler(index,item)} className={`cursor-pointer mt-40 bg-red col-1 d-flex d-flex-wrap d-align-center d-justify-center ${styles["remove-btn"]}`}>
                                        <img src='cross.png'></img>
                                    </div>
                                }
                            </div>
                            {inputList.length - 1 === index &&
                                <div onClick={addEduHandler} className='cursor-pointer d-flex d-align-center mt-4'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z" fill="#3085F4"/>
                                    </svg>
                                    <h5 className='ml-3 f-500 l-22 text-primary'>Add More</h5>
                                </div>
                            }
                        </>
                    ))}
                </div>
                <div className='col-12 mt-7 d-flex d-flex-wrap'>
                    <h4 className='f-600 l-26 col-12 text-black mt-7'>Documents</h4> 
                    <div className='col-12 gap-2 d-flex mt-7'>
                        <div className='col-3 d-flex d-flex-column gap-1'>
                            <h6 className='f-600 l-26 col-12 text-black'>Identity Proof</h6>
                            <div className={`p-relative d-flex d-align-center d-justify-center gap-2 ${styles["document-upload-section"]}`}>
                                <input
                                    id="file-input-field-identity"
                                    className={`${styles["file-uploader-input"]}`} 
                                    type='file'
                                    ref={idRef}
                                    multiple={false}
                                    onChange={e => idHandler(e,"identity")}
                                >
                                </input>
                                <img src='file-upload.png'></img>
                                <h6 className='f-400 l-26 col-12 text-grey-3'>
                                    Upload (PDF, JPG, PNG)
                                </h6>
                            </div>
                            <h6 className='f-500 l-26 col-12 text-grey-3'>Documents includes driving license, voter card or any government IDs</h6>
                        </div>      
                        <div className='col-3 d-flex d-flex-column gap-1'>
                            <h6 className='f-600 l-26 col-12 text-black'>Medical registration proof</h6>
                            <div className={`p-relative d-flex d-align-center d-justify-center gap-2 ${styles["document-upload-section"]}`}>
                                <input
                                    id="file-input-field-medical"
                                    className={`${styles["file-uploader-input"]}`} 
                                    type='file'
                                    ref={idRef}
                                    multiple={false}
                                    onChange={e => idHandler(e,"medical")}
                                >
                                </input>
                                <img src='file-upload.png'></img>
                                <h6 className='f-400 l-26 col-12 text-grey-3'>
                                    Upload (PDF, JPG, PNG)
                                </h6>
                            </div>
                            <h6 className='f-500 l-26 col-12 text-grey-3'>Your medical registration certification</h6>
                        </div>  
                        <div className='col-3 d-flex d-flex-column gap-1'>
                            <h6 className='f-600 l-26 col-12 text-black'>Qualification proof</h6>
                            <div className={`p-relative d-flex d-align-center d-justify-center gap-2 ${styles["document-upload-section"]}`}>
                                <input
                                    id="file-input-field-qualification"
                                    className={`${styles["file-uploader-input"]}`} 
                                    type='file'
                                    ref={idRef}
                                    multiple={false}
                                    onChange={e => idHandler(e,"qualification")}
                                >
                                </input>
                                <img src='file-upload.png'></img>
                                <h6 className='f-400 l-26 col-12 text-grey-3'>
                                    Upload (PDF, JPG, PNG)
                                </h6>
                            </div>
                            <h6 className='f-500 l-26 col-12 text-grey-3'>Your college certificate</h6>
                        </div> 
                        <div className='col-3 d-flex d-flex-column gap-1'>
                            <h6 className='f-600 l-26 col-12 text-black'>Establishment proof</h6>
                            <div className={`p-relative d-flex d-align-center d-justify-center gap-2 ${styles["document-upload-section"]}`}>
                                <input
                                    id="file-input-field-establishment"
                                    className={`${styles["file-uploader-input"]}`} 
                                    type='file'
                                    ref={idRef}
                                    multiple={false}
                                    onChange={e => idHandler(e,"establishment")}
                                >
                                </input>
                                <img src='file-upload.png'></img>
                                <h6 className='f-400 l-26 col-12 text-grey-3'>
                                    Upload (PDF, JPG, PNG)
                                </h6>
                            </div>
                            <h6 className='f-500 l-26 col-12 text-grey-3'>License/Documents that proves that you own the establishment</h6>
                        </div> 
                    </div> 
                </div>
                <div className='col-12 mt-60 d-flex d-justify-end'>
                    <button className='col-3 btn btn-primary d-flex d-justify-center'>Save</button>
                </div>
            </div>
        </form>
    </>
  )
}

export default Registration


