import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let posts = [
    {id: '1', message: 'Hi, how are you?', likesCount: '15'},
    {id: '2', message: 'It"s my first post.', likesCount: '7'},
    {id: '3', message: 'It"s my second post.', likesCount: '1'},
]

let dialogs = [
    {id: '1', name: 'Yurii'},
    {id: '2', name: 'Vlad'},
    {id: '3', name: 'Ihor'},
    {id: '4', name: 'Stas'},
    {id: '5', name: 'Vitaliy'},
    {id: '6', name: 'Andriy'},
    {id: '7', name: 'Roman'}
]

let message = [
    {id: '1', message: 'Hi'},
    {id: '2', message: 'How are you?'},
    {id: '3', message: 'What are you working on?'}
]

ReactDOM.render(

  <React.StrictMode>
    <App posts={posts} dialogs={dialogs} message={message}/>
  </React.StrictMode>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
