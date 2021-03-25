import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './assets/globalStyled';

//Rotas
import Routers from './routers';

console.log(process.env);

ReactDOM.render(
  <React.Fragment>
      <GlobalStyle/>
      <Routers/>
  </React.Fragment>,
  document.getElementById('root') 
);