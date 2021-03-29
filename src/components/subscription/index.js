import { useState } from 'react';
import { createServiceSubscription } from '../../services/users.service';
import { createServiceUsers } from '../../services/users.service';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
         <Form>
            <FormGroup>
               <Label for="email-2">Email</Label>
               <Input type="text" id="email-2" name="email" value={memberForm.email || ""} onChange={handlerChange} placeholder="Insira seu Email" />
            </FormGroup>
            <FormGroup>
               <Button onClick={submitForm}>Inscreva-se</Button>
            </FormGroup>
         </Form>
         <br/>
         <Form>
            <FormGroup>
               <Label for="name">Nome:</Label>
               <Input type="text" id="name" name="name" value={newMemberForm.name || ""} onChange={handlerChangeNew} placeholder="Insira seu nome"/>
            </FormGroup>
            <FormGroup>
               <Label for="email">Email:</Label>
               <Input type="text" id="email" name="email" value={newMemberForm.email || ""} onChange={handlerChangeNew} placeholder="Inseira seu Email"/>
            </FormGroup>
            <FormGroup>
               <Label for="nascimento">Data de Nascimento:</Label>
               <Input type="date" id="nascimento" name="birth_date" value={newMemberForm.birth_date || ""} onChange={handlerChangeNew}/>
            </FormGroup>
            <FormGroup>
               <Button onClick={submitNewMemberForm}>Inscreva-se</Button>
            </FormGroup>
         </Form>
      </div>
   )
};

export default Subscription;