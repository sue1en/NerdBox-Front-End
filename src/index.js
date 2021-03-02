import React from 'react';
import ReactDOM from 'react-dom';
import Home from './views/home';
import './css/style.css';


ReactDOM.render(
  <React.Fragment>
    <Home />
  </React.Fragment>,
  document.getElementById('root')
);


// 1 - Instalar react
// 2 - Limpar o react (cleanup)
// 3 - Criar view (qualquer conteudo)
// 4 - Criar o Layout (component que recebe um parametro)
// 5 - Criar um estado local (React.useState)
// 6 - Execute um ação para mudar