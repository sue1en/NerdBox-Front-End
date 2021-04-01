import { useState } from 'react';
import { createServiceSubscription } from '../../services/users.service';
import { createServiceUsers } from '../../services/users.service';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import styled from 'styled-components'


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
      <SubscribeContainer>
         <SForm>
            <h4>Já sou membro.</h4>
            <FormGroup>
               <Label for="email-2">Email</Label>
               <SInput type="text" id="email-2" name="email" value={memberForm.email || ""} onChange={handlerChange} placeholder="Insira seu Email" />
            </FormGroup>
            <FormGroup>
               <SButton onClick={submitForm}>Inscreva-se</SButton>
            </FormGroup>
         </SForm>
         <SForm>
            <h4>Ainda não sou membro.</h4>
            <FormGroup>
               <Label for="name">Nome:</Label>
               <SInput type="text" id="name" name="name" value={newMemberForm.name || ""} onChange={handlerChangeNew} placeholder="Insira seu nome"/>
            </FormGroup>
            <FormGroup>
               <Label for="email">Email:</Label>
               <SInput type="text" id="email" name="email" value={newMemberForm.email || ""} onChange={handlerChangeNew} placeholder="Inseira seu Email"/>
            </FormGroup>
            <FormGroup>
               <Label for="nascimento">Data de Nascimento:</Label>
               <SInput type="date" id="nascimento" name="birth_date" value={newMemberForm.birth_date || ""} onChange={handlerChangeNew}/>
            </FormGroup>
            <FormGroup>
               <SButton onClick={submitNewMemberForm}>Inscreva-se</SButton>
            </FormGroup>
         </SForm>
      </SubscribeContainer>
   )
};

export default Subscription;

const SubscribeContainer = styled.div`
   display:flex;
   justify-content:center;
   background-color:#312E3F;
   @media(max-width: 800px) {
      flex-direction:column;
      align-items:center;
   }
`
const SForm = styled(Form)`
   background-color:#120D1A;
   margin:30px;
   padding:30px;
   width:40%;
   border-radius:10px;
   box-shadow: 1px 1px 5px #150826;
   color:#f6f6f6;
   h4{
      margin-bottom:20px;
   }
   @media(max-width: 800px) {
      margin:10px;
      padding:20px;
      width:90%;
   }
`
const SInput = styled(Input)`
   background-color:#312E3F;
   color:#ffffff;
   border:1px solid #515151;
   :hover{
      border:1px solid #0D8080;
      box-shadow: inset 0 0 4px #0D8080;

   }
`
const SButton = styled(Button)`
   background-color:#1CBCBB;
   border:none;
   font-weight:bold;
   :hover{
      background-color:#fd7e14;
   }
`