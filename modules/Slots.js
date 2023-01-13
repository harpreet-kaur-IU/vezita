import React from 'react'
import dayjs from 'dayjs';
const Slots = (props) => {
    var fromtime = "";
    var totime = "";
    if(props.arraySlots[0].charAt(0) == props.arraySlots[1].charAt(0)){
        if(props.arraySlots[0].charAt(1) == props.arraySlots[1].charAt(1)){
            // console.log("in")
        }else{
            fromtime = "0:"+(props.arraySlots[0].substring(props.arraySlots[0].lastIndexOf('.')+1));
            totime = props.arraySlots[1]-props.arraySlots[0]+":00";
        }
    }else{
        fromtime="0:"+(props.arraySlots[0].substring(props.arraySlots[0].lastIndexOf('.')+1));
        totime=parseInt(props.arraySlots[1]-props.arraySlots[0])+":00";
    }
   
    if(totime == "0:00"){
        totime = "0:59";
    }
    const scalingFactor = 0.60;


    const ft = dayjs(`2022-08-21 ${fromtime}`);
    const tt = dayjs(`2022-08-21 ${totime}`);
    const mins = tt.diff(ft,"minute", true);
    const totalMins = dayjs().minute(mins).$m;

    const passedMins = ft.$m;
    const top = passedMins*scalingFactor;
    const fill = ((mins/60)*100)*scalingFactor;
    const height = fill+"px";

    if(props.type == 1){
        return (
            <div className='d-flex d-flex-column d-justify-center bg-sky p-absolute oy-hidden bg-purple' style={{borderRadius:"12px",height:height,top:top,left:"0",width:"100%"}}>
                <span className='col-12 f-500 h6 l-25 text-white'>Video Call with Theresa Web</span>
            </div>
        )
    }else{
        return (
            <div className='d-flex d-flex-column d-justify-center bg-sky p-absolute oy-hidden bg-purple' style={{height:height,top:top,left:"0",width:"100%"}}>
                <span className='col-12 f-400 font-10 l-25 text-white'>Video Call with Theresa Web</span>
            </div>
        )
    }
}

export default Slots