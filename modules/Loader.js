import React from 'react'
import { RingLoader} from 'react-spinners';
import styles from './css/Modal.module.css'
const Loader = () => {
  return (
    <div className={`${styles["loader-modal-container"]} d-flex d-align-center d-justify-center`}>
        <RingLoader size={100} color="#3085F4"></RingLoader>
    </div>
  )
}

export default Loader