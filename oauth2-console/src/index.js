import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'material-design-icons/iconfont/material-icons.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'
import Header from './js/header/header.js';
import Main from './js/main/main.js';

const OAuth2Console = () => (
  <div>
    <Header />
    <Main />
  </div>
);

// ========================================

ReactDOM.render(
(
    <BrowserRouter>
        <OAuth2Console />
    </BrowserRouter>
), document.getElementById('root')
);

