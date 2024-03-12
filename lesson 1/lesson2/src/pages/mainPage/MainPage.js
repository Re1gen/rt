import React, {useState} from 'react';
import Modal from "../../components/modal/modal";
import Input from "../../components/input/Input";
import Header from "../../components/header/Header";
import {logDOM} from "@testing-library/react";
import List from "../../components/List/List";
import Button from "../../components/button/Button";

const MainPage = () => {
    const navBar = ['Main', 'Contacts', 'About us']
    // let show = false
    // console.log(show)
    const [show, setShow] = useState(false)
    const handleShow = () =>{
       setShow(!show)
    }
    const handleChange = (event) =>{
        setInputValue(event.target.value)
    }
    const [inputValue, setInputValue] = useState('')


    //HW2
    const myDay = [
        {
            id:1 ,
            title: 'coding',
            completed: false
        },
        {
            id:2,
            title: 'eat',
            completed: false
        },
        {
            id:3,
            title: 'sleep',
            completed: false
        }
    ]

    return (
        <>
            {
                show &&
                <Modal handleShow={handleShow}>
                    <h1>Modal</h1>

                    {/*<input type={'text'}*/}
                    {/*onChange={(event => setInputValue(event.target.value))}/>*/}
                    <Input type={'text'}
                           handleChange={handleChange}
                    value={inputValue}/>
                    <p>{inputValue}</p>
                    <Button handleShow={handleShow}>
                            <p>Close modal</p>
                    </Button>
                </Modal>

            }
            <Button handleShow={handleShow}>
                Open modal
            </Button>
            <Header navBar={navBar}/>

            <h1>Hello</h1>
            <p>My name is Maulen, nice to meet you!</p>
            <h2>My day:</h2>
            <List myDay={myDay}/>


        </>
    );
};

export default MainPage;