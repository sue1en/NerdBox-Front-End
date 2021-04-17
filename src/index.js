import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import GlobalStyle from './assets/globalStyled';
import { Provider } from 'react-redux'
import store from './store'

//Rotas
import Routers from './routers';

console.log(process.env);

ReactDOM.render(
  <Provider store={store}>
      <GlobalStyle/>
      <Routers/>
  </Provider>,
  document.getElementById('root') 
);