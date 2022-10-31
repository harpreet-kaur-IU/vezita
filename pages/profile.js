// import React,{useState} from 'react'
// import styles from '../modules/css/profile.module.css'
// import ProfileSidebar from '../modules/ProfileSidebar';
// import FileUploader from '../modules/FileUploader';
// import DropDown from "../modules/DropDown"
// export default function Profile() {
//     const [progress, setProgress] = useState(98);
//     const fill = progress+"%";
//   return (
//     <>
//         <div className={styles["top-header-section"]}>
//             <div className={`${styles["section1"]} d-flex `}>
//                 <div className={styles["profile-photo"]}>
//                     <img src="dr.png"/>
//                 </div>
//                 <div className='ml-4'>
//                     <h3 className='f-500 l-28'>Dr. Jane Fernandes</h3>
//                     <div className="d-flex d-align-center mt-3">
//                         <img src="live.png"/>
//                         <h6 className='f-400 l-20 ml-2'>Your profile is live on Vezita</h6>
//                     </div>
//                 </div>
//             </div>
//             <div className={`${styles["section2"]} d-flex d-flex-wrap`}>
//                 <h2 className='f-600 l-32 text-secondary col-12' for="profile">{fill} <span className='h4 f-600'>profile completed</span></h2>
//                 <div className={styles["progress-bar"]}>
//                     <div className={styles["fill"]} style={{width:fill}}></div>
//                 </div>
//             </div>
//             <div className={`${styles["section2"]} d-flex d-flex-wrap`}>
//                 <div className='d-flex d-align-center'>
//                     <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.7475 7.4149 18.7195 4.93639 16.8916 3.10845C15.0636 1.28051 12.5851 0.252482 10 0.25ZM9.25 5.5C9.25 5.30109 9.32902 5.11032 9.46967 4.96967C9.61033 4.82902 9.80109 4.75 10 4.75C10.1989 4.75 10.3897 4.82902 10.5303 4.96967C10.671 5.11032 10.75 5.30109 10.75 5.5V10.75C10.75 10.9489 10.671 11.1397 10.5303 11.2803C10.3897 11.421 10.1989 11.5 10 11.5C9.80109 11.5 9.61033 11.421 9.46967 11.2803C9.32902 11.1397 9.25 10.9489 9.25 10.75V5.5ZM10 15.25C9.7775 15.25 9.55999 15.184 9.37499 15.0604C9.18998 14.9368 9.04579 14.7611 8.96064 14.5555C8.87549 14.35 8.85321 14.1238 8.89662 13.9055C8.94003 13.6873 9.04718 13.4868 9.20451 13.3295C9.36184 13.1722 9.5623 13.065 9.78053 13.0216C9.99876 12.9782 10.225 13.0005 10.4305 13.0856C10.6361 13.1708 10.8118 13.315 10.9354 13.5C11.059 13.685 11.125 13.9025 11.125 14.125C11.125 14.4234 11.0065 14.7095 10.7955 14.9205C10.5845 15.1315 10.2984 15.25 10 15.25Z" fill="#FF8651"/>
//                     </svg>
//                     <h4 className='ml-2 f-500 l-26 text-secondary'>1 pending section</h4>
//                 </div>
//                 <h5 className='f-400 l-22 text-grey-3 mt-2'>Complete this sections to make your profile go live</h5>
//             </div>
//             <div className={`${styles["section3"]} d-flex d-flex-wrap`}>
//                 <div className='d-flex d-align-center'>
//                     <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
//                         <path d="M10.25 9.875H9.125V4.625H9.5C10.1954 4.62747 10.8617 4.90483 11.3534 5.39657C11.8452 5.88832 12.1225 6.55457 12.125 7.25C12.125 7.54837 12.2435 7.83452 12.4545 8.0455C12.6655 8.25647 12.9516 8.375 13.25 8.375C13.5484 8.375 13.8345 8.25647 14.0455 8.0455C14.2565 7.83452 14.375 7.54837 14.375 7.25C14.375 5.95707 13.8614 4.71709 12.9471 3.80285C12.0329 2.88861 10.7929 2.375 9.5 2.375H9.125V1.25C9.125 0.951631 9.00647 0.665483 8.79549 0.454505C8.58452 0.243526 8.29837 0.125 8 0.125C7.70163 0.125 7.41548 0.243526 7.2045 0.454505C6.99353 0.665483 6.875 0.951631 6.875 1.25V2.375H6.125C4.83207 2.375 3.59209 2.88861 2.67785 3.80285C1.76361 4.71709 1.25 5.95707 1.25 7.25C1.25 8.54293 1.76361 9.78291 2.67785 10.6971C3.59209 11.6114 4.83207 12.125 6.125 12.125H6.875V17.375H5.75C5.05457 17.3725 4.38832 17.0952 3.89657 16.6034C3.40483 16.1117 3.12747 15.4454 3.125 14.75C3.125 14.4516 3.00647 14.1655 2.7955 13.9545C2.58452 13.7435 2.29837 13.625 2 13.625C1.70163 13.625 1.41548 13.7435 1.2045 13.9545C0.993526 14.1655 0.875 14.4516 0.875 14.75C0.875 16.0429 1.38861 17.2829 2.30285 18.1971C3.21709 19.1114 4.45707 19.625 5.75 19.625H6.875V20.75C6.875 21.0484 6.99353 21.3345 7.2045 21.5455C7.41548 21.7565 7.70163 21.875 8 21.875C8.29837 21.875 8.58452 21.7565 8.79549 21.5455C9.00647 21.3345 9.125 21.0484 9.125 20.75V19.625H10.25C11.5429 19.625 12.7829 19.1114 13.6971 18.1971C14.6114 17.2829 15.125 16.0429 15.125 14.75C15.125 13.4571 14.6114 12.2171 13.6971 11.3029C12.7829 10.3886 11.5429 9.875 10.25 9.875ZM6.125 9.875C5.42881 9.875 4.76113 9.59844 4.26884 9.10616C3.77656 8.61387 3.5 7.94619 3.5 7.25C3.5 6.55381 3.77656 5.88613 4.26884 5.39384C4.76113 4.90156 5.42881 4.625 6.125 4.625H6.875V9.875H6.125ZM10.25 17.375H9.125V12.125H10.25C10.9462 12.125 11.6139 12.4016 12.1062 12.8938C12.5984 13.3861 12.875 14.0538 12.875 14.75C12.875 15.4462 12.5984 16.1139 12.1062 16.6062C11.6139 17.0984 10.9462 17.375 10.25 17.375Z" fill="#3085F4"/>
//                     </svg>

//                     <h4 className='ml-2 f-500 l-26 text-secondary'>Subscription ending in 6 months</h4>
//                 </div>
//                 <h5 className='f-400 l-22 text-grey-3 mt-2'>You will be charged $200/ year after 12-8-2022. Manage</h5>
//             </div>
//         </div>
//         <div className='d-flex d-flex-wrap mb-10'>
//             <div className='col-3 pr-4'>
//                 <ProfileSidebar></ProfileSidebar>
//             </div>

