import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/style.css';
//Rotas
import Routers from './routers';

ReactDOM.render(
  <React.Fragment>
    <Layout>
      <Routers/>
      {/* <Teste/> */}
    </Layout>
  </React.Fragment>,
  document.getElementById('root') 
  // Rever isso -> document.getElementById('root')
);