import React,{useRef,useState} from 'react'
import styles from '../modules/css/subscription.module.css'
import BillPlan from '../modules/BillPlan';
import PlanSummary from '../modules/PlanSummary';
export default function Subscription() {
    const billTab = useRef();
    const [outerTab, setOuterTab] = useState(0);
    const [tab,setTab] = useState("Bill Yearly")
    const tabHandler = (e) => {
      const ele = billTab.current.querySelectorAll("h5");
      ele.forEach(element =>{
        element.classList.remove(styles.active)
      })
      e.currentTarget.classList.add(styles.active);
      setTab(e.target.outerText)
    }
    const outerTabHandler = () => {
      setOuterTab(prev => !prev)
    }
  return (
    <div>
      <div className='col-4 offset-4 mt-60 d-flex d-flex-wrap d-justify-center '>
        <img src="logo-dark.png" alt="logo" className='col-4'/>
        {outerTab == 0 && 
        <>
          <h2 className='col-12 f-600 text-grey-2 l-32 mt-10 d-flex d-justify-center'>Pick your plan</h2>
          <div ref={billTab} className={`${styles["tab-wrapper"]} mt-5 d-flex d-align-center  d-justify-center`}>
              <h5 className='f-500 l-22 text-grey-3 cursor-pointer' onClick={tabHandler}>Bill Monthly</h5>
              <h5 className={`f-500 l-22 text-grey-3 ml-1 cursor-pointer ${styles["active"]}`} onClick={tabHandler}>Bill Yearly</h5>
          </div>
          {tab == "Bill Yearly" && <BillPlan type="1" handler={outerTabHandler}></BillPlan>}
          {tab == "Bill Monthly" && <BillPlan type="0" handler={outerTabHandler}></BillPlan>}
        </>}
      </div>
      <div className='col-5 offset-35 d-flex d-justify-center d-flex-wrap'>
          {outerTab == 1 && 
          <>
            <PlanSummary handler={outerTabHandler}></PlanSummary>
            </>
          }
      </div>
    </div>
  )
}