//             <div className={`col-8 d-flex d-flex-wrap border-box ${styles["personal-detail-section"]}`}>
//                 <h4 className='f-600 l-26 col-12 text-primary'>Personal and Contact details</h4>
//                 <div className='d-flex col-9  d-flex d-flex-wrap border-box'>
//                     <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
//                         <h4 className='f-600 l-26 col-12 mt-5 text-black'>Personal  details</h4>
//                         <div className='d-flex col-12 d-flex-wrap border-box'>
//                             <div className='col-2'>
//                                 <label className='d-flex'>Prefix</label>
//                                 <DropDown placeholder="Dr"></DropDown>
//                             </div>
//                             <div className='col-10 d-flex d-flex-wrap border-box'>
//                                 <div className='ml-3 col-12'>
//                                     <label className='d-flex'>Name</label>
//                                     <input type="text" placeholder='Jane Doe'/>
//                                 </div>
//                             </div>
//                         </div>
//                         <label className='d-flex col-12'>Gender</label>
//                         <div className="d-flex col-12">
//                             <div className={`${styles["radio-buttons"]} d-flex d-align-center`}>
//                                 <input type="radio" id="male" name="gender" value="Male"/>
//                                 <label for="male">Male</label>
//                             </div>
//                             <div className={`${styles["radio-buttons"]} d-flex ml-4`}>
//                                 <input type="radio" id="female" name="gender" value="Female"/>
//                                 <label for="female">Female</label>
//                             </div>
//                         </div>
//                         <div className='d-flex col-12'>
//                             <div className='col-6'>
//                                 <label className='d-flex'>Select City</label>
//                                 <DropDown placeholder="Dr"></DropDown>
//                             </div>
//                             <div className='col-6 d-flex d-flex-wrap border-box'>
//                                 <div className='ml-3 col-12'>
//                                     <label className='d-flex'>Select years of experience</label>
//                                     <input type="text" placeholder='Jane Doe'/>
//                                 </div>
//                             </div>
//                         </div>
//                         <label className='d-flex col-12'>About</label>
//                         <textarea className=' col-12' placeholder='Add your Bio' rows="3"></textarea> 
//                     </div>
//                     <h4 className='f-600 l-26 col-12 mt-5 text-black'>Contact  details</h4>
//                     <div className='d-flex col-12 d-flex-wrap d-align-center border-box mt-2'>
//                         <label className='d-flex col-12'>Contact</label>
//                         <div className='d-flex col-12'>
//                             <div className='d-flex col-11'>
//                                 <div className="col-2">
//                                     <DropDown placeholder="+212"></DropDown>
//                                 </div>
//                                 <div className='col-10 d-flex d-flex-wrap border-box'>
//                                     <div className='ml-3 col-12'>
//                                         <input type="number" placeholder='9876543210'/>
//                                     </div>
//                                 </div>
//                             </div>
//                             <div className='ml-3 col-1 d-flex d-align-center'>
//                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xns="http://www.w3.org/2000/svg">
//                                     <path d="M4.035 15.4791C4.01193 15.6518 4.00024 15.8258 4 16.0001C4 18.3781 6.138 20.2841 8.521 19.9641C9.214 21.1981 10.534 22.0001 12 22.0001C13.466 22.0001 14.786 21.1981 15.479 19.9641C17.857 20.2841 20 18.3781 20 16.0001C20 15.8271 19.988 15.6531 19.965 15.4791C21.198 14.7861 22 13.4651 22 12.0001C22 10.5351 21.198 9.21409 19.965 8.52109C19.988 8.34709 20 8.17309 20 8.00009C20 5.62209 17.857 3.71209 15.479 4.03609C14.786 2.80209 13.466 2.00009 12 2.00009C10.534 2.00009 9.214 2.80209 8.521 4.03609C6.138 3.71209 4 5.62209 4 8.00009C4 8.17309 4.012 8.34709 4.035 8.52109C2.802 9.21409 2 10.5351 2 12.0001C2 13.4651 2.802 14.7861 4.035 15.4791ZM5.477 10.0761L6.579 9.78309L6.145 8.73009C6.04981 8.49846 6.00056 8.25052 6 8.00009C6 6.89709 6.897 6.00009 8 6.00009C8.247 6.00009 8.499 6.05009 8.73 6.14509L9.784 6.57909L10.077 5.47709C10.1899 5.05326 10.4396 4.67858 10.7873 4.4113C11.1351 4.14402 11.5614 3.99912 12 3.99912C12.4386 3.99912 12.8649 4.14402 13.2127 4.4113C13.5604 4.67858 13.8101 5.05326 13.923 5.47709L14.216 6.57909L15.27 6.14509C15.501 6.05009 15.753 6.00009 16 6.00009C17.103 6.00009 18 6.89709 18 8.00009C18 8.24709 17.95 8.50009 17.855 8.73009L17.421 9.78309L18.523 10.0761C18.9458 10.1903 19.3193 10.4407 19.5856 10.7885C19.8518 11.1363 19.9961 11.5621 19.9961 12.0001C19.9961 12.4381 19.8518 12.8639 19.5856 13.2117C19.3193 13.5595 18.9458 13.8098 18.523 13.9241L17.421 14.2171L17.855 15.2701C17.95 15.5001 18 15.7531 18 16.0001C18 17.1031 17.103 18.0001 16 18.0001C15.753 18.0001 15.501 17.9501 15.27 17.8551L14.216 17.4211L13.923 18.5231C13.8101 18.9469 13.5604 19.3216 13.2127 19.5889C12.8649 19.8562 12.4386 20.0011 12 20.0011C11.5614 20.0011 11.1351 19.8562 10.7873 19.5889C10.4396 19.3216 10.1899 18.9469 10.077 18.5231L9.784 17.4211L8.73 17.8551C8.49834 17.9502 8.25042 17.9995 8 18.0001C6.897 18.0001 6 17.1031 6 16.0001C6 15.7531 6.05 15.5001 6.145 15.2701L6.579 14.2171L5.477 13.9241C5.05416 13.8098 4.68073 13.5595 4.41445 13.2117C4.14817 12.8639 4.00388 12.4381 4.00388 12.0001C4.00388 11.5621 4.14817 11.1363 4.41445 10.7885C4.68073 10.4407 5.05416 10.1903 5.477 10.0761Z" fill="#3085F4"/>
//                                     <path d="M15.742 10.7101L14.334 9.2901L11.003 12.5891L9.70697 11.2931L8.29297 12.7071L10.997 15.4111L15.742 10.7101Z" fill="#3085F4"/>
//                                 </svg>
//                                 <h5 className='f-600 l-22 text-primary'>verified</h5>
//                             </div>
//                         </div>
//                         <label className='d-flex'>Email</label>
//                         <div className='d-flex col-12'>
//                             <div className='d-flex col-11'>
//                                 <DropDown placeholder="johndoe23@gmail.com"></DropDown>
//                             </div>
//                             <div className='ml-3 col-1 d-flex d-align-center'>
//                                 <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xns="http://www.w3.org/2000/svg">
//                                     <path d="M4.035 15.4791C4.01193 15.6518 4.00024 15.8258 4 16.0001C4 18.3781 6.138 20.2841 8.521 19.9641C9.214 21.1981 10.534 22.0001 12 22.0001C13.466 22.0001 14.786 21.1981 15.479 19.9641C17.857 20.2841 20 18.3781 20 16.0001C20 15.8271 19.988 15.6531 19.965 15.4791C21.198 14.7861 22 13.4651 22 12.0001C22 10.5351 21.198 9.21409 19.965 8.52109C19.988 8.34709 20 8.17309 20 8.00009C20 5.62209 17.857 3.71209 15.479 4.03609C14.786 2.80209 13.466 2.00009 12 2.00009C10.534 2.00009 9.214 2.80209 8.521 4.03609C6.138 3.71209 4 5.62209 4 8.00009C4 8.17309 4.012 8.34709 4.035 8.52109C2.802 9.21409 2 10.5351 2 12.0001C2 13.4651 2.802 14.7861 4.035 15.4791ZM5.477 10.0761L6.579 9.78309L6.145 8.73009C6.04981 8.49846 6.00056 8.25052 6 8.00009C6 6.89709 6.897 6.00009 8 6.00009C8.247 6.00009 8.499 6.05009 8.73 6.14509L9.784 6.57909L10.077 5.47709C10.1899 5.05326 10.4396 4.67858 10.7873 4.4113C11.1351 4.14402 11.5614 3.99912 12 3.99912C12.4386 3.99912 12.8649 4.14402 13.2127 4.4113C13.5604 4.67858 13.8101 5.05326 13.923 5.47709L14.216 6.57909L15.27 6.14509C15.501 6.05009 15.753 6.00009 16 6.00009C17.103 6.00009 18 6.89709 18 8.00009C18 8.24709 17.95 8.50009 17.855 8.73009L17.421 9.78309L18.523 10.0761C18.9458 10.1903 19.3193 10.4407 19.5856 10.7885C19.8518 11.1363 19.9961 11.5621 19.9961 12.0001C19.9961 12.4381 19.8518 12.8639 19.5856 13.2117C19.3193 13.5595 18.9458 13.8098 18.523 13.9241L17.421 14.2171L17.855 15.2701C17.95 15.5001 18 15.7531 18 16.0001C18 17.1031 17.103 18.0001 16 18.0001C15.753 18.0001 15.501 17.9501 15.27 17.8551L14.216 17.4211L13.923 18.5231C13.8101 18.9469 13.5604 19.3216 13.2127 19.5889C12.8649 19.8562 12.4386 20.0011 12 20.0011C11.5614 20.0011 11.1351 19.8562 10.7873 19.5889C10.4396 19.3216 10.1899 18.9469 10.077 18.5231L9.784 17.4211L8.73 17.8551C8.49834 17.9502 8.25042 17.9995 8 18.0001C6.897 18.0001 6 17.1031 6 16.0001C6 15.7531 6.05 15.5001 6.145 15.2701L6.579 14.2171L5.477 13.9241C5.05416 13.8098 4.68073 13.5595 4.41445 13.2117C4.14817 12.8639 4.00388 12.4381 4.00388 12.0001C4.00388 11.5621 4.14817 11.1363 4.41445 10.7885C4.68073 10.4407 5.05416 10.1903 5.477 10.0761Z" fill="#3085F4"/>
//                                     <path d="M15.742 10.7101L14.334 9.2901L11.003 12.5891L9.70697 11.2931L8.29297 12.7071L10.997 15.4111L15.742 10.7101Z" fill="#3085F4"/>
//                                 </svg>
//                                 <h5 className='f-600 l-22 text-primary'>verified</h5>
//                             </div>
//                         </div>
                        
