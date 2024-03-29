import React from 'react';
import classes from "./modal.module.css";
const Modal = ({children, handleShow}) => {
    return (
        <>
            <div className={classes.modalWrapper}></div>
            <div className={classes.modalContent}>
                {children}

            </div>
        </>
    );
};

export default Modal;