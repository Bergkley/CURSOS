import React from 'react'
import styles from "./Modal.module.css";

interface Props {
    children: React.ReactNode;
    title: string;
  }

const Modal = ({ children, title }: Props) => {
  return (
    <div id="modal" className="hide">
      <div className={styles.fade} onClick={closeModal}></div>
      <div className={styles.modal}>
        <h2>{title}</h2>
        {children}
      </div>
    </div>
  )
}

export default Modal