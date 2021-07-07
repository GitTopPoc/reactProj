import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
let messageData = [
    {id:1, message:'Hey'},
    {id:1, message:'Ew'},
    {id:1, message:'OOO'},
    {id:1, message:'XXX'}
]
let dialogsData = [
    {id:1, name:'User1'},
    {id:2, name:'User2'},
    {id:3, name:'User3'},
    {id:4, name:'User4'},
    {id:5, name:'User5'},
]
let posts = [
    {id: 1, message: 'Hey there'},
    {id: 2, message: 'Hello'},
    {id: 3, message: 'Zdarova'},
    {id: 4, message: 'Privet'},
    {id: 5, message: 'Message'},
]
ReactDOM.render(
  <React.StrictMode>
    <App messageData={messageData} dialogsData={dialogsData} posts={posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
