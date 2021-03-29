import { useState } from 'react';
import { useParams } from 'react-router';
import { deleteServiceUsers } from '../../services/users.service.js';
import { Table, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';


const MembersTable = ({ membros, update }) => {   
   const { id: id_caixa } = useParams();
   const [modal, setModal] = useState({
      isOpen: false,
      data:null
   });

   const deleteSubscription = () => {
      if (modal.data.id) {
         deleteServiceUsers(id_caixa, modal.data.id)
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
                  <Table responsive striped size="sm">
                     <thead>
                        <tr>
                           <th>Nome:</th>
                           <th>Email:</th>
                           <th>Nascimento</th>
                           <th>Cancelar Inscrição</th>
                        </tr>
                     </thead>
                     <tbody>
                        {membros && membros.map((assinantesArray,index) => (
                           <tr key={index}>
                              <td>{assinantesArray.user.name}</td>
                              <td>{assinantesArray.user.email}</td>
                              <td>{new Date(assinantesArray.user.birth_date).toLocaleDateString()}</td>
                              <td>
                                 <SButton size="sm" color="danger" onClick={() => toggleModal(assinantesArray.id)}>Excluir</SButton>
                              </td>
                           </tr>
                        ))}
                     </tbody>
                  </Table>

                  <Modal isOpen={modal.isOpen} toggle={toggleModal}>
                  <ModalHeader toggle={toggleModal}>Cancelar Assinatura</ModalHeader>
                  <ModalBody>
                  Deseja Cancelar a Assinatura de {modal?.data?.user?.name}
                  </ModalBody>
                  <ModalFooter>
                     <Button color="primary" onClick={deleteSubscription}>SIM</Button>{' '}
                     <Button color="secondary" onClick={toggleModal}>NÃO</Button>
                  </ModalFooter>
               </Modal>
            </div>
         ) : (
            <div>Ainda não existem membros cadastrados nessa Box.</div>
         )}
      </TableContainer>
   )
};

export default MembersTable;

//deleteSubscription(assinantesArray.id)

const TableContainer = styled.div`
   background-color: #eee;
   border-radius: 20px;
   margin:30px 60px;
   padding:20px;
`
const SButton = styled.button`
   font-weight:bold;
   padding:5px 20px;
   border:0;
   border-radius:5px;
   background:#dd3b3b;
   color:#fff;
`
