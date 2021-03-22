import styled from 'styled-components';
import ReviewFoto from '../../assets/images/review-foto.png'

const MemberReviews = () => {
    return(
        <SReviewContainer>
            <SReviewCard>
                <div>
                    <h3>Mussum Cacilds</h3>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis.</p>
                </div>
                <img src={ReviewFoto} alt='foto comentarios'/>
            </SReviewCard>
            <SReviewCard>
                <div>
                    <h3>Cacilds Mussum</h3>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis.</p>
                </div>
                <img src={ReviewFoto} alt='foto comentarios'/>
            </SReviewCard>
        </SReviewContainer>
    )
};

export default MemberReviews;

const SReviewContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items:center;
    height: 50vh;
`
const SReviewCard = styled.div`
    display:flex;
    align-items: center;
    justify-content: space-between;
    background: #6459a5;
    border: 2px solid #4cd8d6;
    border-radius: 80px;
    padding: 20px 20px 20px 40px;
    max-width: 400px;
    min-width: 380px;
    height: 125px;
    margin: 50px 20px;

    div{
        max-width: 270px;
        padding:10px;
        h3, p{
            margin:0;
        }
    }

    img{
        width: 120px;
        height: 120px;
        background:#2e8180;
        border-radius: 60px;
        margin-left: 10px;
        border:2px solid #2b2450;
    }
`