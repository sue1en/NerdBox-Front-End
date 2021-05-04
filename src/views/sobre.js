import styled from 'styled-components';
import React from 'react';

const Sobre = () => {
   document.title = "Nerdbox - Sobre"
   return(
      <SobreContainer>
         <div>
            <h2>Sobre nós</h2>
            <p>Projeto realizado para o curso de Desenvolvedor Full Stack do Instituto Infnet</p>
            <br/>
            <h4>Alunos:</h4>
            <Developers>
               <div>
                  <h5>Felipe Siqueira & Suelen Batista</h5>
                  <h6>Tecnologias utilizadas</h6>
                  <h6><strong>Back-End</strong></h6>
                  <p>Javascript, NodeJS, ExpressJS, MySQL, Sequelize, Joi, JWT, Md5</p>
                  <h6><strong>Front-End</strong></h6>
                  <p>html 5, css 3, React, Reactstrap, React Router Dom, Styled Components.
                  </p>
               </div>
            </Developers>
         </div>
      </SobreContainer>
   );
}
export default Sobre;

const SobreContainer = styled.div`
   display:flex;
   flex-direction:column;
   align-items:center;
   color:#575757;
   div{
      margin:50px;
      background-color:#ccc;
      padding:20px;
      border-radius:10px;
      h4{
         margin-left:20px;
      }
   }
`
const Developers = styled.div`
   display:flex;
   margin:0 !important;
   padding:0 !important;
   div{
      background-color:#f6f6f6;
      padding:15px;
      margin:10px;
      flex: 1
   }
   @media(max-width: 600px) {
      flex-direction:column;
      width:auto;
   }
`