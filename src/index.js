import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';

let loader = document.getElementById("loader");

window.addEventListener('load', function () {
  const myTimeout = setTimeout(() => {
    loader.style.display = "none";
  }, 2000);
})

ReactDOM.render(
  <App />
  , document.getElementById('root')
);
