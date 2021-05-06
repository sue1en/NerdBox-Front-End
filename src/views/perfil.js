import { useState, useEffect } from "react"
import { Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux';
import styled from "styled-components";
import { Table } from 'reactstrap';
import { getSubsId, updateProfile } from '../store/assinante/assinante.action';

const Profile = (id) => {
    document.title = "NerdBox - Perfil"
    const dispatch = useDispatch()
    const perfil = useSelector(state => state.auth.usuario)

    const assinantes = useSelector(state => state.subs.all)

    const [form, setForm] = useState({ ...perfil })
    

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    useEffect(() => {
        dispatch(getSubsId())
    },[dispatch])

    const formatDate = (birth_date) => {
        const [y, m, d] = birth_date.split('-')
        return `${d}/${m}/${y}`
    }

    const updateForm = () => {
        const nform = {
            ...form,
            name: form.name,
            email: form.email.toLowerCase(),
            birth_date: formatDate(form.birth_date),
        }
        delete nform.type
       dispatch(updateProfile(nform))
    }


    return (
        <>
        <ProfileUpdate>
            <BoxInscricao>
                <Col xs="12" sm="12" md="8" lg="8">
                    <FormGroup>
                        <Label for="name">Nome</Label>
                        <Input type="text" id="name" value={form.name || ""} onChange={handleChange}
                            name="name" placeholder="Insira seu nome"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input type="email"id="email" value={form.email || ""} onChange={handleChange}
                            name="email" placeholder="Insira seu email" className="text-lowercase" />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Data Nascimento</Label>
                        <Input type="date" id="birth_date" value={form.birth_date || ""} onChange={handleChange}
                            name="birth_date" />
                    </FormGroup>
                    <FormGroup>
                        <Button color="primary" onClick={updateForm}>Atualizar Dados</Button>
                    </FormGroup>
                </Col>
            </BoxInscricao>
            <Table>
                    <thead>
                        <tr>
                            <th>Caixas Assinadas</th>
                            <th>ID</th>
                        </tr>
                    </thead>
                    <tbody>
                        {assinantes?.assinaturas?.map((item, i) => (
                            <tr key={i}>
                                <td>{item.caixa}</td>
                                <td>{item.id}</td>
                            </tr>
                            
                        ))}
                    </tbody>
                </Table>
        </ProfileUpdate>
        </>
    )
}

export default Profile;

const BoxInscricao = styled(Row)`
    width: 600px;
    height: 40px;
    margin-left: 200px;
`
const ProfileUpdate = styled.div`
    display:flex;
    justify-content: center;
    font-family: 'Roboto', sans-serif;
    font-size:22px;
    margin-bottom: 10px;
    font-weight:500;
    padding: 5px;
`