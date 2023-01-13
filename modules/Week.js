import Day from "./Day";
import {Fragment, useState} from 'react';
import WeekDay from "./WeekDay";
import styles from "./css/Calendar.module.css";
import dayjs from "dayjs";
export default function Week(props) {
  const[toggle,setToggle] = useState(false)
  var slots = [["a.aa","a.aa"]];
  return (
    <div className={`col-12 d-grid d-grid-cols-7 pr-1 pl-1 mt-1`}>
      {props.week.map((item,i) => (
        <>
          <WeekDay key={i} type="0" arraySlots = {props.arraySlots[i].slot.length>0?props.arraySlots[i].slot:slots} day={item} handler={props.handler}></WeekDay>
        </>
      ))} 
    </div>
  );
}