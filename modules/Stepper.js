import React from 'react'
import styles from './css/stepper.module.css'
export default function Stepper(props) {
    const val = props.title;
    const arr = [];
    for(let i=0 ; i < val ; i++){
        arr.push(i);
    }
    for(let i = 0;i<=arr.length;i++){
        arr[i]
    }
  return (
    
    <div className={`d-flex d-align-center ${styles["stepper-wrapper"]}`}>
        {arr.map((item) => 
            <>
                {item < props.active && 
                    <div className={`${styles["stepper"]} d-flex d-align-center bg-primary d-justify-center border-bold-primary`}>
                        <svg width="18" height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17.6426 0.302567C18.0968 0.726505 18.1214 1.43839 17.6974 1.89261L7.19744 13.1426C6.98927 13.3657 6.69944 13.4946 6.39439 13.4998C6.08934 13.5051 5.79524 13.3862 5.57951 13.1705L0.329505 7.9205C-0.109835 7.48116 -0.109835 6.76885 0.329505 6.32951C0.768845 5.89017 1.48116 5.89017 1.9205 6.32951L6.3471 10.7561L16.0526 0.357396C16.4765 -0.0968233 17.1884 -0.121371 17.6426 0.302567Z" fill="white"/>
                        </svg>
                    </div>
                }
                {item == props.active &&
                    <div className={`${styles["stepper"]} d-flex d-align-center bg-blue-2 border-bold-primary d-justify-center`}>
                        {item+1}
                    </div>    
                }
                {item > props.active &&
                    <div className={`${styles["stepper"]} d-flex d-align-center bg-blue-2 border-bold-white d-justify-center`}>
                        {item+1}
                    </div>    
                }
                {item < props.active && 
                    <svg width="55" height="4" viewBox="0 0 55 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="55" height="4" fill="#3085f4"/>
                    </svg>
                }
                {item >= props.active && item != arr.length-1 &&
                    <svg width="55" height="4" viewBox="0 0 55 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="55" height="4" fill="#D6E7FD"/>
                    </svg>
                }
            </>
        )}
    </div>
  )
}
