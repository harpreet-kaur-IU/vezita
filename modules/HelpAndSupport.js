import React from 'react'
import Header from './Header'
import styles from './css/HelpAndSupport.module.css'
import FAQ from './FAQ'
const HelpAndSupport = () => {
  return (
    <>
        <Header title="Help & Support"></Header>
        <div className={`d-flex d-align-start ${styles["help-and-support"]}`}>
          <div className={`col-6`}>
            <div className={`d-flex d-flex-row gap-2  ${styles["search-bar-wrapper"]}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.775 20.6848L17.6204 16.539C19.0867 14.793 19.8225 12.5481 19.6742 10.2727C19.5259 7.99733 18.5051 5.86701 16.8247 4.32609C15.1442 2.78517 12.9338 1.95262 10.6546 2.00208C8.37531 2.05155 6.20313 2.9792 4.59107 4.59157C2.97901 6.20394 2.05154 8.37653 2.00208 10.6562C1.95263 12.9359 2.78502 15.1467 4.32565 16.8275C5.86627 18.5083 7.99618 19.5293 10.2712 19.6776C12.5461 19.8259 14.7905 19.09 16.5362 17.6234L20.6812 21.7788C20.8279 21.9207 21.024 22 21.2281 22C21.4322 22 21.6283 21.9207 21.775 21.7788C21.9191 21.6332 22 21.4366 22 21.2318C22 21.0269 21.9191 20.8303 21.775 20.6848ZM3.57356 10.8673C3.57356 9.42483 4.00123 8.01471 4.80249 6.8153C5.60376 5.61589 6.74263 4.68107 8.07509 4.12904C9.40754 3.57701 10.8737 3.43258 12.2883 3.714C13.7028 3.99542 15.0021 4.69006 16.0219 5.71007C17.0418 6.73008 17.7363 8.02966 18.0176 9.44446C18.299 10.8593 18.1546 12.3257 17.6027 13.6584C17.0507 14.9912 16.1161 16.1302 14.9169 16.9317C13.7177 17.7331 12.3079 18.1608 10.8656 18.1608C8.93244 18.1583 7.07915 17.3891 5.71216 16.0218C4.34518 14.6546 3.57609 12.8009 3.57356 10.8673Z" fill="#7F8C8D"/>
              </svg>
              <input className='col-12' type="text" placeholder='Search for queries'></input>
            </div>
            <FAQ 
              title="Aliquet risus feugiat in ante"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
            />
            <FAQ 
              title="Aliquet risus feugiat in ante"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
            />
            <FAQ 
              title="Aliquet risus feugiat in ante"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
            />
            <FAQ 
              title="Aliquet risus feugiat in ante"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
            />
            <FAQ 
              title="Aliquet risus feugiat in ante"
              content="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
            />
          </div>
          <div className={`col-4 ${styles["query-box"]}`}>
            <h3 className='f-500 l-28'>Can’t find your query here? Send a message to us and get your query resolved</h3>
            <div className={`cursor-pointer d-flex d-align-center gap-2 mt-6 ${styles["message-btn"]}`}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M11.9998 2.25C10.3065 2.24987 8.64231 2.69074 7.17116 3.52921C5.70002 4.36768 4.4726 5.57483 3.60977 7.03182C2.74693 8.4888 2.27842 10.1454 2.25036 11.8385C2.22231 13.5315 2.63567 15.2027 3.44976 16.6875L2.65289 19.4906C2.57794 19.7486 2.57318 20.0218 2.63911 20.2822C2.70503 20.5426 2.83924 20.7807 3.02789 20.9719C3.21653 21.1614 3.45296 21.2964 3.7121 21.3624C3.97124 21.4284 4.24342 21.4231 4.49976 21.3469L7.31226 20.55C8.61566 21.2644 10.0651 21.6713 11.5499 21.7397C13.0346 21.8081 14.5154 21.5361 15.8789 20.9445C17.2424 20.353 18.4527 19.4575 19.4171 18.3266C20.3816 17.1956 21.0747 15.8592 21.4435 14.4193C21.8123 12.9795 21.847 11.4744 21.5451 10.0191C21.2431 8.56374 20.6124 7.19672 19.7011 6.02249C18.7899 4.84826 17.6223 3.8979 16.2875 3.24406C14.9527 2.59022 13.4861 2.25021 11.9998 2.25ZM7.49976 13.125C7.27726 13.125 7.05975 13.059 6.87475 12.9354C6.68974 12.8118 6.54555 12.6361 6.4604 12.4305C6.37525 12.225 6.35297 11.9988 6.39638 11.7805C6.43979 11.5623 6.54693 11.3618 6.70427 11.2045C6.8616 11.0472 7.06206 10.94 7.28029 10.8966C7.49852 10.8532 7.72472 10.8755 7.93028 10.9606C8.13585 11.0458 8.31155 11.19 8.43517 11.375C8.55878 11.56 8.62476 11.7775 8.62476 12C8.62476 12.2984 8.50624 12.5845 8.29526 12.7955C8.08428 13.0065 7.79813 13.125 7.49976 13.125ZM11.9998 13.125C11.7773 13.125 11.5598 13.059 11.3747 12.9354C11.1897 12.8118 11.0455 12.6361 10.9604 12.4305C10.8752 12.225 10.853 11.9988 10.8964 11.7805C10.9398 11.5623 11.0469 11.3618 11.2043 11.2045C11.3616 11.0472 11.5621 10.94 11.7803 10.8966C11.9985 10.8532 12.2247 10.8755 12.4303 10.9606C12.6358 11.0458 12.8115 11.19 12.9352 11.375C13.0588 11.56 13.1248 11.7775 13.1248 12C13.1248 12.2984 13.0062 12.5845 12.7953 12.7955C12.5843 13.0065 12.2981 13.125 11.9998 13.125ZM16.4998 13.125C16.2773 13.125 16.0598 13.059 15.8747 12.9354C15.6897 12.8118 15.5455 12.6361 15.4604 12.4305C15.3753 12.225 15.353 11.9988 15.3964 11.7805C15.4398 11.5623 15.5469 11.3618 15.7043 11.2045C15.8616 11.0472 16.0621 10.94 16.2803 10.8966C16.4985 10.8532 16.7247 10.8755 16.9303 10.9606C17.1358 11.0458 17.3115 11.19 17.4352 11.375C17.5588 11.56 17.6248 11.7775 17.6248 12C17.6248 12.2984 17.5062 12.5845 17.2953 12.7955C17.0843 13.0065 16.7981 13.125 16.4998 13.125Z" fill="white"/>
              </svg>
              <h5 className='f-600 l-22 text-white'>Message</h5>
            </div>
          </div>
        </div>
    </>
  )
}

export default HelpAndSupport