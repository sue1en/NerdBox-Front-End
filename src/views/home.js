import React, {useCallback, useEffect, useState } from 'react';
import { getServiceAllBoxes } from '../services/boxes.service.js';
import { Col, Row} from 'reactstrap'
import styled from 'styled-components'

//______ COMPONENTES______
// import IntroCarousel from '../components/intro-carousel';
import MemberReviews from '../components/coments';
import ProductBoxes from '../components/boxes';
import Loading_component from '../components/loading';

import ImageIntro02 from '../assets/images/intro/img-test-2.jpg';

const Home = () => {

    const [boxes, setBoxes] = useState([]);
    // const [hasError, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    
    const getBoxes = useCallback(() => {
        setLoading(true)
        getServiceAllBoxes()
            .then(res => {
                setBoxes(res.data)
                setLoading(false)
            })
            .catch(error => {
                // setError(true)
                // console.log('Temos um erro', err)
                setLoading(false)
            })
    }, []);


    useEffect(()=>{
        getBoxes();
    },[getBoxes]
    );

    const MapBoxes = (boxes) => boxes.map((item, index) => (
        <Col key={index}>
            <ProductBoxes item={ item }/>
        </Col>
    ))


    return(
        <div className ='Home'>
            {/* <img  width="1000vw" src={ImageIntro02}/> */}
                <Content/>
                <MemberReviews/>
                <div>
                    {loading ? <Loading_component />  
                            : (
                                <Row>
                                    {MapBoxes(boxes)}
                                </Row>
                    )}
                </div>
        </div> 
    );
};

export default Home;

// const BoxesContainer = styled.div`
//     margin:50px;
// `

const Content = styled.img`
    background-image: url(${ImageIntro02});
    background-repeat: no-repeat;
    width: 100vw;
    height:400px;
    border:none;
`