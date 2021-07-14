import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Content store={props.store} dispatch={props.dispatch}/>
            </div>
        </BrowserRouter>
    )
        ;
}
export default App;
