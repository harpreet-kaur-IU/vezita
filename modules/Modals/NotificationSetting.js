import React from 'react'
import style from '../css/ChangePassword.module.css'

const NotificationSetting = (props) => {
  return (
    <div className={`${style["noti-wrapper"]}`}>
        <div className='d-flex d-align-center d-justify-space-between'>
            <h2>Notification Setting</h2>
            <img onClick={props.handler} className='cursor-pointer' src='cross-grey.png'></img>
        </div>

        <form className='d-flex d-flex-column'>
            <h3 className='mt-5 f-500 l-28 text-secondary'>Email notification</h3>
            <div className='d-flex d-flex-column gap-1'>
                <div className='col-12 d-flex d-justify-space-between mt-5'>
                    <h5 className='text-secondary f-400 l-22'>New appointment</h5>
                    <div className='p-relative'>
                        <div className={`d-flex d-justify-center ${style["toggle-wrapper"]}`}>
                            <label className={`${style["rectangle"]}`}>
                                <input type="checkbox"/> 
                                <span className={`${style["toggle"]}`}></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='col-12 d-flex d-justify-space-between mt-5'>
                    <h5 className='text-secondary f-400 l-22'>Upcoming appointment</h5>
                    <div className='p-relative'>
                        <div className={`d-flex d-justify-center ${style["toggle-wrapper"]}`}>
                            <label className={`${style["rectangle"]}`}>
                                <input type="checkbox"/> 
                                <span className={`${style["toggle"]}`}></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='col-12 d-flex d-justify-space-between mt-5'>
                    <h5 className='text-secondary f-400 l-22'>Payment</h5>
                    <div className='p-relative'>
                        <div className={`d-flex d-justify-center ${style["toggle-wrapper"]}`}>
                            <label className={`${style["rectangle"]}`}>
                                <input type="checkbox"/> 
                                <span className={`${style["toggle"]}`}></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='mt-5 f-500 l-28 text-secondary'>Website notification</h3>
            <div className='d-flex d-flex-column gap-1'>
                <div className='col-12 d-flex d-justify-space-between mt-5'>
                    <h5 className='text-secondary f-400 l-22'>New appointment</h5>
                    <div className='p-relative'>
                        <div className={`d-flex d-justify-center ${style["toggle-wrapper"]}`}>
                            <label className={`${style["rectangle"]}`}>
                                <input type="checkbox"/> 
                                <span className={`${style["toggle"]}`}></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='col-12 d-flex d-justify-space-between mt-5'>
                    <h5 className='text-secondary f-400 l-22'>Upcoming appointment</h5>
                    <div className='p-relative'>
                        <div className={`d-flex d-justify-center ${style["toggle-wrapper"]}`}>
                            <label className={`${style["rectangle"]}`}>
                                <input type="checkbox"/> 
                                <span className={`${style["toggle"]}`}></span>
                            </label>
                        </div>
                    </div>
                </div>
                <div className='col-12 d-flex d-justify-space-between mt-5'>
                    <h5 className='text-secondary f-400 l-22'>Payment</h5>
                    <div className='p-relative'>
                        <div className={`d-flex d-justify-center ${style["toggle-wrapper"]}`}>
                            <label className={`${style["rectangle"]}`}>
                                <input type="checkbox"/> 
                                <span className={`${style["toggle"]}`}></span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </div>
  )
}

export default NotificationSetting