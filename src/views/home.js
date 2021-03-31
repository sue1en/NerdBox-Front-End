import React, {useCallback, useEffect, useState } from 'react';
import { getServiceAllBoxes } from '../services/boxes.service.js';
import { Container, Col, Row} from 'reactstrap'
import styled from 'styled-components'
import Teste from '../assets/estilo-teste.js';

//______ COMPONENTES______
// import IntroCarousel from '../components/intro-carousel';
import Banner from '../components/banner';
import ProductBoxes from '../components/boxes';
import MemberReviews from '../components/coments';
import Loading_component from '../components/loading';

const Home = () => {

   const [boxes, setBoxes] = useState([]);
   const [loading, setLoading] = useState(false);
   // const [hasError, setError] = useState(false);
   
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
      <Col md="4" xl="4" sm="12" xs="12" key={index} className="mb-4">
         <ProductBoxes item={{...item, status: true }} />
      </Col>
   ))


   return(
      <div>
         <Banner/>
         <BoxesContainer>
            <h2>Escolha a Sua Box</h2>
            <Row>   
               {loading ? <Loading_component/> : MapBoxes(boxes)}
            </Row>
         </BoxesContainer >
         <ReviewsContainer>
            <MemberReviews/>
         </ReviewsContainer>
      </div>
   );
};

export default Home;

const BoxesContainer = styled.div`
   margin:70px 60px 60px 60px;
   h2{
      margin:60px 0 60px 0;
      text-transform:uppercase;
      /* font-weight:bold; */
      text-align: center;
      color:#2B2450;
   }
   @media(max-width: 500px) {
   }
`
const ReviewsContainer = styled.div`
   background-color:#292F36;
   padding:100px;
`