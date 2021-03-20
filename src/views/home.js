import React, {useCallback, useEffect, useState } from 'react';
import MemberReviews from '../components/coments';
import ProductBoxes from '../components/boxes';


const Home = () => {
    
    return(
        <div className ='Home'>
            <div className='Introduction'>
            <h3>Olá Mundo</h3>
            </div>
            <MemberReviews/>
            <ProductBoxes/>
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