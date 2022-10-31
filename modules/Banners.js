import React from 'react'
import Headers from './Header'
import styles from './css/Banners.module.css'
const Banners = () => {
  return (
    <>
        <Headers title="Banners"></Headers>
        <div className={`col-4 ${styles["banner-wrapper"]}`}>
            <h6 className='l-20 f-600 text-secondary'>Upload an image (JPG, PNG, SVG)</h6>
            <div className={`d-flex d-align-center d-justify-center ${styles["upload-banner"]}`}>
                <input type="file"></input>
                <img src='file-upload.png'></img>
                <h5 className='l-22 f-400 text-secondary'>Upload banner</h5>
            </div>
            <div className={`${styles["note-wrapper"]}`}>
                <span className='h6 l-20 f-400'>Note: Once admin accepts your banner the charges will be debited automatically.</span>
            </div>
        </div>
    </>
  )
}

export default Banners