import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import { getServiceBoxDetalhe } from '../services/boxes.service.js'
import NovaInscricao from '../components/inscricao';
import MembersTable from '../components/tabela';
import Loading_component from '../components/loading'

const SubscribePage = () => {
    const { id } = useParams();

    const [boxDetalhe, setBoxDetalhe] = useState({box : {}, user : []});
    const [loading, setLoading] = useState(false);
    const [hasError, setError] = useState(false);

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
                setError(true)
            }
        }, [id]
    );

    useEffect(()=>{
        getBoxDetalhe();
    },[getBoxDetalhe]
    );

    const printBoxDetalhe = (boxDetalhe) => {
        console.log(boxDetalhe)
        return(
        <div className='ProductBoxContainer'>
            <h2>{boxDetalhe.name || ''}</h2>
            <div className='ProductBoxElements'>
                <h3>Uma imagem entra aqui</h3>
                <div>
                    <p>Descrição:</p>
                    <p>{boxDetalhe.description || ''}</p>
                </div>
            </div>
        </div>
    )};

    return(
    <div className='Inscricao'>
        {/* {hasError ? (
            <div>TEMOS UM ERRO!!!</div>
        ) : printBoxDetalhe(boxDetalhe)} */}

        { loading ? <Loading_component/> : printBoxDetalhe(boxDetalhe.box)}

        <div className='SubscribeContainer'>
            <div className='SubscribeEntrieBox'>
                <NovaInscricao id={id} />
            </div>
        </div>
        <div className='MembersContainer'>
            <MembersTable membros={boxDetalhe.user}/>
        </div>
    </div>
    );
};

export default SubscribePage;