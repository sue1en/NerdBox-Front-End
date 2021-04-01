import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardBody, CardImg, CardTitle, CardText, Button } from 'reactstrap'

// ______Images_____
import BoxesImage from '../../assets/images/boxes/modelbox.jpg'


const ProductBoxes = ({ item: { id, name, price } }) => {

   return(
         <SCard>
            <SLink to={`/boxes/${id}`}>
               <SCardImg top src={BoxesImage} alt="Card image cap" />
               <SCardBody>
                  <h5>{name}</h5>
                  <h6>R$ {price}</h6>
               </SCardBody>
            </SLink>
         </SCard>        
   );
};

export default ProductBoxes;

const SCard = styled(Card)`
   background-color:#5C22B3;
   border-radius:10px;
   border:none;
   :hover{
      background-color:#1CBCBB;
      h6{
         color:#000000;

      }
   }
`
const SLink = styled(Link)`
   text-decoration:none !important;
   :hover {
      opacity: 0.8;
   }
`
const SCardImg = styled(CardImg)`
   border-radius:10px 10px 0 0;
`

const SCardBody = styled(CardBody)`
   text-decoration:none;
   text-align: center;
   h5{
      color:#f6f6f6;
      font-weight:normal;
      /* text-transform:uppercase; */
   }
   h6{
      font-size:22px;
      color:#1CBCBB;
   }
`
