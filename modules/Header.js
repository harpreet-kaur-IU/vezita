import React, { useEffect, useState } from 'react'
import styles from './css/SideBar.module.css'
import Close from '../icons/close'
import Menu from '../icons/menu'
import { useRouter } from 'next/router'
import useFirebaseAuth from '../auth/useFirebaseAuth'
import Modal from './Modals/Modal'
import ChangePassword from './Modals/ChangePassword'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NotificationSetting from './Modals/NotificationSetting'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies'
import Notifications from './Modals/Notifications'
const Header = (props) => {
  const JWTToken = getVezitaOnBoardFromCookie();
  const [dropdown,setDropdown] = useState(false)
  const router = useRouter();
  const {signOut} = useFirebaseAuth()
  const[modal,setModal] = useState(false)
  const[noti,setNoti] = useState(false)
  const[status,setStatus] = useState();
  const[allNoti,setAllNoti] = useState(false)
  const profileHandler = () =>{
    router.push("/profile")
  }

  const dropdownHandler = () =>{
    setDropdown(prev => !prev)
  }
  
  const sideBarHandler = (e) => {
    e.currentTarget.classList.toggle(styles["open"]);
    // console.log("Sidebar = "+styles["sidebar-wrapper"]);
    document.querySelector(`#sidebar-wrapper`).classList.toggle(styles["expand"])
    document.querySelector(`#sidebar-wrapper`).classList.toggle(styles["sidebar-wrapper"])
  }

  const logoutHandler = () =>{
    signOut()
    // .then(response => response.text())
    .then(result =>{
      router.push("/")
    })
    .catch((error)=>console.log("error while logout"+error))
  }

  //change password
  const passwordHandler = () =>{
    toast.warning("Please check your email",{
      toastId:"1"
    });
    setDropdown(false)
    setModal(prev => !prev)
  }
  const modalHandler = () =>{
    setDropdown(false)
    setModal(prev => !prev)
  }

  //notification Handler
  const notificationHandler = () =>{
    setDropdown(false)
    setNoti(prev => !prev)
  }

  //availabilty Handler
  const avalHandler = () =>{
    getProfile();
    
  }
  //get profile API
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
      updateStatus(parsedResult.docter._id,parsedResult.docter.status)
    })
    .catch(error => console.log('error', error));
  }

  //update profile API
  const updateStatus = (doctorID,status) =>{
    const value = status=="inactive"?"active":"inactive";
    console.log(value)
    var myHeaders = new Headers();
    myHeaders.append("token",JWTToken);
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
      "status": value
    });

    var requestOptions = {
      method: 'PATCH',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/update/${doctorID}`, requestOptions)
    .then(response => response.text())
    .then(result => {console.log(result)})
    .catch(error => console.log('error', error));
  }
  useEffect(()=>{
    
    if(JWTToken){
      function parseJwt() {
        if(!JWTToken){
          return
        }
        const base64Url = JWTToken.split('.')[1];
        const base64 = base64Url.replace('-', '+').replace('_', '/');
        return JSON.parse(window.atob(base64));
      }
      var user = parseJwt();
      if(user.exp*1000<Date.now()){
        logoutHandler()
      }else{
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
          setStatus(parsedResult.docter.status)
        })
        .catch(error => console.log('error', error));
      }
    }
  },[])

  //all notification Handler
  const notiHandler = () =>{
    setAllNoti(prev=>!prev)
  }
  return (
    <>
      <div className="p-relative header-wrapper">
        <div className={`p-relative d-flex d-align-center d-justify-space-between `}>
          <div role="button" onClick={sideBarHandler} className={`${styles["bar-cross"]}`}>
            <Menu></Menu>
            <Close></Close>
          </div>
        </div>
        <div className={`p-relative d-flex d-align-center d-justify-space-between ${styles["haeder-height"]}`}>
          <h2 className={`l-32 f-600 ${styles["header-wrapper-heading"]}`}>{props.title}</h2>
          <div className={`d-flex d-align-center ${styles["noti-profile-wrapper"]}`}>
            <div onClick={notiHandler} className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["header-noti"]}`} >
              <img src='noti-bell.png'></img>
            </div>
            <div className={`cursor-pointer d-flex d-align-center ${styles["profile-wrapper"]}`}>
              <img className={`${styles["profile-image"]}`} src='profile-img.png'></img>
              <h5 className='f-400 l-22'>Doctor Name</h5>
              <img onClick={dropdownHandler} className={`${styles["profile-arrow"]}`} src='profile-arrow.png'></img>
            </div>
          </div>
        </div>
        {dropdown &&
          <div className={`p-absolute ${styles["profile-dropdown"]}`}>
            <div className={`d-flex d-align-center ${styles["doctor-profile-wrapper"]}`}>
              <img className={`${styles["doctor-profile-img"]}`} src='profile-img.png'></img>
              <div className={`d-flex d-flex-column ${styles["profile-name-wrapper"]}`}>
                <h4 className='f-500 l-26'>Doctor Name</h4>
                <span className='text-grey-3 h5 f-400 l-22'>Doctor</span>
              </div>
            </div>
            <div className={`d-flex d-align-center d-justify-space-between ${styles["availability-wrapper"]}`}>
              <span className='text-secondary h5 f-500 l-22'>Availability</span>
              <div className='d-flex d-justify-center'>
                <label className={`${styles["rectangle"]}`}>
                  <input onClick={avalHandler}  type="checkbox" checked={status=="inactive"?"checked":""} /> 
                  <span className={`${styles["toggle"]}`}></span>
                </label>
              </div>
            </div>

            <div onClick={profileHandler} className={`cursor-pointer d-flex d-align-center d-justify-space-between ${styles["edit-profile-wrapper"]}`}>
              <div className={`d-flex d-align-center ${styles["user-icon-text"]}`}>
                <img src='user-circle-icon.png'></img>
                <span className='h5'>Edit Profile</span>
              </div>
              <img src='arrow-right.png'></img>
            </div>
            <div onClick={modalHandler} className={`cursor-pointer d-flex d-align-center d-justify-space-between ${styles["edit-profile-wrapper"]}`}>
              <div className={`d-flex d-align-center ${styles["user-icon-text"]}`}>
                <img src='key-icon.png'></img>
                <span className='h5'>Change password</span> 
              </div>
              <img src='arrow-right.png'></img>
            </div>
            <div onClick={notificationHandler} className={`cursor-pointer d-flex d-align-center d-justify-space-between ${styles["edit-profile-wrapper"]}`}>
              <div className={`d-flex d-align-center ${styles["user-icon-text"]}`}>
                <img src='noti-bell-icon.png'></img>
                <span className='h5'>Notifications</span> 
              </div>
              <img src='arrow-right.png'></img>
            </div>
            <div onClick={logoutHandler} className={`cursor-pointer d-flex d-align-center d-justify-space-between ${styles["edit-profile-wrapper"]}`}>
              <div className={`d-flex d-align-center ${styles["user-icon-text"]}`}>
                <img src='noti-bell-icon.png'></img>
                <span className='h5'>Logout</span> 
              </div>
              {/* <img src='arrow-right.png'></img> */}
            </div>
          </div>
        }
      </div>
      {modal &&
        <Modal modalClass="modal-verify">
          <ChangePassword handler={passwordHandler} handler1={modalHandler}></ChangePassword>
        </Modal>
      }
      {noti &&
        <Modal modalClass="modal-verify">
          <NotificationSetting handler={notificationHandler}></NotificationSetting>
        </Modal>
      }
      {allNoti &&
        <Modal modalClass="modal-verify">
          <Notifications handler={notiHandler}></Notifications>
        </Modal>
      }
      <ToastContainer/>
    </>
  )
}
export default Header  