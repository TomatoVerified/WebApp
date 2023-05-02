import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
/*
NOTES:
- index.js and App.js were the main ones
- functions and classes and stuff we create are referred to as components
- <App/> is a component 
- this app thing is getting rendered inside the "root" thing up there ^
- there is a root div inside the public --> index.html file
- we are basically injecting the app thing inside the root div in index.html
- 
*/
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals