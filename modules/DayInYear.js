import styles from "./css/Calendar.module.css"
export default function DayInYear(props) {
  
  if(props.prevDays > 0 && props.index <= props.current){
    return (
      <div className={`d-flex d-flex-wrap d-align-center d-justify-center ${styles["year_day_small_card"]}`}>
          <span className="col-12 d-flex d-justify-center">{props.day.format("DD")}</span>
          <div className={`col-12 d-flex d-flex-wrap d-align-center d-justify-center ${styles["year_day_small_card_dot"]}`}>
              <b></b>
          </div>
      </div>
    )
  }
  else{
    return (
      <div className={`d-flex d-flex-wrap d-align-center d-justify-center ${styles["year_day_small_card"]}`}>
          <span className="col-12 d-flex d-justify-center">&nbsp;</span>
              
      </div>
    )
  }
}
