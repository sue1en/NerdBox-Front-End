import ReviewFoto from '../../assets/images/review-foto.png'

const MemberReviews = () => {
    return(
        <div id='ReviewContainer'>
            <div className='ReviewCard'>
                <div className='ReviewText'>
                    <h3>Mussum Cacilds</h3>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis.</p>
                </div>
                <div className='ReviewImage'>
                    <img src={ReviewFoto} alt='foto comentarios'/>
                </div>
            </div>
            <div className='ReviewCard'>
                <div className='ReviewText'>
                    <h3>Cacilds Mussum</h3>
                    <p>Mussum Ipsum, cacilds vidis litro abertis. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Suco de cevadiss deixa as pessoas mais interessantis.</p>
                </div>
                <div className='ReviewImage'>
                    <img src={ReviewFoto} alt='foto comentarios'/>
                </div>
            </div>
        </div>
    )
}

export default MemberReviews;