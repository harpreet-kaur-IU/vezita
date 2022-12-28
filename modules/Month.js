import Day from "./Day";
import {Fragment} from 'react';
import styles from "./css/calendar.module.css";
import { useRef } from "react";
export default function Month(props) {
  const dayRef = useRef(null)
  const monthHandler = (e) => {
    dayRef.current.querySelectorAll("div").forEach((item)=>{
      item.classList.remove(styles.yes)
    })
    e.currentTarget.classList.add(styles.yes)
  }
  return (
    <div ref={dayRef} className={`col-12 d-grid d-grid-cols-7 d-grid-rows-6 pr-1 pl-1 mt-1 ${styles["month_day_block"]}`}>
      {props.month.daysMatrix.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} index={day.index} current={day.item} total={day.daysInMonth} prevDays={day.currentMonthCount} data={[1,2,3]} handler={monthHandler} selected={props.selected}></Day>
          ))}
        </Fragment>
      ))}
    </div>
  );
}