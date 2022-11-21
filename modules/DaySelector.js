import React,{useEffect, useState} from 'react'
import styles from './css/doctorSignup.module.css';
export default function DaySelector(props) {
    const [active, setActive] = useState();
    const [select,setSelect] = useState(false)
    const handler = (e) => {
        
        setActive(prev => !prev);
        const val = !active;
    
        // console.log(e.currentTarget.id)
        props.handler(e.currentTarget.id,val)
    }
    useEffect(()=>{
        setActive(props.isActive)
    },[props.isActive])
    if(active){
        return (
            <div className={`${styles["day-selector"]} bg-primary`} id={props.title} onClick={handler}>
                <h6 className='f-600 l-20 text-white'>{props.title}</h6>
            </div>
        )
    }
    else{
        return (
            <div className={`${styles["day-selector"]} bg-grey-6`} id={props.title} onClick={handler}>
                <h6 className='f-600 l-20 text-secondary'>{props.title}</h6>
            </div>
        )
    }   
}
