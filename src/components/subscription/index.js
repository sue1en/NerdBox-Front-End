import { useState } from 'react';
import { createServiceSubscription } from '../../services/users.service';
import { createServiceUsers } from '../../services/users.service';


const Subscription = ({ id, update}) => {
    const [newMember, setNewMemberForm] = useState({});
    const [form, setForm] = useState({});


    //função para alterar o estado dos inputs
    const handlerChangeNew = (e) => {
        setNewMemberForm({
            ...newMember,
            [e.target.name]: e.target.value
        })
    };
    const handlerChange = (e2) => {
        setForm({
            ...form,
            [e2.target.name]: e2.target.value
        })
    };

    const submitForm = () => {
        createServiceSubscription(id, form)
            .then(() =>{
                alert(`Cadastro do aluno ${form.name} realizado com sucesso!!`)
                setForm({});
                update(true)
            })
            .catch((error) => {
                console.log('Temos um erro!!! Usuário não existe')
                alert('Usuário não existe, faça um novo cadastro.')
        })
    }

    const submitNewMember = () => {
        createServiceUsers(newMember);
    }

    return(

        <div className='SubscribeContainer'>
            <div className='SubscribeEntrieBox'>
                <p><input type="text" name="email" value={form.email || ""} onChange={handlerChange} placeholder="Inseira seu Email"/></p>
                <br/>
                <button onClick={submitForm}>Inscreva-se</button>
            </div>
            <br/>
            <div className='SubscribeEntrieBox'>
                <p><input type="text" name="name" value={newMember.name || ""} onChange={handlerChangeNew} placeholder="Insira seu nome"/></p>
                <p><input type="text" name="email" value={newMember.email || ""} onChange={handlerChangeNew} placeholder="Inseira seu Email"/></p>
                <p><input type="date" name="birth_date" value={newMember.birth_date || ""} onChange={handlerChangeNew}/></p>
                <br/>
                <button onClick={submitNewMember}>Inscreva-se</button>
            </div>
        </div>
    )
};

export default Subscription;