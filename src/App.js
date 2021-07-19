import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
                <Header/>
                <Content store={props.store} dispatch={props.dispatch}/>
        </BrowserRouter>
    )
        ;
}
export default App;
