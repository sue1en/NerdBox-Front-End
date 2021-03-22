import React, {useCallback, useEffect, useState } from 'react';
import { getServiceAllBoxes } from '../../services/boxes.service.js';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import BoxesImage from '../../assets/images/boxes/modelbox.jpg'


const ProductBoxes = () => {

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
        <div id='ProductsContainer'>
            { hasError ? (<div>TEMOS UM ERRO!!!</div>) 
            : ( 
                <SBoxList>
                    {boxes.map(item => (
                        <li key={item.id}> 
                            <SLink to={`/boxes/${item.id}`}>
                                <img src={BoxesImage} alt='imagem da caixa'/>
                                <p className='ProductTitle'>{item.name}</p>
                                <p className='ProductPrice'>R$ {item.price}</p>
                            </SLink>
                        </li>
                    ))}
                </SBoxList>
            )}
        </div>
    );
};

export default ProductBoxes;

const SBoxList = styled.div`
    display:flex;
    justify-content:space-evenly;
    margin:20px;

    li{
        width: 350px;
        list-style: none;
        background:#eee;
        border-radius: 20px;
        margin: 7px;
    }
    `
    const SLink = styled(Link)`
    text-decoration: none;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:15px;
    text-transform:uppercase;
    font-weight: bold;
    
    img{
        border-radius:15px;
        width:20vw;
    }
    p{
        margin:15px 0 0 0;
        font-size:25px;
        color:#2b2450;
        
        :nth-of-type(2n){
            color:orange;
            font-size:20px;
        }
    }
`