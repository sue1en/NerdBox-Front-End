import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// import "../../assets/css/slick.css";
// import "../../assets/css/slick-theme.css";

//IMAGES________
import ReviewFoto from '../../assets/images/review-foto.png'



const MemberReviews = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 600,
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 1,
        responsive: [
            {
              breakpoint: 992,
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
                <SliderItem>  
                    <Card>
                        <img src={ReviewFoto}/>
                        <div>
                            <h3>Nome do fulano</h3>
                            <p>um texto vai aqui, vai aqui um texto qualquer tambem para preencher o conteúdo.</p>
                        </div>
                    </Card>
                </SliderItem>
                <SliderItem>  
                    <Card>
                        <img src={ReviewFoto}/>
                        <div>
                            <h3>Nome do fulano</h3>
                            <p>um texto vai aqui, vai aqui um texto qualquer tambem para preencher o conteúdo.</p>
                        </div>
                    </Card>
                </SliderItem>
                <SliderItem>  
                    <Card>
                        <img src={ReviewFoto}/>
                        <div>
                            <h3>Nome do fulano</h3>
                            <p>um texto vai aqui, vai aqui um texto qualquer tambem para preencher o conteúdo.</p>
                        </div>
                    </Card>
                </SliderItem>
            </StyledSlider>
        </ReviewsContainer>
      );
};

export default MemberReviews;

const ReviewsContainer = styled.div`
    padding:30px;
    
`
const StyledSlider = styled(Slider)`
    /* display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%; */
`
const SliderItem = styled.div`
    background-color:#6459a5;
    border-radius:90px;
    border: 2px solid #4cd8d6;
    margin:20px;
    padding:10px;
    max-width:450px;
    @media(max-width: 600px) {
        border-radius:90px;
        max-width:340px;
    }
`
const Card = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    img{
        width:130px;
        height:130px;
        border: 2px solid #4cd8d6;
        border-radius:80px;
        margin-right:7px;
    }
    div{
        h3{
            font-size:20px;
        }
    }
    @media(max-width: 600px) {
        img{
        width:80px;
        height:80px;
        margin-bottom:10px;
    }
        div{
        text-align: left;
        max-width:180px;
        }
    }
`