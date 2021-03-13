import React, {useCallback, useEffect, useState} from 'react';
import { getServiceProdutos } from '../services/produto.service.js';
import { getServiceAllBoxes } from '../services/boxes.service.js';

const Home = () => {

    const [boxes, setBoxes] = React.useState([]);

    const getBoxes = useCallback(
        async () => {
            const res = await getServiceAllBoxes();
            setBoxes(res.data);
        }
    );

    useEffect(()=>{
        getBoxes();
    },[]
    );

    const [produtos, setProdutos] = useState([]);
    /* 
    Função auto executável(()=>{})().
    O use.Effect retira a necessiddade das () no final da função auto executável usar.Efeito(da função) 
    */

    const getProduto = useCallback(
        async () => {
            try {
                const res = await getServiceProdutos();
                setProdutos(res.data)
            } catch(error) {
                console.log("##", error , "##" );
            }
        }, []
    );

    useEffect(()=>{
        getProduto();
    },[]
    );

    return(
        <div className ='Home'>
            <div className='Introduction'>
                <h3>Olá Mundo</h3>
            </div>
            <div className='Review'>
                <div className='ReviewBox'>
                    <div className='ReviewText'>
                        <h3>Mussum Cacilds</h3>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis.</p>
                    </div>
                    <div className='ReviewImage'>
                        <h3>IMG</h3>
                    </div>
                </div>
                <div className='ReviewBox'>
                    <div className='ReviewText'>
                        <h3>Mussum Cacilds</h3>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis.</p>
                    </div>
                    <div className='ReviewImage'>
                        <h3>IMG</h3>
                    </div>
                </div>
            </div>
            <div>
                <ul className='ProductsContainer'>
                    {boxes.map(item => (
                        <li key={item.id}> 
                            <p className='ProductBoxName'>{item.nome}</p> 
                            <ul>
                                {produtos.map(item =>(
                                <li key={item.id} className='ProductBoxDescription'>{item.category}</li>
                                ))}
                            </ul>
                            <p className='ProductBoxPrice'>R$ {item.price}</p>
                        </li>
                    ))}
                </ul>
                <button> Inscreva-se</button>
            </div>
        </div> 
    );
};
        
export default Home;

/*  
    Teste do useState
    <div>
    <p>{teste}</p>
    <button onClick={() => setName(teste + 1)}> adiciona 1 </button>
    </div> 
*/

// React.useEffect(() => {
//     const getProdutos = async () => {
//             const res = await getServiceProdutos();
//             setProdutos(res.data)
//         };
//         getProdutos();
//         /*REVIZAR ESSE "INCEPTION" DE FUNÇÃO!!!! */
//     }, []);