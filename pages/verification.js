import React from 'react'
import styles from '../modules/css/loginSetup.module.css';
export default function Verification() {
  return (
    <div className='col-12 d-flex d-flex-wrap '>
        <div className='col-6 bg-primary vh-100 d-flex-wrap d-flex  d-justify-center'>
            <div className='col-12 d-flex d-align-end d-justify-center'>
                <img src="logo.png" />
            </div>
            <div className='col-8 mt-76'>
                <img src="password.png" className='w-100'/>
            </div>
            
        </div>
        <div className='col-6 h-100 d-flex-wrap d-flex d-align-center d-justify-center'>
            <div className='col-10 col-md-10 col-lg-7 col-xl-7 d-flex d-flex-wrap'>
                <h1 className='f-600 l-40 text-secondary col-12'>Verification</h1>
                <h5 className='f-500 l-22 text-secondary col-12 mt-2'>Please enter the 6-digit code sent to<br/><span className='text-primary'>username@gmail.com</span></h5>
                <form className={`col-12 mt-10 mt-10 ${styles["verification"]}`}>
                    <div className='d-flex d-flex-wrap'>
                        <div className={styles["input-number-wrapper"]}>
                            <input type="number" placeholder='_' max="9" min="0"/>
                        </div>
                        <div className={styles["input-number-wrapper"]}>
                            <input type="number" placeholder='_' max="9" min="0"/>
                        </div>
                        <div className={styles["input-number-wrapper"]}>
                            <input type="number" placeholder='_' max="9" min="0"/>
                        </div>
                        <div className={styles["input-number-wrapper"]}>
                            <input type="number" placeholder='_' max="9" min="0"/>
                        </div>
                        <div className={styles["input-number-wrapper"]}>
                            <input type="number" placeholder='_' max="9" min="0"/>
                        </div>
                        <div className={styles["input-number-wrapper"]}>
                            <input type="number" placeholder='_' max="9" min="0"/>
                        </div>
                    </div>
                    <button className='col-11 btn btn-primary mt-7'>Verify</button>
                    <button className='col-11 btn btn-outline-grey mt-2'>Resend OTP</button>
                </form>
            </div>
        </div>
    </div>
  )
}