//                     </div>
//                 </div>
//                 <div className={`col-2 ml-60 mt-8`}>
//                     <h6 className='f-600 l-20 text-secondary'>Profile picture</h6>
//                     <h6 className='f-400 l-20 text-grey-3 mt-1'>Recommended Image size: 400x400px</h6>
//                     <div className={styles["profile-picture-upload"]}>
//                         <svg width="41" height="51" viewBox="0 0 41 51" fill="none" xmlns="http://www.w3.org/2000/svg">
//                             <path d="M34.885 30.5C35.6236 30.5 36.3549 30.6455 37.0372 30.9282C37.7195 31.2109 38.3395 31.6253 38.8616 32.1477C39.3837 32.67 39.7978 33.2901 40.0802 33.9726C40.3627 34.655 40.5078 35.3864 40.5075 36.125V38.42C40.5067 39.8528 40.0584 41.2495 39.225 42.415C35.3625 47.825 29.05 50.5025 20.5 50.5025C11.9475 50.5025 5.64001 47.8225 1.78501 42.4125C0.955325 41.2475 0.509633 39.8527 0.51001 38.4225V36.1225C0.510009 34.6322 1.10169 33.2028 2.15503 32.1486C3.20838 31.0943 4.6372 30.5013 6.12751 30.5H34.8825H34.885ZM20.5 0.512497C22.1415 0.512497 23.767 0.835818 25.2836 1.464C26.8001 2.09219 28.1781 3.01293 29.3388 4.17366C30.4996 5.33439 31.4203 6.71238 32.0485 8.22895C32.6767 9.74552 33 11.371 33 13.0125C33 14.654 32.6767 16.2795 32.0485 17.796C31.4203 19.3126 30.4996 20.6906 29.3388 21.8513C28.1781 23.0121 26.8001 23.9328 25.2836 24.561C23.767 25.1892 22.1415 25.5125 20.5 25.5125C17.1848 25.5125 14.0054 24.1955 11.6612 21.8513C9.31697 19.5071 8.00001 16.3277 8.00001 13.0125C8.00001 9.69729 9.31697 6.51787 11.6612 4.17366C14.0054 1.82946 17.1848 0.512497 20.5 0.512497Z" fill="#82829B"/>
//                         </svg>

//                     </div>
//                 </div>
//                 <div className='col-12 mt-60 d-flex d-justify-end'>
//                     <button className='col-3 btn btn-primary d-flex d-justify-center'>Save</button>
//                 </div>
//             </div>
//         </div>
//     </>
//   )
// }


import React,{useState} from 'react'
import styles from '../modules/css/profile.module.css'
import ProfileSidebar from '../modules/ProfileSidebar';
import FileUploader from '../modules/FileUploader';
import DropDown from "../modules/DropDown"
import DaySelector from '../modules/DaySelector';
import DropDownDate from "../modules/DropDownDate"

