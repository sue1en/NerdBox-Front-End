import React, {useCallback, useEffect, useState } from 'react';
import { getServiceAllBoxes } from '../services/boxes.service.js';
import { Link } from 'react-router-dom';

const Home = () => {
    
    const [boxes, setBoxes] = useState([]);
    const [hasError, setError] = useState(false);
    
    const getBoxes = useCallback(() => {
        getServiceAllBoxes()
            .then(res => setBoxes(res.data))
            .catch(error => setError(true))
    }, []);


    useEffect(()=>{
        getBoxes();
    },[getBoxes]
    );


    return(
        <div className ='Home'>
            <div className='Introduction'>
            <h3>Olá Mundo</h3>
            </div>
            <div id='ReviewContainer'>
                <div className='ReviewCard'>
                    <div className='ReviewText'>
                        <h3>Mussum Cacilds</h3>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis.</p>
                    </div>
                    <div className='ReviewImage'>
                        <h3>IMG</h3>
                    </div>
                </div>
                <div className='ReviewCard'>
                    <div className='ReviewText'>
                        <h3>Cacilds Mussum</h3>
                        <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis.</p>
                    </div>
                    <div className='ReviewImage'>
                        <h3>IMG</h3>
                    </div>
                </div>
            </div>
            <div id='ProductsContainer'>
                { hasError ? (<div>TEMOS UM ERRO!!!</div>) 
                : ( 
                    <ul>
                        {boxes.map(item => (
                            <li key={item.id}> 
                                <Link to={`/inscricao/${item.id}`}>
                                    <h4 className='ProductImage'>IMAGEM</h4>
                                    <p className='ProductTitle'>{item.name}</p>
                                    <p className='ProductPrice'>R$ {item.price}</p>
                                </Link>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div> 
    );
};

export default Home;

/* 
Função auto executável(()=>{})().
O use.Effect retira a necessiddade das () no final da função auto executável usar.Efeito(da função) 
*/

// Teste do useState
// <div>
// <p>{teste}</p>
// <button onClick={() => setName(teste + 1)}> adiciona 1 </button>
// </div> 


// React.useEffect(() => {
    //     const getProdutos = async () => {
        //             const res = await getServiceProdutos();
        //             setProdutos(res.data)
        //         };
        //         getProdutos();
        //         /*REVIZAR ESSE "INCEPTION" DE FUNÇÃO!!!! */
        //     }, []);