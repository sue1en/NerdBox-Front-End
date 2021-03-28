import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//IMAGES________
import ReviewFoto from '../../assets/images/review-foto.png'

const MemberReviews = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
            }
          ]
      };
      return (
          <ReviewsContainer>
            <h2> Responsive </h2>
            <StyledSlider { ...settings }>
                <React.Fragment>    
                    <SliderItem>
                    <img src={ReviewFoto}/>
                    <h3>Nome do fulano</h3>
                    <p>um texto vai aqui, vai aqui um texto qualquer tambem para preencher o conteúdo.</p>
                    </SliderItem>
                </React.Fragment>
                <React.Fragment>    
                    <SliderItem>
                    <img src={ReviewFoto}/>
                    <h3>Nome do fulano</h3>
                    <p>um texto vai aqui, vai aqui um texto qualquer tambem para preencher o conteúdo.</p>
                    </SliderItem>
                </React.Fragment>
                <React.Fragment>    
                    <SliderItem>
                    <img src={ReviewFoto}/>
                    <h3>Nome do fulano</h3>
                    <p>um texto vai aqui, vai aqui um texto qualquer tambem para preencher o conteúdo.</p>
                    </SliderItem>
                </React.Fragment>
                <React.Fragment>    
                    <SliderItem>
                    <img src={ReviewFoto}/>
                    <h3>Nome do fulano</h3>
                    <p>um texto vai aqui, vai aqui um texto qualquer tambem para preencher o conteúdo.</p>
                    </SliderItem>
                </React.Fragment>
            </StyledSlider>
        </ReviewsContainer>
      );
};

export default MemberReviews;

const ReviewsContainer = styled.div`
    padding:30px;
    
`
const StyledSlider = styled(Slider)`
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%; 
`
const SliderItem = styled.div`
    background-color:lightsalmon;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:20px;
    margin:20px;
    img{
        width:100px;
    }
`



//const ComentsContainer = styled.div`
//    display:flex;
//     flex-direction:column;
//     align-items:center; 
//     padding:30px 50px 100px 50px;
//    width:1300px;
//     h2{
//         color:#4bbcba;
//         padding:0 0 40px 30px;
//     }
//`

//const SCardDeck = styled(CardDeck)`
//    max-width:1200px;
//     /* background-color:blue; */
//     justify-content:space-evenly;
//`

// const SCard = styled(Card)`
//     display:flex;
//     flex-direction:row;
//     align-items: center;
//     justify-content: space-between;
//     background: #6459a5;
//     border: 2px solid #4cd8d6;
//     border-radius: 150px;
//     max-width: 580px;
//     min-width: 460px;
//     margin:15px;
// `

// const SCardImg = styled(CardImg)` 
//     width: 150px;
//     background:#2e8180;
//     border-radius: 80px;
//     border:2px solid #2b2450;
//     margin: 7px 7px;
// `

// const SCardBody = styled(CardBody)`
//     margin: 0 10px;
//     padding:15px 5px 15px 40px;
// `

// const SCardTitle = styled(CardTitle)`
//     color:#1d1b25;
//     font-weight:bold;
// `
// const SCardText = styled(CardText)`
//     text-indent:16px;
// `
