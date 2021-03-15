import React, {useCallback, useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { getServiceAllProdutos } from '../services/produto.service.js';
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

    const [produtos, setProdutos] = React.useState([]);
    const getProduto = React.useCallback(
        async () => {
            try {
                const res = await getServiceAllProdutos();
                setProdutos(res.data)
            } catch(error) {
                console.log("##", error , "##" );
            }
        }, []
        );
        
        React.useEffect(()=>{
            getProduto();
        },[]
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
                <ul>
                    {boxes.map(item => (
                        <li key={item.id}> 
                            <Link to={`/inscricao/${item.id}`}>
                                <h4 className='ProductImage'>IMAGEM</h4>
                                {/* <p className='ProductName'>{item.name}</p>  */}
                                <p className='ProductTitle'>PACOTE</p>
                                <p className='ProductDescription'>{item.description}</p>
                                <p className='ProductPrice'>R$ {item.price}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
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