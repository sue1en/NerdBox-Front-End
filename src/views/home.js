import React, {useCallback, useEffect, useState } from 'react';
import { getServiceAllBoxes } from '../services/boxes.service.js';
import { Col, Row} from 'reactstrap'
import styled from 'styled-components'

//______ COMPONENTES______
import IntroCarousel from '../components/intro-carousel';
import MemberReviews from '../components/coments';
import ProductBoxes from '../components/boxes';
import Loading_component from '../components/loading';



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
            <IntroCarousel/>
            <MemberReviews/>
            <BoxesContainer>
                {loading ? <Loading_component />  
                        : (
                            <Row>
                                {MapBoxes(boxes)}
                            </Row>
                )}
            </BoxesContainer>
        </div> 
    );
};

export default Home;

const BoxesContainer = styled.div`
    margin:50px
`