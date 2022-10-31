import React from 'react'
import styles from './css/subscription.module.css'
export default function BillPlan(props) {
  return (
    <div className={`${styles["plan-wrapper"]} mt-7 col-12`}>
        {props.type == 0 && <div className={`${styles["price"]}`}>
            <h1 className='f-600 l-40 text-blue-1'>$24/per month</h1>
        </div>}
        {props.type == 1 && 
        <div className={`${styles["price"]} d-flex d-align-center d-justify-space-between`}>
            <div>
                <h2 className='f-600 l-40 text-blue-1'>$244/per year</h2>
                <h1 className='f-600 l-40 text-blue-1 mt-4'>$240/per year</h1>
            </div>
            <img src="save.png" alt="offer image"/>
        </div>
        }
        <h4 className='f-600 l-26 text-white mt-5'>Benefits</h4>
        <div className='d-flex d-align-center mt-4'>
            <img src="tick.png" alt="checked image"/>
            <h5 className='f-400 l-22 text-white ml-2'>Online appointment booking for your patients</h5>
        </div>
        <div className='d-flex d-align-center mt-4'>
            <img src="tick.png" alt="checked image"/>
            <h5 className='f-400 l-22 text-white ml-2'>Tool for reducing missed appointments</h5>
        </div>
        <div className='d-flex d-align-center mt-4'>
            <img src="tick.png" alt="checked image"/>
            <h5 className='f-400 l-22 text-white ml-2'>Flexible and tailor-made agenda</h5>
        </div>
        <div className='d-flex d-align-center mt-4'>
            <img src="tick.png" alt="checked image"/>
            <h5 className='f-400 l-22 text-white ml-2'>Online sharing of prescriptions and documents</h5>
        </div>
        <div className='d-flex d-align-center mt-4'>
            <img src="tick.png" alt="checked image"/>
            <h5 className='f-400 l-22 text-white ml-2'>Online secure patient account</h5>
        </div>
        <div className='d-flex d-align-center mt-4'>
            <img src="tick.png" alt="checked image"/>
            <h5 className='f-400 l-22 text-white ml-2'>Marketing your organization</h5>
        </div>
        <div className='d-flex d-align-center mt-4'>
            <img src="tick.png" alt="checked image"/>
            <h5 className='f-400 l-22 text-white ml-2'>Secure video exchange</h5>
        </div>
        <div className='d-flex d-align-center mt-4'>
            <img src="tick.png" alt="checked image"/>
            <h5 className='f-400 l-22 text-white ml-2'>Integrated payment system</h5>
        </div>
        <button className='btn btn-white offset-4 col-4 mt-8' onClick={props.handler}>Start your free trial</button>
    </div>
  )
}
