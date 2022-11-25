import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import { getVezitaOnBoardFromCookie } from '../../auth/userCookies'
import style from '../css/ChangePassword.module.css'
import Loader from '../Loader'
const Notifications = (props) => {
    const JWTToken = getVezitaOnBoardFromCookie()
    const[noti,setNoti] = useState("")
    const[loading,setLoading] = useState(false)
    useEffect(()=>{
        if(JWTToken)
            getAllNotifications()

    },[])

    const getAllNotifications = () =>{
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        setLoading(true)
        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}notification`, requestOptions)
        .then(response => response.text())
        .then(result => {
            var noti = JSON.parse(result)
            setNoti(noti.notifications)
            setLoading(false)
        })
        .catch(error => console.log('error', error));
    }
  return (
    <>
        {loading && <Loader></Loader>}
        <div className={`${style["all-noti-wrapper"]}`}>
            <div className='d-flex d-align-center d-justify-space-between'>
                <h2 className='f-600 l-32 text-secondary'>Notifications</h2>
                <h6 onClick={props.handler} className='cursor-pointer f-600 l-22 text-teal-5'>MARK ALL AS READ</h6>
            </div>
            <div className='d-flex d-flex-column mt-7'>
                {noti && noti.map((item)=>(
                    <div className={`d-flex gap-3 ${style["notification-item"]}`}>
                        {item.notificationType=="booking" &&
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 22H19C20.103 22 21 21.103 21 20V6C21 4.897 20.103 4 19 4H17V2H15V4H9V2H7V4H5C3.897 4 3 4.897 3 6V20C3 21.103 3.897 22 5 22ZM11 18.414L7.293 14.707L8.707 13.293L11 15.586L15.293 11.293L16.707 12.707L11 18.414ZM5 7H19V9H5V7Z" fill="#186ADE"/>
                            </svg>
                        }
                        {item.notificationType=="token" &&
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.75 7.08756V3.75006C18.75 3.35224 18.592 2.97071 18.3107 2.6894C18.0294 2.4081 17.6478 2.25006 17.25 2.25006H6.75C6.35218 2.25006 5.97064 2.4081 5.68934 2.6894C5.40804 2.97071 5.25 3.35224 5.25 3.75006V7.12506C5.25072 7.3578 5.30526 7.58722 5.40934 7.79539C5.51343 8.00356 5.66424 8.18484 5.85 8.32506L10.7531 12.0001L5.85 15.6751C5.66424 15.8153 5.51343 15.9966 5.40934 16.2047C5.30526 16.4129 5.25072 16.6423 5.25 16.8751V20.2501C5.25 20.6479 5.40804 21.0294 5.68934 21.3107C5.97064 21.592 6.35218 21.7501 6.75 21.7501H17.25C17.6478 21.7501 18.0294 21.592 18.3107 21.3107C18.592 21.0294 18.75 20.6479 18.75 20.2501V16.9126C18.7493 16.6798 18.6947 16.4504 18.5907 16.2422C18.4866 16.0341 18.3358 15.8528 18.15 15.7126L13.2469 12.0001L18.15 8.28756C18.3358 8.14734 18.4866 7.96606 18.5907 7.75789C18.6947 7.54972 18.7493 7.3203 18.75 7.08756ZM17.25 3.75006V6.00006H6.75V3.75006H17.25ZM17.25 20.2501H6.75V16.8751L12 12.9376L17.25 16.9126V20.2501Z" fill="#186ADE"/>
                            </svg>
                        }
                        <div className='d-flex d-flex-column gap-1'>
                    
                            <h3 className='f-500 l-22 text-secondary'>{item.title}</h3>
                    
                            <h4 className='f-500 l-22 text-grey-2'>{item.body}</h4>
                            <h6 className='f-500 l-22 text-primary'> 
                                <Moment format="D MMM YYYY" withTitle>
                                    {item.createdAt}
                                </Moment>
                                &nbsp;
                                <Moment format="HH:mm" withTitle>
                                    {item.createdAt}
                                </Moment>
                            </h6>
                        </div>
                    </div>
                ))}
                {/* <div className={`d-flex gap-3 ${style["notification-item"]}`}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.75 7.08756V3.75006C18.75 3.35224 18.592 2.97071 18.3107 2.6894C18.0294 2.4081 17.6478 2.25006 17.25 2.25006H6.75C6.35218 2.25006 5.97064 2.4081 5.68934 2.6894C5.40804 2.97071 5.25 3.35224 5.25 3.75006V7.12506C5.25072 7.3578 5.30526 7.58722 5.40934 7.79539C5.51343 8.00356 5.66424 8.18484 5.85 8.32506L10.7531 12.0001L5.85 15.6751C5.66424 15.8153 5.51343 15.9966 5.40934 16.2047C5.30526 16.4129 5.25072 16.6423 5.25 16.8751V20.2501C5.25 20.6479 5.40804 21.0294 5.68934 21.3107C5.97064 21.592 6.35218 21.7501 6.75 21.7501H17.25C17.6478 21.7501 18.0294 21.592 18.3107 21.3107C18.592 21.0294 18.75 20.6479 18.75 20.2501V16.9126C18.7493 16.6798 18.6947 16.4504 18.5907 16.2422C18.4866 16.0341 18.3358 15.8528 18.15 15.7126L13.2469 12.0001L18.15 8.28756C18.3358 8.14734 18.4866 7.96606 18.5907 7.75789C18.6947 7.54972 18.7493 7.3203 18.75 7.08756ZM17.25 3.75006V6.00006H6.75V3.75006H17.25ZM17.25 20.2501H6.75V16.8751L12 12.9376L17.25 16.9126V20.2501Z" fill="#186ADE"/>
                    </svg>

                    <div className='d-flex d-flex-column gap-1'>
                        <h3 className='f-500 l-22 text-secondary'>New Appointment</h3>
                        <h4 className='f-500 l-22 text-grey-2'>Qui aut cumque animi a ipsam</h4>
                        <h6 className='f-500 l-22 text-primary'>Date 12 feb,2010</h6>
                    </div>
                </div> */}
            </div>
        </div>
    </>
  )
}

export default Notifications