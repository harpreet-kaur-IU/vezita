import React, { useState } from 'react'
import styles from './css/AllBookings.module.css'
import FiltersTab from './FiltersTab';
import AllPatientTable from './AllPatientTable';
import Header from './Header';
import { useRouter } from 'next/router';
const AllPatients = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const router = useRouter();
    const handleClick = (e) =>{
        setActiveTab(e.target.id);
    }
    const addHandler = () =>{
        router.push("/addnewpatient")
    }
  return (
    <>
        <Header title="My Patients"></Header>
        <div className={`${styles["wrapper"]}`}>
            <div className={`d-flex d-align-center d-justify-space-between`}>
                <div className={`d-flex ${styles["tabs-wrapper"]}`}>
                    <h3 onClick={handleClick} id="tab1" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab1" ? styles["active"] : ""} `}>All</h3>
                    <h3 onClick={handleClick} id="tab2" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab2" ? styles["active"] : ""}`} >Regular</h3>
                    <h3 onClick={handleClick} id="tab3" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab3" ? styles["active"] : ""}`} >New</h3>
                    <h3 onClick={handleClick} id="tab3" className={`cursor-pointer l-28 f-500 text-grey-3 ${activeTab === "tab4" ? styles["active"] : ""}`} >No Show</h3>
                </div>
                <div className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["add-booking"]}`}>
                    <img src='plus-white.png'></img>
                    <h5 onClick={addHandler} className='f-500 l-22 text-white'>Add new Patient</h5>
                </div>
            </div>
            <FiltersTab></FiltersTab>
            {activeTab === "tab1" && 
                <AllPatientTable></AllPatientTable>
            }
            {activeTab === "tab2" && 
                <AllPatientTable></AllPatientTable>
            }
            {activeTab === "tab3" && 
                <AllPatientTable></AllPatientTable>
            }
            {activeTab === "tab4" && 
                <AllPatientTable></AllPatientTable>
            }
        </div>
    </>
  )
}

export default AllPatients