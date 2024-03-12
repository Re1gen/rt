import React from 'react';
import classes from "./Button.module.css";

const Button = ({children, handleShow}) => {
    return (
        <button onClick={handleShow} className={classes.button}>
            {children}
        </button>
    );
};

export default Button;