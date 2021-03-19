const Tabela = ({ membros }) => {
    return(
        <div>
            <table border="1" width="100%">
                <thead>
                    <tr>
                        <th>Nome:</th>
                        <th>Email:</th>
                        <th>Nascimento</th>
                    </tr>
                </thead>
                <tbody>
                    {membros && membros.map((user,index) => (
                        <tr key={index}>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{new Date(user.birth_date).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
export default Tabela;