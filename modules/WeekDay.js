import React from 'react'
import styles from "./css/calendar.module.css";
import dayjs from 'dayjs';
export default function WeekDay(props) {
    const arr = [];
    for(let i=0;i<24;i++){
        arr.push(i);
    }
    const fromtime = '00:00';
    const totime = '00:30';
    const ft = dayjs(`2022-12-28 ${fromtime}`);
    const tt = dayjs(`2022-12-28 ${totime}`);
    const mins = tt.diff(ft, "minute", true);
    const totalMins = dayjs().minute(mins).$m;
    const top = totalMins*0.72;
    const fill = mins;
    const height = fill+"px";
    const today = dayjs().format("D MMM YYYY");
    const date = dayjs(props.day).format("D MMM YYYY")
    const result = (today == date)
    if(props.type == 1){
    return (
        <div className='d-flex d-flex-wrap'>
            <div className={`${styles["week_block_last"]} d-flex d-flex-wrap`}>
                <span className="col-12 font-10 l-12 text-grey f-700">{dayjs(props.day).format("ddd")}</span>
                <span className="col-12 font-22 l-32">{dayjs(props.day).format("D")}</span>
            </div>
            {arr.map((i,index)=>{ return <div className={`${styles["week_time_block_wrapper_last"]} p-relative col-12`} key={index}>
                {props.data.map((item,i) => { return <div key={i}>{index == props.data[i]?<div className='d-flex d-flex-column bg-purple p-absolute oy-hidden ox-hidden' style={{height:height,top:top,left:"0",width:"100%"}}>
                    <span className='text-white p-2 col-12 f-400 font-10 l-16'>Video Call with Jerome Bell</span>
                    </div>:""}
                    </div>
                })}
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
                    {props.data.map((item,i) => { return <div key={i}>{index == props.data[i]?<div className='d-flex text-white rounded-4  d-flex-column bg-purple p-absolute oy-hidden ox-hidden' style={{height:height,top:top,left:"0",width:"100%"}}>
                            <span className='p-2 col-12 f-400 font-10 l-16'>Video Call with Jerome Bell</span>
                        </div>:""}
                        </div>
                    })}
                </div>
                })}
            </div>
        )
    }
}
