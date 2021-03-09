import React from 'react';

const Teste = () => {
    /* 
        controle  de estado LOCAL
        const [valorAtual, funcaoqueMudaValor] = react.useState();

        const acao = () => {
            setName( teste + 1)
        }
    */

    const[teste, setName] = React.useState(0);
    
    return(
        <div className ='Produtos'>
            <h3>Olá Mundo</h3>
            <p>{teste}</p>
            <button onClick={() => setName(teste + 1)}> adiciona 1 </button>
        </div> 
    )
};

export default Teste;
