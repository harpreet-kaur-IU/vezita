import React from 'react'
import dayjs from 'dayjs';
const Slots = (props) => {
    var startData=(props.arraySlots[0].substring(props.arraySlots[0].lastIndexOf('.')+1));
    var endData=(props.arraySlots[1].substring(props.arraySlots[1].lastIndexOf('.')+1));

    // for(var i=0;i<props.arraySlots.length;i++){
    //     var tempArray ;
    //     var startData;
    //     var endData;
    //     var slot = ((parseFloat(props.arraySlots[0][1])-parseFloat(props.arraySlots[0][0])).toFixed(2))
    //     tempArray=(props.arraySlots[i][0].charAt(0))

    //     if(props.arraySlots[i][0].charAt(2)!=0){
    //         startData="0:"+props.arraySlots[0][0].charAt(2)+props.arraySlots[i][0].charAt(3)
    //     }
    //     // endData = slot;
        
    //     var slot = props.arraySlots[i][1].replace(props.arraySlots[i][1].charAt(1),":")
    //     slot = slot.replace(slot.charAt(0),"0")
    //     endData = slot
    //     console.log(i)
    // }
   
    if(endData == "00"){
        endData = 59;
    }
    console.log(props.indexSlot+" "+startData+" "+endData)
    const scalingFactor = 0.60;
    const fromtime = "0:"+startData;
    const totime = "0:"+endData;

    const ft = dayjs(`2022-08-21 ${fromtime}`);
    const tt = dayjs(`2022-08-21 ${totime}`);
    const mins = tt.diff(ft,"minute", true);
    const totalMins = dayjs().minute(mins).$m;

    const passedMins = ft.$m;
    const top = passedMins*scalingFactor;
    const fill = ((mins/60)*100)*scalingFactor;
    const height = fill+"px";
    const today = dayjs().format("D MMM YYYY");
    const date = dayjs(props.day).format("D MMM YYYY");
    const result = (today == date)
    return (
        <div className='d-flex d-flex-column bg-sky p-absolute oy-hidden bg-purple' style={{height:height,top:top,left:"0",width:"100%"}}>
            <span className='col-12 f-500 font-12 l-25 text-white'>Video Call with Theresa Web</span>
        </div>
    )
}

export default Slots