import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear'

dayjs.extend(weekOfYear);

export function getMonth(month = dayjs().month()) {
  month = Math.floor(month);
  const year = dayjs().year();
  const firstDaysOfTheMonth = dayjs(new Date(year, month, 1)).day();
  const lastDaysOfTheMonth = dayjs(new Date(year, month+1, 1)).day();
  let currentMonthCount = 0 - firstDaysOfTheMonth;
  let index = 0;
  let myData = Math.abs(0 - firstDaysOfTheMonth);
  const daysMatrix = new Array(6).fill([]).map(() => {
    const daysInMonth = dayjs(`${year}-${month+1}-24`).daysInMonth();
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      index++;
      const item = daysInMonth + myData
      const day = dayjs(new Date(year, month, currentMonthCount));
      const obj ={
        daysInMonth,
        day,currentMonthCount,index,item
      }
      return obj
    });
    
  });

  // We need Previous days count because we will reduce the opacity in frontend for previous month days
  // We can also pass the active day.
  let metadata = {
    previousDays: Math.abs(0 - firstDaysOfTheMonth),
    nextDays:7-lastDaysOfTheMonth
  }
  let obj = {
      daysMatrix,
      metadata
  }
  return obj;
}

export function getDay(day = dayjs().date(),month = dayjs().month()) {
  day = Math.floor(day);
  let data = dayjs().set('month', month).date(day);
  return data;
}

export function getWeek(week) {
  let i=-1;
  const weekMatrix = new Array(7).fill([]).map(() => {
    i++;
    return dayjs().week(week).day(i);
  });
  return weekMatrix
}

export function getYear(year = dayjs().year()){
  let i=0;
  const yearMatrix = new Array(12).fill([]).map(() => { 
    let month = dayjs().month(i).format("M")
    month = Math.floor(month);
    const firstDaysOfTheMonth = dayjs(new Date(year,i,1)).day();
    let index = 0;
    let currentMonthCount = 0 - firstDaysOfTheMonth;

    const daysMatrix = new Array(6).fill([]).map(() => {
      let myData = Math.abs(0 - firstDaysOfTheMonth);
      const month = new Array(7).fill(null).map(() => {
        const daysInMonth = dayjs(`${year}-${i+1}-24`).daysInMonth();
        const item = daysInMonth + myData
        currentMonthCount++;
        index++;
        const day = dayjs(new Date(year, i, currentMonthCount));
        let obj ={
          daysInMonth,
          day,currentMonthCount,index,item
        }
        return obj
      });
      return month
    });
    i++
    return daysMatrix
  });
  return yearMatrix
  
}
// for mini calendar 
export function getWeekMini(week,year) {
  let i=-1;
  const weekMatrix = new Array(7).fill([]).map(() => {
    i++;
    const data =  dayjs().set('year',year).week(week).day(i);
    return data;
  });
  return weekMatrix
}
export function getMonthMini(month,year) {
  month = Math.floor(month);
  year = Math.floor(year);
  const firstDaysOfTheMonth = dayjs(new Date(year, month, 1)).day();
  const lastDaysOfTheMonth = dayjs(new Date(year, month+1, 1)).day();
  let currentMonthCount = 0 - firstDaysOfTheMonth;
  let index = 0;
  let myData = Math.abs(0 - firstDaysOfTheMonth);
  const daysMatrix = new Array(6).fill([]).map(() => {
    const daysInMonth = dayjs(`${year}-${month+1}-24`).daysInMonth();
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      index++;
      const item = daysInMonth + myData
      const day = dayjs(new Date(year, month, currentMonthCount));
      const obj ={
        daysInMonth,
        day,currentMonthCount,index,item
      }
      return obj
    });
    
  });

  // We need Previous days count because we will reduce the opacity in frontend for previous month days
  // We can also pass the active day.
  let metadata = {
    previousDays: Math.abs(0 - firstDaysOfTheMonth),
    nextDays:7-lastDaysOfTheMonth
  }
  let obj = {
      daysMatrix,
      metadata
  }
  return obj;
}