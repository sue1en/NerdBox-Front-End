import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {
  Card, Col, CardBody,CardHeader,Alert,
  Button, FormGroup, Label,Input, CardFooter, Spinner,
} from 'reactstrap';
import { signUpAction } from '../../store/auth/auth.action';
import { Sign } from '../../assets/styled'

const SignUp = (data) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({
        name: "",
        email: "",
        password: "",
        birth_date: ""
    });

    
    const error = useSelector(state => state.auth.error)
    const loading = useSelector(state => state.auth.loading)
    const registered = useSelector(state => state.auth.registered)

    const [success , showSuccess] = useState(false)
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    const closeError = () => setVisible(false);

    const handlerChangeNew = (e) => {
        setForm({
           ...form,
           [e.target.name]: e.target.value
        })
     };

    useEffect(() => {
        setVisible(error.length > 0)
        setTimeout(() => setVisible(false), 5000);
    }, [error])

    useEffect(() => {
        if(registered){
            showSuccess(true)
            setForm({})
        }
    }, [registered])

    const formatDate = (birth_date) => {
        const [y, m, d] = birth_date.split('-')
        return `${d}/${m}/${y}`
    }

    const isNotValid = () => form.name.length === 0 || form.email.length === 0 ||form.password.length === 0 || form.birth_date.length === 0
    
    const submitForm = () => {
        dispatch(signUpAction({
            ...form,
            birth_date: formatDate(form.birth_date)
        }))
    }

    return (
    <Sign>
        <Col sm={12} md={4} lg={5}>
            <Alert color="success" isOpen={success} toggle={() => showSuccess(!success)}>
                <div><strong>Usuario </strong> Cadastrado com sucesso.</div>
            </Alert>

            <Alert color="danger" isOpen={visible} toggle={closeError}>
                <div><strong>OPS! </strong> Aconteceu um erro.</div>
                <small>Verifique usuário e senha</small>
            </Alert>
            <Card>
                <CardHeader tag="h4" className="text-center">Cadastre-se</CardHeader>
                <CardBody>
                    <FormGroup>
                        <Label for="name">Nome:</Label>
                        <Input disabled={loading} type="text" id="name" name="name" value={form.name || ""} onChange={handlerChangeNew} placeholder="Insira seu Nome"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email:</Label>
                        <Input disabled={loading} type="text" id="email" name="email" value={form.email || ""} onChange={handlerChangeNew} placeholder="Insira seu Email" className="text-lowercase"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="password">Senha:</Label>
                        <Input disabled={loading} type="password" id="password" name="password" value={form.password || ""} onChange={handlerChangeNew} placeholder="Insira sua Senha"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="birth_date">Data Nascimento:</Label>
                        <Input disabled={loading} type="date" id="birth_date" name="birth_date" value={form.birth_date || ""} onChange={handlerChangeNew}/>
                    </FormGroup>
                    <FormGroup>
                        <Button color={isNotValid() || loading ? 'secondary' : 'primary'} disabled={isNotValid()} size="md" block onClick={submitForm}>
                            {loading ? (<><Spinner size="sm" color="light" /> Carregando...</>) : "Enviar"}
                        </Button>
                    </FormGroup>
                </CardBody>
                <CardFooter className="text-muted">
                Já tem acesso ? <Link to="/signin">Faça o Login</Link>
                </CardFooter>
            </Card>
      </Col>
    </Sign>
    )
}

export default SignUp;