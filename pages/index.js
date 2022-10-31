import Link from 'next/link';
import React, { useEffect,useState } from 'react'
import styles from '../modules/css/loginSetup.module.css';
import Loader from '../modules/Loader';
import useFirebaseAuth from '.././auth/useFirebaseAuth'
import {useRouter} from 'next/router';
import { setVezitaOnBoardCookie } from '.././auth/userCookies'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    const {signInWithEmailAndPassword,signOut,authUser} = useFirebaseAuth()
    const[email,setEmail] = useState("")
    const[password,setPassword] = useState("")
    const[loading,setLoading] = useState(false);
    const router = useRouter();
    const logOutHandler = () => {
        signOut()
        .catch((error)=>console.log("error while logout"+error))
    }
    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }
    const passwordHandler = (e) =>{
        setPassword(e.target.value)
    }
    const formSubmit = (e) =>{
        e.preventDefault()
        signInWithEmailAndPassword(email,password)
        .then(authUser => {
            if(authUser.user.multiFactor.user.emailVerified){
                var myHeaders = new Headers();
                myHeaders.append("token",authUser.user.multiFactor.user.accessToken);
                myHeaders.append("Content-Type","application/json");
                var raw = JSON.stringify({
                    "email": email,
                    "password": password
                });
                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };
                setLoading(true)
                fetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/login`, requestOptions)
                .then(response => response.json())
                .then(result =>{
                    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}user/generate-token/${authUser.user.multiFactor.user.uid}`,{
                        method: 'POST',
                        redirect: 'follow'
                    })
                    .then(response => response.text())
                    .then(res => {
                        var results = JSON.parse(res)
                        setVezitaOnBoardCookie(results.token);
                        router.push("/doctorsetup")
                    })
                    .catch(error => console.log('error', error));
                    setLoading(false)
                })
                .catch(error => console.log('error', error));
            }else{
                toast.error("User Not Verified",{
                    toastId:"1"
                });
            }
        })
        .catch(error => {
            if(error.message == 'Firebase: The email address is already in use by another account. (auth/email-already-in-use).'){
                toast.error("Email Already Exists",{
                    toastId:"2"
                });
            }
            else if(error.message == "Firebase: There is no user record corresponding to this identifier. The user may have been deleted. (auth/user-not-found)."){
                toast.error("Invalid Email",{
                    toastId:"2"
                });
            }
            else if(error.message == "Firebase: The password is invalid or the user does not have a password. (auth/wrong-password)."){
                toast.error("Incorrect Password",{
                    toastId:"2"
                });
            }
        })
    }
  return (
    <>
        {loading && <Loader></Loader>}
        <div className='col-12 d-flex d-flex-wrap '>
            <div className='col-6 bg-primary vh-100 d-flex-wrap d-flex  d-justify-center'>
                <div className='col-12 d-flex d-align-end d-justify-center'>
                    <img src="logo.png" />
                </div>
                <div className='col-8 mt-76'>
                    <img src="login-pic.png" className='w-100'/>
                </div>
            </div>
            <div className='col-6 h-100 d-flex-wrap d-flex d-align-center d-justify-center'>
                <div className='col-10 col-md-9 col-lg-7 col-xl-7 d-flex d-flex-wrap'>
                    <h1 className='f-600 l-40 text-secondary col-12'>Login</h1>
                    <form onSubmit={formSubmit} className={`col-12 mt-10 d-flex d-flex-column ${styles["login-setup"]}`}>
                        <label>Email</label>
                        <input value={email} onChange={emailHandler} type="text" placeholder='Enter your email'/>
                        <label>Password</label>
                        <input value={password} onChange={passwordHandler} type="password" placeholder='Enter your password'/>
                        <h6 className='f-600 l-20 d-flex d-justify-end mt-2 text-grey-3'>Forgot password?</h6>
                        <button className={`btn btn-primary mt-7 text-white ${styles["login-btn"]}`}>Login</button>
                        <h4 className='f-600 l-26 text-secondary mt-100'>Don’t have an account? <Link href="/signup" className='text-primary'>Signup</Link></h4>
                    </form>
                    <button onClick={logOutHandler} className='btn btn-primary mt-7'>Logout</button>
                </div>
            </div>
        </div>
        <ToastContainer />
    </>
  )
}
