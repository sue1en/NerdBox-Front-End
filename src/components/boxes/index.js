import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardBody, CardImg, CardTitle, CardText } from 'reactstrap'

// ______Images_____
import BoxesImage from '../../assets/images/boxes/modelbox.jpg'


const ProductBoxes = ({ item: { id, name, price } }) => {

    return(
        <Card>
            <Link to={`/boxes/${id}`}>
                <CardImg top width="100%" src={BoxesImage} alt="Card image cap" />
                <CardBody>
                    <CardTitle tag="h5">{name}</CardTitle>
                    <CardText>R$ {price}</CardText>
                </CardBody>
            </Link>
        </Card>        
    );
};

export default ProductBoxes;