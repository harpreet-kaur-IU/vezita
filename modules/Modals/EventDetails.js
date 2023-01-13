import React from 'react'
import styles from '../css/EventDetails.module.css'
const EventDetails = (props) => {
  return (
        <div className={`p-5 ${styles["wrapper"]}`}>
            <div className={`d-flex d-justify-space-between d-align-center`}>
                <h2 className='l-22 f-600 text-secondary'>Event Details</h2>
                <img onClick={props.handler} className='cursor-pointer' src='cross-grey.png'></img>
            </div>
            <div className={`mt-5 d-flex d-flex-column`}>
                <h3 className='f-28 f-500'>Video Call with Alex Paulmander</h3>
                <h4 className='mt-3 l-28 f-500 text-primary'>Thursday, 23rd Feb, 2022</h4>
                <h5 className='mt-2 l-22 f-500 text-primary'>12:30PM - 01:00PM</h5>
                <div className={`mt-5 col-12 d-flex gap-3`}>
                    <div className={`col-6 d-flex d-flex-column gap-1`}>
                        <h5 className='l-22 f-600 text-secondary'>Doctor</h5>
                        <div className={`d-flex d-align-center gap-1 ${styles["user-details"]}`}>
                            <img src=''></img>
                            <h4 className='l-22 f-500 text-grey-3'>Dr. Jane Fernandes</h4>
                        </div>
                    </div>
                    <div className={`col-6 d-flex d-flex-column gap-1`}>
                        <h5 className='l-22 f-600 text-secondary'>Patient</h5>
                        <div className={`d-flex d-align-center gap-1 ${styles["user-details"]}`}>
                            <img src=''></img>
                            <h4 className='l-22 f-500 text-grey-3'>Dr. Jane Fernandes</h4>
                        </div>
                    </div>
                </div>
                <div className={`mt-6 mb-5 ${styles["divider"]}`}></div>
                {props.type == "video" &&
                    <div className={`cursor-pointer d-flex d-justify-center d-align-center gap-2 ${styles["button"]}`}>
                        <img src='video-app.png'></img>
                        <h6 className='l-22 f-600 text-white'>START VIDEO CALL</h6>
                    </div>
                }
                {props.type == "reschedule" &&
                    <div className={`cursor-pointer d-flex d-justify-center d-align-center gap-2 ${styles["button-re"]}`}>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15 13.75C15 13.3358 15.3358 13 15.75 13C16.1642 13 16.5 13.3358 16.5 13.75V15.82L18.2905 16.8547C18.6493 17.062 18.7722 17.5208 18.5651 17.8798C18.3579 18.2389 17.8989 18.3621 17.5398 18.1549L15 16.69V13.75ZM19 8H5V19H9.67C9.24 18.09 9 17.07 9 16C9 14.1435 9.7375 12.363 11.0503 11.0503C12.363 9.7375 14.1435 9 16 9C17.07 9 18.09 9.24 19 9.67V8ZM5 21C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V5C3 3.89 3.89 3 5 3H6V2C6 1.44772 6.44772 1 7 1C7.55228 1 8 1.44772 8 2V3H16V2C16 1.44772 16.4477 1 17 1C17.5523 1 18 1.44772 18 2V3H19C19.5304 3 20.0391 3.21071 20.4142 3.58579C20.7893 3.96086 21 4.46957 21 5V11.1C22.24 12.36 23 14.09 23 16C23 17.8565 22.2625 19.637 20.9497 20.9497C19.637 22.2625 17.8565 23 16 23C14.09 23 12.36 22.24 11.1 21H5ZM16 11.15C14.7137 11.15 13.4801 11.661 12.5705 12.5705C11.661 13.4801 11.15 14.7137 11.15 16C11.15 18.68 13.32 20.85 16 20.85C16.6369 20.85 17.2676 20.7246 17.856 20.4808C18.4444 20.2371 18.9791 19.8798 19.4295 19.4295C19.8798 18.9791 20.2371 18.4444 20.4808 17.856C20.7246 17.2676 20.85 16.6369 20.85 16C20.85 13.32 18.68 11.15 16 11.15Z" fill="white"/>
                        </svg>
                        <h6 className='l-22 f-600 text-white'>RESCHEDULE</h6>
                    </div>
                }
            </div>
        </div>
  )
}

export default EventDetails