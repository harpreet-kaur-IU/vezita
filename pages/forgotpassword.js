import React from 'react'
import styles from '../modules/css/loginSetup.module.css';
export default function ForgotPassword() {
  return (
    <div className='col-12 d-flex d-flex-wrap '>
        <div className='col-6 bg-primary vh-100 d-flex-wrap d-flex  d-justify-center'>
            <div className='col-12 d-flex d-align-end d-justify-center'>
                <img src="logo.png" />
            </div>
            <div className='col-8 mt-76'>
                <img src="forgotpassword.png" className='w-100'/>
            </div>
        </div>
        <div className='col-6 h-100 d-flex-wrap d-flex d-align-center d-justify-center'>
            <div className='col-7 d-flex d-flex-wrap'>
                <h1 className='f-600 l-40 text-secondary col-12'>Forgot Password</h1>
                <h5 className='f-500 l-22 text-secondary col-12 mt-2'>Enter the email associated with account and we’ll send an email with instructions to reset your passoword.</h5>
                <form className={`col-12 mt-10 d-flex d-flex-column ${styles["login-setup"]}`}>
                    <label>Email</label>
                    <input type="text" placeholder='Enter your email'/>
                    <label>Password</label>
                    <button className='btn btn-primary mt-7'>Send Instructions</button>
                    <div className='d-flex d-align-center mt-76'>
                        <h4 className='f-600 l-26 text-dark-blue'>Open inbox from here</h4>
                        <svg className='ml-3' width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M18 6.375C18 6.57391 17.921 6.76468 17.7803 6.90533C17.6397 7.04598 17.4489 7.125 17.25 7.125C17.0511 7.125 16.8603 7.04598 16.7197 6.90533C16.579 6.76468 16.5 6.57391 16.5 6.375V2.55937L11.025 8.03437C10.885 8.17225 10.6965 8.24967 10.5 8.25C10.3008 8.24916 10.1096 8.17199 9.96563 8.03437C9.82537 7.89377 9.7466 7.70329 9.7466 7.50469C9.7466 7.30609 9.82537 7.1156 9.96563 6.975L15.4406 1.5H11.625C11.4261 1.5 11.2353 1.42098 11.0947 1.28033C10.954 1.13968 10.875 0.948912 10.875 0.75C10.875 0.551088 10.954 0.360322 11.0947 0.21967C11.2353 0.0790178 11.4261 0 11.625 0H17.25C17.4489 0 17.6397 0.0790178 17.7803 0.21967C17.921 0.360322 18 0.551088 18 0.75V6.375ZM14.25 9.75C14.0511 9.75 13.8603 9.82902 13.7197 9.96967C13.579 10.1103 13.5 10.3011 13.5 10.5V16.5H1.5V4.5H7.5C7.69891 4.5 7.88968 4.42098 8.03033 4.28033C8.17098 4.13968 8.25 3.94891 8.25 3.75C8.25 3.55109 8.17098 3.36032 8.03033 3.21967C7.88968 3.07902 7.69891 3 7.5 3H1.5C1.10218 3 0.720644 3.15804 0.43934 3.43934C0.158035 3.72064 0 4.10218 0 4.5V16.5C0 16.8978 0.158035 17.2794 0.43934 17.5607C0.720644 17.842 1.10218 18 1.5 18H13.5C13.8978 18 14.2794 17.842 14.5607 17.5607C14.842 17.2794 15 16.8978 15 16.5V10.5C15 10.3011 14.921 10.1103 14.7803 9.96967C14.6397 9.82902 14.4489 9.75 14.25 9.75Z" fill="#186ADE"/>
                        </svg>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}
