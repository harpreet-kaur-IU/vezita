
import React from 'react'
import styles from './css/Chat.module.css'
const Chat = () => {
  return (
    <div className={`${styles["wrapper"]} d-flex d-flex-column rounded-16 bg-white`}>
        <div className={` d-flex d-flex-row d-align-center gap-5`}>
            {/* <Avatar/> */}
            <div className={`d-flex d-flex-column d-align-start gap-1`}>
                <h3 className={` f-500 l-28 text-darker`}>Jane Jamel</h3>
                <h4 className={` f-500 l-26 text-dark-grey`}>Last active 12:34 PM</h4>
            </div>
        </div>
        <div className={`${styles["msg-wrapper"]} col-12 d-flex d-flex-column gap-6 h-538 mt-2 mb-5`}>
            <h4 className={`${styles['r-msg']} d-flex d-align-center d-justify-center w-fit-content self-start pl-4 pr-4 pt-3 pb-3 bg-light-grey f-500 l-26 text-darker`}>sdfvfgvfggrhrg</h4>
            <h4 className={`${styles['s-msg']} d-flex d-align-center d-justify-center w-fit-content self-end pl-4 pr-4 pt-3 pb-3 bg-secondary f-500 l-26 text-white`}>I have arrived here at your requested location waiting for the clients to arrive and make a deal.</h4>
        </div>
        <div className={`col-12 d-flex d-flex-row d-align-center d-justify-space-between pt-3 pb-3 pl-4 pr-4 bg-light-grey rounded-100`}>
            <input className={`${styles["input"]} col-10 border-none bg-light-grey h-fit-content`} type='text' placeholder='Message'/>
            <div className={`d-flex d-flex-row d-align-center gap-6 `}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.0344 7.71564L14.7844 2.46564C14.6415 2.32635 14.4495 2.24889 14.25 2.25001H5.25C4.85218 2.25001 4.47064 2.40805 4.18934 2.68935C3.90804 2.97066 3.75 3.35219 3.75 3.75001V20.25C3.75 20.6478 3.90804 21.0294 4.18934 21.3107C4.47064 21.592 4.85218 21.75 5.25 21.75H18.75C19.1478 21.75 19.5294 21.592 19.8107 21.3107C20.092 21.0294 20.25 20.6478 20.25 20.25V8.25001C20.2511 8.05048 20.1737 7.85851 20.0344 7.71564ZM14.25 15H12.75V16.5C12.75 16.6989 12.671 16.8897 12.5303 17.0303C12.3897 17.171 12.1989 17.25 12 17.25C11.8011 17.25 11.6103 17.171 11.4697 17.0303C11.329 16.8897 11.25 16.6989 11.25 16.5V15H9.75C9.55109 15 9.36032 14.921 9.21967 14.7803C9.07902 14.6397 9 14.4489 9 14.25C9 14.0511 9.07902 13.8603 9.21967 13.7197C9.36032 13.579 9.55109 13.5 9.75 13.5H11.25V12C11.25 11.8011 11.329 11.6103 11.4697 11.4697C11.6103 11.329 11.8011 11.25 12 11.25C12.1989 11.25 12.3897 11.329 12.5303 11.4697C12.671 11.6103 12.75 11.8011 12.75 12V13.5H14.25C14.4489 13.5 14.6397 13.579 14.7803 13.7197C14.921 13.8603 15 14.0511 15 14.25C15 14.4489 14.921 14.6397 14.7803 14.7803C14.6397 14.921 14.4489 15 14.25 15ZM14.25 8.25001V4.05939L18.4406 8.25001H14.25Z" fill="#82829B"/>
                </svg>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20.9435 10.6874L5.14661 1.84673C4.8834 1.69324 4.58032 1.62194 4.27628 1.64198C3.97224 1.66203 3.68114 1.77251 3.44036 1.95923C3.19446 2.15324 3.01593 2.41979 2.9301 2.72102C2.84427 3.02226 2.85552 3.34287 2.96224 3.63735L5.59661 10.9967C5.62326 11.0701 5.67163 11.1336 5.73526 11.1788C5.7989 11.2241 5.8748 11.2488 5.95286 11.2499H12.7216C12.9162 11.2468 13.1048 11.3176 13.2492 11.4481C13.3936 11.5786 13.4831 11.759 13.4997 11.953C13.5061 12.0553 13.4915 12.1579 13.4567 12.2544C13.4219 12.3509 13.3676 12.4392 13.2974 12.5139C13.2271 12.5886 13.1422 12.648 13.048 12.6886C12.9538 12.7292 12.8523 12.7501 12.7497 12.7499H5.95286C5.8748 12.7509 5.7989 12.7756 5.73526 12.8209C5.67163 12.8661 5.62326 12.9296 5.59661 13.003L2.96224 20.3624C2.88319 20.5891 2.85938 20.8314 2.89276 21.0691C2.92615 21.3069 3.01578 21.5333 3.1542 21.7295C3.29263 21.9256 3.47586 22.086 3.68868 22.1971C3.9015 22.3083 4.13777 22.3671 4.37786 22.3686C4.63336 22.3675 4.88459 22.303 5.10911 22.1811L20.9435 13.3124C21.1755 13.1806 21.3684 12.9897 21.5026 12.7592C21.6368 12.5286 21.7075 12.2666 21.7075 11.9999C21.7075 11.7331 21.6368 11.4711 21.5026 11.2405C21.3684 11.01 21.1755 10.8191 20.9435 10.6874Z" fill="#82829B"/>
                </svg>
            </div>
        </div>
    </div>
  )
}

export default Chat