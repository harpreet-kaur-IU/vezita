import React from 'react'
import { HashLoader} from 'react-spinners';
import styles from './css/Modal.module.css'
const Loader = () => {
  return (
    <div className={`${styles["loader-modal-container"]} d-flex d-align-center d-justify-center`}>
        <HashLoader size={150} color="#3085F4"></HashLoader>
    </div>
  )
}

export default Loader