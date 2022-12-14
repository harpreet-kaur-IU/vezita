import React,{useState} from 'react'
import style from './css/HelpAndSupport.module.css'
const FAQ = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);
  
    return ( 
        <div>
            <div className={`d-flex d-flex-column d-justify-space-between mt-8 ${style["faq-accordian-item-wrapper"]}`}>
                <div className='d-flex d-justify-space-between'>
                    <h5 className='d-inline f-500 l-22 text-secondary'>{title}</h5>
                    {isActive?
                    
                        <svg className='cursor-pointer'  onClick={() => setIsActive(!isActive)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M16.25 13.4378C16.0015 13.4368 15.7632 13.3387 15.586 13.1644L10 7.57847L4.4141 13.1644C4.23798 13.3405 3.99911 13.4395 3.75004 13.4395C3.50097 13.4395 3.2621 13.3405 3.08598 13.1644C2.90986 12.9883 2.81091 12.7494 2.81091 12.5003C2.81091 12.2513 2.90986 12.0124 3.08598 11.8363L9.33598 5.58629C9.42307 5.49889 9.52657 5.42954 9.64052 5.38222C9.75448 5.3349 9.87665 5.31055 10 5.31055C10.1234 5.31055 10.2456 5.3349 10.3596 5.38222C10.4735 5.42954 10.577 5.49889 10.6641 5.58629L16.9141 11.8363C17.0015 11.9234 17.0708 12.0269 17.1182 12.1408C17.1655 12.2548 17.1898 12.377 17.1898 12.5003C17.1898 12.6237 17.1655 12.7459 17.1182 12.8599C17.0708 12.9738 17.0015 13.0773 16.9141 13.1644C16.7369 13.3387 16.4986 13.4368 16.25 13.4378Z" fill="#9B56EC"/>
                        </svg>
                        :
                        <svg className='cursor-pointer'  onClick={() => setIsActive(!isActive)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.74996 6.56215C3.9985 6.56323 4.23679 6.66135 4.41402 6.83559L9.99996 12.4215L15.5859 6.83559C15.762 6.65947 16.0009 6.56053 16.25 6.56053C16.499 6.56053 16.7379 6.65947 16.914 6.83559C17.0901 7.01171 17.1891 7.25058 17.1891 7.49965C17.1891 7.74872 17.0901 7.98759 16.914 8.16371L10.664 14.4137C10.5769 14.5011 10.4734 14.5705 10.3595 14.6178C10.2455 14.6651 10.1233 14.6895 9.99996 14.6895C9.87657 14.6895 9.7544 14.6651 9.64044 14.6178C9.52649 14.5705 9.423 14.5011 9.3359 14.4137L3.0859 8.16372C2.9985 8.07662 2.92915 7.97313 2.88183 7.85917C2.83452 7.74522 2.81016 7.62304 2.81016 7.49965C2.81016 7.37626 2.83452 7.25409 2.88183 7.14014C2.92915 7.02618 2.9985 6.92269 3.0859 6.83559C3.26314 6.66135 3.50142 6.56323 3.74996 6.56215Z" fill="#9B56EC"/>
                        </svg>

                    }
                </div>
                {isActive && <div className='mt-3 mb-3'>
                    <h5 className='f-400 l-22 text-grey-2'>{content}</h5>    
                </div>}
            </div>
            
        </div>
    );
};
export default FAQ