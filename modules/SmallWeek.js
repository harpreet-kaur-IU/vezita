import React from 'react'
import dayjs from "dayjs";
import styles from './css/calendar.module.css'
import { useRef,useState } from 'react';
export default function SmallWeek(props) {
  const activeRef = useRef(null)
  const handler = (e) => {
    activeRef.current.querySelectorAll("div").forEach((item)=>{
      item.classList.remove(styles.on)
    });
    e.currentTarget.classList.add(styles.on)
    
  }
  const selected = dayjs(props.day).format("D M")
  const today = dayjs().format("D M")
  return (
    <div ref={activeRef} className={`col-12 d-grid d-grid-cols-7 bg-light-grey pr-3 pl-3 pb-1 mt-3`}>
        {props.week.map((item,i)=>{return <div key={i} className={`d-flex d-justify-center d-flex-wrap ${styles["small-week-day"]} ${dayjs(item).format("D M") == selected && styles["on"]}`} onClick={handler}>
            <span className={`col-12 d-flex d-justify-center  pt-1 pb-1 ${today== dayjs(item).format("D M")? "bg-secondary text-white":" "}`}>{dayjs(item).format("D")}</span>
            <h5 className={`col-12 d-flex d-justify-center f-300  mt-1 ${today== dayjs(item).format("D M")?" ":"op-03"}`}>{dayjs(item).format("ddd")}</h5>
        </div>
        })}
    </div>
  )
}
