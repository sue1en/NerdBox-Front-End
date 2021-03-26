import React from 'react';
import { CardDeck, Card, CardImg, CardBody, CardTitle, CardText } from 'reactstrap';
import styled from 'styled-components';
import ReviewFoto from '../../assets/images/review-foto.png'

const MemberReviews = () => {
    return(
        <ComentsContainer>
            <h2>Comentários</h2>
            <SCardDeck>
                <SCard>
                    <SCardBody>
                        <SCardTitle tag="h5">Mussum Cacilds</SCardTitle>
                        <SCardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</SCardText>
                    </SCardBody>
                    <SCardImg top width="100%" src={ReviewFoto} alt="Card image cap" />
                </SCard>
                <SCard>
                    <SCardBody>
                        <SCardTitle tag="h5">Cacildina Mussuzis</SCardTitle>
                        <SCardText>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis.</SCardText>
                    </SCardBody>
                    <SCardImg top width="100%" src={ReviewFoto} alt="Card image cap" />
                </SCard>
            </SCardDeck>
        </ComentsContainer>
    )
};

export default MemberReviews;

const ComentsContainer = styled.div`
    display:flex;
    flex-direction:column;
    align-items:center; 
    padding:30px 50px 100px 50px;
    width:100vw;
    h2{
        color:#4bbcba;
        padding:0 0 40px 30px;
    }
`

const SCardDeck = styled(CardDeck)`
    width:1200px;
    /* background-color:blue; */
    justify-content:space-evenly;
`

const SCard = styled(Card)`
    display:flex;
    flex-direction:row;
    align-items: center;
    justify-content: space-between;
    background: #6459a5;
    border: 2px solid #4cd8d6;
    border-radius: 150px;
    max-width: 580px;
    min-width: 460px;
    margin:15px;
`

const SCardImg = styled(CardImg)` 
    width: 150px;
    background:#2e8180;
    border-radius: 80px;
    border:2px solid #2b2450;
    margin: 7px 7px;
`

const SCardBody = styled(CardBody)`
    margin: 0 10px;
    padding:15px 5px 15px 40px;
`

const SCardTitle = styled(CardTitle)`
    color:#1d1b25;
    font-weight:bold;
`
const SCardText = styled(CardText)`
    text-indent:16px;
`
