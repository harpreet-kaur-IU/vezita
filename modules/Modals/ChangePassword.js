import React, { useState } from 'react'
import style from '../css/ChangePassword.module.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useFirebaseAuth from '../../auth/useFirebaseAuth';
const ChangePassword = (props) => {
    const {sendPasswordResetEmail} = useFirebaseAuth()
    const[email,setEmail] = useState("");
    const emailHandler = (e) =>{
        setEmail(e.target.value);
    }

    const forgetPasswordHandler = (e) =>{
        e.preventDefault()
    
        sendPasswordResetEmail(email)
        .then(authUser => {
            props.handler()
        })
        .catch(error => {
            if(error.message == "Firebase: Error (auth/user-not-found)."){
                toast.error("User Not Found",{
                    toastId:"1"
                });
            }
            else if(error.message == "Firebase: Error (auth/wrong-password)."){
                toast.error("Password Invalid",{
                    toastId:"1"
                });
            }
            else if(error.message == "Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."){
                toast.error("Invalid Email",{
                    toastId:"1"
                });
            }
            else if(error.message == "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."){
                toast.error("Incorrect Password",{
                    toastId:"1"
                });
            }
            console.log(error)
        })
        
    }
  return (
    <>
        <div className={`${style["wrapper"]}`}>
            <div className='d-flex d-align-center d-justify-space-between'>
                <h2>Change password</h2>
                <img onClick={props.handler1} className='cursor-pointer' src='cross-grey.png'></img>
            </div>
            <form onSubmit={forgetPasswordHandler} className='d-flex d-flex-column mt-10'>
                <label className='h5 f-600 l-20'>Enter Email</label>
                <input value={email} onChange={emailHandler} type="email" placeholder='Enter your registared email' className='mt-2' required></input>
                <button className='h5 cursor-pointer btn-primary mt-7'>Change Password</button>
            </form>
        </div>
        <ToastContainer />
    </>
  )
}

export default ChangePassword