import {useParams } from 'react-router';
import { deleteServiceUsers } from '../../services/users.service.js';


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
        <div className='MembersContainer'>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>Email:</th>
                        <th>Nascimento</th>
                        <th>Cancelar</th>
                    </tr>
                </thead>
                <tbody>
                    {membros && membros.map((user,index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.birth_date).toLocaleDateString()}</td>
                            <td><button onClick={() => deleteSubscription(user.id)}>Excluir</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Table;