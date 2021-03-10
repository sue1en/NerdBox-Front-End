import React from 'react';
import { getServiceProdutos } from '../services/produto.service.js';

const Produtos = () => {
    
    
    const[produtos, setProdutos] = React.useState([]);
    /* 
    Função auto executável(()=>{})().
    O use.Effect retira a necessiddade das () no final da função auto executável usar.Efeito(da função) 
    */
    React.useEffect(() => {
        const getProdutos = async () => {
            const res = await getServiceProdutos();
            setProdutos(res.data)
        };
        getProdutos();
        /*REVIZAR ESSE "INCEPTION" DE FUNÇÃO!!!! */
    }, []);
    console.log(produtos)

    return(
        <div className ='Produtos'>
            <h3>Olá Mundo</h3>
            <hr/>
            <ul>
                {produtos.map(item => (
                    <li> {item.category} </li>
                ))}
            </ul>
            <hr/>
        </div> 
    );
};
        
export default Produtos;


/*  
    Teste do useState
    <div>
    <p>{teste}</p>
    <button onClick={() => setName(teste + 1)}> adiciona 1 </button>
    </div> 
*/