import React from 'react';
import { Table, Button } from 'reactstrap';
import {useParams } from 'react-router';
import { deleteServiceUsers } from '../../services/users.service.js';
import styled from 'styled-components';


const MembersTable = ({ membros, update }) => {
    
    const { id: id_caixa } = useParams();

    const deleteSubscription = (id_member) => {
        console.log('####', id_member)
        deleteServiceUsers(id_member)
        .then(() => {
            alert(`Membro foi excluido com sucesso!`)
            update(true)
        })
        .catch(error => console.log('Temos um erro, não consegui excluir o usuário.'))
    }

    return(
        <TableContainer>
            <Table striped width="100%">
                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>Email:</th>
                        <th>Nascimento</th>
                        <th>Cancelar Inscrição</th>
                    </tr>
                </thead>
                <tbody>
                    {membros && membros.map((assinantesArray,index) => {
                        console.log("####", assinantesArray.user)
                        return(
                            <tr key={index}>
                                <td>{assinantesArray.user.name}</td>
                                <td>{assinantesArray.user.email}</td>
                                <td>{new Date(assinantesArray.user.birth_date).toLocaleDateString()}</td>
                                <td>
                                <SButton onClick={() => deleteSubscription(assinantesArray.id)}>Excluir</SButton>
                                </td>
                            </tr>
                        )})
                    }
                </tbody>
            </Table>
        </TableContainer>

    )
};

export default MembersTable;


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
