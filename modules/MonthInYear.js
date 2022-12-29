import Day from "./Day";
import dayjs from "dayjs"
import {Fragment} from 'react';
import styles from "./css/Calendar.module.css";
import DayInYear from "./DayInYear";
export default function MonthInYear({ month }) {
  
  return (
    <div className={`${styles["year-month"]} pl-3 pr-3 pb-5`}>
      {month.map((block, index) => ( <div className={`col-12 `} key={index}>
        <h2 className="f-700 mb-1 l-25">{dayjs(block[1][1].day).format("MMMM")}</h2>
        <div className="d-grid d-grid-cols-7 d-grid-rows-5">
          {block.map((row, i) => (
            <Fragment key={i}>
              {row.map((day, idx) => (
                <DayInYear day={day.day} key={idx} rowIdx={i} index={day.index} current={day.item} total={day.daysInMonth} prevDays={day.currentMonthCount} />
              ))}
            </Fragment>
          ))}
          </div>
        </div>
      ))}
    </div>
  );
}