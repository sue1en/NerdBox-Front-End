import {useParams } from 'react-router';
import { deleteServiceUsers } from '../../services/users.service.js';
import styled from 'styled-components';


const Table = ({ membros, update }) => {
    
    const { id: id_box } = useParams();

    const deleteSubscription = (id_member) => {
        console.log('####', id_member)
        deleteServiceUsers(id_box, id_member)
        .then(() => {
            alert(`Membro foi excluido com sucesso!`)
            update(true)
        })
        .catch(error => console.log('Temos um erro, não consegui excluir o usuário.'))
    }

    return(
        <SMembersContainer>
            <STable width="100%">
                <STHead>
                    <tr>
                        <th>Nome:</th>
                        <th>Email:</th>
                        <th>Nascimento</th>
                        <th>Cancelar</th>
                    </tr>
                </STHead>
                <STBody>
                    {membros && membros.map((user,index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.birth_date).toLocaleDateString()}</td>
                            <td>
                                <SButton onClick={() => deleteSubscription(user.id)}>Excluir</SButton>
                            </td>
                        </tr>
                    ))}
                </STBody>
            </STable>
        </SMembersContainer>
    )
}
export default Table;

const SMembersContainer = styled.div`
    // height:250px;
    width: 80vw;
    background-color: #eee;
    border-radius: 20px;
    margin:30px;
    padding:20px
`

const STable = styled.table`
    // border:2px solid black;
    border-radius:10px;
    height:150px;
    width:100%;
    
`

const STHead = styled.thead`
    background:#ccc;
    margin:0;
    border:2px solid #000;
    background:#ccc;
    tr{
        th{
            padding:5px;
        }
    }
`
const STBody = styled.tbody`
    tr{
        
    }
`
const SButton = styled.button`
    font-weight:bold;
    padding:5px 20px;
    border:0;
    border-radius:5px;
    background:#dd3b3b;
`