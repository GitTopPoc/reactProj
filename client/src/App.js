import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import {BrowserRouter} from "react-router-dom";

const App = (props) => {
    return (
        <BrowserRouter>
            <Header store={props.store} dispatch={props.dispatch}/>
            <Content store={props.store} dispatch={props.dispatch}/>
        </BrowserRouter>
    )
        ;
}
export default App;
