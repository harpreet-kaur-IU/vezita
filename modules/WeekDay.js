import React from 'react'
import styles from "./css/Calendar.module.css";
import dayjs from 'dayjs';
import Slots from './Slots';
export default function WeekDay(props) {
    var arrayTimes = [];
    for(var i=0;i<props.arraySlots.length;i++){
        if(props.arraySlots[i][0].charAt(1)!=".")
            arrayTimes.push(props.arraySlots[i][0].charAt(0)+props.arraySlots[i][0].charAt(1))
        else
            arrayTimes.push(props.arraySlots[i][0].charAt(0))
    }

    const arr = [];
    // Add according to your design
    
    for(let i=0;i<24;i++){
        arr.push(i);
    }

    const today = dayjs().format("D MMM YYYY");
    const date = dayjs(props.day).format("D MMM YYYY");
    const result = (today == date)
    if(props.type == 1){
        return (
            <div className='d-flex d-flex-wrap'>
                <div className={`${styles["week_block_last"]} d-flex d-flex-wrap`}>
                    <span className="col-12 font-10 l-12 text-grey f-700">{dayjs(props.day).format("ddd")}</span>
                    <span className="col-12 font-22 l-32">{dayjs(props.day).format("D")}</span>
                </div>
                {arr.map((i,index)=>{ return <div className={`ml-5 ${styles["week_time_block_wrapper_last"]} p-relative col-12`} key={index}>
                    {arrayTimes.map((item,i) => { return index == arrayTimes[i]?
                        <Slots indexSlot={i} in={arrayTimes[i]} arraySlots={props.arraySlots[i]}></Slots>
                    :""}
                    )}
                    </div>
                })}
            </div>
        )
    }
    else{
        return (
            <div className='d-flex d-flex-wrap'>
                <div className={`${styles["week_block"]} d-flex d-flex-wrap ${result ? "bg-primary text-white":"bg-white"}`} onClick={props.handler} day={dayjs(props.day).format("D MMM YYYY")}>
                    <span className={`col-12 font-10 l-12 text-grey f-700 ${result ? "text-white":" "}`}>{dayjs(props.day).format("ddd")}</span>
                    <span className="col-12 font-22 l-32 ">{dayjs(props.day).format("DD")}</span>
                </div>
                {arr.map((item,index)=>{return <div className={`${styles["week_time_block_wrapper"]} p-relative col-12 `} key={index}>
                    {arrayTimes.map((item,i) => { return index == arrayTimes[i]?
                    <>
                        <Slots indexSlot={i} newIndex={index} arraySlots={props.arraySlots[i]}></Slots>
                    </>
                    :""}
                    )}
                </div>
                })}
            </div>
        )
    }
    
}
