import React from 'react';
import User from "../user/User";
import Input from "../Input/Input";
import Buttondiv from "../../components/Buttondiv/Buttondiv";
import Example from "../../components/Example/Example";

const MainPage = () => {
    return (
        <React.Fragment>
            <h1>Hello</h1>
            <p>My name is Maulen, nice to meet you!</p>
            <User name={"Maulen"} age={18}/>
            <Input/>
            <User name={"Dima"} age={19}/>
            <User name={"Eren"} age={18}/>
            <Buttondiv/>
            <Example>
                <p style={{color: "gray", fontSize: "18px"}}>Lorem ipsum dolor sit amet.</p>
            </Example>

        </React.Fragment>
    );
};

export default MainPage;