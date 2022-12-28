import React from 'react'
import styles from './css/Modal.module.css'
export default function BlockoutModal(props) {
  return (
    <div className={styles["modal-container-2"]}>
        <div className={`${styles["blockout"]}`}>
            <div className={styles["circle"]} onClick={props.handler}>
                <svg width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <line x1="11.793" y1="0.707107" x2="0.706969" y2="11.7932" stroke="#99B5B7" stroke-width="2"/>
                    <line y1="-1" x2="15.6781" y2="-1" transform="matrix(0.707107 0.707107 0.707107 -0.707107 1.89844 0)" stroke="#99B5B7" stroke-width="2"/>
                </svg>
            </div>
            <h2 className='text-secondary f-500 l-40'>Blockouts</h2>
            <h6 className='f-500 l-24 mt-1 mb-1 text-light'>Reason for blockout</h6>
            <input type="text"/>
            <div className='d-flex d-align-center mt-2 gap-2'>
                <div className='col-6'>
                    <h6 className='f-500 l-24 mb-1 text-light'>From</h6>
                    <input type="date"/>
                </div>
                <div className='col-6'>
                    <h6 className='f-500 l-24 mb-1 text-light'>To</h6>
                    <input type="date"/>
                </div>
            </div>
            <h6 className='f-500 l-24 mt-2 mb-1 text-light'>Description</h6>
            <textarea rows="2" />
            <div className='d-flex d-align-center d-justify-center mt-2 gap-1'>
                <button className='btn col-4  btn-secondary-bg'>Confirm</button>
                <button className='btn col-4  btn-red'>Cancel</button>
            </div>
        </div>
    </div>
  )
}
