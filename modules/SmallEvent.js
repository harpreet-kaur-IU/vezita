import {useState} from 'react'
import styles from './css/Calendar.module.css';
import { useRouter } from 'next/router';
export default function SmallEvent() {
    const router = useRouter();
   const [tab, setTab] = useState(0)
   const handler = () => {
    setTab(1)
   }
   const tabHandler = () => {
    setTab(0)
   }
   const eventHandler = () => {
        router.push('/calendar/event-detail')
   }
    return (
        <>
        {tab==0 && <><div className={`${styles["event"]} d-flex d-flex-wrap d-align-center mb-2 `} onClick={handler}>
            <h6 className="col-12 f-400 l-21">Pick up of bus ( F-50 Raptor Bus )</h6>
            <div className="d-flex d-align-center mt-1">
                <svg width="12" height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5.60997 15.7913C5.69691 15.9217 5.84328 16 6 16C6.15672 16 6.30309 15.9217 6.39003 15.7913C7.49937 14.1273 9.13334 12.0722 10.272 9.98222C11.1824 8.31109 11.625 6.88581 11.625 5.625C11.625 2.52338 9.10162 0 6 0C2.89838 0 0.375 2.52338 0.375 5.625C0.375 6.88581 0.817594 8.31109 1.72803 9.98222C2.86581 12.0707 4.50291 14.1307 5.60997 15.7913ZM6 0.9375C8.58469 0.9375 10.6875 3.04031 10.6875 5.625C10.6875 6.72512 10.2823 8.00369 9.44872 9.53372C8.46725 11.3353 7.06669 13.1627 6 14.699C4.93347 13.1629 3.53281 11.3353 2.55128 9.53372C1.71772 8.00369 1.3125 6.72512 1.3125 5.625C1.3125 3.04031 3.41531 0.9375 6 0.9375V0.9375Z" fill="#7D7D7D"/>
                    <path d="M6 8.4375C7.55081 8.4375 8.8125 7.17581 8.8125 5.625C8.8125 4.07419 7.55081 2.8125 6 2.8125C4.44919 2.8125 3.1875 4.07419 3.1875 5.625C3.1875 7.17581 4.44919 8.4375 6 8.4375ZM6 3.75C7.03387 3.75 7.875 4.59113 7.875 5.625C7.875 6.65887 7.03387 7.5 6 7.5C4.96613 7.5 4.125 6.65887 4.125 5.625C4.125 4.59113 4.96613 3.75 6 3.75Z" fill="#7D7D7D"/>
                </svg>
                <span className="f-400 font-12 l-13 ml-1 text-light op-07">298, Boston Street, Northern University</span>

            </div>
        </div>
        </>}
        {tab==1 && <div className={`${styles["event-2"]} mb-2 d-flex d-flex-wrap d-align-center`} onClick={tabHandler}>
            <div className='col-5 d-flex d-flex-wrap d-justify-center'>
                <img src="cab.png" alt="cab-image" />
                <span className='col-12 d-flex d-flex-wrap d-justify-center f-600 font-12'>Vehicle Name</span>
            </div>
            <div className='col-7 d-flex d-flex-wrap'>
                <span className='col-12 f-400 font-10 l-15'>Starts at 10:00 am</span>
                <h6 className='f-500 l-21'>Peter Davidson</h6>
                <div className='col-12 d-flex d-align-center mt-1'>
                    <svg width="13" height="11" viewBox="0 0 13 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.4">
                        <path d="M5.6875 10.5C5.6875 10.5 4.875 10.5 4.875 9.66667C4.875 8.83333 5.6875 6.33333 8.9375 6.33333C12.1875 6.33333 13 8.83333 13 9.66667C13 10.5 12.1875 10.5 12.1875 10.5H5.6875ZM8.9375 5.5C9.58397 5.5 10.204 5.23661 10.6611 4.76777C11.1182 4.29893 11.375 3.66304 11.375 3C11.375 2.33696 11.1182 1.70107 10.6611 1.23223C10.204 0.763392 9.58397 0.5 8.9375 0.5C8.29104 0.5 7.67105 0.763392 7.21393 1.23223C6.75681 1.70107 6.5 2.33696 6.5 3C6.5 3.66304 6.75681 4.29893 7.21393 4.76777C7.67105 5.23661 8.29104 5.5 8.9375 5.5Z" fill="black"/>
                        <path fillRule="evenodd" clipRule="evenodd" d="M4.238 10.5C4.11755 10.2399 4.05748 9.95465 4.0625 9.6667C4.0625 8.53753 4.615 7.37503 5.6355 6.5667C5.12614 6.40573 4.59546 6.32701 4.0625 6.33336C0.8125 6.33336 0 8.83336 0 9.6667C0 10.5 0.8125 10.5 0.8125 10.5H4.238Z" fill="black"/>
                        <path d="M3.65625 5.49992C4.19497 5.49992 4.71163 5.28043 5.09256 4.88972C5.47349 4.49902 5.6875 3.96912 5.6875 3.41659C5.6875 2.86405 5.47349 2.33415 5.09256 1.94345C4.71163 1.55275 4.19497 1.33325 3.65625 1.33325C3.11753 1.33325 2.60087 1.55275 2.21994 1.94345C1.83901 2.33415 1.625 2.86405 1.625 3.41659C1.625 3.96912 1.83901 4.49902 2.21994 4.88972C2.60087 5.28043 3.11753 5.49992 3.65625 5.49992Z" fill="black"/>
                        </g>
                    </svg>
                    <span className='f-400 font-10 l-15 text-light ml-1 mr-1'>6</span>
                    <svg width="2" height="3" viewBox="0 0 2 3" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="1" cy="1.5" r="1" fill="black" fillOpacity="0.15"/>
                    </svg>
                    <span className='f-400 font-10 l-15 text-light ml-1'>Independance day</span>
                </div>
                <span className='mt-1 col-12 f-400 font-12 l-16'>Start Date : 21/06/2022</span>
                <span className='col-12 f-400 font-12 l-16 mt-04'>End Date : 21/06/2022</span>
                <div className={styles["event-arrow"]} onClick={eventHandler}>
                    <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M0.292787 9.70692C0.105316 9.51939 0 9.26508 0 8.99992C0 8.73475 0.105316 8.48045 0.292787 8.29292L3.58579 4.99992L0.292787 1.70692C0.110629 1.51832 0.00983372 1.26571 0.0121121 1.00352C0.0143906 0.741321 0.11956 0.490509 0.304968 0.305101C0.490376 0.119692 0.741189 0.0145233 1.00339 0.0122448C1.26558 0.00996641 1.51818 0.110761 1.70679 0.292919L5.70679 4.29292C5.89426 4.48045 5.99957 4.73475 5.99957 4.99992C5.99957 5.26508 5.89426 5.51939 5.70679 5.70692L1.70679 9.70692C1.51926 9.89439 1.26495 9.99971 0.999786 9.99971C0.734622 9.99971 0.480314 9.89439 0.292787 9.70692Z" fill="#18181B"/>
                    </svg>
                </div>
            </div>
        </div>
        }
        </>
    )
    
    
}
