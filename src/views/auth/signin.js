import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {
  Card, Col, CardBody,CardHeader,Alert,
  Button, FormGroup, Label,Input, CardFooter,
} from 'reactstrap';
import { signInAction } from '../../store/auth/auth.action';
import { Sign } from '../../assets/styled'

const SignIn = (data) => {
    const dispatch = useDispatch()
    const [form, setForm] = useState({});

    const error = useSelector(state => state.auth.error)
    const [visible, setVisible] = useState(true);
    const onDismiss = () => setVisible(false);

    const closeError = () => setVisible(false);

    const handlerChangeNew = (e) => {
        setForm({
           ...form,
           [e.target.name]: e.target.value
        })
     };

    const submitForm = () => {
        dispatch(signInAction(form))
    }

    useEffect(() => {
        setVisible(error.length > 0)
        setTimeout(() => setVisible(false), 5000);
    }, [error])

    return (
    <Sign>
        <Col sm={12} md={4} lg={5}>
            <Alert color="danger" isOpen={visible} toggle={closeError}>
                <div><strong>OPS! </strong> Aconteceu um erro.</div>
                <small>Verifique usuário e senha</small>
            </Alert>
            <Card>
                <CardHeader tag="h4" className="text-center">Login</CardHeader>
                <CardBody>
                    <FormGroup>
                        <Label for="Email">Email:</Label>
                        <Input type="text" id="user" name="user" value={form.user || ""} onChange={handlerChangeNew} placeholder="Insira seu Email" className="text-lowercase"/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Senha:</Label>
                        <Input type="password" id="password" name="password" value={form.password || ""} onChange={handlerChangeNew} placeholder="Insira sua Senha"/>
                    </FormGroup>
                    <FormGroup>
                        <Button color={'primary'} size="md" block onClick={submitForm}>Entrar</Button>
                    </FormGroup>
                </CardBody>
                <CardFooter className="text-muted">
                    Não tem Cadastro? <Link to="/signup">Cadastre-se</Link>
                </CardFooter>
            </Card>
      </Col>
    </Sign>
    )
}

export default SignIn;