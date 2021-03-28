import styled from 'styled-components'


const Conteiner = (props) => {
  return(
    <MainDiv>
      <ContentLimitation>
        {props.children}
      </ContentLimitation>
    </MainDiv>
  );

};

const MainDiv = styled.div`
display:flex;
flex-direction:column;
align-items:center;  
`
const ContentLimitation = styled.div`
/* background-color: #ccc; */
text-align: center;
max-width:1200px;
`

export default Conteiner;