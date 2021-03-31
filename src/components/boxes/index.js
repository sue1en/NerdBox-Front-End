import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardBody, CardImg, CardTitle, CardText, Button } from 'reactstrap'

// ______Images_____
import BoxesImage from '../../assets/images/boxes/modelbox.jpg'


const ProductBoxes = ({ item: { id, name, price } }) => {

   return(
         <SCard>
            {/* <Button color="primary" tag={Link} to={`/boxes/${id}` }> */}
            <SLink to={`/boxes/${id}`}>
               <SCardImg top src={BoxesImage} alt="Card image cap" />
               <SCardBody>
                  <h5>{name}</h5>
                  <h6>R$ {price}</h6>
               </SCardBody>
            </SLink>
            {/* </Button> */}
         </SCard>        
   );
};

export default ProductBoxes;

const SCard = styled(Card)`
   background-color:#6C29DB;
   border-radius:10px;
   :hover{

   }
`
const SLink = styled(Link)`
   text-decoration:none !important;
`
const SCardImg = styled(CardImg)`
   border-radius:10px 10px 0 0;
`

const SCardBody = styled(CardBody)`
   text-decoration:none;
   color:#30FCD8 !important;
   text-align: center;
   font-weight:bolder;
   h5{
      text-transform:uppercase;
   }
   h6{
      color:#fd7e14 !important;
   }
   :hover{      
   }
`