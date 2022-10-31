import React from 'react'
import Header from './Header'
import styles from './css/Finances.module.css'
import BillingTable from './BillingTable'
import DynamicDropdown from './DynamicDropdown'
const Finances = () => {
  return (
    <>
        <Header title="Billings"></Header>
        <div className={`${styles["wrapper"]}`}>
            <div className={`d-flex col-12 ${styles["revenue-graph-wrapper"]}`}>
                <div className={`col-9 ${styles["revenue-graph-col"]}`}>
                    <div className='d-flex d-align-center d-justify-space-between'>
                        <h3 className='l-28 f-500 text-secondary'>No of Revenue</h3>
                        <div className={`d-flex d-align-center ${styles["sorting-wrapper"]}`}>
                            <h5 className='text-grey-2 l-22 f-500'>Sort by:</h5>
                            <DynamicDropdown width="105px" color="#FFFFFF"></DynamicDropdown>
                        </div>
                    </div>
                </div>
                <div className={`col-3 d-flex d-flex-column ${styles["revenue-content-col"]}`}>
                    <div className={`d-flex d-flex-column  ${styles["revenue-content-col-1"]}`}>
                        <span className='h3 l-28 f-500'>Total Revenue earned</span>
                        <span className='text-green-4 h2 l-32 f-600'>$234</span>
                    </div>
                    <div className={`col-12 d-flex d-justify-space-between d-align-center ${styles["revenue-content-col-2"]}`}>
                        <span className='col-6 h5 l-28 f-500'>Total Revenue via online consultation</span>
                        <div className='col-6 d-flex d-flex-column d-align-end'>
                            <span className='text-green-4 h3 l-28 f-500'>$234</span>
                            <span className='text-green-4 font-10 l-14 f-500'>+$10 this week</span>
                        </div>
                    </div>
                    <div className={`col-12 d-flex d-justify-space-between d-align-center ${styles["revenue-content-col-3"]}`}>
                        <span className='col-6 h5 l-28 f-500'>Total Revenue via online consultation</span>
                        <div className='col-6 d-flex d-flex-column d-align-end'>
                            <span className='text-green-4 h3 l-28 f-500'>$234</span>
                            <span className='text-green-4 font-10 l-14 f-500'>+$10 this week</span>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='l-28 f-500 text-grey-3'>Personal</h3>
            <BillingTable></BillingTable>
        </div>
    </>
  )
}

export default Finances