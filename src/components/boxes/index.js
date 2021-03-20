import React, {useCallback, useEffect, useState } from 'react';
import { getServiceAllBoxes } from '../../services/boxes.service.js';
import { Link } from 'react-router-dom';


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
                <ul>
                    {boxes.map(item => (
                        <li key={item.id}> 
                            <Link to={`/boxes/${item.id}`}>
                                <h4 className='ProductImage'>IMAGEM</h4>
                                <p className='ProductTitle'>{item.name}</p>
                                <p className='ProductPrice'>R$ {item.price}</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ProductBoxes;