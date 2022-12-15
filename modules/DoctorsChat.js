import React , {useEffect, useRef} from 'react'
import styles from './css/DoctorChat.module.css'
import { useState } from 'react'
import Header from './Header'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies'
import Moment from 'react-moment'

function DoctorsChat() {
    const[searchTerm,setSearchTerm]=useState("")
    const[data,setData] = useState([])
    const[chatUser,setChatUser] = useState([])
    const[activeUser,setActiveUser] = useState("")
    const[activeUserImg,setActiveUserImg] = useState("")
    const[message,setMessage] = useState("")
    const[channelId,setChannelId] = useState("")
    const[receiverId,setReceiverID] = useState("")
    const[senderId,setSenderId] = useState("")
    const[isSend,setIsSend] = useState(false)

    const mediaRef = useRef()
    const[media,setMedia] = useState("")
    const[mediaType,setMediaType] = useState("")
    const JWTToken = getVezitaOnBoardFromCookie();
    useEffect(()=>{
        if(JWTToken){
            getProfile()
            getAllChats()
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

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/profile-me`, requestOptions)
        .then(response => response.text())
        .then(result =>{
          const parsedResult =  JSON.parse(result)
          setSenderId(parsedResult.docter._id)
        })
        .catch(error => console.log('error', error));
    }
    //get all channels API
    const getAllChats = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}chat/channel`, requestOptions)
        .then(response => response.text())
        .then(result => {
            var parsedResult = JSON.parse(result)
            setData(parsedResult.chatChannel)
        })
        .catch(error => console.log('error', error));
    }

    //fetch all chat messages API
    const startChatHandler = (channelId,user,image,userID) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}chat/message/${channelId}/all`, requestOptions)
        .then(response => response.text())
        .then(result => {
            var parseChat = JSON.parse(result)
            setChatUser(parseChat.chats)
            setChannelId(channelId)
            setActiveUser(user)
            setActiveUserImg(image)
            setReceiverID(userID)
        })
        .catch(error => console.log('error', error));
    }

    //message Handler
    const messageHandler = (e) =>{
        if(e.target.value){
            setMessage(e.target.value)
            setIsSend(true)
        }else{
            setMessage(e.target.value)
            setIsSend(false)
        }
    }
 
    //save media API
    const mediaHandler = (e) =>{
        if(e.target.files){
            const str = e.target.files[0].type;
            setMediaType(str.substring(str.lastIndexOf('/')+1))
        }
        // var myHeaders = new Headers();
        // myHeaders.append("token",JWTToken);

        // var formdata = new FormData();
        // formdata.append("type","chatMedia");
        // formdata.append("file", e.target.files[0]);

        // var requestOptions = {
        //     method: 'POST',
        //     headers: myHeaders,
        //     body: formdata
        // };

        // fetch(`${process.env.NEXT_PUBLIC_BASE_URL}file-upload`, requestOptions)
        // .then(response => response.text())
        // .then(result => {
        //     var parsedResult = JSON.parse(result)
        //     setMedia(parsedResult.urls[0])
        //     setIsSend(true)
        // })
        // .catch(error => console.log('error', error));
    } 

    //send Message API
    const sendMessage = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);
        myHeaders.append("Content-Type", "application/json");
        var raw = {};
        if(media){
            raw = JSON.stringify({
                "channelId":channelId,
                "message":message,
                "media": media,
                "mediaType": "image",
                "receiver":receiverId,
                "sender":senderId
            });
        }else{
            raw = JSON.stringify({
                "channelId":channelId,
                "message":message,
                "mediaType": "text",
                "receiver":receiverId,
                "sender":senderId
            });
        }

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}chat/message`, requestOptions)
        .then(response => response.text())
        .then(result => {
            var parseMessage = JSON.parse(result)
            console.log(parseMessage)
            setMessage("")
            startChatHandler(channelId,activeUser,activeUserImg,receiverId)
            setIsSend(true)
        })
        .catch(error => console.log('error', error));
    }
    //remove media
    const removeMediaHandler = () =>{
        setMedia("")
        if(message){
            setIsSend(true)
        }
        else{
            setIsSend(false)
        }
    }
  return (
    <>
        <Header title="Message"></Header>
        <div className={`d-flex bg-white ${styles["wrapper"]}`}>
            <div className='col-5 d-flex d-flex-column d-align-start gap-3'>
                <div className={`col-12 d-flex d-flex-row gap-2 ${styles["search-input-wrapper"]}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.775 20.6848L17.6204 16.539C19.0867 14.793 19.8225 12.5481 19.6742 10.2727C19.5259 7.99733 18.5051 5.86701 16.8247 4.32609C15.1442 2.78517 12.9338 1.95262 10.6546 2.00208C8.37531 2.05155 6.20313 2.9792 4.59107 4.59157C2.97901 6.20394 2.05154 8.37653 2.00208 10.6562C1.95263 12.9359 2.78502 15.1467 4.32565 16.8275C5.86627 18.5083 7.99618 19.5293 10.2712 19.6776C12.5461 19.8259 14.7905 19.09 16.5362 17.6234L20.6812 21.7788C20.8279 21.9207 21.024 22 21.2281 22C21.4322 22 21.6283 21.9207 21.775 21.7788C21.9191 21.6332 22 21.4366 22 21.2318C22 21.0269 21.9191 20.8303 21.775 20.6848ZM3.57356 10.8673C3.57356 9.42483 4.00123 8.01471 4.80249 6.8153C5.60376 5.61589 6.74263 4.68107 8.07509 4.12904C9.40754 3.57701 10.8737 3.43258 12.2883 3.714C13.7028 3.99542 15.0021 4.69006 16.0219 5.71007C17.0418 6.73008 17.7363 8.02966 18.0176 9.44446C18.299 10.8593 18.1546 12.3257 17.6027 13.6584C17.0507 14.9912 16.1161 16.1302 14.9169 16.9317C13.7177 17.7331 12.3079 18.1608 10.8656 18.1608C8.93244 18.1583 7.07915 17.3891 5.71216 16.0218C4.34518 14.6546 3.57609 12.8009 3.57356 10.8673Z" fill="#7F8C8D"/>
                    </svg>
                    <input className={`${styles["input"]} col-11 f-500 font-16 l-22`} type='text' placeholder='Search in chats' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)}/>
                </div>
                <h5 className={`text-uppercase f-600 l-22 text-dark-grey`}>Recents</h5>
                {data && data.map((item,index)=>(
                    <div key={index} onClick={()=>startChatHandler(item._id,item.user.name,item.user.avatar,item.user._id)} className={`cursor-pointer col-12 d-flex d-flex-row d-align-start d-justify-space-between rounded-12 rounded-16 border-lighter-gray `}>
                        <div className={`d-flex d-flex-row d-align-center gap-5 ${styles["chat-person-detail"]}`}>
                            <img src={item.user.avatar}></img>
                            <div className={`d-flex d-flex-column d-align-start`}>
                                <h4 className={`f-600 l-22 text-darker`}>{item.user.name}</h4>
                                {/* <h4 className={`f-500 l-22 text-dark-grey`}>You: Hii</h4> */}
                            </div>
                        </div>
                        <div className={`d-flex d-flex-column d-align-center gap-2  ${styles["chat-person-detail"]}`}>
                            <h6 className={`font-12 f-600 l-14 text-darker-grey`}>
                                <Moment format="HH:mm" withTitle>
                                    {item.user.createdAt}
                                </Moment>
                            </h6>
                            {/* <h6 className={`${styles["circle"]} d-flex d-align-center d-justify-center rounded-100 f-600 l-14 text-light-grey`}>1</h6> */}
                        </div>
                    </div>
                ))}
            </div>
            {activeUser &&
                <div className={`offset-1 col-6 ${styles["chat-right-wrapper"]}`}>
                    <div className={` d-flex d-flex-row d-align-center gap-2`}>
                        <img className={`${styles["chat-person-img"]}`} src={activeUserImg}></img>
                        <div className={`d-flex d-flex-column d-align-start gap-1`}>
                            <h3 className={`f-500 l-28 text-secondary`}>{activeUser}</h3>
                            {/* <h4 className={`f-500 l-26 text-grey-3`}>Last active 12:34 PM</h4> */}
                        </div>
                    </div>
                        <div className={`${styles["chat-area"]}`}>
                        {chatUser && chatUser.map((item,index)=>(
                            <>
                                {item.sender == senderId?
                                    <div key={index} className='d-flex d-justify-end'>
                                        <div className={`${styles["chat-popup-s"]} bg-primary mt-10`}>
                                            <h4 className='f-500 l-26 text-white'>{item.message}</h4>
                                        </div>
                                    </div>
                                    :
                                    <div key={index} className='d-flex d-justify-start'>
                                        <div className={`${styles["chat-popup-r"]} bg-grey-6 mt-10`}>
                                            <h4 className='f-500 l-26 text-secondary'>What is the progress of the task that is allocated to you?What is the progress of the task that is allocated to you?What is the progress of the task that is allocated to you?</h4>
                                        </div>
                                    </div>
                                }
                            </>
                        ))} 
                        </div>
                        {media &&
                            <div className={`p-relative d-flex d-align-start d-justify-end ${styles["uploaded-media"]}`} style={{backgroundImage:`url(${media})`,backgroundRepeat: 'no-repeat',backgroundSize: 'contain',backgroundPosition:'center'}} >
                                <img className='cursor-pointer' onClick={removeMediaHandler} src='cross-grey.png'></img>
                            </div>     
                        }
                    <div className={`d-flex d-justify-space-between d-align-center gap-5 mt-50 ${styles["message-area"]}`}>
                        <textarea value={message} onChange={messageHandler} type="text" placeholder="Message"></textarea>
                        <div className='d-flex gap-3'>
                            <div className={`cursor-pointer p-relative col-12 ${styles["media-img"]}`} >
                                <img className='cursor-pointer' src='file-upload.png'></img>
                                <input 
                                    type='file'
                                    ref={mediaRef}
                                    multiple={true}
                                    onChange={mediaHandler}
                                    title=''
                                >
                                </input>
                            </div>
                            {isSend && <img className='cursor-pointer' onClick={sendMessage} src='send.png'></img>}
                        </div>
                    </div>
                </div>
            }
           
        </div>
    </>
  )
}

export default DoctorsChat