export default function Profile() {
    const [progress, setProgress] = useState(98);
    const [tab, setTab] = useState(0);
    const [subTab, setSubTab] = useState(0);
    const fill = progress+"%";
    const tabHandler = (val) => {
        setTab(val);
    }
    const nextHandler = () => {
        setTab(prev => prev+1)
        
    }
    const subTabHandler = () => {
        setSubTab(prev => prev+1)
    }
  return (
    <div className='p-10'>
        <div className={styles["top-header-section"]}>
            <div className={`${styles["section1"]} d-flex `}>
                <div className={styles["profile-photo"]}>
                    <img src="dr.png"/>
                </div>
                <div className='ml-4'>
                    <h3 className='f-500 l-28'>Dr. Jane Fernandes</h3>
                    <div className="d-flex d-align-center mt-3">
                        <img src="live.png"/>
                        <h6 className='f-400 l-20 ml-2'>Your profile is live on Vezita</h6>
                    </div>
                </div>
            </div>
            <div className={`${styles["section2"]} d-flex d-flex-wrap`}>
                <h2 className='f-600 l-32 text-secondary col-12' for="profile">{fill} <span className='h4 f-600'>profile completed</span></h2>
                <div className={styles["progress-bar"]}>
                    <div className={styles["fill"]} style={{width:fill}}></div>
                </div>
            </div>
            <div className={`${styles["section2"]} d-flex d-flex-wrap`}>
                <div className='d-flex d-align-center'>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 0.25C8.07164 0.25 6.18657 0.821828 4.58319 1.89317C2.97982 2.96451 1.73013 4.48726 0.992179 6.26884C0.254225 8.05042 0.061142 10.0108 0.437348 11.9021C0.813554 13.7934 1.74215 15.5307 3.10571 16.8943C4.46928 18.2579 6.20656 19.1865 8.09787 19.5627C9.98919 19.9389 11.9496 19.7458 13.7312 19.0078C15.5127 18.2699 17.0355 17.0202 18.1068 15.4168C19.1782 13.8134 19.75 11.9284 19.75 10C19.7475 7.4149 18.7195 4.93639 16.8916 3.10845C15.0636 1.28051 12.5851 0.252482 10 0.25ZM9.25 5.5C9.25 5.30109 9.32902 5.11032 9.46967 4.96967C9.61033 4.82902 9.80109 4.75 10 4.75C10.1989 4.75 10.3897 4.82902 10.5303 4.96967C10.671 5.11032 10.75 5.30109 10.75 5.5V10.75C10.75 10.9489 10.671 11.1397 10.5303 11.2803C10.3897 11.421 10.1989 11.5 10 11.5C9.80109 11.5 9.61033 11.421 9.46967 11.2803C9.32902 11.1397 9.25 10.9489 9.25 10.75V5.5ZM10 15.25C9.7775 15.25 9.55999 15.184 9.37499 15.0604C9.18998 14.9368 9.04579 14.7611 8.96064 14.5555C8.87549 14.35 8.85321 14.1238 8.89662 13.9055C8.94003 13.6873 9.04718 13.4868 9.20451 13.3295C9.36184 13.1722 9.5623 13.065 9.78053 13.0216C9.99876 12.9782 10.225 13.0005 10.4305 13.0856C10.6361 13.1708 10.8118 13.315 10.9354 13.5C11.059 13.685 11.125 13.9025 11.125 14.125C11.125 14.4234 11.0065 14.7095 10.7955 14.9205C10.5845 15.1315 10.2984 15.25 10 15.25Z" fill="#FF8651"/>
                    </svg>
                    <h4 className='ml-2 f-500 l-26 text-secondary'>1 pending section</h4>
                </div>
                <h5 className='f-400 l-22 text-grey-3 mt-2'>Complete this sections to make your profile go live</h5>
            </div>
            <div className={`${styles["section3"]} d-flex d-flex-wrap`}>
                <div className='d-flex d-align-center'>
                    <svg width="16" height="22" viewBox="0 0 16 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.25 9.875H9.125V4.625H9.5C10.1954 4.62747 10.8617 4.90483 11.3534 5.39657C11.8452 5.88832 12.1225 6.55457 12.125 7.25C12.125 7.54837 12.2435 7.83452 12.4545 8.0455C12.6655 8.25647 12.9516 8.375 13.25 8.375C13.5484 8.375 13.8345 8.25647 14.0455 8.0455C14.2565 7.83452 14.375 7.54837 14.375 7.25C14.375 5.95707 13.8614 4.71709 12.9471 3.80285C12.0329 2.88861 10.7929 2.375 9.5 2.375H9.125V1.25C9.125 0.951631 9.00647 0.665483 8.79549 0.454505C8.58452 0.243526 8.29837 0.125 8 0.125C7.70163 0.125 7.41548 0.243526 7.2045 0.454505C6.99353 0.665483 6.875 0.951631 6.875 1.25V2.375H6.125C4.83207 2.375 3.59209 2.88861 2.67785 3.80285C1.76361 4.71709 1.25 5.95707 1.25 7.25C1.25 8.54293 1.76361 9.78291 2.67785 10.6971C3.59209 11.6114 4.83207 12.125 6.125 12.125H6.875V17.375H5.75C5.05457 17.3725 4.38832 17.0952 3.89657 16.6034C3.40483 16.1117 3.12747 15.4454 3.125 14.75C3.125 14.4516 3.00647 14.1655 2.7955 13.9545C2.58452 13.7435 2.29837 13.625 2 13.625C1.70163 13.625 1.41548 13.7435 1.2045 13.9545C0.993526 14.1655 0.875 14.4516 0.875 14.75C0.875 16.0429 1.38861 17.2829 2.30285 18.1971C3.21709 19.1114 4.45707 19.625 5.75 19.625H6.875V20.75C6.875 21.0484 6.99353 21.3345 7.2045 21.5455C7.41548 21.7565 7.70163 21.875 8 21.875C8.29837 21.875 8.58452 21.7565 8.79549 21.5455C9.00647 21.3345 9.125 21.0484 9.125 20.75V19.625H10.25C11.5429 19.625 12.7829 19.1114 13.6971 18.1971C14.6114 17.2829 15.125 16.0429 15.125 14.75C15.125 13.4571 14.6114 12.2171 13.6971 11.3029C12.7829 10.3886 11.5429 9.875 10.25 9.875ZM6.125 9.875C5.42881 9.875 4.76113 9.59844 4.26884 9.10616C3.77656 8.61387 3.5 7.94619 3.5 7.25C3.5 6.55381 3.77656 5.88613 4.26884 5.39384C4.76113 4.90156 5.42881 4.625 6.125 4.625H6.875V9.875H6.125ZM10.25 17.375H9.125V12.125H10.25C10.9462 12.125 11.6139 12.4016 12.1062 12.8938C12.5984 13.3861 12.875 14.0538 12.875 14.75C12.875 15.4462 12.5984 16.1139 12.1062 16.6062C11.6139 17.0984 10.9462 17.375 10.25 17.375Z" fill="#3085F4"/>
                    </svg>

                    <h4 className='ml-2 f-500 l-26 text-secondary'>Subscription ending in 6 months</h4>
                </div>
                <h5 className='f-400 l-22 text-grey-3 mt-2'>You will be charged $200/ year after 12-8-2022. Manage</h5>
            </div>
        </div>
        <div className='d-flex d-flex-wrap mb-10'>
            <div className={`col-3 pr-4 ${styles["sidebar"]}`}>
                <ProfileSidebar handler={tabHandler}></ProfileSidebar>
            </div>

            <div className={`col-8 d-flex d-flex-wrap border-box ${styles["personal-detail-section"]}`}>
                {tab == 0 &&
                <>
                    <h4 className='f-600 l-26 col-12 text-primary'>Personal and Contact details</h4>
                    <div className='d-flex col-9  d-flex d-flex-wrap border-box'>
                        <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                            <h4 className='f-600 l-26 col-12 mt-5 text-black'>Personal  details</h4>
                            <div className='d-flex col-12 d-flex-wrap border-box'>
                                <div className='col-2'>
                                    <label className='d-flex'>Prefix</label>
                                    <DropDown placeholder="Dr"></DropDown>
                                </div>
                                <div className='col-10 d-flex d-flex-wrap border-box'>
                                    <div className='ml-3 col-12'>
                                        <label className='d-flex'>Name</label>
                                        <input type="text" placeholder='Jane Doe'/>
                                    </div>
                                </div>
                            </div>
                            <label className='d-flex col-12'>Gender</label>
                            <div className="d-flex col-12">
                                <div className={`${styles["radio-buttons"]} d-flex d-align-center`}>
                                    <input type="radio" id="male" name="gender" value="Male"/>
                                    <label for="male">Male</label>
                                </div>
                                <div className={`${styles["radio-buttons"]} d-flex ml-4`}>
                                    <input type="radio" id="female" name="gender" value="Female"/>
                                    <label for="female">Female</label>
                                </div>
                            </div>
                            <div className='d-flex col-12'>
                                <div className='col-6'>
                                    <label className='d-flex'>Select City</label>
                                    <DropDown placeholder="Dr"></DropDown>
                                </div>
                                <div className='col-6 d-flex d-flex-wrap border-box'>
                                    <div className='ml-3 col-12'>
                                        <label className='d-flex'>Select years of experience</label>
                                        <input type="text" placeholder='Jane Doe'/>
                                    </div>
                                </div>
                            </div>
                            <label className='d-flex col-12'>About</label>
                            <textarea className=' col-12' placeholder='Add your Bio' rows="3"></textarea> 
                        </div>
                        <h4 className='f-600 l-26 col-12 mt-5 text-black'>Contact  details</h4>
                        <div className='d-flex col-12 d-flex-wrap d-align-center border-box mt-2'>
                            <label className='d-flex col-12'>Contact</label>
                            <div className='d-flex col-12'>
                                <div className='d-flex col-11'>
                                    <div className="col-2">
                                        <DropDown placeholder="+212"></DropDown>
                                    </div>
                                    <div className='col-10 d-flex d-flex-wrap border-box'>
                                        <div className='ml-3 col-12'>
                                            <input type="number" placeholder='9876543210'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='ml-3 col-1 d-flex d-align-center'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xns="http://www.w3.org/2000/svg">
                                        <path d="M4.035 15.4791C4.01193 15.6518 4.00024 15.8258 4 16.0001C4 18.3781 6.138 20.2841 8.521 19.9641C9.214 21.1981 10.534 22.0001 12 22.0001C13.466 22.0001 14.786 21.1981 15.479 19.9641C17.857 20.2841 20 18.3781 20 16.0001C20 15.8271 19.988 15.6531 19.965 15.4791C21.198 14.7861 22 13.4651 22 12.0001C22 10.5351 21.198 9.21409 19.965 8.52109C19.988 8.34709 20 8.17309 20 8.00009C20 5.62209 17.857 3.71209 15.479 4.03609C14.786 2.80209 13.466 2.00009 12 2.00009C10.534 2.00009 9.214 2.80209 8.521 4.03609C6.138 3.71209 4 5.62209 4 8.00009C4 8.17309 4.012 8.34709 4.035 8.52109C2.802 9.21409 2 10.5351 2 12.0001C2 13.4651 2.802 14.7861 4.035 15.4791ZM5.477 10.0761L6.579 9.78309L6.145 8.73009C6.04981 8.49846 6.00056 8.25052 6 8.00009C6 6.89709 6.897 6.00009 8 6.00009C8.247 6.00009 8.499 6.05009 8.73 6.14509L9.784 6.57909L10.077 5.47709C10.1899 5.05326 10.4396 4.67858 10.7873 4.4113C11.1351 4.14402 11.5614 3.99912 12 3.99912C12.4386 3.99912 12.8649 4.14402 13.2127 4.4113C13.5604 4.67858 13.8101 5.05326 13.923 5.47709L14.216 6.57909L15.27 6.14509C15.501 6.05009 15.753 6.00009 16 6.00009C17.103 6.00009 18 6.89709 18 8.00009C18 8.24709 17.95 8.50009 17.855 8.73009L17.421 9.78309L18.523 10.0761C18.9458 10.1903 19.3193 10.4407 19.5856 10.7885C19.8518 11.1363 19.9961 11.5621 19.9961 12.0001C19.9961 12.4381 19.8518 12.8639 19.5856 13.2117C19.3193 13.5595 18.9458 13.8098 18.523 13.9241L17.421 14.2171L17.855 15.2701C17.95 15.5001 18 15.7531 18 16.0001C18 17.1031 17.103 18.0001 16 18.0001C15.753 18.0001 15.501 17.9501 15.27 17.8551L14.216 17.4211L13.923 18.5231C13.8101 18.9469 13.5604 19.3216 13.2127 19.5889C12.8649 19.8562 12.4386 20.0011 12 20.0011C11.5614 20.0011 11.1351 19.8562 10.7873 19.5889C10.4396 19.3216 10.1899 18.9469 10.077 18.5231L9.784 17.4211L8.73 17.8551C8.49834 17.9502 8.25042 17.9995 8 18.0001C6.897 18.0001 6 17.1031 6 16.0001C6 15.7531 6.05 15.5001 6.145 15.2701L6.579 14.2171L5.477 13.9241C5.05416 13.8098 4.68073 13.5595 4.41445 13.2117C4.14817 12.8639 4.00388 12.4381 4.00388 12.0001C4.00388 11.5621 4.14817 11.1363 4.41445 10.7885C4.68073 10.4407 5.05416 10.1903 5.477 10.0761Z" fill="#3085F4"/>
                                        <path d="M15.742 10.7101L14.334 9.2901L11.003 12.5891L9.70697 11.2931L8.29297 12.7071L10.997 15.4111L15.742 10.7101Z" fill="#3085F4"/>
                                    </svg>
                                    <h5 className='f-600 l-22 text-primary'>verified</h5>
                                </div>
                            </div>
                            <label className='d-flex'>Email</label>
                            <div className='d-flex col-12'>
                                <div className='d-flex col-11'>
                                    <DropDown placeholder="johndoe23@gmail.com"></DropDown>
                                </div>
                                <div className='ml-3 col-1 d-flex d-align-center'>
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xns="http://www.w3.org/2000/svg">
                                        <path d="M4.035 15.4791C4.01193 15.6518 4.00024 15.8258 4 16.0001C4 18.3781 6.138 20.2841 8.521 19.9641C9.214 21.1981 10.534 22.0001 12 22.0001C13.466 22.0001 14.786 21.1981 15.479 19.9641C17.857 20.2841 20 18.3781 20 16.0001C20 15.8271 19.988 15.6531 19.965 15.4791C21.198 14.7861 22 13.4651 22 12.0001C22 10.5351 21.198 9.21409 19.965 8.52109C19.988 8.34709 20 8.17309 20 8.00009C20 5.62209 17.857 3.71209 15.479 4.03609C14.786 2.80209 13.466 2.00009 12 2.00009C10.534 2.00009 9.214 2.80209 8.521 4.03609C6.138 3.71209 4 5.62209 4 8.00009C4 8.17309 4.012 8.34709 4.035 8.52109C2.802 9.21409 2 10.5351 2 12.0001C2 13.4651 2.802 14.7861 4.035 15.4791ZM5.477 10.0761L6.579 9.78309L6.145 8.73009C6.04981 8.49846 6.00056 8.25052 6 8.00009C6 6.89709 6.897 6.00009 8 6.00009C8.247 6.00009 8.499 6.05009 8.73 6.14509L9.784 6.57909L10.077 5.47709C10.1899 5.05326 10.4396 4.67858 10.7873 4.4113C11.1351 4.14402 11.5614 3.99912 12 3.99912C12.4386 3.99912 12.8649 4.14402 13.2127 4.4113C13.5604 4.67858 13.8101 5.05326 13.923 5.47709L14.216 6.57909L15.27 6.14509C15.501 6.05009 15.753 6.00009 16 6.00009C17.103 6.00009 18 6.89709 18 8.00009C18 8.24709 17.95 8.50009 17.855 8.73009L17.421 9.78309L18.523 10.0761C18.9458 10.1903 19.3193 10.4407 19.5856 10.7885C19.8518 11.1363 19.9961 11.5621 19.9961 12.0001C19.9961 12.4381 19.8518 12.8639 19.5856 13.2117C19.3193 13.5595 18.9458 13.8098 18.523 13.9241L17.421 14.2171L17.855 15.2701C17.95 15.5001 18 15.7531 18 16.0001C18 17.1031 17.103 18.0001 16 18.0001C15.753 18.0001 15.501 17.9501 15.27 17.8551L14.216 17.4211L13.923 18.5231C13.8101 18.9469 13.5604 19.3216 13.2127 19.5889C12.8649 19.8562 12.4386 20.0011 12 20.0011C11.5614 20.0011 11.1351 19.8562 10.7873 19.5889C10.4396 19.3216 10.1899 18.9469 10.077 18.5231L9.784 17.4211L8.73 17.8551C8.49834 17.9502 8.25042 17.9995 8 18.0001C6.897 18.0001 6 17.1031 6 16.0001C6 15.7531 6.05 15.5001 6.145 15.2701L6.579 14.2171L5.477 13.9241C5.05416 13.8098 4.68073 13.5595 4.41445 13.2117C4.14817 12.8639 4.00388 12.4381 4.00388 12.0001C4.00388 11.5621 4.14817 11.1363 4.41445 10.7885C4.68073 10.4407 5.05416 10.1903 5.477 10.0761Z" fill="#3085F4"/>
                                        <path d="M15.742 10.7101L14.334 9.2901L11.003 12.5891L9.70697 11.2931L8.29297 12.7071L10.997 15.4111L15.742 10.7101Z" fill="#3085F4"/>
                                    </svg>
                                    <h5 className='f-600 l-22 text-primary'>verified</h5>
                                </div>
                            </div>
                            
                        </div>
                    </div>
                    <div className={`col-2 ml-60 mt-8`}>
                        <h6 className='f-600 l-20 text-secondary'>Profile picture</h6>
                        <h6 className='f-400 l-20 text-grey-3 mt-1'>Recommended Image size: 400x400px</h6>
                        <div className={styles["profile-picture-upload"]}>
                            <svg width="41" height="51" viewBox="0 0 41 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M34.885 30.5C35.6236 30.5 36.3549 30.6455 37.0372 30.9282C37.7195 31.2109 38.3395 31.6253 38.8616 32.1477C39.3837 32.67 39.7978 33.2901 40.0802 33.9726C40.3627 34.655 40.5078 35.3864 40.5075 36.125V38.42C40.5067 39.8528 40.0584 41.2495 39.225 42.415C35.3625 47.825 29.05 50.5025 20.5 50.5025C11.9475 50.5025 5.64001 47.8225 1.78501 42.4125C0.955325 41.2475 0.509633 39.8527 0.51001 38.4225V36.1225C0.510009 34.6322 1.10169 33.2028 2.15503 32.1486C3.20838 31.0943 4.6372 30.5013 6.12751 30.5H34.8825H34.885ZM20.5 0.512497C22.1415 0.512497 23.767 0.835818 25.2836 1.464C26.8001 2.09219 28.1781 3.01293 29.3388 4.17366C30.4996 5.33439 31.4203 6.71238 32.0485 8.22895C32.6767 9.74552 33 11.371 33 13.0125C33 14.654 32.6767 16.2795 32.0485 17.796C31.4203 19.3126 30.4996 20.6906 29.3388 21.8513C28.1781 23.0121 26.8001 23.9328 25.2836 24.561C23.767 25.1892 22.1415 25.5125 20.5 25.5125C17.1848 25.5125 14.0054 24.1955 11.6612 21.8513C9.31697 19.5071 8.00001 16.3277 8.00001 13.0125C8.00001 9.69729 9.31697 6.51787 11.6612 4.17366C14.0054 1.82946 17.1848 0.512497 20.5 0.512497Z" fill="#82829B"/>
                            </svg>

                        </div>
                    </div>
                    <div className='col-12 mt-60 d-flex d-justify-end'>
                        <button className='col-3 btn btn-primary d-flex d-justify-center' onClick={nextHandler}>Save</button>
                    </div>
                </>}
                {tab == 1 &&
                <>
                    <h4 className='f-600 l-26 col-12 text-primary '>Education and Specialization</h4>
                    <div className='d-flex col-11 d-flex-wrap '>
                        <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                            <h4 className='f-600 l-26 col-12 text-black mt-5'>Education</h4>
                            <div className='d-flex d-flex-wrap col-12'>
                                <div className='col-5'>
                                    <label className='d-flex'>Qualification</label>
                                    <input type="text" placeholder='Select or add title'/>
                                </div>
                                <div className='col-5 d-flex d-flex-wrap border-box'>
                                    <div className='ml-5 col-12'>
                                        <label className='d-flex'>College</label>
                                        <input type="text" placeholder='Select or add title'/>
                                    </div>
                                </div>
                                <div className='col-2 d-flex d-flex-wrap border-box'>
                                    <div className='ml-5 col-12'>
                                        <label className='d-flex'>Completion year</label>
                                        <input type="number" placeholder='Select '/>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex d-align-center mt-4'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z" fill="#3085F4"/>
                                </svg>
                                <h5 className='ml-3 f-500 l-22 text-primary'>Add Education</h5>
                            
                            </div>
                        </div>
                        <div className='col-12 mt-7 d-flex d-flex-wrap'>
                            <h4 className='f-600 l-26 col-12 text-black mt-7'>Specialization</h4>
                            <label className='d-flex col-12'>Add Specialization</label>
                            <div className={`bg-grey-7 rounded-8 col-12 d-flex  d-align-center ${styles["add-service"]}`}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z" fill="#60606c"/>
                                </svg>
                                <input type="text" placeholder='Add a service'/>
                            </div>
                            <div className='d-flex d-flex-wrap gap-3 mt-5'>
                                <div className='d-flex d-align-center bg-blue-2 border rounded-4 pt-2 pb-2 pl-4 pr-4'>
                                    <h4 className='f-400 l-22 text-primary mr-4'>General physician</h4>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0704 12.1798C13.1878 12.2983 13.2536 12.4583 13.2536 12.6251C13.2536 12.7918 13.1878 12.9519 13.0704 13.0704C12.9509 13.1859 12.7913 13.2505 12.6251 13.2505C12.4589 13.2505 12.2992 13.1859 12.1798 13.0704L7.0001 7.88288L1.82041 13.0704C1.70095 13.1859 1.54127 13.2505 1.3751 13.2505C1.20892 13.2505 1.04925 13.1859 0.929785 13.0704C0.812422 12.9519 0.746582 12.7918 0.746582 12.6251C0.746582 12.4583 0.812422 12.2983 0.929785 12.1798L6.11729 7.00007L0.929785 1.82038C0.830121 1.69895 0.779188 1.54478 0.786895 1.38787C0.794601 1.23097 0.860395 1.08253 0.971479 0.971449C1.08256 0.860365 1.231 0.794571 1.3879 0.786865C1.54481 0.779158 1.69898 0.830091 1.82041 0.929755L7.0001 6.11726L12.1798 0.929755C12.3012 0.830091 12.4554 0.779158 12.6123 0.786865C12.7692 0.794571 12.9176 0.860365 13.0287 0.971449C13.1398 1.08253 13.2056 1.23097 13.2133 1.38787C13.221 1.54478 13.1701 1.69895 13.0704 1.82038L7.88291 7.00007L13.0704 12.1798Z" fill="#82829B"/>
                                    </svg>
                                </div>
                                <div className='d-flex d-align-center bg-blue-2 border rounded-4 pt-2 pb-2 pl-4 pr-4'>
                                    <h4 className='f-400 l-22 text-primary mr-4'>Allergist</h4>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0704 12.1798C13.1878 12.2983 13.2536 12.4583 13.2536 12.6251C13.2536 12.7918 13.1878 12.9519 13.0704 13.0704C12.9509 13.1859 12.7913 13.2505 12.6251 13.2505C12.4589 13.2505 12.2992 13.1859 12.1798 13.0704L7.0001 7.88288L1.82041 13.0704C1.70095 13.1859 1.54127 13.2505 1.3751 13.2505C1.20892 13.2505 1.04925 13.1859 0.929785 13.0704C0.812422 12.9519 0.746582 12.7918 0.746582 12.6251C0.746582 12.4583 0.812422 12.2983 0.929785 12.1798L6.11729 7.00007L0.929785 1.82038C0.830121 1.69895 0.779188 1.54478 0.786895 1.38787C0.794601 1.23097 0.860395 1.08253 0.971479 0.971449C1.08256 0.860365 1.231 0.794571 1.3879 0.786865C1.54481 0.779158 1.69898 0.830091 1.82041 0.929755L7.0001 6.11726L12.1798 0.929755C12.3012 0.830091 12.4554 0.779158 12.6123 0.786865C12.7692 0.794571 12.9176 0.860365 13.0287 0.971449C13.1398 1.08253 13.2056 1.23097 13.2133 1.38787C13.221 1.54478 13.1701 1.69895 13.0704 1.82038L7.88291 7.00007L13.0704 12.1798Z" fill="#82829B"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-11 mt-60 d-flex d-justify-end'>
                        <button className='col-3 btn btn-primary d-flex d-justify-center' onClick={nextHandler}>Save</button>
                    </div>
                </>
                }
                {tab == 2 &&
                <>
                    <h4 className='f-600 l-26 col-12 text-primary '>Registration and Documents</h4>
                    <div className='d-flex col-11 d-flex-wrap '>
                        <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                            <h4 className='f-600 l-26 col-12 text-black mt-5'>Registration details</h4>
                            <div className='d-flex d-flex-wrap col-12'>
                                <div className='col-5'>
                                    <label className='d-flex'>Council registration number</label>
                                    <input type="text" placeholder='Select or add title'/>
                                </div>
                                <div className='col-5 d-flex d-flex-wrap border-box'>
                                    <div className='ml-5 col-12'>
                                        <label className='d-flex'>Council name</label>
                                        <input type="text" placeholder='Select or add title'/>
                                    </div>
                                </div>
                                <div className='col-2 d-flex d-flex-wrap border-box'>
                                    <div className='ml-5 col-12'>
                                        <label className='d-flex'>Year</label>
                                        <input type="number" placeholder='Select '/>
                                    </div>
                                </div>
                            </div>
                            <div className='d-flex d-align-center mt-4'>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z" fill="#3085F4"/>
                                </svg>
                                <h5 className='ml-3 f-500 l-22 text-primary'>Add Education</h5>
                            
                            </div>
                        </div>
                        <div className='col-12 mt-7 d-flex d-flex-wrap'>
                            <h4 className='f-600 l-26 col-12 text-black mt-7'>Documents</h4>        
                            
                        </div>
                        <div className='col-12 mt-60 d-flex d-justify-end'>
                            <button className='col-3 btn btn-primary d-flex d-justify-center' onClick={nextHandler}>Save</button>
                        </div>
                    </div>
                </>}
                {tab == 3 &&
                <>
                    <h4 className='f-600 l-26 col-12 text-primary '>Establishments(Fees, Timings)</h4>
                    {subTab == 0 &&
                        <div className='d-flex col-11 d-flex-wrap '>
                            <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                                <h4 className='f-600 l-26 col-12 text-black mt-5'>Establishment address</h4>
                                <div className='d-flex d-flex-wrap col-12'>
                                    <div className='col-6'>
                                        <label className='d-flex'>Establishment name</label>
                                        <input type="text" placeholder='Select or add title'/>
                                    </div>
                                    <div className='col-2 d-flex d-flex-wrap border-box'>
                                        <div className='ml-5 col-12'>
                                            <label className='d-flex'>Establishment city</label>
                                            <input type="text" placeholder='Mumbai'/>
                                        </div>
                                    </div>
                                    <div className='col-1 d-flex d-flex-wrap border-box'>
                                        <div className='ml-5 col-12'>
                                            <label className='d-flex'>Contact</label>
                                            <DropDown placeholder="+212"></DropDown>
                                        </div>
                                    </div>
                                    <div className='col-3 d-flex d-flex-wrap border-box'>
                                        <div className='ml-2 col-12'>
                                            <label className='d-flex'>Contact</label>
                                            <input type="number" placeholder='9876543210'/>
                                        </div>
                                    </div>
                                </div>
                                <label className='d-flex'>Establishment address</label>
                                <input type="text" placeholder='4517 Washington Ave. Manchester, Kentucky 39495'/>
                                <h6 className='f-500 l-20 text-grey-3 mt-5 mb-1'>Drop a pin to link your Clinic address</h6>
                                <img src="location.png"/>
                                <label className='d-flex'>Establishment photos</label>
                                <div className='col-12 d-flex d-flex-wrap'>
                                    <img src="build.png"/>
                                    <img src="build.png" className='ml-2'/>
                                </div>
                            </div>
                            <div className='col-12 mt-7 d-flex d-flex-wrap'>
                                <h4 className='f-600 l-26 col-12 text-black mt-7'>Practice timings</h4>
                                <label className='d-flex'>Days</label>
                                <div className='d-flex gap-2 col-12'>
                                    <DaySelector title="Mo"></DaySelector>
                                    <DaySelector title="Tu"></DaySelector>
                                    <DaySelector title="We"></DaySelector>
                                    <DaySelector title="Th"></DaySelector>
                                    <DaySelector title="Fr"></DaySelector>
                                    <DaySelector title="Sa"></DaySelector>
                                    <DaySelector title="Su"></DaySelector>
                                </div>
                                <div className='d-flex d-flex-wrap col-12'>
                                    <div className={`${styles["timing"]} mt-1 d-flex d-align-center gap-3 col-6`}>
                                        <DropDownDate placeholder="From"/>
                                        <img src="arrow.png"/>
                                        <DropDownDate placeholder="To"/>
                                    </div>
                                    <div className={`${styles["timing"]} mt-1 d-flex d-align-center gap-3 col-6`}>
                                        <DropDownDate placeholder="From"/>
                                        <img src="arrow.png"/>
                                        <DropDownDate placeholder="To"/>
                                    </div>
                                </div>
                                <div className='d-flex d-align-center mt-6'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z" fill="#3085F4"/>
                                    </svg>
                                    <h5 className='ml-2 f-600 l-20 text-primary'> ADD TIMING</h5>
                                </div>
                            </div>
                            <div className='col-12 mt-60 d-flex d-justify-end'>
                                <button className='col-3 btn btn-primary d-flex d-justify-center' onClick={subTabHandler}>Save</button>
                            </div>
                        </div>
                    }
                    {subTab == 1 &&
                    <>
                        <div className='d-flex col-11 d-flex-wrap '>
                            <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                                <h4 className='f-600 l-26 col-12 text-black mt-5'>Consultation</h4>
                                <div className='d-flex d-flex-wrap col-12'>
                                    <div className='col-6 d-flex d-flex-wrap'>
                                        <label className='d-flex'>Consultation duration</label>
                                        <DropDown placeholder="30 minutes"/>
                                    </div>
                                    <div className='col-6 d-flex d-flex-wrap'>
                                        <div className='ml-5 col-12 d-flex d-flex-wrap'>
                                            <label className='d-flex'>Consultation duration</label>
                                            <div className={`col-12 ${styles["fees"]} d-flex d-align-center`}>
                                                <h5 className='f-400 l-22 text-secondary' for="same">USD</h5>
                                                <input type="number" placeholder='30' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <label className='d-flex col-12'>Doctor's hours</label>
                                <div className='d-flex d-flex-wrap col-6 mt-1'>
                                    <div className={`${styles["wrapper"]} d-flex d-align-center`}>
                                        <input type="radio" id="same" name="hours" value="same"/>
                                        <h5 className='f-500  text-secondary ml-2 mb-0' for="same">Same as establishment hours</h5>
                                    </div>
                                    <div className={`${styles["wrapper"]} ml-5 d-flex d-align-center`}>
                                        <input type="radio" id="differ" name="hours" value="differ"/>
                                        <h5 className='f-500  text-secondary ml-2 mb-0' for="differ">Different hours</h5>
                                    </div>
                                </div>
                                <label className='d-flex col-12 mt-2'>Consultation timings</label>
                                <div className={`${styles["timing-message"]} mt-1 col-12 `}>
                                    <h6 className='f-500 l-20 text-green-5'>Inclinic timings should be within practice timings Mon-Sun 9:00AM-7:00PM. Video consultation timings can be outside practice timings.</h6>
                                </div>
                                <div className={`col-12 mt-6 d-flex d-flex-wrap d-align-center d-justify-space-between`}>
                                    <div className={` d-flex d-align-center`}>
                                        <input type="checkbox" id="Mon" name="Days" value="Mon"/>
                                        <h5 className='f-500  text-secondary ml-2 mb-0' for="Mon">Mon</h5>
                                    </div>
                                    <div className={` d-flex d-align-center`}>
                                        <input type="checkbox" id="Tue" name="Days" value="Tue"/>
                                        <h5 className='f-500  text-secondary ml-2 mb-0' for="Tue">Tue</h5>
                                    </div>
                                    <div className={` d-flex d-align-center`}>
                                        <input type="checkbox" id="Wed" name="Days" value="Wed"/>
                                        <h5 className='f-500  text-secondary ml-2 mb-0' for="Wed">Wed</h5>
                                    </div>
                                    <div className={` d-flex d-align-center`}>
                                        <input type="checkbox" id="Thu" name="Days" value="Thu"/>
                                        <h5 className='f-500  text-secondary ml-2 mb-0' for="Thu">Thu</h5>
                                    </div>
                                    <div className={` d-flex d-align-center`}>
                                        <input type="checkbox" id="Fri" name="Days" value="Fri"/>
                                        <h5 className='f-500  text-secondary ml-2 mb-0' for="Fri">Fri</h5>
                                    </div>
                                    <div className={` d-flex d-align-center`}>
                                        <input type="checkbox" id="Sat" name="Days" value="Sat"/>
                                        <h5 className='f-500  text-secondary ml-2 mb-0' for="Sat">Sat</h5>
                                    </div>
                                    <div className={` d-flex d-align-center`}>
                                        <input type="checkbox" id="Sun" name="Days" value="Sun"/>
                                        <h5 className='f-500  text-secondary ml-2 mb-0' for="Sun">Sun</h5>
                                    </div>
                                </div>
                                <div className='col-12 d-flex d-flex-wrap'>
                                    <div className='col-6 mt-2'>
                                        <label className='d-flex'>Session 1</label>
                                        <h6 className='f-400 l-20 text-secondary mt-2'>Session type</h6>
                                        <div className='d-flex col-12 mt-3'>
                                            <div className={` d-flex d-align-center`}>
                                                <input type="checkbox" id="video" name="session" value="video" style={{width:"auto"}}/>
                                                <h5 className='f-500  text-secondary ml-2 mb-0' for="video">Video Appointment</h5>
                                            </div>
                                            <div className={` d-flex d-align-center ml-4`}>
                                                <input type="checkbox" id="inclinic" name="session" value="inclinic"  style={{width:"auto"}}/>
                                                <h5 className='f-500  text-secondary ml-2 mb-0' for="inclinic">In-clinic appointment</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='col-6'>
                                        <div className='ml-3 col-12 d-flex d-flex-wrap'>
                                            <label className='d-flex col-12 '>Session 2</label>
                                            <h6 className='f-400 l-20 text-secondary mt-2'>Session type</h6>
                                            <div className='d-flex col-12 mt-3'>
                                                <div className={` d-flex d-align-center`}>
                                                    <input type="checkbox" id="video" name="session" value="video" style={{width:"auto"}}/>
                                                    <h5 className='f-500  text-secondary ml-2 mb-0' for="video">Video Appointment</h5>
                                                </div>
                                                <div className={` d-flex d-align-center ml-4`}>
                                                    <input type="checkbox" id="inclinic" name="session" value="inclinic"  style={{width:"auto"}}/>
                                                    <h5 className='f-500  text-secondary ml-2 mb-0' for="inclinic">In-clinic appointment</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='d-flex d-align-center mt-6'>
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z" fill="#3085F4"/>
                                    </svg>
                                    <h5 className='ml-2 f-600 l-20 text-primary'> ADD TIMING</h5>
                                </div>
                            </div>
                        </div>
                        <div className='col-11 mt-60 d-flex d-justify-end'>
                            <button className='col-3 btn btn-primary d-flex d-justify-center'  onClick={nextHandler}>Save</button>
                        </div>
                    </>}
                </>}
               
                {tab == 4 &&
                <>
                    <h4 className='f-600 l-26 col-12 text-primary '>Services and Experience</h4>
                    <div className='d-flex col-11 d-flex-wrap '>
                        <div className={`d-flex d-flex-wrap border-box ${styles["personal"]} col-12`}>
                            <h4 className='f-600 l-26 col-12 text-black mt-5'>Services</h4>
                            <label className='d-flex'>Add Specialization</label>
                            <div className={`bg-grey-7 rounded-8 col-12 d-flex  d-align-center ${styles["add-service"]}`}>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z" fill="#60606c"/>
                                </svg>
                                <input type="text" placeholder='Add a service'/>
                            </div>
                            <div className='d-flex d-flex-wrap gap-3 mt-5'>
                                <div className='d-flex d-align-center bg-blue-2 border rounded-4 pt-2 pb-2 pl-4 pr-4'>
                                    <h4 className='f-400 l-22 text-primary mr-4'>Cold</h4>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0704 12.1798C13.1878 12.2983 13.2536 12.4583 13.2536 12.6251C13.2536 12.7918 13.1878 12.9519 13.0704 13.0704C12.9509 13.1859 12.7913 13.2505 12.6251 13.2505C12.4589 13.2505 12.2992 13.1859 12.1798 13.0704L7.0001 7.88288L1.82041 13.0704C1.70095 13.1859 1.54127 13.2505 1.3751 13.2505C1.20892 13.2505 1.04925 13.1859 0.929785 13.0704C0.812422 12.9519 0.746582 12.7918 0.746582 12.6251C0.746582 12.4583 0.812422 12.2983 0.929785 12.1798L6.11729 7.00007L0.929785 1.82038C0.830121 1.69895 0.779188 1.54478 0.786895 1.38787C0.794601 1.23097 0.860395 1.08253 0.971479 0.971449C1.08256 0.860365 1.231 0.794571 1.3879 0.786865C1.54481 0.779158 1.69898 0.830091 1.82041 0.929755L7.0001 6.11726L12.1798 0.929755C12.3012 0.830091 12.4554 0.779158 12.6123 0.786865C12.7692 0.794571 12.9176 0.860365 13.0287 0.971449C13.1398 1.08253 13.2056 1.23097 13.2133 1.38787C13.221 1.54478 13.1701 1.69895 13.0704 1.82038L7.88291 7.00007L13.0704 12.1798Z" fill="#82829B"/>
                                    </svg>
                                </div>
                                <div className='d-flex d-align-center bg-blue-2 border rounded-4 pt-2 pb-2 pl-4 pr-4'>
                                    <h4 className='f-400 l-22 text-primary mr-4'>Fever</h4>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0704 12.1798C13.1878 12.2983 13.2536 12.4583 13.2536 12.6251C13.2536 12.7918 13.1878 12.9519 13.0704 13.0704C12.9509 13.1859 12.7913 13.2505 12.6251 13.2505C12.4589 13.2505 12.2992 13.1859 12.1798 13.0704L7.0001 7.88288L1.82041 13.0704C1.70095 13.1859 1.54127 13.2505 1.3751 13.2505C1.20892 13.2505 1.04925 13.1859 0.929785 13.0704C0.812422 12.9519 0.746582 12.7918 0.746582 12.6251C0.746582 12.4583 0.812422 12.2983 0.929785 12.1798L6.11729 7.00007L0.929785 1.82038C0.830121 1.69895 0.779188 1.54478 0.786895 1.38787C0.794601 1.23097 0.860395 1.08253 0.971479 0.971449C1.08256 0.860365 1.231 0.794571 1.3879 0.786865C1.54481 0.779158 1.69898 0.830091 1.82041 0.929755L7.0001 6.11726L12.1798 0.929755C12.3012 0.830091 12.4554 0.779158 12.6123 0.786865C12.7692 0.794571 12.9176 0.860365 13.0287 0.971449C13.1398 1.08253 13.2056 1.23097 13.2133 1.38787C13.221 1.54478 13.1701 1.69895 13.0704 1.82038L7.88291 7.00007L13.0704 12.1798Z" fill="#82829B"/>
                                    </svg>
                                </div>
                                <div className='d-flex d-align-center bg-blue-2 border rounded-4 pt-2 pb-2 pl-4 pr-4'>
                                    <h4 className='f-400 l-22 text-primary mr-4'>Allergy</h4>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0704 12.1798C13.1878 12.2983 13.2536 12.4583 13.2536 12.6251C13.2536 12.7918 13.1878 12.9519 13.0704 13.0704C12.9509 13.1859 12.7913 13.2505 12.6251 13.2505C12.4589 13.2505 12.2992 13.1859 12.1798 13.0704L7.0001 7.88288L1.82041 13.0704C1.70095 13.1859 1.54127 13.2505 1.3751 13.2505C1.20892 13.2505 1.04925 13.1859 0.929785 13.0704C0.812422 12.9519 0.746582 12.7918 0.746582 12.6251C0.746582 12.4583 0.812422 12.2983 0.929785 12.1798L6.11729 7.00007L0.929785 1.82038C0.830121 1.69895 0.779188 1.54478 0.786895 1.38787C0.794601 1.23097 0.860395 1.08253 0.971479 0.971449C1.08256 0.860365 1.231 0.794571 1.3879 0.786865C1.54481 0.779158 1.69898 0.830091 1.82041 0.929755L7.0001 6.11726L12.1798 0.929755C12.3012 0.830091 12.4554 0.779158 12.6123 0.786865C12.7692 0.794571 12.9176 0.860365 13.0287 0.971449C13.1398 1.08253 13.2056 1.23097 13.2133 1.38787C13.221 1.54478 13.1701 1.69895 13.0704 1.82038L7.88291 7.00007L13.0704 12.1798Z" fill="#82829B"/>
                                    </svg>
                                </div>
                                <div className='d-flex d-align-center bg-blue-2 border rounded-4 pt-2 pb-2 pl-4 pr-4'>
                                    <h4 className='f-400 l-22 text-primary mr-4'>Skin disease</h4>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0704 12.1798C13.1878 12.2983 13.2536 12.4583 13.2536 12.6251C13.2536 12.7918 13.1878 12.9519 13.0704 13.0704C12.9509 13.1859 12.7913 13.2505 12.6251 13.2505C12.4589 13.2505 12.2992 13.1859 12.1798 13.0704L7.0001 7.88288L1.82041 13.0704C1.70095 13.1859 1.54127 13.2505 1.3751 13.2505C1.20892 13.2505 1.04925 13.1859 0.929785 13.0704C0.812422 12.9519 0.746582 12.7918 0.746582 12.6251C0.746582 12.4583 0.812422 12.2983 0.929785 12.1798L6.11729 7.00007L0.929785 1.82038C0.830121 1.69895 0.779188 1.54478 0.786895 1.38787C0.794601 1.23097 0.860395 1.08253 0.971479 0.971449C1.08256 0.860365 1.231 0.794571 1.3879 0.786865C1.54481 0.779158 1.69898 0.830091 1.82041 0.929755L7.0001 6.11726L12.1798 0.929755C12.3012 0.830091 12.4554 0.779158 12.6123 0.786865C12.7692 0.794571 12.9176 0.860365 13.0287 0.971449C13.1398 1.08253 13.2056 1.23097 13.2133 1.38787C13.221 1.54478 13.1701 1.69895 13.0704 1.82038L7.88291 7.00007L13.0704 12.1798Z" fill="#82829B"/>
                                    </svg>
                                </div>
                                <div className='d-flex d-align-center bg-blue-2 border rounded-4 pt-2 pb-2 pl-4 pr-4'>
                                    <h4 className='f-400 l-22 text-primary mr-4'>Body aches</h4>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M13.0704 12.1798C13.1878 12.2983 13.2536 12.4583 13.2536 12.6251C13.2536 12.7918 13.1878 12.9519 13.0704 13.0704C12.9509 13.1859 12.7913 13.2505 12.6251 13.2505C12.4589 13.2505 12.2992 13.1859 12.1798 13.0704L7.0001 7.88288L1.82041 13.0704C1.70095 13.1859 1.54127 13.2505 1.3751 13.2505C1.20892 13.2505 1.04925 13.1859 0.929785 13.0704C0.812422 12.9519 0.746582 12.7918 0.746582 12.6251C0.746582 12.4583 0.812422 12.2983 0.929785 12.1798L6.11729 7.00007L0.929785 1.82038C0.830121 1.69895 0.779188 1.54478 0.786895 1.38787C0.794601 1.23097 0.860395 1.08253 0.971479 0.971449C1.08256 0.860365 1.231 0.794571 1.3879 0.786865C1.54481 0.779158 1.69898 0.830091 1.82041 0.929755L7.0001 6.11726L12.1798 0.929755C12.3012 0.830091 12.4554 0.779158 12.6123 0.786865C12.7692 0.794571 12.9176 0.860365 13.0287 0.971449C13.1398 1.08253 13.2056 1.23097 13.2133 1.38787C13.221 1.54478 13.1701 1.69895 13.0704 1.82038L7.88291 7.00007L13.0704 12.1798Z" fill="#82829B"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                        <div className='d-flex d-flex-wrap col-12 '>
                            <h4 className='f-600 l-26 col-12 text-black mt-5'>Experience</h4>
                            <div className='d-flex d-flex-wrap col-12 mt-5'>
                                <div className='col-4 d-flex d-flex-wrap'>
                                    <h6 className='f-600 l-20 text-secondary'>Duration(Select year and month)</h6>
                                    <div className='d-flex d-flex-wrap col-12'>
                                        <div className='col-6 d-flex d-flex-wrap'>
                                            <DropDown placeholder="Start month"/>
                                        </div>
                                        <div className='col-6 d-flex d-flex-wrap'>
                                            <div className='ml-3 col-12 d-flex d-flex-wrap'>
                                                <DropDown placeholder="Start year"/>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-4 d-flex d-flex-wrap'>
                                    <div className='ml-6 col-12 d-flex d-flex-wrap'>
                                        <h6 className='f-600 l-20 text-secondary'>Role</h6>
                                        <input type="text" placeholder='Select or add role'/>
                                    </div>
                                </div>
                                <div className='col-4 d-flex d-flex-wrap'>
                                    <div className='ml-6 col-12 d-flex d-flex-wrap'>
                                        <h6 className='f-600 l-20 text-secondary'>Select city</h6>
                                        <DropDown placeholder="Select your city"/>
                                    </div>
                                </div>
                            </div>
                            <label className='d-flex col-12'>Establishment name</label>
                            <input type="text" placeholder='Select or add title'/>
                            <div className='d-flex d-align-center mt-6 col-12'>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.375 10C19.375 10.2984 19.2565 10.5845 19.0455 10.7955C18.8345 11.0065 18.5484 11.125 18.25 11.125H11.125V18.25C11.125 18.5484 11.0065 18.8345 10.7955 19.0455C10.5845 19.2565 10.2984 19.375 10 19.375C9.70163 19.375 9.41548 19.2565 9.2045 19.0455C8.99353 18.8345 8.875 18.5484 8.875 18.25V11.125H1.75C1.45163 11.125 1.16548 11.0065 0.954505 10.7955C0.743526 10.5845 0.625 10.2984 0.625 10C0.625 9.70163 0.743526 9.41548 0.954505 9.2045C1.16548 8.99353 1.45163 8.875 1.75 8.875H8.875V1.75C8.875 1.45163 8.99353 1.16548 9.2045 0.954505C9.41548 0.743526 9.70163 0.625 10 0.625C10.2984 0.625 10.5845 0.743526 10.7955 0.954505C11.0065 1.16548 11.125 1.45163 11.125 1.75V8.875H18.25C18.5484 8.875 18.8345 8.99353 19.0455 9.2045C19.2565 9.41548 19.375 9.70163 19.375 10Z" fill="#3085F4"/>
                                </svg>
                                <h5 className='ml-2 f-600 l-20 text-primary'> ADD TIMING</h5>
                            </div>
                        </div>
                    </div>
                    <div className='col-11 mt-60 d-flex d-justify-end'>
                        <button className='col-3 btn btn-primary d-flex d-justify-center'>Save</button>
                    </div>
                </>}
            </div>          
            
        </div>
        
    </div>
  )
}
