import React from 'react'
import styles from './css/FiltersTab.module.css'
const FiltersTab = () => {
  return (
    <div className={`d-flex d-align-center d-justify-space-between ${styles["filters-wrapper"]}`}>
        <div className='d-flex d-align-center'>
            <div className={`d-flex ${styles["autobooking-wrapper"]}`}>
                <img src='info-fill-icon.png'></img>
                <h4 className='f-400 l-26'>Autobooking:</h4>
                <div className='d-flex d-justify-center'>
                <label className={`${styles["rectangle"]}`}>
                    <input type="checkbox"/> 
                    <span className={`${styles["toggle"]}`}></span>
                </label>
                </div>
            </div>

            <div className={`d-flex d-align-center cursor-pointer ${styles["time-dropdown"]}`}>
                <h5 className='f-400 l-22'>Time : Last 30 days</h5>
                <img src='down-arrow.png'></img>
            </div>
        </div>

        <div className={`d-flex d-align-center ${styles["search-bar-filter-wrapper"]}`}>
            <div className={`d-flex d-align-center rounded-16 ${styles['search-wrapper']}`}>
                <img src='search-icon.png'></img>
                <form>
                    <input className='col-12' type="text" placeholder='Search'/>
                </form>
            </div>
            <div className={`cursor-pointer d-flex d-align-center d-justify-center ${styles["filter-icon"]}`}>
                <img src='filter-icon.png'></img>
            </div>
        </div>
    </div>
  )
}

export default FiltersTab