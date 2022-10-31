import React from 'react'
import Header from './Header'
import styles from './css/HelpAndSupport.module.css'
const HelpAndSupport = () => {
  return (
    <>
        <Header title="Help & Support"></Header>
        <div className={`${styles["help-and-support"]}`}>
            <div className={`${styles["search-bar-wrapper"]}`}>
                <input type="text"></input>
            </div>
        </div>
    </>
  )
}

export default HelpAndSupport