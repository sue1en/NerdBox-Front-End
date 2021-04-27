import React, { useState, useEffect } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText,
  Table,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
} from "reactstrap";

import { Test, SForm } from "../assets/styled";
import { useSelector, useDispatch } from "react-redux";
import { getBoxAll, createBox } from "../store/box/box.action";


const Gerenciar = () => {
  document.title = "NerdBox - Painel Admin";
  const dispatch = useDispatch();
  const [form, setForm] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  const [isForm, setIsForm] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const usuario = useSelector((state) => state.auth.usuario);
  const boxes = useSelector((state) => state.boxes.all);

  const handlerForm = (e) => {
    setForm({
       ...form,
       [e.target.name]: e.target.value
    })
 };

  const submitForm = () => {
      dispatch(createBox(form))
      console.log(form);
  }

  useEffect(() => {
    dispatch(getBoxAll());
  }, []);

  console.log(form)
  return (
    <Test>
      <Navbar color="dark" expand="md">
        <NavbarText>Painel do Administrador ||</NavbarText>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <Button onClick={() => setIsForm(!isForm)} size="sm" className="mr-10" color="info">
              Cadastrar Box
            </Button>
          </Nav>
          <NavbarText>Seja Bem vindo!</NavbarText>
        </Collapse>
      </Navbar>
      {isForm ? (
          <SForm>
          <Form>
            <FormGroup>
              <Label for="name">Nome</Label>
              <Input
                type="text"
                name="name"
                id="name"
                placeholder="name placeholder"
                value={form.name || ""}
                onChange={handlerForm}
              />
            </FormGroup>
            <FormGroup>
              <Label for="description">Descrição</Label>
              <Input
                type="textarea"
                name="description"
                id="description"
                placeholder="descripiton placeholder"
                value={form.description || ""}
                onChange={handlerForm}
              />
            </FormGroup>
            <FormGroup>
              <Label for="price">Preço</Label>
              <Input
                type="number"
                name="price"
                id="price"
                placeholder="price placeholder"
                value={form.price || ""}
                onChange={handlerForm}
              />
            </FormGroup>
            <Button onClick={() => submitForm()} color="primary">Submit</Button>
          </Form>
        </SForm>
      ) : ""}
      

      <Table dark>
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Descrição</th>
            <th>Preço</th>
          </tr>
        </thead>
        <tbody>
          {boxes?.map((boxes, i) => (
            <tr key={i}>
              <td scope="row">{boxes.id}</td>
              <td>{boxes.name}</td>
              <td>{boxes.description}</td>
              <td>{boxes.price}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Test>
  );
};

export default Gerenciar;
