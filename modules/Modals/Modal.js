import styles from '../css/Modal.module.css';

function Modal(props){
    return (
        <div className={`${styles["modal-container"]}`}>
            <div className={`${styles[props.modalClass]}`}>
                <div className={`${styles["modal-content"]}`}>
                    {props.children}
                </div>
            </div>
        </div>
    );
}
export default Modal;