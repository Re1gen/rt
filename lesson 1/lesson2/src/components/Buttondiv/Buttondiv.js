import React from 'react';
import Button from "../button/Button";
import classes from "./Buttondiv.module.css";

const Buttondiv = () => {
    return (
        <div className={classes.buttons}>
            <Button title={"Save me"}/>
            <Button title={"pls"}/>
            <Button title={"Save!!"}/>
        </div>
    );
};

export default Buttondiv;