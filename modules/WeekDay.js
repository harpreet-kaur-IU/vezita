import React from 'react'
import styles from "./css/Calendar.module.css";
import dayjs from 'dayjs';
import Slots from './Slots';
export default function WeekDay(props) {

    /*
        //loop over 2D array
        //get charAt(0) from startTime and endTime for hours
        //get substr after 2nd position from start and endTime for mins
            //if both substr is 00 
                then slot will be of 1 hour
            
    */
    //new code addition starts here
        //second logic
        // for(var i=0;i<props.arraySlots.length;i++){
        // var tempArray ;
        // var startData;
        // var endData;
       
            // var slot = ((parseFloat(props.arraySlots[0][1])-parseFloat(props.arraySlots[0][0])).toFixed(2))
            // tempArray=(props.arraySlots[i][0].charAt(0))

            // if(props.arraySlots[i][0].charAt(2)!=0){
            //     startData="0:"+props.arraySlots[0][0].charAt(2)+props.arraySlots[i][0].charAt(3)
            // }
            // // endData = slot;
            
            // var slot = props.arraySlots[i][1].replace(props.arraySlots[i][1].charAt(1),":")
            // slot = slot.replace(slot.charAt(0),"0")
            // endData = slot
            // console.log(i)
      
        

    //new code addition ends here
    var arrayTimes = [];
    for(var i=0;i<props.arraySlots.length;i++){
        arrayTimes.push(props.arraySlots[i][0].charAt(0))
    }

    const arr = [];
    // Add according to your design
    const scalingFactor = 0.72;
    for(let i=0;i<24;i++){
        arr.push(i);
    }
    // Extract the time from props without AM/PM
    //i need to calculate the difference between from and to time and then need to pass it
    //start time = 2:30 end time = 3:00
    // const fromtime = startData;
    // const totime = endData;

    // const ft = dayjs(`2022-08-21 ${fromtime}`);
    // const tt = dayjs(`2022-08-21 ${totime}`);
    // const mins = tt.diff(ft,"minute", true);
    // const totalMins = dayjs().minute(mins).$m;
    // const passedMins = ft.$m;
    // const top = passedMins*scalingFactor;
    // const fill = ((mins/60)*100)*scalingFactor;
    // const height = fill+"px";
    // const today = dayjs().format("D MMM YYYY");
    // const date = dayjs(props.day).format("D MMM YYYY");
    // const result = (today == date)
    // if(props.type == 1){
    // return (
    //     <div className='d-flex d-flex-wrap'>
    //         <div className={`${styles["week_block_last"]} d-flex d-flex-wrap`}>
    //             <span className="col-12 font-10 l-12 text-grey f-700">{dayjs(props.day).format("ddd")}</span>
    //             <span className="col-12 font-22 l-32">{dayjs(props.day).format("D")}</span>
    //         </div>
    //         {arr.map((i,index)=>{ return <div className={`${styles["week_time_block_wrapper_last"]} p-relative col-12`} key={index}>
    //             {hourArray.map((item,i) => { return <div key={i}>{index == hourArray[i]?<div className='d-flex d-flex-column bg-purple p-absolute oy-hidden ox-hidden' style={{height:height,top:top,left:"0",width:"100%"}}>
    //                     <span className='text-white col-12 f-400 font-10 l-16'>Video Call with a Jerome Bell</span>
    //                 </div>:""}
    //                 </div>
    //             })}
    //             </div>
    //         })}
    //     </div>
    // )
    // }
    // else{
    //     return (
    //         <div className='d-flex d-flex-wrap'>
    //             <div className={`${styles["week_block"]} d-flex d-flex-wrap ${result ? "bg-primary text-white":"bg-white"}`} onClick={props.handler} day={dayjs(props.day).format("D MMM YYYY")}>
    //                 <span className={`col-12 font-10 l-12 text-grey f-700 ${result ? "text-white":" "}`}>{dayjs(props.day).format("ddd")}</span>
    //                 <span className="col-12 font-22 l-32 ">{dayjs(props.day).format("DD")}</span>
    //             </div>
    //             {arr.map((item,index)=>{return <div className={`${styles["week_time_block_wrapper"]} p-relative col-12 `} key={index}>
    //                 {props.data.map((item,i) => { return <div key={i}>{index == props.data[i]?<div className='d-flex d-flex-column bg-sky p-absolute oy-hidden' style={{height:height,top:top,left:"0",width:"100%"}}>
    //                         <span className='p-2 col-12 f-400 font-10 l-16'>{props.data[i]} Video Call with Jerome Bell</span>
    //                     </div>:""}
    //                     </div>
    //                 })}
    //             </div>
    //             })}
    //         </div>
    //     )
    // }

    return (
        <div className='d-flex d-flex-wrap'>
            <div className={`${styles["week_block_last"]} d-flex d-flex-wrap`}>
                <span className="col-12 font-10 l-12 text-grey f-700">{dayjs(props.day).format("ddd")}</span>
                <span className="col-12 font-22 l-32">{dayjs(props.day).format("D")}</span>
            </div>
            {arr.map((i,index)=>{ return <div className={`${styles["week_time_block_wrapper_last"]} p-relative col-12`} key={index}>
                {arrayTimes.map((item,i) => { return index == arrayTimes[i]?
                    <Slots indexSlot={i} arraySlots={props.arraySlots[i]}></Slots>
                :""}
                )}
                </div>
            })}
        </div>
    )
//  }
}
