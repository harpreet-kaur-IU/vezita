import styles from './css/Calendar.module.css';
import dayjs from "dayjs";

export default function Day(props) {
  
  const today = dayjs().format("D MMM YYYY");
  const date = dayjs(props.day.day).format("D MMM YYYY")
  const result = (today == date)
  const  selected = dayjs(props.selected).format("D MMM YYYY")
  if(props.prevDays > 0 && props.index <= props.current){
    return (
      <div className={`d-flex d-flex-column d-justify-space-between  ${styles["month_day_card"]} ${result ? "bg-primary":"bg-white" } ${selected == date ? styles["yes"]:styles["no"]}`} onClick={props.handler} day={dayjs(props.day.day).format("D MMM YYYY")} >
        <div className={`${styles["month_day_card_dot"]} }`}>
          {props.data.map((item,i)=>{ return props.data[i].date == dayjs(props.day.day).format("D")? 
            // <span key={i} className={`${result ? "bg-white":"bg-primary"} `}></span>
            <div className='d-flex d-flex-column gap-2'>
              <div className={`d-flex d-flex-column`}>
                <div className='d-flex d-align-center gap-1'>
                  <img src='video-appointment.png'></img>
                  <span className='h5 f-500 text-teal-5'>{props.data[i].video}</span>
                </div>
                <span className='font-10 f-500 text-teal-5'>video appointment</span>
              </div>
              <div className={`d-flex d-flex-column`}>
                <div className='d-flex  d-align-center gap-1'>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.184 17.4428C17.184 17.6791 17.0894 17.9056 16.921 18.0726C16.7526 18.2397 16.5242 18.3335 16.286 18.3335H3.7138C3.47564 18.3335 3.24722 18.2397 3.07881 18.0726C2.9104 17.9056 2.81579 17.6791 2.81579 17.4428V9.4269H1.28316C0.872754 9.4269 0.67745 8.92586 0.981131 8.65205L9.39555 1.06539C9.56089 0.916181 9.77639 0.833496 9.99992 0.833496C10.2235 0.833496 10.4389 0.916181 10.6043 1.06539L19.0187 8.65205C19.3224 8.92586 19.1271 9.4269 18.7167 9.4269H17.184V17.4428ZM9.99992 14.7709L13.0164 11.7791C13.204 11.593 13.3528 11.3721 13.4544 11.129C13.5559 10.8859 13.6082 10.6253 13.6082 10.3621C13.6082 10.0989 13.5559 9.83833 13.4544 9.5952C13.3528 9.35206 13.204 9.13114 13.0164 8.94505C12.8287 8.75896 12.606 8.61135 12.3608 8.51064C12.1157 8.40993 11.853 8.35809 11.5876 8.35809C11.3223 8.35809 11.0595 8.40993 10.8144 8.51064C10.5692 8.61135 10.3465 8.75896 10.1589 8.94505L9.99992 9.1027L9.84097 8.94505C9.65334 8.75896 9.4306 8.61135 9.18546 8.51064C8.94031 8.40993 8.67757 8.35809 8.41223 8.35809C8.14688 8.35809 7.88414 8.40993 7.63899 8.51064C7.39385 8.61135 7.17111 8.75896 6.98348 8.94505C6.79586 9.13114 6.64702 9.35206 6.54548 9.5952C6.44394 9.83833 6.39168 10.0989 6.39168 10.3621C6.39168 10.6253 6.44394 10.8859 6.54548 11.129C6.64702 11.3721 6.79586 11.593 6.98348 11.7791L9.99992 14.7709Z" fill="#8F49DE"/>
                  </svg>
                  <span className='h5 f-500 text-purple-5'>{props.data[i].clinic}</span>
                </div>
                <span className='font-10 f-500 text-purple-5'>in-clinic appointment</span>
              </div>
            </div>
          :""})}
        </div>
        <div className={`text-align-right}`}>
          <span className={`${result ? "text-white":"text-secondary" }`}>{dayjs(props.day.day).format("D")}</span>
        </div>
      </div>
    )
  }
  else{
    return (
      <div className={`d-flex op-03 d-flex-column d-justify-space-between bg-white ${styles["month_day_card"]} `}>
          <div className={`${styles["month_day_card_dot"]}`}>
              <span></span>
          </div>
          <div className="text-align-right">
              <span>{dayjs(props.day.day).format("D")}</span>
          </div>
      </div>
    )
  }
}
