import React from 'react';
import Slider from "react-slick";
import styled from 'styled-components';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//IMAGES________
import ReviewFoto from '../../assets/images/review-foto.png'
import felipeIMG from '../../assets/images/felipe.jpg';

const EquipeComents = () => {

   const settings = {
      dots: true,
      infinite: true,
      speed: 600,
      slidesToShow: 1,
      slidesToScroll: 1,
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
         <Slider { ...settings }>     
            <SliderItem>
               <Card>
                  <img src={felipeIMG}/>
                  <div>
                     <h3>Felipe Siqueira</h3>
                     <p>um texto vai aqui, vai aqui um texto qualquer tambem para preencher o conteúdo.</p>
                  </div>
               </Card>
            </SliderItem>
            <SliderItem>
               <Card>
                  <img src={ReviewFoto}/>
                  <div>
                     <h3>Suelen Batista</h3>
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
         </Slider>
      </ReviewsContainer>
   );
};

export default EquipeComents;

const ReviewsContainer = styled.div`
   
`
const SliderItem = styled.div`
   @media(max-width: 600px) {

   }
`
const Card = styled.div`
   background-color:#f6f6f6;
   border-radius:10px;
   display:flex;
   align-items:center;
   margin:15px 60px;
   img{
      width:135px;
      height:auto;
      background-color:#ccc;
      border-radius: 10px 0 0 10px;
   }
   div{
      color:#6b6b6b;
      padding:15px 25px;
      width:300px;
      h3{
         font-size:20px;
         font-weight:bold;
      }
      p{
         margin:0;
      }
   }

   @media(max-width: 600px) {
      margin:15px 25px;
      flex-direction:column;
      align-items:center;
      img{
         border-radius: 10px 10px 0 0;
         width:fit-content;
         height:auto;

      }
      div{
         width:auto;
         h3{
         }
         p{
         }
      }
   }
`