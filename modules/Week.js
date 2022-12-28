import Day from "./Day";
import {Fragment} from 'react';
import WeekDay from "./WeekDay";
import styles from "./css/calendar.module.css";
export default function Week(props) {
  return (
    <div className={`col-12 d-grid d-grid-cols-7 pr-1 pl-1 mt-1`}>
       {props.week.map((item, i) => (
        <WeekDay key={i} type="0" data={[i*1+1,i*2+1,i*4+1,i*6+1,i*8+1]} day={item} handler={props.handler}></WeekDay>
      ))} 
    </div>
  );
}