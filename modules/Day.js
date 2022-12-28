import styles from "./css/calendar.module.css"
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
          {props.data.map((item,i)=>{ return <span key={i} className={`${result ? "bg-white":"bg-primary"} `}></span>})}
        </div>
        <div className={`text-align-right }`}>
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
