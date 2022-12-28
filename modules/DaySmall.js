import styles from "./css/calendar.module.css"
import dayjs from "dayjs"
export default function DaySmall(props) {
  const today = dayjs().format("D MMM YYYY");
  const date = dayjs(props.day.day).format("D MMM YYYY")
  const result = (today == date)
  const selected = dayjs(props.selected).format("D MMM YYYY");
  if(props.prevDays > 0 && props.index <= props.current){
    return (
      <div className={`d-flex d-flex-wrap  d-justify-center ${styles["month_day_small_card"]} ${selected == date && styles["yes"]} ${result ? "bg-secondary text-white":"text-secondary "} `} onClick={props.handler}>
          <span className="col-12 d-flex d-justify-center">{dayjs(props.day.day).format("DD")}</span>
          <div className={`col-12 d-flex d-flex-wrap  d-justify-center ${styles["month_day_small_card_dot"]}`}>
            <b className={`${result ? "bg-primary text-white":"bg-grey "}`}></b>
          </div>
      </div>
    )
  }
  else{
    return (
    <div className={`d-flex op-03 d-flex-wrap d-align-center d-justify-center ${styles["month_day_small_card"]}`}>
          
      </div>
    )
  }
}
