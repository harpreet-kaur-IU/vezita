import React from 'react'
import styles from "./css/fileuploader.module.css";
import { useState, useRef, useEffect } from 'react'; 

export default function FileUploader(props) {
    const [file, setFile] = useState(null);
    const [isUploaded, setIsUploaded] = useState(props.uploaded);
    const [url,setUrl] = useState(props.fileAdded);
    const fileRef = useRef(null);
    const coverHandler = (e) => {
        setFile(e.target.files[0]);
    }

    const backImage = {
        backgroundImage: isUploaded?`url("${url}")`:"unset",
        backgroundSize:"cover",
        backgroundPosition:"center",
        backgroundRepeat:"no-repeat",
    }

    return (
        <div className={`${styles["profile-picture-upload"]} d-flex d-align-center d-justify-center cursor-pointer`} style={backImage}>
            {!isUploaded &&  <>
                    <svg width="41" height="51" viewBox="0 0 41 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M34.885 30.5C35.6236 30.5 36.3549 30.6455 37.0372 30.9282C37.7195 31.2109 38.3395 31.6253 38.8616 32.1477C39.3837 32.67 39.7978 33.2901 40.0802 33.9726C40.3627 34.655 40.5078 35.3864 40.5075 36.125V38.42C40.5067 39.8528 40.0584 41.2495 39.225 42.415C35.3625 47.825 29.05 50.5025 20.5 50.5025C11.9475 50.5025 5.64001 47.8225 1.78501 42.4125C0.955325 41.2475 0.509633 39.8527 0.51001 38.4225V36.1225C0.510009 34.6322 1.10169 33.2028 2.15503 32.1486C3.20838 31.0943 4.6372 30.5013 6.12751 30.5H34.8825H34.885ZM20.5 0.512497C22.1415 0.512497 23.767 0.835818 25.2836 1.464C26.8001 2.09219 28.1781 3.01293 29.3388 4.17366C30.4996 5.33439 31.4203 6.71238 32.0485 8.22895C32.6767 9.74552 33 11.371 33 13.0125C33 14.654 32.6767 16.2795 32.0485 17.796C31.4203 19.3126 30.4996 20.6906 29.3388 21.8513C28.1781 23.0121 26.8001 23.9328 25.2836 24.561C23.767 25.1892 22.1415 25.5125 20.5 25.5125C17.1848 25.5125 14.0054 24.1955 11.6612 21.8513C9.31697 19.5071 8.00001 16.3277 8.00001 13.0125C8.00001 9.69729 9.31697 6.51787 11.6612 4.17366C14.0054 1.82946 17.1848 0.512497 20.5 0.512497Z" fill="#82829B"/>
                    </svg>
                </>
            }
            {isUploaded && <>
                <span className={`ml-2 f-600 font-14 l-20 ${styles["upload-message"]}`}>
                    <span>Change thumbnail </span>
                </span>
            </>}
            <input 
                type='file'
                ref={fileRef}
                multiple={false}
                onChange={coverHandler}
                className={`${styles["upoader"]}`} 
            />
           
        </div>
    )
}
