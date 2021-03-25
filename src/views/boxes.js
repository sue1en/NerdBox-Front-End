import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import { getServiceBoxDetalhe } from '../services/boxes.service.js'
import styled from 'styled-components'

//______ COMPONENTES______
import Subscription from '../components/subscription';
import MembersTable from '../components/table';
import Loading_component from '../components/loading';
import ImgBox from '../assets/images/boxes/box-detalhes.jpg';

const BoxesPage = (props) => {
    const { id } = useParams();
    const { history } = props;


    const [loading, setLoading] = useState(false);
    const [boxDetalhe, setBoxDetalhe] = useState({});
    const [update, setUpdate] = useState(false);
    
    const getBoxDetalhe = useCallback(async () => {
        try {
            setLoading(true);
            const res = await getServiceBoxDetalhe(id);
            setTimeout(() => {
                setBoxDetalhe(res.data);
                setLoading(false);
            }, 500)
            } catch (error) {
                console.log("##", error, "##")
                // setError(true)
                history.push('/?error=404')
            }
        }, [id, history]
    );

    useEffect(()=>{
        getBoxDetalhe()
        setUpdate(false)
    },[getBoxDetalhe, update]
    );

    const printBoxDetalhe = (boxDetalhe) => {
        console.log(boxDetalhe)
        return(
        <ProductBoxContainer>
            <h2>{boxDetalhe.name || ''}</h2>
            <ProductBoxDetalhe>
                <img src={ImgBox} width="70%" alt='foto demosntrativa da box'/>
                <p>{boxDetalhe.description || ''}</p>
            </ProductBoxDetalhe>
        </ProductBoxContainer>
    )};

    return(
        <div className='Inscricao'>
           
            { loading ? <Loading_component/> : printBoxDetalhe(boxDetalhe)}
            <Subscription id={id} update={setUpdate}/>
            <MembersTable membros={boxDetalhe.assinantes} update={setUpdate}/>
        </div>
    );
};

export default BoxesPage;


const ProductBoxContainer = styled.div`
    background-color:#eee;
    margin:30px 60px;
    padding:20px;
    border-radius:10px;
    h2{
        text-transform:uppercase;
        font-weight:bolder;
        color:#1d1b25;
        font-size:26px;
    }
`
const ProductBoxDetalhe = styled.div`
    display:flex;
    img{
        border-radius:10px;
    }
    p{
        margin:0 0 0 20px;
    }
`