import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { Col, Row} from 'reactstrap'
import styled from 'styled-components'

//______ COMPONENTES______
import Banner from '../components/banner';
import ProductBoxes from '../components/boxes';
import MemberReviews from '../components/coments';
import LoadingComponent from '../components/loading';
import { getBoxAll } from '../store/box/box.action';

const Home = () => {
   const dispatch = useDispatch()
   document.title = "Nerdbox - Home"

   const boxes =  useSelector(state => state.boxes.all)
   const loading =  useSelector(state => state.boxes.loading)
   // const [loading, setLoading] = useState(false);

   useEffect(()=>{
      dispatch(getBoxAll());
   },[dispatch]);

   const MapBoxes = (boxes) => boxes.map((item, index) => (
      <Col md="4" xl="4" sm="12" xs="12" key={index} className="mb-4">
         <ProductBoxes item={{...item, status: true }} />
      </Col>
   ));

   if(loading) {
      return <LoadingComponent />
   }
   
   return(
      <div>
         <Banner/>
         <BoxesContainer>
            <h2>Escolha a sua Box</h2>
            <Row>
               {!loading && boxes.length === 0 ? "Nâo tem Caixas disponiveis" : MapBoxes(boxes)}
               {/* {boxes.length === 0 ? "Não tem boxes disponiveis" : loading ? <LoadingComponent/> : MapBoxes(boxes)}    */}
               {/* {loading ? <LoadingComponent/> : MapBoxes(boxes)} */}
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
      text-align: center;
      color:#575757;
      font-size:22px;
   }
   @media(max-width: 500px) {
   }
`
const ReviewsContainer = styled.div`
   background-color:#252525;
   padding:100px;
   @media(max-width: 600px) {
      padding:50px;
   }
`