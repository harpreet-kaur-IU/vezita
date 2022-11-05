import React, { useEffect, useState } from 'react'
import styles from './css/AllBookings.module.css'
import BookingTable from './BookingTable'
import FiltersTab from './FiltersTab';
import Header from './Header';
const AllBookings = () => {
    const [activeTab, setActiveTab] = useState("tab1");

    const handleClick = (e) =>{
        setActiveTab(e.target.id);
    }

  return (
    <>
        <Header title="Bookings"></Header>
        <div className={`${styles["wrapper"]}`}>
            <div className={`d-flex d-align-center d-justify-space-between `}>
               <div className={`d-flex ${styles["tabs-wrapper"]}`}>
                    <h3 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab1" ? styles["active"] : ""} `}>All</h3>
                    <h3 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab2" ? styles["active"] : ""}`} >Today</h3>
                    <h3 onClick={handleClick} id="tab3" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab3" ? styles["active"] : ""}`} >Upcomings</h3>
               </div>
               <div className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["add-booking"]}`}>
                    <img src='plus-white.png'></img>
                    <h5 className='f-500 l-22 text-white'>Add new booking</h5>
               </div>
            </div>
            <FiltersTab></FiltersTab>
            {activeTab === "tab1" && 
                <BookingTable title="All"></BookingTable>
            }
            {activeTab === "tab2" && 
                <BookingTable title="Today"></BookingTable>
            }
            {activeTab === "tab3" && 
                <BookingTable title="Upcomings"></BookingTable>
            }
        </div>
    </>
    
  )
}

export default AllBookings