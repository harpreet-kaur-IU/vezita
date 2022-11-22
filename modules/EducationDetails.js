import React, { useEffect,useState } from 'react'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies'
import styles from './css/profile.module.css'
const EducationDetails = () => {
    const JWTToken = getVezitaOnBoardFromCookie();
    const[inputList,setInputList] = useState([{degree:"",institute:"",year:""}])  
    const[suggestion,setSuggestion] = useState("")
    const[dropdown,setDropdown] = useState(false)
    const[list,setList] = useState([])
    const[displayList,setDisplayList] = useState([])
    const[docterId,setDoctorId] = useState("")
    const[qualificationId,setQualificationId] = useState("")
    //add new slot of education details
    const addEduHandler = () =>{
        setInputList([...inputList,{degree:"",institute:"",year:""}])
    }

    //handle education details inputs
    const handleInputChange = (e,index) =>{
        const {name,value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    //remove a full slot of education details
    const removeEducationHandler = (index,item) =>{
        if(item._id){
            deleteEducation(item._id);
        }
        const list = [...inputList];
        list.splice(index,1);
        setInputList(list)
    }
  
    //delete education API
    const deleteEducation = (id) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");
        
        var requestOptions = {
            method:'DELETE',
            headers:myHeaders,
            redirect:'follow'
        };
        
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}qualification/delete/${id}`,requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error',error));
    }

    //form to save education data
    const educationForm = (e) =>{
        e.preventDefault();
        addSpecialization()
        
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type","application/json");

        for(var i = 0;i<inputList.length;i++){
            var raw = JSON.stringify({
                "degree":inputList[i].degree,
                "institute":inputList[i].institute,
                "year":inputList[i].year,
            });

            var addBody = JSON.stringify({
                "degree":inputList[i].degree,
                "institute":inputList[i].institute,
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
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}qualification/update/${inputList[i]._id}`, requestOptions)
                .then(response => response.text())
                .then(result => {
                    console.log(result)
                })
                .catch(error => console.log('error', error));
            }else{
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}qualification`, requestOptionsAdd)
                .then(response => response.text())
                .then(result => console.log(result))
                .catch(error => console.log('error', error));
            }
           
        }
    }

    //to handler specialization input
    const inputHandler = (id,name) =>{
        if(!list.includes(id)){
            list.push(id) 
            displayList.push(name)
        }
        setDropdown(false)
    }

    //useffect to call get profile()
    useEffect(()=>{
        if(JWTToken){
            getProfile()
            getSpecialization()
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

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/profile-me`, requestOptions)
        .then(response => response.text())
        .then(result =>{
            const parsedResult =  JSON.parse(result)
            setDoctorId(parsedResult.docter._id)
            if(parsedResult.docter.education[0]){
                setInputList(parsedResult.docter.education)
                setQualificationId(parsedResult.docter.education[0]._id)
            }
            if(parsedResult.docter.specialization.length>0){
                setList(parsedResult.docter.specialization)
            }
        })
        .catch(error => console.log('error', error));
    }
   
    //specialization sugggestion handler
    const searchHandler = (e) =>{
        // setData(e.target.value)

        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        if(e.target.value.length>2){
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}service/specializations?search=${e.target.value}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                var parsedResult = JSON.parse(result)
                setSuggestion(parsedResult.specialization)
                console.log(parsedResult.specialization)
                if(parsedResult.specialization.length>0){
                    setDropdown(true)
                }else{
                    setDropdown(false)
                }
            }) 
            .catch(error => console.log('error', error));
        }
        else{
            setDropdown(false)
        }
    }

    //specialization remove Handler
    const removeHandler = (index) =>{
        
        const listing = [...list];
        listing.splice(index,1);
        setList(listing)

        const dlisting = [...displayList]
        dlisting.splice(index,1)
        setDisplayList(dlisting)
    }

    //add specialization API
    const addSpecialization = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        var arraySpe = [];
        for(var i=0;i<list.length;i++){
            var obj = {
                    "specializationId":list[i],
                    "docter":docterId
                }
                arraySpe.push(obj)
        }
        
        var raw = JSON.stringify(arraySpe)
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}doctor-specialization`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }

    //get specialization API
    const getSpecialization = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}doctor-specialization`, requestOptions)
        .then(response => response.text())
        .then(result => {
            const specialization = JSON.parse(result)
            var dlisting = [];
            var listing = [];
            
            for(var i=0;i<specialization.specializations.length;i++){
                var id = specialization.specializations[i].specializationId.id
                var name = specialization.specializations[i].specializationId.name
                
                if(!list.includes(id)){
                    //set data in list to store
                    listing.push(id)
                    setList(listing)

                    //set data in display list
                    dlisting.push(name)
                    setDisplayList(dlisting)
                }
            }
        })
        .catch(error => console.log('error', error));
    }

  return (
    <>
        <h4 className='f-600 l-26 col-12 text-primary'>Education and Specialization</h4>
        <form onSubmit={educationForm}>
            <div className='d-flex col-11 d-flex-wrap '>
                <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                    <h4 className='f-600 l-26 col-12 text-black mt-5'>Education</h4>
                    {inputList.map((item,index)=>(
                        <>
                            <div className='d-flex d-flex-wrap col-12 gap-2'>
                                <div className='col-4'>
                                    <label className='d-flex'>Qualification</label>
                                    <input type="text" placeholder='Enter your qualification' name='degree' value={item.degree} onChange={e => handleInputChange(e,index)} />
                                </div>
                                <div className='col-3 d-flex d-flex-wrap border-box'>
                                    <div className='col-12'>
                                        <label className='d-flex'>College</label>
                                        <input type="text" placeholder='Enter college name' name='institute' value={item.institute} onChange={e => handleInputChange(e,index)} />
                                    </div>
                                </div>
                                <div className='col-3 d-flex d-flex-wrap border-box'>
                                    <div className='col-12'>
                                        <label className='d-flex'>Completion year</label>
                                        <input type="text" placeholder='Enter year of completion' name='year' value={item.year} onChange={e => handleInputChange(e,index)} />
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
                                    <h5 className='ml-3 f-500 l-22 text-primary'>Add Education</h5>
                                </div>
                            }
                        </>
                    ))}
                </div>
                <div className='p-relative col-12 mt-7 d-flex d-flex-wrap'>
                    <h4 className='f-600 l-26 col-12 text-black mt-7'>Specialization</h4>
                    <label className='d-flex col-12'>Add Specialization</label>
                    <div className='d-flex col-8'>
                        <div className={`bg-grey-7 rounded-8 col-12 d-flex  d-align-center ${styles["add-service"]}`}>
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z" fill="#60606c"/>
                            </svg>
                            <input type="text" onChange={searchHandler} placeholder='Add Specialization'/>
                        </div> 
                    </div>
                    <div className={`${styles["suggestions-div"]}`}>
                        {dropdown && 
                            <>
                                <h6 className='mt-5 f-600 l-20 text-grey-3'>SUGGESTIONS</h6>
                                <ul className={`${styles["suggestion-items"]}`}>
                                    {suggestion && suggestion.map((item)=>(
                                        <li><h5 onClick={()=>inputHandler(item._id,item.name)} className='cursor-pointer text-secondary l-22 f-500'>{item.name}</h5></li>
                                    ))}
                                </ul>
                            </>
                        }
                    </div>
                    <div className='col-12 d-flex d-flex-wrap gap-3 mt-5'>
                        {displayList && displayList.map((item,index)=>(
                            <div className='gap-2 d-flex d-align-center bg-blue-2 border rounded-4 pt-2 pb-2 pl-4 pr-4'>
                                <h4 className='f-400 l-22 text-primary mr-4'>{item}</h4>
                                <svg onClick={()=>removeHandler(index)} className='cursor-pointer' width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M13.0704 12.1798C13.1878 12.2983 13.2536 12.4583 13.2536 12.6251C13.2536 12.7918 13.1878 12.9519 13.0704 13.0704C12.9509 13.1859 12.7913 13.2505 12.6251 13.2505C12.4589 13.2505 12.2992 13.1859 12.1798 13.0704L7.0001 7.88288L1.82041 13.0704C1.70095 13.1859 1.54127 13.2505 1.3751 13.2505C1.20892 13.2505 1.04925 13.1859 0.929785 13.0704C0.812422 12.9519 0.746582 12.7918 0.746582 12.6251C0.746582 12.4583 0.812422 12.2983 0.929785 12.1798L6.11729 7.00007L0.929785 1.82038C0.830121 1.69895 0.779188 1.54478 0.786895 1.38787C0.794601 1.23097 0.860395 1.08253 0.971479 0.971449C1.08256 0.860365 1.231 0.794571 1.3879 0.786865C1.54481 0.779158 1.69898 0.830091 1.82041 0.929755L7.0001 6.11726L12.1798 0.929755C12.3012 0.830091 12.4554 0.779158 12.6123 0.786865C12.7692 0.794571 12.9176 0.860365 13.0287 0.971449C13.1398 1.08253 13.2056 1.23097 13.2133 1.38787C13.221 1.54478 13.1701 1.69895 13.0704 1.82038L7.88291 7.00007L13.0704 12.1798Z" fill="#82829B"/>
                                </svg>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className='col-11 mt-60 d-flex d-justify-end'>
                <button className='col-3 btn btn-primary d-flex d-justify-center'>Save</button>
            </div>
        </form>
    </>
  )
}

export default EducationDetails

