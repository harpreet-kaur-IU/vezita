import React from 'react'
import styles from '../modules/css/loginSetup.module.css';
export default function NewPassword() {
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
            <div className='col-7 d-flex d-flex-wrap'>
                <h1 className='f-600 l-40 text-secondary col-12'>Create new password</h1>
                <h5 className='f-500 l-22 text-secondary col-12 mt-2 max-width-90'>Your new password must be diiferent from previous used passwords.</h5>
                <form className={`col-12 mt-10 d-flex d-flex-column ${styles["login-setup"]}`}>
                    <label>Password</label>
                    <input type="password" placeholder='Enter your password'/>
                    <label>Confirm New Password</label>
                    <input type="password" placeholder='Confirm your password'/>
                    <button className='btn btn-primary mt-7'>Reset Password</button>
                </form>
            </div>
        </div>
    </div>
  )
}
