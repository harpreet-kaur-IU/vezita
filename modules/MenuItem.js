import React, { useEffect, useState } from 'react'
import style from './css/SideBar.module.css'
import Dashboard from '../icons/dashboard'
import Reports from '../icons/reports'
import Banner from '../icons/banner'
import Bookings from '../icons/bookings'
import Calendar from '../icons/calendar'
import CreateReports from '../icons/createReports'
import Finance from '../icons/finance'
import Message from '../icons/message'
import Patients from '../icons/patients'
import Link from 'next/link'
import Router from 'next/router'
const MenuItem = (props) => {
    const [path, setPath] = useState('');
    useEffect(()=>{
        setPath(Router.route)
    },[])
    if(path==props.path || (props.multipath=="1" && ((props.haspath1=="1" && path==props.path1) || (props.haspath2=="1" && path==props.path2) || (props.haspath3=="1" && path==props.path3) || (props.haspath4=="1" && path==props.path4)))){
        return (
            <>
                <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]} ${style["active"]}`}>
                    {props.title==="Dashboard" && <Dashboard></Dashboard>}
                    {props.title==="Reports" && <Reports></Reports>}
                    {props.title==="Banners" && <Banner></Banner>}
                    {props.title==="Bookings" && <Bookings></Bookings>}
                    {props.title==="My Calendar" && <Calendar></Calendar>}
                    {props.title==="Create Medical Reports" && <CreateReports></CreateReports>}
                    {props.title==="Finances" && <Finance></Finance>}
                    {props.title==="Messages" && <Message></Message>}
                    {props.title==="My Patients" && <Patients></Patients>}
                <Link href={props.path}>{props.title}</Link>
                </li>
            </>
        )
    }
    else{
        return (
            <>
                <li className={`f-400 l-22 h5 d-flex d-align-center ${style["menu-item-wrapper"]}`}>
                    {props.title==="Dashboard" && <Dashboard></Dashboard>}
                    {props.title==="Reports" && <Reports></Reports>}
                    {props.title==="Banners" && <Banner></Banner>}
                    {props.title==="Bookings" && <Bookings></Bookings>}
                    {props.title==="My Calendar" && <Calendar></Calendar>}
                    {props.title==="Create Medical Reports" && <CreateReports></CreateReports>}
                    {props.title==="Finances" && <Finance></Finance>}
                    {props.title==="Messages" && <Message></Message>}
                    {props.title==="My Patients" && <Patients></Patients>}
                <Link href={props.path}>{props.title}</Link>
                </li>
            </>
        )
    }
 
}

export default MenuItem