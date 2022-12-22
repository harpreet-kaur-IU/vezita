import { useRouter } from 'next/router';
import React, { Fragment, useState } from 'react'
import Base from '../layout/base';
import styles from '../modules/css/dashboard.module.css';
import DropDownWhite from '../modules/DropDownWhite';
import Header from '../modules/Header';
import dynamic from 'next/dynamic';
export default function Dashboard() {
    const Chart = dynamic(()=>import('react-apexcharts'),{ssr:false});
    const router = useRouter();
    const bookingHandler = () =>{
        router.push("/mycalendar")
    }
    const patientHandler = () =>{
        router.push("/addnewpatient")
    }
    const[chart,setChart] = useState({
        options: {
          chart: {
            id: 'apexchart-example'
          },
          xaxis: {
            categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999]
          }
        },
        series: [{
          name: 'series-1',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125]
        }]
    })
  return (

    <Fragment>
        <Base>
            <Header title="Doctors Dashboard"></Header>
            <div className="p-5" >
                <div className={styles["dashboard-tabs"]}>
                    <div className={`${styles["slots"]} rounded-12 d-flex `}>
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="52" height="52" rx="12" fill="#FF8651"/>
                            <path d="M30 28.3333C30 27.781 30.4477 27.3333 31 27.3333C31.5523 27.3333 32 27.781 32 28.3333V31.0933L34.3881 32.4733C34.8661 32.7495 35.0293 33.3616 34.7535 33.8397C34.4775 34.3181 33.8656 34.483 33.3872 34.2071L30 32.2533V28.3333ZM35.3333 20.6667H16.6667V35.3333H22.8933C22.32 34.12 22 32.76 22 31.3333C22 28.858 22.9833 26.484 24.7337 24.7337C26.484 22.9833 28.858 22 31.3333 22C32.76 22 34.12 22.32 35.3333 22.8933V20.6667ZM16.6667 38C15.9594 38 15.2811 37.719 14.781 37.2189C14.281 36.7188 14 36.0406 14 35.3333V16.6667C14 15.1867 15.1867 14 16.6667 14H18V12.3333C18 11.781 18.4477 11.3333 19 11.3333H19.6667C20.219 11.3333 20.6667 11.781 20.6667 12.3333V14H31.3333V12.3333C31.3333 11.781 31.781 11.3333 32.3333 11.3333H33C33.5523 11.3333 34 11.781 34 12.3333V14H35.3333C36.0406 14 36.7189 14.2809 37.219 14.781C37.719 15.2811 38 15.9594 38 16.6667V24.8C39.6533 26.48 40.6667 28.7867 40.6667 31.3333C40.6667 33.8087 39.6833 36.1826 37.933 37.933C36.1827 39.6833 33.8087 40.6667 31.3333 40.6667C28.7867 40.6667 26.48 39.6533 24.8 38H16.6667ZM31.3333 24.8667C29.6183 24.8667 27.9734 25.548 26.7607 26.7607C25.548 27.9734 24.8667 29.6183 24.8667 31.3333C24.8667 34.9067 27.76 37.8 31.3333 37.8C32.1825 37.8 33.0234 37.6327 33.808 37.3077C34.5926 36.9828 35.3055 36.5064 35.906 35.906C36.5064 35.3055 36.9828 34.5926 37.3078 33.808C37.6327 33.0234 37.8 32.1825 37.8 31.3333C37.8 27.76 34.9067 24.8667 31.3333 24.8667Z" fill="white"/>
                        </svg>
                        <div className='ml-5'>
                            <h6 className='f-500 l-20 text-grey-2'>No of slots available</h6>
                            <h2 className='f-600 l-32 text-secondary mt-1'>22</h2>
                        </div>
                    </div>
                    <div className={`${styles["requested"]} rounded-12 d-flex `}>
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="52" height="52" rx="12" fill="#19B46E"/>
                            <path d="M16.6667 39.3333H35.3333C36.804 39.3333 38 38.1373 38 36.6667V18C38 16.5293 36.804 15.3333 35.3333 15.3333H32.6667V12.6667H30V15.3333H22V12.6667H19.3333V15.3333H16.6667C15.196 15.3333 14 16.5293 14 18V36.6667C14 38.1373 15.196 39.3333 16.6667 39.3333ZM24.6667 34.552L19.724 29.6093L21.6093 27.724L24.6667 30.7813L30.3907 25.0573L32.276 26.9427L24.6667 34.552ZM16.6667 19.3333H35.3333V22H16.6667V19.3333Z" fill="white"/>
                        </svg>
                        <div className='ml-5'>
                            <h6 className='f-500 l-20 text-grey-2'>Accepted requests today</h6>
                            <h2 className='f-600 l-32 text-secondary mt-1'>14</h2>
                        </div>
                    </div>
                    <div className={`${styles["hide-patients"]} rounded-12 d-flex `}>
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="52" height="52" rx="12" fill="#D91F11"/>
                            <path d="M36 14H33V13C33 12.7348 32.8946 12.4804 32.7071 12.2929C32.5196 12.1054 32.2652 12 32 12C31.7348 12 31.4804 12.1054 31.2929 12.2929C31.1054 12.4804 31 12.7348 31 13V14H21V13C21 12.7348 20.8946 12.4804 20.7071 12.2929C20.5196 12.1054 20.2652 12 20 12C19.7348 12 19.4804 12.1054 19.2929 12.2929C19.1054 12.4804 19 12.7348 19 13V14H16C15.4696 14 14.9609 14.2107 14.5858 14.5858C14.2107 14.9609 14 15.4696 14 16V36C14 36.5304 14.2107 37.0391 14.5858 37.4142C14.9609 37.7893 15.4696 38 16 38H36C36.5304 38 37.0391 37.7893 37.4142 37.4142C37.7893 37.0391 38 36.5304 38 36V16C38 15.4696 37.7893 14.9609 37.4142 14.5858C37.0391 14.2107 36.5304 14 36 14ZM29.7125 31.2875C29.9003 31.4771 30.0056 31.7332 30.0056 32C30.0056 32.2668 29.9003 32.5229 29.7125 32.7125C29.5192 32.8939 29.265 32.9964 29 33C28.7345 32.9989 28.4795 32.896 28.2875 32.7125L26 30.4125L23.7125 32.7125C23.5192 32.8939 23.265 32.9964 23 33C22.7345 32.9989 22.4795 32.896 22.2875 32.7125C22.0997 32.5229 21.9944 32.2668 21.9944 32C21.9944 31.7332 22.0997 31.4771 22.2875 31.2875L24.5875 29L22.2875 26.7125C22.128 26.5182 22.0465 26.2715 22.0589 26.0205C22.0712 25.7694 22.1765 25.5319 22.3542 25.3542C22.5319 25.1765 22.7694 25.0712 23.0205 25.0589C23.2715 25.0465 23.5182 25.128 23.7125 25.2875L26 27.5875L28.2875 25.2875C28.4818 25.128 28.7285 25.0465 28.9795 25.0589C29.2306 25.0712 29.4681 25.1765 29.6458 25.3542C29.8235 25.5319 29.9288 25.7694 29.9411 26.0205C29.9535 26.2715 29.872 26.5182 29.7125 26.7125L27.4125 29L29.7125 31.2875ZM36 20H16V16H19V17C19 17.2652 19.1054 17.5196 19.2929 17.7071C19.4804 17.8946 19.7348 18 20 18C20.2652 18 20.5196 17.8946 20.7071 17.7071C20.8946 17.5196 21 17.2652 21 17V16H31V17C31 17.2652 31.1054 17.5196 31.2929 17.7071C31.4804 17.8946 31.7348 18 32 18C32.2652 18 32.5196 17.8946 32.7071 17.7071C32.8946 17.5196 33 17.2652 33 17V16H36V20Z" fill="white"/>
                        </svg>
                        <div className='ml-5'>
                            <h6 className='f-500 l-20 text-grey-2'>No of no show patients</h6>
                            <h2 className='f-600 l-32 text-secondary mt-1'>2</h2>
                        </div>
                    </div>
                    <div className={`${styles["show-patients"]} rounded-12 d-flex `}>
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="52" height="52" rx="12" fill="#3085F4"/>
                            <path d="M26.0006 20C25.1106 20 24.2406 19.7361 23.5005 19.2416C22.7605 18.7471 22.1837 18.0443 21.8432 17.2221C21.5026 16.3998 21.4134 15.495 21.5871 14.6221C21.7607 13.7492 22.1893 12.9474 22.8186 12.318C23.448 11.6887 24.2498 11.2601 25.1227 11.0865C25.9956 10.9128 26.9004 11.0019 27.7227 11.3425C28.5449 11.6831 29.2478 12.2599 29.7422 12.9999C30.2367 13.74 30.5006 14.61 30.5006 15.5C30.5006 16.091 30.3842 16.6761 30.1581 17.2221C29.9319 17.768 29.6005 18.2641 29.1826 18.682C28.7647 19.0998 28.2686 19.4313 27.7227 19.6575C27.1767 19.8836 26.5916 20 26.0006 20ZM36.4756 27.4375L31.5631 21.1125L31.4756 21.025C31.1514 20.6989 30.7657 20.4404 30.3408 20.2644C29.916 20.0885 29.4604 19.9986 29.0006 20H23.0006C22.5408 19.9986 22.0852 20.0885 21.6604 20.2644C21.2355 20.4404 20.8498 20.6989 20.5256 21.025L20.4381 21.1125L15.5256 27.4375C15.0565 27.9066 14.793 28.5428 14.793 29.2063C14.793 29.8697 15.0565 30.5059 15.5256 30.975C15.9947 31.4441 16.6309 31.7076 17.2944 31.7076C17.9578 31.7076 18.594 31.4441 19.0631 30.975L20.8256 29.6L18.3506 37.4375C18.0933 38.019 18.0709 38.6774 18.2881 39.275C18.5186 39.8986 18.9857 40.4062 19.5881 40.6875C19.8851 40.8284 20.2072 40.9086 20.5356 40.9237C20.8639 40.9387 21.192 40.8881 21.5006 40.775C22.0955 40.5522 22.5859 40.1154 22.8756 39.55L26.0006 34.625L29.1256 39.55C29.4153 40.1154 29.9057 40.5522 30.5006 40.775C30.7776 40.8732 31.0692 40.9239 31.3631 40.925C31.7266 40.9268 32.0858 40.8456 32.4131 40.6875C33.0155 40.4062 33.4826 39.8986 33.7131 39.275C33.9303 38.6774 33.9079 38.019 33.6506 37.4375L31.1756 29.6L32.9381 30.975C33.4072 31.4441 34.0434 31.7076 34.7069 31.7076C35.3703 31.7076 36.0065 31.4441 36.4756 30.975C36.9447 30.5059 37.2082 29.8697 37.2082 29.2063C37.2082 28.5428 36.9447 27.9066 36.4756 27.4375Z" fill="white"/>
                        </svg>
                        <div className='ml-5'>
                            <h6 className='f-500 l-20 text-grey-2'>No of show patients</h6>
                            <h2 className='f-600 l-32 text-secondary mt-1'>35</h2>
                        </div>
                    </div>
                    <div className={`${styles["revenue"]} rounded-12 d-flex `}>
                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="52" height="52" rx="12" fill="#F5C518"/>
                            <path d="M27.6667 24.5H26.1667V17.5H26.6667C27.5939 17.5033 28.4823 17.8731 29.1379 18.5288C29.7936 19.1844 30.1634 20.0728 30.1667 21C30.1667 21.3978 30.3247 21.7794 30.606 22.0607C30.8873 22.342 31.2689 22.5 31.6667 22.5C32.0645 22.5 32.446 22.342 32.7273 22.0607C33.0087 21.7794 33.1667 21.3978 33.1667 21C33.1667 19.2761 32.4819 17.6228 31.2629 16.4038C30.0439 15.1848 28.3906 14.5 26.6667 14.5H26.1667V13C26.1667 12.6022 26.0087 12.2206 25.7273 11.9393C25.446 11.658 25.0645 11.5 24.6667 11.5C24.2689 11.5 23.8873 11.658 23.606 11.9393C23.3247 12.2206 23.1667 12.6022 23.1667 13V14.5H22.1667C20.4428 14.5 18.7895 15.1848 17.5705 16.4038C16.3515 17.6228 15.6667 19.2761 15.6667 21C15.6667 22.7239 16.3515 24.3772 17.5705 25.5962C18.7895 26.8152 20.4428 27.5 22.1667 27.5H23.1667V34.5H21.6667C20.7394 34.4967 19.8511 34.1269 19.1955 33.4712C18.5398 32.8156 18.17 31.9272 18.1667 31C18.1667 30.6022 18.0087 30.2206 17.7273 29.9393C17.446 29.658 17.0645 29.5 16.6667 29.5C16.2689 29.5 15.8873 29.658 15.606 29.9393C15.3247 30.2206 15.1667 30.6022 15.1667 31C15.1667 32.7239 15.8515 34.3772 17.0705 35.5962C18.2895 36.8152 19.9428 37.5 21.6667 37.5H23.1667V39C23.1667 39.3978 23.3247 39.7794 23.606 40.0607C23.8873 40.342 24.2689 40.5 24.6667 40.5C25.0645 40.5 25.446 40.342 25.7273 40.0607C26.0087 39.7794 26.1667 39.3978 26.1667 39V37.5H27.6667C29.3906 37.5 31.0439 36.8152 32.2629 35.5962C33.4819 34.3772 34.1667 32.7239 34.1667 31C34.1667 29.2761 33.4819 27.6228 32.2629 26.4038C31.0439 25.1848 29.3906 24.5 27.6667 24.5ZM22.1667 24.5C21.2384 24.5 20.3482 24.1313 19.6918 23.4749C19.0354 22.8185 18.6667 21.9283 18.6667 21C18.6667 20.0717 19.0354 19.1815 19.6918 18.5251C20.3482 17.8687 21.2384 17.5 22.1667 17.5H23.1667V24.5H22.1667ZM27.6667 34.5H26.1667V27.5H27.6667C28.5949 27.5 29.4852 27.8687 30.1416 28.5251C30.7979 29.1815 31.1667 30.0717 31.1667 31C31.1667 31.9283 30.7979 32.8185 30.1416 33.4749C29.4852 34.1313 28.5949 34.5 27.6667 34.5Z" fill="white"/>
                        </svg>
                        <div className='ml-5'>
                            <h6 className='f-500 l-20 text-grey-2'>Today revenue</h6>
                            <h2 className='f-600 l-32 text-secondary mt-1'>$175</h2>
                        </div>
                        
                    </div>
                </div>
                <div className='d-flex d-justify-end gap-2 mt-10'>
                    <div className='border-none bg-primary d-flex d-align-center pt-2 pb-2 pl-5 pr-5 rounded-100'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z" fill="white"/>
                        </svg>
                        <h5 onClick={bookingHandler} className='cursor-pointer ml-2 f-500 l-22 text-white'>Add new booking</h5>
                    </div>
                    <div className='border-none bg-primary d-flex d-align-center pt-2 pb-2 pl-5 pr-5 rounded-100'>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.8125 8C15.8125 8.24864 15.7137 8.4871 15.5379 8.66291C15.3621 8.83873 15.1236 8.9375 14.875 8.9375H8.9375V14.875C8.9375 15.1236 8.83873 15.3621 8.66291 15.5379C8.4871 15.7137 8.24864 15.8125 8 15.8125C7.75136 15.8125 7.5129 15.7137 7.33709 15.5379C7.16127 15.3621 7.0625 15.1236 7.0625 14.875V8.9375H1.125C0.87636 8.9375 0.637903 8.83873 0.462087 8.66291C0.286272 8.4871 0.1875 8.24864 0.1875 8C0.1875 7.75136 0.286272 7.5129 0.462087 7.33709C0.637903 7.16127 0.87636 7.0625 1.125 7.0625H7.0625V1.125C7.0625 0.87636 7.16127 0.637903 7.33709 0.462087C7.5129 0.286272 7.75136 0.1875 8 0.1875C8.24864 0.1875 8.4871 0.286272 8.66291 0.462087C8.83873 0.637903 8.9375 0.87636 8.9375 1.125V7.0625H14.875C15.1236 7.0625 15.3621 7.16127 15.5379 7.33709C15.7137 7.5129 15.8125 7.75136 15.8125 8Z" fill="white"/>
                        </svg>
                        <h5 onClick={patientHandler} className='cursor-pointer ml-2 f-500 l-22 text-white'>Add new patient</h5>
                    </div>
                </div>
                <div className='d-flex d-flex-wrap box-border mt-7 d-justify-space-between'>
                    <div className={`col-7 pr-2  box-border`}>
                        <div className='bg-grey-7 p-5 rounded-12'>
                            <div className='d-flex d-flex-wrap d-align-center d-justify-space-between'>
                                <h3 className='f-500 l-28 text-black col-9'>Total revenue</h3>
                                <div className='d-flex d-align-center gap-2 col-2'>
                                    <h5 className='f-500 l-22 text-grey-2 mr-1 d-flex'>Sortby: </h5>
                                    <DropDownWhite placeholder="Daily"></DropDownWhite>
                                </div>
                            </div>
                            <Chart options={chart.options} series={chart.series} type="line" />
                        </div>
                    </div>
                    <div className={`col-5 pl-2 box-border`}>
                        <div className='bg-grey-7 p-5 rounded-12'>
                            <h3 className='f-500 l-28 text-black'>Today, 18th Feb, 2022</h3>
                        </div>
                    </div>
                </div>
            </div>
        </Base>
    </Fragment>
  )
}
