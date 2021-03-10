import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
//Rotas
import Routers from './routers';

console.log(process.env);

ReactDOM.render(
  <React.Fragment>
      <Routers/>
  </React.Fragment>,
  document.getElementById('root') 
);