import { useState } from "react"
import { Button, Row, Col, FormGroup, Label, Input } from 'reactstrap';
import { useSelector } from 'react-redux';
import styled from "styled-components";
import { updateProfileService } from '../services/auth.service'

const Profile = () => {
    document.title = "NerdBox - Perfil"

    const perfil = useSelector(state => state.auth.usuario)
    const [form, setForm] = useState({ ...perfil })
    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const formatDate = (birth_date) => {
        const [y, m, d] = birth_date.split('-')
        return `${d}/${m}/${y}`
    }

    const updateForm = () => {
        const nform = {
            ...form,
            name: form.name.toUpperCase(),
            email: form.email.toLowerCase(),
            birth_date: formatDate(form.birth_date)
        }
       console.log(nform)
    }


    return (
        <>
         <h2>{perfil.name}</h2>
         <h2>{perfil.email}</h2>
         <h2>{perfil.id}</h2>
        <ProfileUpdate>
            <BoxInscricao>
                <Col xs="12" sm="12" md="8" lg="8">
                    <FormGroup>
                        <Label for="name">Nome</Label>
                        <Input type="text" id="name" value={form.name || ""} onChange={handleChange}
                            name="nome" placeholder="Insira seu nome" className="text-uppercase" />
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