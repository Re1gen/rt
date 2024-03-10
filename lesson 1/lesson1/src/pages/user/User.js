import React from 'react';
import classes from "./Usr.module.css";
const User = ({name, age}) => {
    // const users ={
    //     name: "Maulen",
    //     age: 18
    //
    // }
    console.log(name, age)
    return (
        <div>
            <p className={classes.user}>User: {name}</p>
            <p className="user">User: {name}</p>
            <p className={classes.age}>age: {age}</p>

        </div>
    );
};

export default User;