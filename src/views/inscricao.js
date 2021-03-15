import React from 'react';
import { useParams } from 'react-router';
import { getServiceBoxDetalhe } from '../services/boxes.service'


const Inscricao = () => {
    const { id } = useParams();
    const [BoxDetalhe, setBoxDetalhe] = React.useState({});
    const getBoxDetalhe = React.useCallback(
        async () => {
            const res = await getServiceBoxDetalhe(id);
            setBoxDetalhe(res.data)
        }, [id]
        );   
        React.useEffect(()=>{
            getBoxDetalhe();
        },[]
        );

    return(
    <div className='Inscricao'>
        <div className='ProductBoxContainer'>
            <h2>Produto {BoxDetalhe.id}</h2>
            <div className='ProductBoxElements'>
                <h3>Uma imagem entra aqui</h3>
                <p>Descrição: {BoxDetalhe.description}</p>
            </div>
        </div>
        <div className='SubscribeContainer'>
            <div className='SubscribeEntrieBox'>
                <h2>Aqui é cadastrado</h2>
                <form>
                    <div className='FormElement'>
                        <label for='nome'>Nome:</label>
                        <input type='text' name='nome'></input>
                    </div>
                    <button>Cadastrar</button>
                </form>
            </div>
            <div className='SubscribeEntrieBox'>
                <h2>Aqui é pra cadastrar</h2>
                <form>
                    <div className='FormElement'>
                        <label for='nome'>Nome:</label>
                        <input type='text' name='nome'></input>
                    </div>
                    <div className='FormElement'>
                        <label for='email'>Email:</label>
                        <input type='text' name='email'></input>
                    </div>
                    <div className='FormElement'>
                        <label for='Nascimento'>Data de Nascimento:</label>
                        <input type='date' name='Nascimento'></input>
                    </div>
                    <button>Cadastrar</button>
                </form>
            </div>
        </div>
        <div className='MembersContainer'>
            <h2>Aqui vai ter a lista de inscritos</h2>
        </div>
    </div>
    )
};

export default Inscricao;