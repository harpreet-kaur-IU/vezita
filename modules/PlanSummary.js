import React from 'react'
import styles from './css/subscription.module.css'

export default function PlanSummary(props) {
  return (
    <div className={`${styles["summary-wrapper"]} col-12 d-flex d-flex-wrap`}>
      <div className='col-12 d-flex d-align-center mt-7 d-justify-space-between '>
        <h2 className='f-600 l-32 text-grey-2'>Your plan</h2>
        <h5 onClick={props.handler} className='cursor-pointer f-500 l-22 text-primary'>Change plan</h5>
      </div>
      <div className={`${styles["plan-wrapper"]} col-12 mt-7 mb-2 bg-primary `}>
        <div className={`${styles["summary-detail"]} d-flex  d-justify-space-between`}>
          <div>
            <h2 className='f-600 l-40 text-blue-1'>Vezita Pro Yearly</h2>
            <h4 className='f-500 l-26 text-blue-1 mt-2'>Individual doctor</h4>
          </div>
          <div>
            <div className='btn text-green-4 btn-light-green p-0 pt-1 pb-1 pl-3 pr-3 rounded-4'>Free for 6 months</div>
            <span></span>
          </div>
        </div>
        <div className='d-flex d-align-center mt-6 d-justify-space-between'>
          <h4 className='f-600 l-22 text-white'>Start billing date</h4>
          <h4 className='f-600 l-22 text-white'>Today, 12-02-2022</h4>
        </div>
        <div className='d-flex d-align-center mt-3 d-justify-space-between'>
          <h5 className='f-400 l-22 text-blue-3'>Subscription ends on</h5>
          <h5 className='f-400 l-22 text-blue-3'>12-08-2022</h5>
        </div>
        <ul className='mb-2'>
          <li className='f-400 h5 l-22 mt-5 text-white'>You will be charged $200/ year after your trial</li>
          <li className='f-400 h5 l-22 mt-3 text-white'>You won’t be charged until 12-8-2022</li>
          <li className='f-400 h5 l-22 mt-3 text-white'>Cancel anytime. Offer terms apply</li>
          <li className='f-400 h5 l-22 mt-3 text-white'>We’ll remind you 7 days before you get charged</li>
        </ul>
        
      </div>
      <form className={`${styles["plan-summary-form"]} col-12`}>
          <label className='d-flex'>Card Number</label>
          <input type="number" placeholder='Enter you card number'/>
          <div className='d-flex gap-3'>
            <div className='col-6'>
              <label className='d-flex'>Expiry Date</label>
              <input type="number" placeholder='Enter expiry date'/>
            </div>
            <div className='col-6'>
              <label className='d-flex'>Security Code</label>
              <input type="number" placeholder='Enter security code'/>
            </div>
          </div>
          <label className='d-flex'>Postal Code</label>
          <input type="number" placeholder='Enter postal code'/>
          <button className='btn col-12 mt-7 btn-primary'>Start my subscription</button>
        </form>
    </div>
  )
}
