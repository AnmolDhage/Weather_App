import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App.jsx';

var loader = document.getElementById("loader");

  window.addEventListener("load", function () {
    loader.style.display = "none";
});


ReactDOM.render(
  <App />
  , document.getElementById('root')
);
