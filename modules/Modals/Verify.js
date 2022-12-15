import React, { useState } from 'react'
import { getVezitaOnBoardFromCookie } from '../../auth/userCookies';
import styles from '../css/Verify.module.css'
const Verify = (props) => {
    const JWTToken = getVezitaOnBoardFromCookie();
    const [otp,setOtp] = useState("")

    const otpHandler = (e) =>{
        setOtp(e.target.value)
    }

    const formHandler = (e) =>{
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var raw = JSON.stringify({
            "otp":otp
        })

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body:raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/verify-phone-otp`, requestOptions)
        .then(response => response.text())
        .then(result => {
            const parsedResult = JSON.parse(result)
            if(parsedResult.message == "correct otp"){
                props.handler()
            }
        })
        .catch(error => console.log('error', error));
    }

    //resend OTP
    const resendOTP = () =>{
        setOtp("")
        var myHeaders = new Headers();
        myHeaders.append("token",JWTToken);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}docter/send-phone-otp`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
  return (
    <div className={`d-flex d-flex-column ${styles["wrapper"]}`}>
        <h2 className='text-secondary f-600 l-32'>Verify contact number</h2>
        <h5 className='text-secondary f-400 l-22 mt-5'>Please, Enter the OTP that has been send to this phone number as a SMS</h5>
        <h3 className='f-500 l-28 mt-2 text-primary'>{props.code} {props.number}</h3>
        <h6 className='text-secondary f-600 l-22 mt-5'>Enter OTP</h6>
        <form className='d-flex d-flex-column col-12' onSubmit={formHandler}>
            <input className=' mt-1' type="text" name="otp" value={otp} onChange={otpHandler}></input>
            <h5 className='mt-3 f-400 l-22'>
                Didn't receive OTP? 
                <label onClick={resendOTP} className='f-600 text-primary'>RESEND OTP</label>
            </h5>
            <button className=' mt-5 btn-primary'>Verify</button>
        </form>
    </div>
  )
}

export default Verify