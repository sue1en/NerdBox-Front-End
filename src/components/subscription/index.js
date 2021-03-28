import { useState } from 'react';
import { createServiceSubscription } from '../../services/users.service';
import { createServiceUsers } from '../../services/users.service';


const Subscription = ({ id, update}) => {
    const [newMemberForm, setNewMemberForm] = useState({});
    const [memberForm, setMemberForm] = useState({});


    //função para alterar o estado dos inputs
    const handlerChangeNew = (e) => {
        setNewMemberForm({
            ...newMemberForm,
            [e.target.name]: e.target.value
        })
    };
    const handlerChange = (e2) => {
        setMemberForm({
            ...memberForm,
            [e2.target.name]: e2.target.value
        })
    };

    const submitForm = () => {
        createServiceSubscription(id, memberForm)
            .then(() =>{
                alert(`Cadastro do aluno realizado com sucesso!!`)
                setMemberForm({});
                update(true)
            })
            .catch((error) => {
                console.log('Temos um erro!!! Usuário não existe')
                alert('Usuário não existe, faça um novo cadastro.')
        })
    }

    const submitNewMemberForm = () => {
        createServiceUsers(id, newMemberForm);
    }

    return(

        <div className='SubscribeContainer'>
            <div className='SubscribeEntrieBox'>
                <p><input type="text" name="email" value={memberForm.email || ""} onChange={handlerChange} placeholder="Insira seu Email"/></p>
                <br/>
                <button onClick={submitForm}>Inscreva-se</button>
            </div>
            <br/>
            <div className='SubscribeEntrieBox'>
                <p><input type="text" name="name" value={newMemberForm.name || ""} onChange={handlerChangeNew} placeholder="Insira seu nome"/></p>
                <p><input type="text" name="email" value={newMemberForm.email || ""} onChange={handlerChangeNew} placeholder="Inseira seu Email"/></p>
                <p><input type="date" name="birth_date" value={newMemberForm.birth_date || ""} onChange={handlerChangeNew}/></p>
                <br/>
                <button onClick={submitNewMemberForm}>Inscreva-se</button>
            </div>
        </div>
    )
};

export default Subscription;