import React from 'react';
import classes from "./Input.module.css";
const Input = ({type = 'text', placeholder, handleChange, value}) => {
    return (
        <input
            className={classes.input}
            value={value}
            type={type}
            placeholder={placeholder}
            onChange={handleChange}
        />
    );
};

export default Input;