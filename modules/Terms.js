import React,{useEffect, useState} from 'react'
import Header from './Header'
import style from './css/HelpAndSupport.module.css'
import TCContent from './TCContent'
import { getVezitaOnBoardFromCookie } from '../auth/userCookies'
const Terms = () => {
    const [activeTab, setActiveTab] = useState("tab1");
    const handleClick = (e) =>{
        setActiveTab(e.target.id);
    }
    const JWTToken = getVezitaOnBoardFromCookie();
  
  return (
    <>
        <Header title="Terms & conditions"></Header>
        <div className={`d-flex ${style["tc-wrapper"]}`}>
            <div className={`col-3 d-flex d-flex-column gap-5 ${style["sidebar-wrapper"]}`}>
                <h3 onClick={handleClick} id="tab1" className={`cursor-pointer f-500 l-28 text-secondary ${activeTab === "tab1" ? style["active"] : ""}`}>Scope of Services</h3>
                <h3 onClick={handleClick} id="tab2" className={`cursor-pointer f-500 l-28 text-secondary ${activeTab === "tab2" ? style["active"] : ""}`}>Acknowledgment Statement</h3>
                <h3 onClick={handleClick} id="tab3" className={`cursor-pointer f-500 l-28 text-secondary ${activeTab === "tab3" ? style["active"] : ""}`}>Standards of Conduct Declaration</h3> 
                <h3 onClick={handleClick} id="tab4" className={`cursor-pointer f-500 l-28 text-secondary ${activeTab === "tab4" ? style["active"] : ""}`}>Time of Performance</h3>
                <h3 onClick={handleClick} id="tab5" className={`cursor-pointer f-500 l-28 text-secondary ${activeTab === "tab5" ? style["active"] : ""}`}>Compensation</h3>
                <h3 onClick={handleClick} id="tab6" className={`cursor-pointer f-500 l-28 text-secondary ${activeTab === "tab6" ? style["active"] : ""}`}>Standards of Conduct Declaration</h3>
                <h3 onClick={handleClick} id="tab7" className={`cursor-pointer f-500 l-28 text-secondary ${activeTab === "tab7" ? style["active"] : ""}`}>Notices</h3>
            </div>
            <div className='col-7'>
                {activeTab === "tab1" && 
                    <TCContent></TCContent>
                }
            </div>
        </div>
    </>
  )
}

export default Terms