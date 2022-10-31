import React,{useState} from 'react'
import styles from './css/doctorSignup.module.css';
export default function DaySelector(props) {
    const [active, setActive] = useState(false);
    const handler = () => {
        setActive(prev => !prev);
    }
    if(active){
        return (
            <div className={`${styles["day-selector"]} bg-primary`} onClick={handler}>
                <h6 className='f-600 l-20 text-white'>{props.title}</h6>
            </div>
        )
    }
    else{
        return (
            <div className={`${styles["day-selector"]} bg-grey-6`} onClick={handler}>
                <h6 className='f-600 l-20 text-secondary'>{props.title}</h6>
            </div>
        )
    }   
}
