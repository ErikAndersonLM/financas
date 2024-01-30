import React, { useState, useEffect } from "react";
import Global from "./styles/global"
import Header from "./components/Header/index";
import Resume from "./components/Resume";
import Form from "./components/Form/index";

export default function App(){

    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    );
    const [income, setIncome] = useState(0);

    return(
        <>
        <Header />
        <Resume />
        <Form />
        <Global />
        </>
    )
}