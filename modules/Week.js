import Day from "./Day";
import {Fragment} from 'react';
import WeekDay from "./WeekDay";
import styles from "./css/Calendar.module.css";
export default function Week(props) {
  return (
    <div className={`col-12 d-grid d-grid-cols-7 pr-1 pl-1 mt-1`}>
       {/* {props.week.map((item, i) => (
        <WeekDay key={i} type="0" data={[i*1+1,i*2+1,i*4+1,i*6+1,i*8+1]} day={item} handler={props.handler}></WeekDay>
      ))}  */}
      <WeekDay key="0" type="0" data={[0*1+1]} day={props.week[0]} handler={props.handler}></WeekDay>
      <WeekDay key="1" type="0" data={[4*1+1]} day={props.week[1]} handler={props.handler}></WeekDay>
      <WeekDay key="2" type="0" data={[2*1+1]} day={props.week[2]} handler={props.handler}></WeekDay>
      <WeekDay key="3" type="0" data={[3*1+1]} day={props.week[3]} handler={props.handler}></WeekDay>
      <WeekDay key="4" type="0" data={[1*1+1]} day={props.week[4]} handler={props.handler}></WeekDay>
      <WeekDay key="5" type="0" data={[2*1+1]} day={props.week[5]} handler={props.handler}></WeekDay>
      <WeekDay key="6" type="0" data={[1*1+1]} day={props.week[6]} handler={props.handler}></WeekDay>
    </div>
  );
}