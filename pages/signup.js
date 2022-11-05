import React, { useState,useRef } from 'react'
import styles from '../modules/css/loginSetup.module.css';
import Link from 'next/link'
import useFirebaseAuth from '../auth/useFirebaseAuth'
import Loader from '../modules/Loader';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Signup() {
    const {createUserWithEmailAndPassword,signOut} = useFirebaseAuth(); 
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")
    const [confirmPassword,setConfirmPassword] = useState("");
    const [policyAccepted, setPolicyAccepted] = useState(false);
    const [passMatch, setPassMatch] = useState(false);
    const policy = useRef(null);
    const [policyerror,setPolicyError] = useState(false);
    const [loading,setLoading] = useState(false)
    const emailHandler = (e) =>{
        setEmail(e.target.value);
    }

    const passwordHandler = (e) =>{
        setPassword(e.target.value);
    }

    const confirmPasswordHandler = (e) =>{
        setConfirmPassword(e.target.value);
    }

    const policyAcceptedHandler = () =>{
        setPolicyAccepted(prev => !prev);
    }

    //password checker
    const checkPasswordHandler = (e) => {
        if(password === confirmPassword ){
            setPassMatch(false);
        }else{
            setPassMatch(true);
        }
    }
    //to check that all the form fields are filled correctly without any error
    const validator = () =>{
        if(policyAccepted){
            setPolicyError(false)
            return true;
        }else{
            setPolicyError(true)
            return false;
        }
    }

    //user on board code starts here
    const userOnBoard = (authUser) =>{
        var myHeaders = new Headers();
        myHeaders.append("token",authUser.user.multiFactor.user.accessToken);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "role": "docter",
            "email":email
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/onboarding`, requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
    }
    //user on board code ends here

    //signup registration form starts here
    const formSubmit = (e) =>{
        e.preventDefault();
        const result = validator();
        if(result){    
            createUserWithEmailAndPassword(email,password)
            .then(authUser =>{
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");
                
                var raw = JSON.stringify({
                    "email":email,
                    "password":password
                });
                  
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };
                
                setLoading(true)
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/register`, requestOptions)
                .then(response => response.json())
                .then(result => {
                    authUser.user.sendEmailVerification()
                    userOnBoard(authUser)
                    signOut()
                    setLoading(false)
                })
                .catch(error => console.log('error', error));            
            })
            .catch(error => {
                if(error.message == 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).'){
                    toast.error("Email Already Exists",{
                        toastId:"2"
                    });
                }
            })
        }
    }
    //signup registration form ends here
  return (
    <>
        {loading && <Loader></Loader>}
        <div className='col-12 d-flex d-flex-wrap '>
            <div className='col-6 bg-primary vh-100 d-flex-wrap d-flex d-justify-center'>
                <div className='col-12 d-flex d-align-end d-justify-center'>
                    <img src="logo.png"/>
                </div>
                <div className='col-8 mt-76'>
                    <img src="login-pic.png" className='w-100'/>
                </div>
            </div>
            <div className='col-6 h-100 d-flex-wrap d-flex d-align-center d-justify-center'>
                <div className='col-10 col-sm-11 col-md-9 col-lg-7 col-xl-7 d-flex d-flex-wrap'>
                    <h1 className='f-600 l-40 text-secondary col-12'>Signup</h1>
                    <form onSubmit={formSubmit} className={`col-12 mt-10 d-flex d-flex-column ${styles["login-setup"]}`}>
                        <label>Email</label>
                        <input type="email" placeholder='Enter your email' value={email} onChange={emailHandler} required/>
                        
                        <label>Password</label>
                        <input type="password" placeholder='Enter your password' value={password} onChange={passwordHandler} required/>
                        
                        <label>Confirm Password</label>
                        <input type="password" placeholder='Confirm password' value={confirmPassword} onChange={confirmPasswordHandler} onBlur={checkPasswordHandler} required/>
                        
                        {passMatch && <span className='mt-1 text-red'>Password and Confirm Password should be same</span>}
                        <div onClick={policyAcceptedHandler} className='d-flex d-align-center mt-5'>
                            {policyAccepted && <input type="checkbox" ref={policy} checked onChange={e => {}}></input>}
                            {!policyAccepted && <input type='checkbox' ref={policy} onChange={e => {}}></input>}
                            <h6 className='ml-3 f-600 l-20 text-grey-3'>By signing up you agree to our <span className='text-secondary'>Terms of Service</span> and <span className='text-secondary'>Privacy Policy.</span></h6>
                        </div>
                        
                        {policyerror && <span className='h5 f-600 mt-1 text-red'>*Please check the policy checkbox</span>}
                        <button className='btn btn-primary mt-7'>Signup</button>
                        <h4 className='f-600 l-26 text-secondary mt-100'>Already have an account? <Link href="/" className='text-primary'>Login</Link></h4>
                    </form>
                </div>
            </div>
        </div>
        <ToastContainer></ToastContainer>
    </>
  )
}
