import React from 'react';
import { getServiceProdutos } from '../services/produto.service';

const Produtos = () => {
    /* 
        controle  de estado LOCAL
        const [valorAtul, funcaoqueMudaValor] = react.useState();

        const acao = () => {
            setName( teste + 1)
        }
    */

    // const[teste, setName] = React.useState(0);
    
    const[produtos, setProdutos] = React.useState([]);

    /* 
    Função auto executável(()=>{})().
    O use.Effect retira a necessiddade das () no final da função auto executável usar.Efeito(da função) 
    */

    React.useEffect(()=>{
        const getProdutos = async () => {
            const res = await getServiceProdutos();
            setProdutos(res.data);
        };
        getProdutos();
        
        /*REVIZAR ESSE "INCEPTION" DE FUNÇÃO!!!! */
    }, []);

    return(
        <div className ='Produtos'>
            <h3>Olá Mundo</h3>
            <ul>
                {produtos.map(item => {
                    <li key={item.id}>{item.id}</li>
                })}
            </ul>
        </div>
         
        /*  
            Teste do useState
            <div>
            <p>{teste}</p>
            <button onClick={() => setName(teste + 1)}> adiciona 1 </button>
            </div> 
        */
    );
};

export default Produtos;