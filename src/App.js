import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import ms from "./components/Main_styles/ms.module.css";
import {BrowserRouter} from "react-router-dom";

function App(props) {
    return (
        <BrowserRouter>
            <div>
                <Header/>
                <Content messageData={props.messageData} dialogsdata={props.dialogsData} posts={props.posts}/>
            </div>
        </BrowserRouter>
    )
        ;
}

export default App;
