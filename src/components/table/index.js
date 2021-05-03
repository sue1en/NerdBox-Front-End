import { useState } from 'react';
import { useParams } from 'react-router';
import { deleteServiceUsers } from '../../services/users.service.js';
import { Table } from 'reactstrap';
import styled from 'styled-components';

const MembersTable = ({ membros, update }) => {   
   const { id: id_caixa } = useParams();
   const [modal, setModal] = useState({ isOpen: false, data:null });

   const deleteSubscription = () => {
      if ( modal.data.id ) {
         deleteServiceUsers( modal.data.id)
         .then(() => {
            alert(`Membro foi excluido com sucesso!`)
            update(true)
         })
         .catch(error => console.log('Temos um erro, não consegui excluir o usuário.'))
      }
   }

   const toggleModal = (data = null) => {
      setModal({
         isOpen: !modal.isOpen,
         data
      })
   };

   return(
      <TableContainer>
         {membros && membros.length ? (
            <div>
                  <Table responsive striped dark size="sm">
                     <thead>
                        <TableTr>
                           <th>Nome</th>
                           <th>Email</th>
                           <th>Nascimento</th>
                        </TableTr>
                     </thead>
                     <tbody>
                        {membros && membros.map((assinantesArray,index) => (
                           <TableTr key={index}>
                              <td>{assinantesArray.member.name}</td>
                              <td>{assinantesArray.member.email}</td>
                              <td>{new Date(assinantesArray.member.birth_date).toLocaleDateString()}</td>
                           </TableTr>
                        ))}
                     </tbody>
                  </Table>
            </div>
         ) : (
            <div>Ainda não existem membros cadastrados nessa Box.</div>
         )}
      </TableContainer>
   )
};

export default MembersTable;


const TableContainer = styled.div`
   background-color: #312E3F;
   div{
      padding:20px 40px;
   }
`
const TableTr = styled.tr`

   th{
      padding:10px 15px;
      background-color:#120D1A;
      border:none;
      :nth-child(n){min-width:200px;}
      :nth-child(1){min-width:400px;}
      :nth-child(4){min-width:100px; text-align: center;}
   }
   td{
      padding:5px 15px;
      :nth-child(1){ text-transform: uppercase;}
      :nth-child(3){ text-transform: lowercase;}
      :nth-child(4){ text-align: center;}
   }

`
const SButton = styled.button`
   border:0;
   background:#C82333;
   color:#fff;
   padding:2px 25px 5px 25px;
   border-radius:5px;
   :hover{
      background:#f5f5f5;
      color:#C82333;
   }
`
