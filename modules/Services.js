import React, { useEffect, useState } from 'react'
import styles from './css/profile.module.css'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies'
const Services = () => {
    //city select Handler
    const JWTToken = getVezitaOnBoardFromCookie();
    const[city,setCity] = useState("")
    const[list,setList] = useState([])
    const[dropdown,setDropdown] = useState(false)
    const[displayList,setDisplayList] = useState([])
    const[suggestion,setSuggestion] = useState("")
    const[inputList,setInputList] = useState([{id:"",startmonth:"",endmonth:"",role:"",city:"",name:""}])

    const cityHandler = (e) =>{
        setCity(e.currentTarget.id)
    }

    const addEduHandler = () =>{
        setInputList([...inputList,{id:"",startmonth:"",endmonth:"",role:"",city:"",name:""}])
    }
    const handleInputChange = (e,index) =>{
        const {name,value} = e.target;
        const list = [...inputList];
        list[index][name] = value;
        setInputList(list);
    }

    //to handler specialization input
    const inputHandler = (id,name) =>{
        if(!list.includes(id)){
            list.push(id) 
            displayList.push(name)
        }
        setDropdown(false)
    }
    //specialization remove Handler
    const removeHandler = (index) =>{
        const listing = [...list];
        const items = listing.splice(index,1);
        setList(listing)

        const dlisting = [...displayList]
        dlisting.splice(index,1)
        setDisplayList(dlisting)

        // removeServices(items[0])
    }
  
    // const removeServices = (serviceID) =>{
    //     var myHeaders = new Headers();
    //     myHeaders.append("token",JWTToken);

    //     var requestOptions = {
    //         method: 'DELETE',
    //         headers: myHeaders,
    //         redirect: 'follow'
    //     };

    //     fetch(`${process.env.NEXT_PUBLIC_BASE_URL}service/delete-docter-service/${serviceID}`, requestOptions)
    //     .then(response => response.text())
    //     .then(result => console.log(result))
    //     .catch(error => console.log('error', error));
    // }

    useEffect(()=>{
        getServices();
        getExp();
    },[])

    //get Experience
    const getExp = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter-experience`, requestOptions)
        .then(response => response.text())
        .then(result =>{
            var arrayExp = [];
            const parseData = JSON.parse(result)
            var data = parseData.experience;
            for(var i=0;i<data.length;i++){
                var obj = {
                    "id":data[i]._id,
                    "city":data[i].city,
                    "startmonth":data[i].start.month,
                    "endmonth":data[i].end.month,
                    "name":data[i].establishmentName,
                    "role":data[i].role
                }
                arrayExp.push(obj)
            }
            setInputList(arrayExp)
        })
        .catch(error => console.log('error', error));
    }

    //get services
    const getServices = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}service/docter`, requestOptions)
        .then(response => response.text())
        .then(result => {
            const service = JSON.parse(result)
            var dlisting = [];
            var listing = [];
            for(var i=0;i<service.docterService.length;i++){
                var id = service.docterService[i].serviceId._id
                var name = service.docterService[i].serviceId.name
                
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
    //search services API
    const searchHandler = (e) =>{
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        if(e.target.value.length>2){
            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}service?search=${e.target.value}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                var parsedResult = JSON.parse(result)
                setSuggestion(parsedResult)
                if(parsedResult.length>0){
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
    //add services API
    const addServices = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        for(var i=0;i<list.length;i++){
            var raw = JSON.stringify({
                "serviceId":list[i]
            });

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: raw,
                redirect: 'follow'
            };

            fetch(`${process.env.NEXT_PUBLIC_BASE_URL}service/add-docter-service`, requestOptions)
            .then(response => response.text())
            .then(result => {
                setList([])
                setDisplayList([])
            })
            .catch(error => console.log('error', error));
        }
    }
    //services API
    const serviceForm = (e) =>{
        e.preventDefault();
        addServices();

        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");

        for(var i=0;i<inputList.length;i++){
            var addBody = JSON.stringify({
                "start":{
                    "month":inputList[i].startmonth,
                    "year":2019
                },
                "end":{
                    "month":inputList[i].endmonth,
                    "year":2022
                },
                "role": inputList[i].role,
                "city": inputList[i].city,
                "establishmentName": inputList[i].name
            });
            
            var updateBody = JSON.stringify({
                "start":{
                    "month":inputList[i].startmonth,
                    "year":2019
                },
                "end":{
                    "month":inputList[i].endmonth,
                    "year":2022
                },
                "role": inputList[i].role,
                "city": inputList[i].city,
                "establishmentName": inputList[i].name,
                "_id": inputList[i].id
            });

            var requestOptions1 = {
                method: 'POST',
                headers: myHeaders,
                body: addBody,
                redirect: 'follow'
            };

             var requestOptions2 = {
                method: 'PATCH',
                headers: myHeaders,
                body: updateBody,
                redirect: 'follow'
            };
            if(inputList[i].id){
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter-experience/${inputList[i].id}`, requestOptions2)
                .then(response => response.text())
                .then(result => result)
                .catch(error => console.log('error', error));
                
            }else{
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter-experience`, requestOptions1)
                .then(response => response.text())
                .then(result => result)
                .catch(error => console.log('error', error));
            }
        }
    }
  return (
    <>
        <form onSubmit={serviceForm}>
            <h4 className='f-600 l-26 col-12 text-primary '>Services and Experience</h4>
            <div className='p-relative d-flex col-11 d-flex-wrap '>
          
                <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                    <h4 className='f-600 l-26 col-12 text-black mt-5'>Services</h4>
                    <label className='d-flex'>Add Specialization</label>
                    <div className={`bg-grey-7 rounded-8 col-12 d-flex  d-align-center ${styles["add-service"]}`}>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z" fill="#60606c"/>
                        </svg>
                        <input type="text" onChange={searchHandler} placeholder='Add a Specialization'/>
                    </div>
                    <div className={`${styles["suggestions-div"]}`}>
                        {dropdown && 
                            <>
                                <h6 className='mt-5 f-600 l-20 text-grey-3'>SUGGESTIONS</h6>
                                <ul className={`${styles["suggestion-items"]}`}>
                                    {suggestion && suggestion.map((item)=>(
                                        <li><h5 onClick={()=>inputHandler(item.id,item.service)} className='cursor-pointer text-secondary l-22 f-500'>{item.service}</h5></li>
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
                {inputList.map((item,index)=>(
                    <div className='d-flex d-flex-wrap col-12 '>
                        <h4 className='f-600 l-26 col-12 text-black mt-5'>Experience {index+1}</h4>
                        <div className='d-flex d-flex-wrap col-12 mt-5'>
                            <div className='col-4 d-flex d-flex-wrap'>
                                <h6 className='f-600 l-20 text-secondary'>Duration(Select month)</h6>
                                <div className='d-flex d-flex-wrap col-12'>
                                    <div className='col-6 d-flex d-flex-wrap'>
                                        <input placeholder="Start month" name='startmonth' value={item.startmonth} onChange={e => handleInputChange(e,index)}/>
                                    </div>
                                    <div className='col-6 d-flex d-flex-wrap'>
                                        <div className='ml-3 col-12 d-flex d-flex-wrap'>
                                            <input placeholder="Start year" name='endmonth' value={item.endmonth} onChange={e => handleInputChange(e,index)}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className='col-4 d-flex d-flex-wrap'>
                                <div className='ml-6 col-12 d-flex d-flex-wrap'>
                                    <h6 className='f-600 l-20 text-secondary'>Role</h6>
                                    <input type="text" placeholder='Enter role' name='role' value={item.role} onChange={e => handleInputChange(e,index)}/>
                                </div>
                            </div>
                            <div className='col-4'>
                                <div className='ml-6'>
                                    <h6 className='f-600 l-20 text-secondary'>Select city</h6>
                                    <input type="text" placeholder='Enter City' name='city'  value={item.city} onChange={e => handleInputChange(e,index)}/>
                                </div>
                            </div>
                        </div>
                        
                        <label className='d-flex col-12'>Establishment name</label>
                        <input type="text" placeholder='Select or add title' name='name' value={item.name} onChange={e => handleInputChange(e,index)}/>
                        {inputList.length - 1 === index &&
                            <div onClick={addEduHandler} className='cursor-pointer d-flex d-align-center mt-6 col-12'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z" fill="#3085F4"/>
                                </svg>
                                <h5 className='ml-2 f-600 l-20 text-primary'>ADD MORE</h5>
                            </div>
                        }
                    </div>
                ))}
            </div>
            <div className='col-11 mt-60 d-flex d-justify-end'>
                <button className='col-3 btn btn-primary d-flex d-justify-center'>Save</button>
            </div>
        </form>
    </>
  )
}

export default Services