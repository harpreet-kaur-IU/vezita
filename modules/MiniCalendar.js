import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import styles from './css/miniCalendar.module.css'
import { getMonth } from '../utils/utils';
import { useRef } from 'react';
export default function MiniCalendar(props) {
    const dayRef = useRef(null);
    const calendarRef = useRef(null);
    const today = dayjs().format("M DDD YYYY");
    const [currentMonth, setCurrentMonth] = useState([]);
    const [selectedMonth, setSelectedMonth] = useState(dayjs().month());

    const prevMonth = () => {
        setSelectedMonth(selectedMonth-1);
    }
    const nextMonth = () => {
        setSelectedMonth(selectedMonth+1);
    }
    const toggleCalendar = () =>{
        calendarRef.current.classList.toggle(styles["active"]);
    }
    const handler = (e) => {
        dayRef.current.querySelectorAll("div div").forEach((item)=>{
            item.classList.remove(styles["on"])
        })
        e.currentTarget.classList.add(styles["on"])
        toggleCalendar();
        props.handler(e);
    }
    const todayHandler = (e) => {
        props.handler(e);
        toggleCalendar();
    }
    useEffect(() => {
        setCurrentMonth(getMonth(selectedMonth))
    }, [selectedMonth]);

    if(currentMonth.length == 0){
        return <></>
    }
    return (
        <div className='p-relative'>
            <div role="button" className='user-select-none' onClick={toggleCalendar}>
                {props.children}
            </div>
       
            <div ref={calendarRef} className={styles["calendar-wrapper"]}>
                <div className='col-12  d-flex d-align-center d-justify-space-between'>
                    <h6 className='user-select-none'>{dayjs(currentMonth.daysMatrix[1][3].day).format('MMM YYYY')}</h6>
                    <div className='d-flex d-align-center bg-white'>
                        <div role="button" className={styles["circle"]} onClick={prevMonth}>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292787 9.70692C0.105316 9.51939 0 9.26508 0 8.99992C0 8.73475 0.105316 8.48045 0.292787 8.29292L3.58579 4.99992L0.292787 1.70692C0.110629 1.51832 0.00983372 1.26571 0.0121121 1.00352C0.0143906 0.741321 0.11956 0.490509 0.304968 0.305101C0.490376 0.119692 0.741189 0.0145233 1.00339 0.0122448C1.26558 0.00996641 1.51818 0.110761 1.70679 0.292919L5.70679 4.29292C5.89426 4.48045 5.99957 4.73475 5.99957 4.99992C5.99957 5.26508 5.89426 5.51939 5.70679 5.70692L1.70679 9.70692C1.51926 9.89439 1.26495 9.99971 0.999786 9.99971C0.734622 9.99971 0.480314 9.89439 0.292787 9.70692Z" fill="#18181B"/>
                            </svg>
                        </div>
                        <div role="button" className={styles["circle"]} onClick={nextMonth}>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0.292787 9.70692C0.105316 9.51939 0 9.26508 0 8.99992C0 8.73475 0.105316 8.48045 0.292787 8.29292L3.58579 4.99992L0.292787 1.70692C0.110629 1.51832 0.00983372 1.26571 0.0121121 1.00352C0.0143906 0.741321 0.11956 0.490509 0.304968 0.305101C0.490376 0.119692 0.741189 0.0145233 1.00339 0.0122448C1.26558 0.00996641 1.51818 0.110761 1.70679 0.292919L5.70679 4.29292C5.89426 4.48045 5.99957 4.73475 5.99957 4.99992C5.99957 5.26508 5.89426 5.51939 5.70679 5.70692L1.70679 9.70692C1.51926 9.89439 1.26495 9.99971 0.999786 9.99971C0.734622 9.99971 0.480314 9.89439 0.292787 9.70692Z" fill="#18181B"/>
                            </svg>
                        </div>
                    </div>
                </div> 
                <div className={styles["header"]}>
                    <div className="font-12 f-500 user-select-none">Sun</div>
                    <div className="font-12 f-500 user-select-none">Mon</div>
                    <div className="font-12 f-500 user-select-none">Tue</div>
                    <div className="font-12 f-500 user-select-none">Wed</div>
                    <div className="font-12 f-500 user-select-none">Thu</div>
                    <div className="font-12 f-500 user-select-none">Fri</div>
                    <div className="font-12 f-500 user-select-none">Sat</div>
                </div>
                <div ref={dayRef} className='col-12'>
                    {currentMonth.daysMatrix.map((row, i) => (
                        <div className={styles["header"]} key={i}>
                            {row.map((day, idx) => (
                                <div key={idx} className={`font-12 f-400 text-center user-select-none cursor-pointer ${dayjs(day.day).format("M DDD YYYY") == today ? "bg-secondary text-white":" "}`} value={dayjs(day.day).format("D MMM YYYY")} onClick={handler}>{dayjs(day.day).format("DD")}</div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className='col-12 user-select-none d-flex d-justify-end text-primary h6 f-500 mt-1 cursor-pointer' onClick={todayHandler} value=" ">Today</div>
            </div>
        </div>
    )
}
