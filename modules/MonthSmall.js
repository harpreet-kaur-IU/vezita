import Day from "./Day";
import {Fragment} from 'react';
import styles from "./css/calendar.module.css";
import DaySmall from "./DaySmall";
import { useRef } from "react";
export default function MonthSmall(props) {
  const smallDayRef = useRef(null)
  const smallMonthHandler = (e) => {
    smallDayRef.current.querySelectorAll("div").forEach((item)=>{
      item.classList.remove(styles.yes)
    })
    e.currentTarget.classList.add(styles.yes)
  }
  return (
    <div ref={smallDayRef} className={`col-12 d-grid d-grid-cols-7 d-grid-rows-5 pl-3 pr-3 bg-light-grey pb-2`}>
      {props.month.daysMatrix.map((row, i) => (
        <Fragment key={i}>
          {row.map((day, idx) => (
            <DaySmall day={day} key={idx} rowIdx={i} index={day.index} current={day.item} total={day.daysInMonth} prevDays={day.currentMonthCount} selected={props.selected} handler={smallMonthHandler} />
          ))}
        </Fragment>
      ))}
    </div>
  );
}