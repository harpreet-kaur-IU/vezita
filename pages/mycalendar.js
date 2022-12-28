import React, { Fragment } from 'react'
import Base from '../layout/base'
import dayjs from "dayjs";
import weekOfYear from 'dayjs/plugin/weekOfYear'
import { useRouter } from "next/router";
import { useEffect, useState,useRef } from "react";
import styles from '../modules/css/calendar.module.css'
import Month from '../modules/Month';
import Week from '../modules/Week';
import WeekDay from '../modules/WeekDay';
import PartnerBar from '../modules/PartnerBarCalendar';
import SmallEvent from '../modules/SmallEvent';
import MonthSmall from '../modules/MonthSmall';
import MonthInYear from '../modules/MonthInYear';
import SmallWeek from '../modules/SmallWeek';
import BlockoutModal from '../modules/BlockoutModal';
import MiniCalendar from '../modules/MiniCalendar';
import SmallDay from '../modules/SmallDay';
import { getMonth,getMonthMini, getDay,getWeek,getWeekMini,getYear } from '../utils/utils';
import Header from '../modules/Header';
export default function MyCalendar(){
  const viewRef = useRef(null);
  const smallTabRef = useRef(null);
  const router = useRouter();
  const [viewTab, setViewTab] = useState("day");
  const [smallTab,setSmallTab] = useState('month');
  const [smallTabView, setSmallTabView] = useState(false)
  const [returnTabValue,setReturnTabValue] = useState("reservation")
  const [blockOutModal,setBlockOutModal] = useState(false)
  const [currentMonth, setCurrentMonth] = useState(dayjs().month());
  const [selectedMonth, setSelectedMonth] = useState(dayjs().month());
  // Selected Day means day selected by the user & Current Day means the data according to gather according to the selected date.
  const [selectedDay, setSelectedDay] = useState(dayjs().date());
  const [currentDay, setCurrentDay] = useState(dayjs().date());
  // for getting current month only used in getting day
  const [dayOfMonth,setDayOfMonth] = useState(dayjs().month())
  // for getting current week  used in getting week
  dayjs.extend(weekOfYear);
  const [selectedWeek, setSelectedWeek] = useState(dayjs().week())
  const [currentWeek,setCurrentWeek] = useState(dayjs().week())
  // for getting current year used in getting year
  const [currentYear,setCurrentYear] = useState(dayjs().year())
  const [selectedYear, setSelectedYear] = useState(dayjs().year())
  // for mini calendar
  const [miniCalendar, setMiniCalendar] = useState(true)
  useEffect(() => {
      setCurrentMonth(getMonth(selectedMonth))
  }, [selectedMonth]);

  useEffect(() => {
      setCurrentDay(getDay(selectedDay,dayOfMonth))
  }, []);

  useEffect(() => {
      setCurrentWeek(getWeek(selectedWeek))
  }, []);
  useEffect(()=>{
      setCurrentYear(getYear(selectedYear))
  },[])
  const prevMonth = () => {
      setSelectedMonth(prev => prev - 1)
  }
  const todayMonth = () => {
      setSelectedMonth(dayjs().month())
  }
  const nextMonth = () => {
      setSelectedMonth(prev => prev + 1)
      setMiniCalendar(true)
  }
  const prevDay = () => {
      setCurrentDay(getDay((selectedDay-1),dayOfMonth))
      setSelectedDay(prev => prev - 1)
      
  }
  const todayHandler = () => {
      setCurrentDay(getDay(dayjs().date()))
      setSelectedDay(dayjs().date())
  }
  const nextDay = () => {
      setCurrentDay(getDay(selectedDay+1,dayOfMonth))
      setSelectedDay(prev => prev + 1)
  }
  const nextWeek = () =>{
      setCurrentWeek(getWeek(selectedWeek+1))
      setSelectedWeek(prev => prev + 1)
  }
  const todayWeek = () => {
      setCurrentWeek(getWeek(dayjs().week()))
      setSelectedWeek(dayjs().week())
  }
  const prevWeek = () =>{
      setCurrentWeek(getWeek(selectedWeek-1))
      setSelectedWeek(prev => prev - 1)
  }
  const nextYear = () => {
      setCurrentYear(getYear(selectedYear+1))
      setSelectedYear(prev => prev + 1)
  }
  const todayYear = () => {
      setCurrentYear(getYear(dayjs().year()))
      setSelectedYear(dayjs().year())
  }
  const prevYear = () => {
      setCurrentYear(getYear(selectedYear-1))
      setSelectedYear(prev => prev - 1)
  }
  const reservationTabsHandler = (e) => {
      document.querySelectorAll(`.${styles["return_tabs"]} span`).forEach(item => {
        item.classList.remove(styles["active"]);
      })
      e.currentTarget.classList.add(styles["active"])
      setReturnTabValue(e.currentTarget.getAttribute("value"))
  }
  const blockOutModalHandler = () => {
      setBlockOutModal(prev => !prev)
  }
  const pickerTabsHandler = (e) => {
      viewRef.current.querySelectorAll("h6").forEach(item => {
        item.classList.remove(styles["active"]);
      })
      e.currentTarget.classList.add(styles["active"])
      setViewTab(e.currentTarget.getAttribute("value"))
  }
  const smallTabViewHandler = () => {
      setSmallTabView(prev => !prev)
  }
  const smallTabHandler = (e) => {
      smallTabRef.current.querySelectorAll("div").forEach((item)=>{
          item.classList.remove(styles.dark)
      });
      e.currentTarget.classList.add(styles.dark);
      setSmallTab(e.currentTarget.getAttribute("value"));
  }
  const searchHandler = () => {
      router.push('/calendar/search')
  }
  const weekToDayHandler = (e) => {
      setViewTab("day")
      const date = e.currentTarget.getAttribute("day");
      const day = dayjs(date)
      const data = day.diff(currentDay, "day");
      if(data > 0){
        setCurrentDay(getDay(selectedDay+(data+1),dayOfMonth))
        setSelectedDay(prev => prev + (data+1))
      }
      else{
        setCurrentDay(getDay(selectedDay+data,dayOfMonth))
        setSelectedDay(prev => prev + data)
      }
  }
  const miniCalendarDayHandler = (e) => {
      const date = ""
      if(e.currentTarget.getAttribute("value") == " "){
          date = dayjs().format("D MMM YYYY")
      }
      else{
          date = dayjs(e.currentTarget.getAttribute("value")).format("D MMM YYYY");

      }
      const day = dayjs(date)
      const today = dayjs();
      const year = dayjs(date).year();
      const week = dayjs(day).week();
      const month = dayjs(day).month();
      const monthget = dayjs(currentMonth.daysMatrix[2][0].day)
      const data = day.diff(currentDay, "day");
      const mon = day.diff(monthget,"month");
      if(data > 0){
          setCurrentDay(getDay(selectedDay+(data+1),dayOfMonth))
          setSelectedDay(prev => prev + (data+1))
          setSelectedWeek(week)
          setCurrentWeek(getWeekMini(week,year))
          setSelectedMonth(prev => prev+mon)
          setCurrentMonth(getMonthMini(month,year))
      }
      else{
          setCurrentDay(getDay(selectedDay+data,dayOfMonth))
          setSelectedDay(prev => prev + data)
          setSelectedWeek(week)
          setCurrentWeek(getWeekMini(week,year))
          setSelectedMonth(prev => prev+mon-1)
          setCurrentMonth(getMonthMini(month,year))
      }
  }
  
  if(typeof(currentMonth) == 'number'){
      return <></>
  }
  return (
    <Fragment>
      <Base>
        <Header title="My Calendar"></Header>
        <div className={`${styles["outer-most-wrapper"]}`}>
          <div className={styles["top-head"]}>
              <div className="d-flex d-justify-space-between d-align-center">
                  <div className='d-flex d-align-center'>
                      <div className='d-flex d-flex-wrap d-flex-column'>
                          <span className={`font-28 f-600  l-42 text-secondary`}>Calendar</span>
                          <div className="d-flex d-align-center">
                              <div className={`d-flex d-align-center ${styles["next-prev-button"]}`}>
                                  {viewTab == "month"  && <div className="d-flex d-align-center">
                                      <div onClick={prevMonth} className="cursor-pointer">
                                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M0 6C0 2.68629 2.68629 0 6 0H28V28H6C2.68629 28 0 25.3137 0 22V6Z" fill="#EDEDED"/>
                                              <path fillRule="evenodd" clipRule="evenodd" d="M16.7068 9.29279C16.8943 9.48031 16.9996 9.73462 16.9996 9.99979C16.9996 10.265 16.8943 10.5193 16.7068 10.7068L13.4138 13.9998L16.7068 17.2928C16.8889 17.4814 16.9897 17.734 16.9875 17.9962C16.9852 18.2584 16.88 18.5092 16.6946 18.6946C16.5092 18.88 16.2584 18.9852 15.9962 18.9875C15.734 18.9897 15.4814 18.8889 15.2928 18.7068L11.2928 14.7068C11.1053 14.5193 11 14.265 11 13.9998C11 13.7346 11.1053 13.4803 11.2928 13.2928L15.2928 9.29279C15.4803 9.10532 15.7346 9 15.9998 9C16.265 9 16.5193 9.10532 16.7068 9.29279Z" fill="#18181B"/>
                                          </svg>
                                      </div>
                                      <MiniCalendar handler={miniCalendarDayHandler}>        
                                          <h5 className={`calendar_button cursor-pointer f-400 l-24 ${styles["date"]}`}>{dayjs(getMonth(selectedMonth).daysMatrix[1][3].day).format('MMM YYYY')}</h5>
                                      </MiniCalendar>
                                      <div onClick={nextMonth} className="cursor-pointer">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                          <path d="M0 0H22C25.3137 0 28 2.68629 28 6V22C28 25.3137 25.3137 28 22 28H0V0Z" fill="#EDEDED"/>
                                          <path fillRule="evenodd" clipRule="evenodd" d="M11.2928 18.7069C11.1053 18.5194 11 18.2651 11 17.9999C11 17.7348 11.1053 17.4804 11.2928 17.2929L14.5858 13.9999L11.2928 10.7069C11.1106 10.5183 11.0098 10.2657 11.0121 10.0035C11.0144 9.74132 11.1196 9.49051 11.305 9.3051C11.4904 9.11969 11.7412 9.01452 12.0034 9.01224C12.2656 9.00997 12.5182 9.11076 12.7068 9.29292L16.7068 13.2929C16.8943 13.4804 16.9996 13.7348 16.9996 13.9999C16.9996 14.2651 16.8943 14.5194 16.7068 14.7069L12.7068 18.7069C12.5193 18.8944 12.265 18.9997 11.9998 18.9997C11.7346 18.9997 11.4803 18.8944 11.2928 18.7069Z" fill="#18181B"/>
                                        </svg>
                                      </div>
                                  </div>}
                                  {viewTab == "day" && <div className="d-flex d-align-center">
                                      <div onClick={prevDay} className="cursor-pointer">
                                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M0 6C0 2.68629 2.68629 0 6 0H28V28H6C2.68629 28 0 25.3137 0 22V6Z" fill="#EDEDED"/>
                                              <path fillRule="evenodd" clipRule="evenodd" d="M16.7068 9.29279C16.8943 9.48031 16.9996 9.73462 16.9996 9.99979C16.9996 10.265 16.8943 10.5193 16.7068 10.7068L13.4138 13.9998L16.7068 17.2928C16.8889 17.4814 16.9897 17.734 16.9875 17.9962C16.9852 18.2584 16.88 18.5092 16.6946 18.6946C16.5092 18.88 16.2584 18.9852 15.9962 18.9875C15.734 18.9897 15.4814 18.8889 15.2928 18.7068L11.2928 14.7068C11.1053 14.5193 11 14.265 11 13.9998C11 13.7346 11.1053 13.4803 11.2928 13.2928L15.2928 9.29279C15.4803 9.10532 15.7346 9 15.9998 9C16.265 9 16.5193 9.10532 16.7068 9.29279Z" fill="#18181B"/>
                                          </svg>
                                      </div>
                                      <MiniCalendar handler={miniCalendarDayHandler}>        
                                          <h5 className={`calendar_button cursor-pointer f-400 l-24 ${styles["date"]}`}>{dayjs(getDay(selectedDay)).format('D MMM YYYY')}</h5>
                                      </MiniCalendar>
                                      <div onClick={nextDay} className="cursor-pointer">
                                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 0H22C25.3137 0 28 2.68629 28 6V22C28 25.3137 25.3137 28 22 28H0V0Z" fill="#EDEDED"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M11.2928 18.7069C11.1053 18.5194 11 18.2651 11 17.9999C11 17.7348 11.1053 17.4804 11.2928 17.2929L14.5858 13.9999L11.2928 10.7069C11.1106 10.5183 11.0098 10.2657 11.0121 10.0035C11.0144 9.74132 11.1196 9.49051 11.305 9.3051C11.4904 9.11969 11.7412 9.01452 12.0034 9.01224C12.2656 9.00997 12.5182 9.11076 12.7068 9.29292L16.7068 13.2929C16.8943 13.4804 16.9996 13.7348 16.9996 13.9999C16.9996 14.2651 16.8943 14.5194 16.7068 14.7069L12.7068 18.7069C12.5193 18.8944 12.265 18.9997 11.9998 18.9997C11.7346 18.9997 11.4803 18.8944 11.2928 18.7069Z" fill="#18181B"/>
                                          </svg>
                                      </div>
                                  </div>}
                                  {viewTab == "week"  && <div className="d-flex d-align-center">
                                      <div onClick={prevWeek} className="cursor-pointer">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M0 6C0 2.68629 2.68629 0 6 0H28V28H6C2.68629 28 0 25.3137 0 22V6Z" fill="#EDEDED"/>
                                            <path fillRule="evenodd" clipRule="evenodd" d="M16.7068 9.29279C16.8943 9.48031 16.9996 9.73462 16.9996 9.99979C16.9996 10.265 16.8943 10.5193 16.7068 10.7068L13.4138 13.9998L16.7068 17.2928C16.8889 17.4814 16.9897 17.734 16.9875 17.9962C16.9852 18.2584 16.88 18.5092 16.6946 18.6946C16.5092 18.88 16.2584 18.9852 15.9962 18.9875C15.734 18.9897 15.4814 18.8889 15.2928 18.7068L11.2928 14.7068C11.1053 14.5193 11 14.265 11 13.9998C11 13.7346 11.1053 13.4803 11.2928 13.2928L15.2928 9.29279C15.4803 9.10532 15.7346 9 15.9998 9C16.265 9 16.5193 9.10532 16.7068 9.29279Z" fill="#18181B"/>
                                        </svg>
                                      </div>
                                      <MiniCalendar handler={miniCalendarDayHandler}>        
                                          <h5 className={`calendar_button cursor-pointer f-400 l-24 ${styles["date"]}`}>{dayjs(getWeek(selectedWeek)[0]).format("D MMM")} - {dayjs(getWeek(selectedWeek)[6]).format("D MMM")}</h5>
                                      </MiniCalendar>
                                          <div onClick={nextWeek} className="cursor-pointer">
                                          <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                              <path d="M0 0H22C25.3137 0 28 2.68629 28 6V22C28 25.3137 25.3137 28 22 28H0V0Z" fill="#EDEDED"/>
                                              <path fillRule="evenodd" clipRule="evenodd" d="M11.2928 18.7069C11.1053 18.5194 11 18.2651 11 17.9999C11 17.7348 11.1053 17.4804 11.2928 17.2929L14.5858 13.9999L11.2928 10.7069C11.1106 10.5183 11.0098 10.2657 11.0121 10.0035C11.0144 9.74132 11.1196 9.49051 11.305 9.3051C11.4904 9.11969 11.7412 9.01452 12.0034 9.01224C12.2656 9.00997 12.5182 9.11076 12.7068 9.29292L16.7068 13.2929C16.8943 13.4804 16.9996 13.7348 16.9996 13.9999C16.9996 14.2651 16.8943 14.5194 16.7068 14.7069L12.7068 18.7069C12.5193 18.8944 12.265 18.9997 11.9998 18.9997C11.7346 18.9997 11.4803 18.8944 11.2928 18.7069Z" fill="#18181B"/>
                                          </svg>
                                      </div>
                                  </div>}
                              </div>
                              {viewTab == "day" && <div className={styles["today"]} onClick={todayHandler}>Today</div>}
                              {viewTab == "month" && <div className={styles["today"]} onClick={todayMonth}>Today</div>}
                              {viewTab == "week" && <div className={styles["today"]} onClick={todayWeek}>Today</div>}

                          </div>
                      </div>
                      
                  </div>
                  
                  <div ref={viewRef} className={`d-flex d-align-center ${styles["picker"]} cursor-pointer`}>
                      <h6 role="button" value="day" className={` ${viewTab == "day"&& styles["active"]}`} onClick={pickerTabsHandler}>Day</h6>
                      <h6 role="button" value="week" className={`${viewTab == "week"&& styles["active"]}`} onClick={pickerTabsHandler}>Week</h6>
                      <h6 role="button" value="month" className={`${viewTab == "month"&& styles["active"]}`} onClick={pickerTabsHandler}>Month</h6>
                  </div>
                  {/* <div className='d-flex d-align-center gap-2'>
                      {returnTabValue == "blockout" && <div className={` bg-primary rounded-50 text-white p-1 d-flex d-align-center d-justify-center cursor-pointer ${styles["plus-sign"]}`} onClick={blockOutModalHandler}>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.72125 7.72516V0.0585938H10.2768V7.72516H17.9433V10.2807H10.2768V17.9473H7.72125V10.2807H0.0546875V7.72516H7.72125Z" fill="white"/>
                          </svg>
                      </div>}
                      {returnTabValue == "reservation" && <div className={` bg-primary rounded-50 text-white p-1 d-flex d-align-center d-justify-center ${styles["plus-sign"]}`}>
                          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M7.72125 7.72516V0.0585938H10.2768V7.72516H17.9433V10.2807H10.2768V17.9473H7.72125V10.2807H0.0546875V7.72516H7.72125Z" fill="white"/>
                          </svg>
                      </div>}
                      <div className={styles["return_tabs"]}>
                          <span role="button" value="reservation" className={styles["active"]} onClick={reservationTabsHandler}>Reservation</span>
                          <span role="button" value="blockout" onClick={reservationTabsHandler}>Blockouts</span>
                      </div>
                      <div className={`${styles["profile"]} ml-4 d-flex d-align-center d-justify-end`}>
                          <img src="notification.png"/>
                          <svg width="3" height="40" viewBox="0 0 3 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <line opacity="0.1" y1="-1" x2="40" y2="-1" transform="matrix(4.37114e-08 1 1 -4.37114e-08 2.6543 0)" stroke="#003D41" strokeWidth="2"/>
                          </svg>
                          <img src="slide.png"/>
                      </div>
                  </div> */}
              </div>
          </div>
          <div className={`d-flex d-flex-wrap col-12 mt-2`}>
              {viewTab == "month" && 
              <div className={`col-12 d-flex ${styles["two-column"]}`}>
                <div className={`col-8 ${styles["month__calendar"]}`}>
                  <div className={`d-grid d-grid-cols-7 ${styles["month__calendar__header"]}`}>
                      <div>Sun</div>
                      <div>Mon</div>
                      <div>Tue</div>
                      <div>Wed</div>
                      <div>Thu</div>
                      <div>Fri</div>
                      <div>Sat</div>
                  </div>
                  <Month month={currentMonth} selected={currentDay}/>
                </div>
                <div className={`col-4 d-flex d-flex d-flex-wrap ${styles["right-section"]}`}>
                    <div className='col-12 ml-1 d-flex d-flex-wrap d-align-start'>
                      <div className={`col-12 p-5 ${styles["events"]}`}>
                        <h4 className='f-500 l-26 text-grey-2 text-center'>Today, 18th Feb, 2022</h4>
                        <ul>
                          <h5 className='f-500 l-26 text-grey-2 mt-5'>Now</h5>
                          <li className={`p-3 d-flex d-flex-wrap cursor-pointer gap-3 text-white bg-purple mt-3 rounded-8`}>
                              <h5 className='f-400 l-22'>12:00</h5>
                              <h5 className='f-400 l-22'>Video Call with Arlene McCoy</h5>
                          </li>
                        </ul>

                        <ul>
                          <h5 className='f-500 l-26 text-grey-2 mt-10'>Up next</h5>
                          <li className={`p-3 d-flex d-flex-wrap cursor-pointer gap-3 text-white bg-purple mt-3 rounded-8`}>
                              <h5 className='f-400 l-22'>12:00</h5>
                              <h5 className='f-400 l-22'>Video Call with Arlene McCoy</h5>
                          </li>
                          <li className={`p-3 d-flex d-flex-wrap cursor-pointer gap-3 text-white bg-teal-5 mt-3 rounded-8`}>
                            <h5 className='f-400 l-22'>12:00</h5>
                            <h5 className='f-400 l-22'>Video Call with Arlene McCoy</h5>
                          </li>
                        </ul>
                      </div>
                    </div>
                </div>
              </div>
              }
              {viewTab == "week" && <div className={`col-12 ${styles["week__calendar"]}`}>
                  <div className={`p-relative ${styles["week__header"]}`}>
                      <div className={`${styles["timezone"]} d-flex d-flex-wrap`}>
                          <span className={`${styles["mainzone"]} col-12`}>1:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>2:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>3:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>4:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>5:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>6:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>7:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>8:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>9:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>10:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>11:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>12:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>1:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>2:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>3:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>4:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>5:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>6:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>7:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>8:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>9:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>10:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>11:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>12:00 AM</span>
                      </div>
                      <Week week={currentWeek} handler={weekToDayHandler} />
                  </div>
              </div>}
              {viewTab == "day" && <div className={`col-12 ${styles["week__calendar"]}`}>
                  <div className="d-flex d-flex-wrap col-12 mr-2 p-relative">
                      <div className={`${styles["timezone"]} d-flex d-flex-wrap`}>
                          <span className={`${styles["mainzone"]} col-12`}>1:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>2:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>3:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>4:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>5:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>6:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>7:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>8:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>9:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>10:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>11:00 AM</span>
                          <span className={`${styles["mainzone"]} col-12`}>12:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>1:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>2:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>3:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>4:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>5:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>6:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>7:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>8:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>9:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>10:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>11:00 PM</span>
                          <span className={`${styles["mainzone"]} col-12`}>12:00 AM</span>
                      </div>
                      <div className="col-12">
                          <WeekDay type="1" data={[2,4,5,7,12,17,20]} day={currentDay}></WeekDay>
                      </div>
                  </div>
              </div>}
              
          </div>
          {/* Calendar on small screen */}
          <div className={`col-12 ${styles["small-screen-calendar-wrapper"]}`}>
              <div className={styles["calendar-bar"]}>
                  <PartnerBar classes="d-none">Calendar</PartnerBar>
              </div>
              <div className={styles["small-body-wrapper"]}>
                  <div className="d-flex d-flex-wrap d-justify-space-between pl-3 pr-3">
                      {smallTab == "week" &&  <div className="d-flex d-align-center">
                          <span role="button" className="text-primary user-select-none bg-smoke rounded-500 pl-1 pr-1 mr-1 f-600 cursor-pointer" onClick={prevWeek}>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M5.70679 0.292787C5.89426 0.480314 5.99957 0.734622 5.99957 0.999786C5.99957 1.26495 5.89426 1.51926 5.70679 1.70679L2.41379 4.99979L5.70679 8.29279C5.88894 8.48139 5.98974 8.73399 5.98746 8.99619C5.98518 9.25838 5.88001 9.5092 5.6946 9.6946C5.5092 9.88001 5.25838 9.98518 4.99619 9.98746C4.73399 9.98974 4.48139 9.88894 4.29279 9.70679L0.292787 5.70679C0.105316 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105316 4.48031 0.292787 4.29279L4.29279 0.292787C4.48031 0.105316 4.73462 0 4.99979 0C5.26495 0 5.51926 0.105316 5.70679 0.292787V0.292787Z" fill="#18181B"/>
                            </svg>
                          </span>
                          <MiniCalendar handler={miniCalendarDayHandler}>        
                            <h5 className={`calendar_button cursor-pointer f-400 l-24 ${styles["date"]}`}>{dayjs(getWeek(selectedWeek)[0]).format("D MMM")} - {dayjs(getWeek(selectedWeek)[6]).format("D MMM")}</h5>
                          </MiniCalendar>
                          <span role="button" className="text-primary user-select-none bg-smoke pl-1 pr-1 ml-1 rounded-500 f-600 cursor-pointer" onClick={nextWeek}>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.292787 9.70692C0.105316 9.51939 0 9.26508 0 8.99992C0 8.73475 0.105316 8.48045 0.292787 8.29292L3.58579 4.99992L0.292787 1.70692C0.110629 1.51832 0.00983372 1.26571 0.0121121 1.00352C0.0143906 0.741321 0.11956 0.490509 0.304968 0.305101C0.490376 0.119692 0.741189 0.0145233 1.00339 0.0122448C1.26558 0.00996641 1.51818 0.110761 1.70679 0.292919L5.70679 4.29292C5.89426 4.48045 5.99957 4.73475 5.99957 4.99992C5.99957 5.26508 5.89426 5.51939 5.70679 5.70692L1.70679 9.70692C1.51926 9.89439 1.26495 9.99971 0.999786 9.99971C0.734622 9.99971 0.480314 9.89439 0.292787 9.70692Z" fill="#18181B"/>
                            </svg>
                          </span> 
                      </div>
                      }
                      {smallTab == "month" && <div className="d-flex d-align-center">
                          <span role="button" className="text-primary user-select-none bg-smoke rounded-500 pl-1 pr-1 mr-1 f-600 cursor-pointer" onClick={prevMonth}>
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M5.70679 0.292787C5.89426 0.480314 5.99957 0.734622 5.99957 0.999786C5.99957 1.26495 5.89426 1.51926 5.70679 1.70679L2.41379 4.99979L5.70679 8.29279C5.88894 8.48139 5.98974 8.73399 5.98746 8.99619C5.98518 9.25838 5.88001 9.5092 5.6946 9.6946C5.5092 9.88001 5.25838 9.98518 4.99619 9.98746C4.73399 9.98974 4.48139 9.88894 4.29279 9.70679L0.292787 5.70679C0.105316 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105316 4.48031 0.292787 4.29279L4.29279 0.292787C4.48031 0.105316 4.73462 0 4.99979 0C5.26495 0 5.51926 0.105316 5.70679 0.292787V0.292787Z" fill="#18181B"/>
                              </svg>
                          </span>
                          <MiniCalendar handler={miniCalendarDayHandler}>        
                              <h5 className={`calendar_button cursor-pointer f-400 l-24 ${styles["date"]}`}>{dayjs(getMonth(selectedMonth).daysMatrix[1][3].day).format('MMM YYYY')}</h5>
                          </MiniCalendar>
                          <span role="button" className="text-primary user-select-none bg-smoke pl-1 pr-1 ml-1 rounded-500 f-600 cursor-pointer" onClick={nextMonth}>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M0.292787 9.70692C0.105316 9.51939 0 9.26508 0 8.99992C0 8.73475 0.105316 8.48045 0.292787 8.29292L3.58579 4.99992L0.292787 1.70692C0.110629 1.51832 0.00983372 1.26571 0.0121121 1.00352C0.0143906 0.741321 0.11956 0.490509 0.304968 0.305101C0.490376 0.119692 0.741189 0.0145233 1.00339 0.0122448C1.26558 0.00996641 1.51818 0.110761 1.70679 0.292919L5.70679 4.29292C5.89426 4.48045 5.99957 4.73475 5.99957 4.99992C5.99957 5.26508 5.89426 5.51939 5.70679 5.70692L1.70679 9.70692C1.51926 9.89439 1.26495 9.99971 0.999786 9.99971C0.734622 9.99971 0.480314 9.89439 0.292787 9.70692Z" fill="#18181B"/>
                            </svg>
                          </span> 
                      </div>
                      }
                      {smallTab == "day" && <div className="d-flex d-align-center">
                          <span role="button" className="text-primary user-select-none bg-smoke rounded-500 pl-1 pr-1 mr-1 f-600 cursor-pointer" onClick={prevDay}>
                            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M5.70679 0.292787C5.89426 0.480314 5.99957 0.734622 5.99957 0.999786C5.99957 1.26495 5.89426 1.51926 5.70679 1.70679L2.41379 4.99979L5.70679 8.29279C5.88894 8.48139 5.98974 8.73399 5.98746 8.99619C5.98518 9.25838 5.88001 9.5092 5.6946 9.6946C5.5092 9.88001 5.25838 9.98518 4.99619 9.98746C4.73399 9.98974 4.48139 9.88894 4.29279 9.70679L0.292787 5.70679C0.105316 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105316 4.48031 0.292787 4.29279L4.29279 0.292787C4.48031 0.105316 4.73462 0 4.99979 0C5.26495 0 5.51926 0.105316 5.70679 0.292787V0.292787Z" fill="#18181B"/>
                            </svg>
                          </span>
                          <MiniCalendar handler={miniCalendarDayHandler}>        
                              <h5 className={`calendar_button cursor-pointer f-400 l-24 ${styles["date"]}`}>{dayjs(getDay(selectedDay)).format('D MMM YYYY')}</h5>
                          </MiniCalendar>
                          <span role="button" className="text-primary user-select-none bg-smoke pl-1 pr-1 ml-1 rounded-500 f-600 cursor-pointer" onClick={nextDay}>
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M0.292787 9.70692C0.105316 9.51939 0 9.26508 0 8.99992C0 8.73475 0.105316 8.48045 0.292787 8.29292L3.58579 4.99992L0.292787 1.70692C0.110629 1.51832 0.00983372 1.26571 0.0121121 1.00352C0.0143906 0.741321 0.11956 0.490509 0.304968 0.305101C0.490376 0.119692 0.741189 0.0145233 1.00339 0.0122448C1.26558 0.00996641 1.51818 0.110761 1.70679 0.292919L5.70679 4.29292C5.89426 4.48045 5.99957 4.73475 5.99957 4.99992C5.99957 5.26508 5.89426 5.51939 5.70679 5.70692L1.70679 9.70692C1.51926 9.89439 1.26495 9.99971 0.999786 9.99971C0.734622 9.99971 0.480314 9.89439 0.292787 9.70692Z" fill="#18181B"/>
                              </svg>
                          </span> 
                      </div>
                      }
                      {smallTab == "year" && <div className="d-flex d-align-center">
                          <span role="button" className="text-primary user-select-none bg-smoke rounded-500 pl-1 pr-1 mr-1 f-600 cursor-pointer" onClick={prevYear}>
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M5.70679 0.292787C5.89426 0.480314 5.99957 0.734622 5.99957 0.999786C5.99957 1.26495 5.89426 1.51926 5.70679 1.70679L2.41379 4.99979L5.70679 8.29279C5.88894 8.48139 5.98974 8.73399 5.98746 8.99619C5.98518 9.25838 5.88001 9.5092 5.6946 9.6946C5.5092 9.88001 5.25838 9.98518 4.99619 9.98746C4.73399 9.98974 4.48139 9.88894 4.29279 9.70679L0.292787 5.70679C0.105316 5.51926 0 5.26495 0 4.99979C0 4.73462 0.105316 4.48031 0.292787 4.29279L4.29279 0.292787C4.48031 0.105316 4.73462 0 4.99979 0C5.26495 0 5.51926 0.105316 5.70679 0.292787V0.292787Z" fill="#18181B"/>
                              </svg>
                          </span>
                          <div className="p-relative">
                              <h3 className="f-600 l-30 text-secondary">{dayjs(getYear(selectedYear)[0][1][1].day).format("YYYY")}</h3>
                          </div>
                          <span role="button" className="text-primary user-select-none bg-smoke pl-1 pr-1 ml-1 rounded-500 f-600 cursor-pointer" onClick={nextYear}>
                              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path fillRule="evenodd" clipRule="evenodd" d="M0.292787 9.70692C0.105316 9.51939 0 9.26508 0 8.99992C0 8.73475 0.105316 8.48045 0.292787 8.29292L3.58579 4.99992L0.292787 1.70692C0.110629 1.51832 0.00983372 1.26571 0.0121121 1.00352C0.0143906 0.741321 0.11956 0.490509 0.304968 0.305101C0.490376 0.119692 0.741189 0.0145233 1.00339 0.0122448C1.26558 0.00996641 1.51818 0.110761 1.70679 0.292919L5.70679 4.29292C5.89426 4.48045 5.99957 4.73475 5.99957 4.99992C5.99957 5.26508 5.89426 5.51939 5.70679 5.70692L1.70679 9.70692C1.51926 9.89439 1.26495 9.99971 0.999786 9.99971C0.734622 9.99971 0.480314 9.89439 0.292787 9.70692Z" fill="#18181B"/>
                              </svg>
                          </span> 
                      </div>
                      }
                      <div>
                          {smallTab == "day" && <div className={styles["today"]} onClick={todayHandler}>Today</div>}
                          {smallTab == "month" && <div className={styles["today"]} onClick={todayMonth}>Today</div>}
                          {smallTab == "week" && <div className={styles["today"]} onClick={todayWeek}>Today</div>}
                      </div>
                      <div className="d-flex d-align-center">
                          <div className="mr-2" onClick={smallTabViewHandler}>
                              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 8H19V10H1V8Z" fill="#002C4B"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M5 0C5.55228 0 6 0.447715 6 1V2H4V1C4 0.447715 4.44772 0 5 0ZM5 4C5.55228 4 6 3.55228 6 3V2H14V3C14 3.55228 14.4477 4 15 4H5ZM5 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H17C17.5523 20 18 19.5523 18 19V5C18 4.44772 17.5523 4 17 4H15C15.5523 4 16 3.55228 16 3V2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H3C1.34315 22 0 20.6569 0 19V5C0 3.34315 1.34315 2 3 2H4V3C4 3.55228 4.44772 4 5 4ZM16 2H14V1C14 0.447715 14.4477 0 15 0C15.5523 0 16 0.447715 16 1V2Z" fill="#002C4B"/>
                                  <path d="M4 13C4 12.4477 4.44772 12 5 12C5.55228 12 6 12.4477 6 13C6 13.5523 5.55228 14 5 14C4.44772 14 4 13.5523 4 13Z" fill="#002C4B"/>
                                  <path d="M8 13C8 12.4477 8.44772 12 9 12H15C15.5523 12 16 12.4477 16 13C16 13.5523 15.5523 14 15 14H9C8.44772 14 8 13.5523 8 13Z" fill="#002C4B"/>
                                  <path d="M4 17C4 16.4477 4.44772 16 5 16C5.55228 16 6 16.4477 6 17C6 17.5523 5.55228 18 5 18C4.44772 18 4 17.5523 4 17Z" fill="#002C4B"/>
                                  <path d="M8 17C8 16.4477 8.44772 16 9 16H15C15.5523 16 16 16.4477 16 17C16 17.5523 15.5523 18 15 18H9C8.44772 18 8 17.5523 8 17Z" fill="#002C4B"/>
                              </svg>
                          </div>
                          <div onClick={searchHandler}>
                              <svg width="21" height="22" viewBox="0 0 21 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9 0.842773C13.968 0.842773 18 4.87477 18 9.84277C18 14.8108 13.968 18.8428 9 18.8428C4.032 18.8428 0 14.8108 0 9.84277C0 4.87477 4.032 0.842773 9 0.842773ZM9 16.8428C12.867 16.8428 16 13.7098 16 9.84277C16 5.97477 12.867 2.84277 9 2.84277C5.132 2.84277 2 5.97477 2 9.84277C2 13.7098 5.132 16.8428 9 16.8428ZM17.485 16.9138L20.314 19.7418L18.899 21.1568L16.071 18.3278L17.485 16.9138Z" fill="#003D41"/>
                              </svg>
                          </div>
                      </div>
                  </div>
                  {smallTabView && <div ref={smallTabRef} className="d-flex d-flex-wrap d-justify-center col-sm-8 offset-sm-2 mt-4 pl-3 pr-3">      
                      <div className="col-12 d-flex d-justify-space-between">
                          <div className={`d-flex d-flex-column d-align-center ${styles["small-calendar-tab"]} ${smallTab == "month" && styles["dark"]}`} value="month" onClick={smallTabHandler}>
                              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 8H19V10H1V8Z" fill="#8EA0B6"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M5 0C5.55228 0 6 0.447715 6 1V2H4V1C4 0.447715 4.44772 0 5 0ZM5 4C5.55228 4 6 3.55228 6 3V2H14V3C14 3.55228 14.4477 4 15 4H5ZM5 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H17C17.5523 20 18 19.5523 18 19V5C18 4.44772 17.5523 4 17 4H15C15.5523 4 16 3.55228 16 3V2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H3C1.34315 22 0 20.6569 0 19V5C0 3.34315 1.34315 2 3 2H4V3C4 3.55228 4.44772 4 5 4ZM16 2H14V1C14 0.447715 14.4477 0 15 0C15.5523 0 16 0.447715 16 1V2Z" fill="#8EA0B6"/>
                                  <path d="M3 13C3 12.4477 3.44772 12 4 12C4.55228 12 5 12.4477 5 13C5 13.5523 4.55228 14 4 14C3.44772 14 3 13.5523 3 13Z" fill="#8EA0B6"/>
                                  <path d="M7 13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13Z" fill="#8EA0B6"/>
                                  <path d="M11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13Z" fill="#8EA0B6"/>
                                  <path d="M15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13Z" fill="#8EA0B6"/>
                                  <path d="M3 17C3 16.4477 3.44772 16 4 16C4.55228 16 5 16.4477 5 17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17Z" fill="#8EA0B6"/>
                                  <path d="M7 17C7 16.4477 7.44772 16 8 16C8.55228 16 9 16.4477 9 17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17Z" fill="#8EA0B6"/>
                                  <path d="M11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17Z" fill="#8EA0B6"/>
                                  <path d="M15 17C15 16.4477 15.4477 16 16 16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17Z" fill="#8EA0B6"/>
                              </svg>
                              <h6 className="col-12 mt-1 f-400 l-20 text-grey">Month</h6>
                          </div>
                          <div className={`d-flex d-flex-column d-align-center ${styles["small-calendar-tab"]} ${smallTab == "week" && styles["dark"]}`} value="week" onClick={smallTabHandler}>
                              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 8H19V10H1V8Z" fill="#8EA0B6"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M5 0C5.55228 0 6 0.447715 6 1V2H4V1C4 0.447715 4.44772 0 5 0ZM5 4C5.55228 4 6 3.55228 6 3V2H14V3C14 3.55228 14.4477 4 15 4H5ZM5 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H17C17.5523 20 18 19.5523 18 19V5C18 4.44772 17.5523 4 17 4H15C15.5523 4 16 3.55228 16 3V2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H3C1.34315 22 0 20.6569 0 19V5C0 3.34315 1.34315 2 3 2H4V3C4 3.55228 4.44772 4 5 4ZM16 2H14V1C14 0.447715 14.4477 0 15 0C15.5523 0 16 0.447715 16 1V2Z" fill="#8EA0B6"/>
                                  <path d="M3 13C3 12.4477 3.44772 12 4 12C4.55228 12 5 12.4477 5 13C5 13.5523 4.55228 14 4 14C3.44772 14 3 13.5523 3 13Z" fill="#8EA0B6"/>
                                  <path d="M7 13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13Z" fill="#8EA0B6"/>
                                  <path d="M11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13Z" fill="#8EA0B6"/>
                                  <path d="M15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13Z" fill="#8EA0B6"/>
                                  <path d="M3 17C3 16.4477 3.44772 16 4 16C4.55228 16 5 16.4477 5 17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17Z" fill="#8EA0B6"/>
                                  <path d="M7 17C7 16.4477 7.44772 16 8 16C8.55228 16 9 16.4477 9 17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17Z" fill="#8EA0B6"/>
                                  <path d="M11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17Z" fill="#8EA0B6"/>
                                  <path d="M15 17C15 16.4477 15.4477 16 16 16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17Z" fill="#8EA0B6"/>
                              </svg>
                              <h6 className="col-12 mt-1 f-400 l-20 text-grey">Week</h6>
                          </div>
                          <div className={`d-flex d-flex-column d-align-center ${styles["small-calendar-tab"]} ${smallTab == "day" && styles["dark"]}`} value="day" onClick={smallTabHandler}>
                              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 8H19V10H1V8Z" fill="#8EA0B6"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M5 0C5.55228 0 6 0.447715 6 1V2H4V1C4 0.447715 4.44772 0 5 0ZM5 4C5.55228 4 6 3.55228 6 3V2H14V3C14 3.55228 14.4477 4 15 4H5ZM5 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H17C17.5523 20 18 19.5523 18 19V5C18 4.44772 17.5523 4 17 4H15C15.5523 4 16 3.55228 16 3V2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H3C1.34315 22 0 20.6569 0 19V5C0 3.34315 1.34315 2 3 2H4V3C4 3.55228 4.44772 4 5 4ZM16 2H14V1C14 0.447715 14.4477 0 15 0C15.5523 0 16 0.447715 16 1V2Z" fill="#8EA0B6"/>
                                  <path d="M3 13C3 12.4477 3.44772 12 4 12C4.55228 12 5 12.4477 5 13C5 13.5523 4.55228 14 4 14C3.44772 14 3 13.5523 3 13Z" fill="#8EA0B6"/>
                                  <path d="M7 13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13Z" fill="#8EA0B6"/>
                                  <path d="M11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13Z" fill="#8EA0B6"/>
                                  <path d="M15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13Z" fill="#8EA0B6"/>
                                  <path d="M3 17C3 16.4477 3.44772 16 4 16C4.55228 16 5 16.4477 5 17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17Z" fill="#8EA0B6"/>
                                  <path d="M7 17C7 16.4477 7.44772 16 8 16C8.55228 16 9 16.4477 9 17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17Z" fill="#8EA0B6"/>
                                  <path d="M11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17Z" fill="#8EA0B6"/>
                                  <path d="M15 17C15 16.4477 15.4477 16 16 16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17Z" fill="#8EA0B6"/>
                              </svg>
                              <h6 className="col-12 mt-1 f-400 l-20 text-grey">Day</h6>
                          </div>
                          <div className={`d-flex d-flex-column d-align-center ${styles["small-calendar-tab"]} ${smallTab == "year" && styles["dark"]}`} value="year" onClick={smallTabHandler}>
                              <svg width="20" height="22" viewBox="0 0 20 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M1 8H19V10H1V8Z" fill="#8EA0B6"/>
                                  <path fillRule="evenodd" clipRule="evenodd" d="M5 0C5.55228 0 6 0.447715 6 1V2H4V1C4 0.447715 4.44772 0 5 0ZM5 4C5.55228 4 6 3.55228 6 3V2H14V3C14 3.55228 14.4477 4 15 4H5ZM5 4H3C2.44772 4 2 4.44772 2 5V19C2 19.5523 2.44772 20 3 20H17C17.5523 20 18 19.5523 18 19V5C18 4.44772 17.5523 4 17 4H15C15.5523 4 16 3.55228 16 3V2H17C18.6569 2 20 3.34315 20 5V19C20 20.6569 18.6569 22 17 22H3C1.34315 22 0 20.6569 0 19V5C0 3.34315 1.34315 2 3 2H4V3C4 3.55228 4.44772 4 5 4ZM16 2H14V1C14 0.447715 14.4477 0 15 0C15.5523 0 16 0.447715 16 1V2Z" fill="#8EA0B6"/>
                                  <path d="M3 13C3 12.4477 3.44772 12 4 12C4.55228 12 5 12.4477 5 13C5 13.5523 4.55228 14 4 14C3.44772 14 3 13.5523 3 13Z" fill="#8EA0B6"/>
                                  <path d="M7 13C7 12.4477 7.44772 12 8 12C8.55228 12 9 12.4477 9 13C9 13.5523 8.55228 14 8 14C7.44772 14 7 13.5523 7 13Z" fill="#8EA0B6"/>
                                  <path d="M11 13C11 12.4477 11.4477 12 12 12C12.5523 12 13 12.4477 13 13C13 13.5523 12.5523 14 12 14C11.4477 14 11 13.5523 11 13Z" fill="#8EA0B6"/>
                                  <path d="M15 13C15 12.4477 15.4477 12 16 12C16.5523 12 17 12.4477 17 13C17 13.5523 16.5523 14 16 14C15.4477 14 15 13.5523 15 13Z" fill="#8EA0B6"/>
                                  <path d="M3 17C3 16.4477 3.44772 16 4 16C4.55228 16 5 16.4477 5 17C5 17.5523 4.55228 18 4 18C3.44772 18 3 17.5523 3 17Z" fill="#8EA0B6"/>
                                  <path d="M7 17C7 16.4477 7.44772 16 8 16C8.55228 16 9 16.4477 9 17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17Z" fill="#8EA0B6"/>
                                  <path d="M11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17Z" fill="#8EA0B6"/>
                                  <path d="M15 17C15 16.4477 15.4477 16 16 16C16.5523 16 17 16.4477 17 17C17 17.5523 16.5523 18 16 18C15.4477 18 15 17.5523 15 17Z" fill="#8EA0B6"/>
                              </svg>
                              <h6 className="col-12 mt-1 f-400 l-20 text-grey">Year</h6>
                          </div>
                      </div>
                  </div>}
                  {smallTab == "week" && <>
                      <SmallWeek week={currentWeek} />
                      <h6 className="f-400 l-21 text-grey col-3 mt-2 pl-3">Today</h6>
                      <div className="mt-1 col-12 d-flex d-flex-wrap d-justify-space-between pl-3 pr-3 ">
                          <SmallEvent></SmallEvent>
                          <SmallEvent></SmallEvent>
                      </div>
                      <h6 className="f-400 l-21 text-grey col-3  pl-3">Tomorrow</h6>
                      <div className="mt-1 col-12 d-flex d-flex-wrap d-justify-space-between pl-3 pr-3 pb-5">
                          <SmallEvent></SmallEvent>
                      </div>
                  </>}
                  {smallTab == "day" && <>
                      <div className="col-12">
                          <SmallDay day={currentDay}></SmallDay>
                      </div>
                      <h6 className="f-400 l-21 text-grey col-3 mt-2 pl-3">All Today</h6>
                      <div className="mt-1 col-12 d-flex d-flex-wrap d-justify-space-between pl-3 pr-3 pb-2">
                          <h6 className="f-400 l-21 text-grey col-3 mt-2">09:00 AM</h6>
                          <SmallEvent></SmallEvent>
                          <h6 className="f-400 l-21 text-grey col-3 ">11:00 AM</h6>
                          <SmallEvent></SmallEvent>
                          <h6 className="f-400 l-21 text-grey col-3 ">03:30 AM</h6>
                          <SmallEvent></SmallEvent>
                      </div>
                  </>}
                  {smallTab == "month" && <>
                      <div className={`d-grid d-grid-cols-7 mt-3 bg-light-grey pl-3 pr-3 pt-1 pb-1 ${styles["small__calendar__header"]}`}>
                      <div className="d-flex d-justify-center z-index-1"><span className={`${dayjs(currentDay).format('ddd') == 'Sun' ? " ":"op-03"}`}>Sun</span></div>
                          <div className="d-flex d-justify-center z-index-1"><span className={`${dayjs(currentDay).format('ddd') == 'Mon' ? " ":"op-03"}`}>Mon</span></div>
                          <div className="d-flex d-justify-center z-index-1"><span className={`${dayjs(currentDay).format('ddd') == 'Tue' ? "":"op-03"}`}>Tue</span></div>
                          <div className="d-flex d-justify-center z-index-1"><span className={`${dayjs(currentDay).format('ddd') == 'Wed' ? " ":"op-03"}`}>Wed</span></div>
                          <div className="d-flex d-justify-center z-index-1"><span className={`${dayjs(currentDay).format('ddd') == 'Thu' ? " ":"op-03"}`}>Thu</span></div>
                          <div className="d-flex d-justify-center z-index-1"><span className={`${dayjs(currentDay).format('ddd') == 'Fri' ? " ":"op-03"}`}>Fri</span></div>
                          <div className="d-flex d-justify-center z-index-1"><span className={`${dayjs(currentDay).format('ddd') == 'Sat' ? " ":"op-03"}`}>Sat</span></div>
                      </div>
                      <MonthSmall month={currentMonth} selected={currentDay}/>
                      <div className="mt-3 col-12 d-flex d-flex-wrap d-justify-space-between pl-3 pr-3 pb-2">
                          <h6 className="f-400 l-21 text-secobdary col-12 text-light mb-1">Today :</h6>
                          <div className="col-12">
                              <SmallEvent type="1"></SmallEvent>
                              <SmallEvent type="1"></SmallEvent>
                              <SmallEvent type="1"></SmallEvent>
                          </div>
                      </div>
                  </>
                  }
                  {smallTab == "year" && <>
                      <MonthInYear month={currentYear} />
                  </>}
              </div>
              
          </div>
          {blockOutModal && <BlockoutModal handler={blockOutModalHandler}/>}
        </div>
      </Base>
    </Fragment>
  )
}
