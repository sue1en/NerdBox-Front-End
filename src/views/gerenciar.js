import React, { useState, useEffect } from "react";
import {
  Collapse, Navbar, NavbarToggler, Nav,
  NavbarText,  Table,  Button,  Form,  FormGroup, Label,  Input,
  Modal, ModalHeader, ModalBody, ModalFooter, Col, Row, Tooltip
} from "reactstrap";

import { useSelector, useDispatch } from "react-redux";
import Swal from 'sweetalert2';
import { getBoxAll, createBox } from "../store/box/box.action";
import LoadingComponent from '../components/loading';
import styled from 'styled-components'
import ProductBoxes from '../components/boxes/boxAdmin';
import FormBox from '../components/boxes/form';
import {
  NavbarBrand,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';

import { BiPlus, BiWrench, BiGroup } from 'react-icons/bi'
import { Link, NavLink } from "react-router-dom";


const Gerenciar = (props) => {
  document.title = "NerdBox - Painel Admin";
  
  const dispatch = useDispatch();

  const [modal, setModal] = useState(false);
  const [ isUpdate, setUpdate ] = useState(false);
  const stateForm = useState({})
  const [form, setForm] = stateForm

  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);


  const toggleModal = () => setModal(!modal);

  const usuario = useSelector((state) => state.auth.usuario);

  const boxes = useSelector((state) => state.boxes.all);
  const loading =  useSelector(state => state.boxes.loading)

  const MapBoxes = (boxes) => boxes.map((item, index) => (
    <Col md="4" xl="4" sm="12" xs="12" key={index} className="mb-4">
       <ProductBoxes item={{...item, status: true }}/>
    </Col>
 ));

  const submitForm = () => {
   dispatch(createBox(form))
      .then(() => {
        setForm({});
        toggleModal();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Caixa criada com SUCESSO!',
          showConfirmButton: false,
          timer: 3500
          })
      })
  };

 useEffect(()=>{
  dispatch(getBoxAll());
},[dispatch]);

 if(loading) {
  return <LoadingComponent />
}

  return (
    <>
      <SNavbar color="light" light expand="md">
        <NavbarBrand>Painel do Administrador</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="mr-auto" navbar>
            {/* <NavItem>
              <Button style={{ cursor: "pointer" }} onClick={toggle}  size="20px"color="primary">Cadastrar uma Nova Caixa </Button>
            </NavItem> */}
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <BiWrench /> Gerenciar
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem onClick={toggleModal}>
                  <BiPlus/> Adicionar Caixa
                </DropdownItem>
                <DropdownItem >
                  <NavLink to="/assinantes"><BiGroup/> Gerir Assinaturas</NavLink>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <NavbarText>{`Administrador: ${usuario.name}`}</NavbarText>
        </Collapse>
      </SNavbar>
    <BoxesContainer>
      <Row>
        {!loading && boxes.length === 0 ? "Nâo tem Caixas disponiveis" : MapBoxes(boxes)}
      </Row>
      {/* MODAL */}
      <Modal isOpen={modal} toggle={toggleModal}>
        <ModalHeader toggle={toggleModal}>Criar uma nova caixa</ModalHeader>
        <ModalBody>
          <FormBox state={stateForm}/>
        </ModalBody>
        <ModalFooter>
          <Button color="info" onClick={submitForm}>Enviar</Button>{' '}
          <Button color="secondary" onClick={toggleModal}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </BoxesContainer >
  </>
  );
};

export default Gerenciar;

const BoxesContainer = styled.div`
   margin:70px 60px 60px 60px;
   h2{
      margin:60px 0 60px 0;
      text-align: center;
      color:#575757;
      font-size:22px;
   }
   @media(max-width: 500px) {
   }
`
const SNavbar = styled(Navbar)`
  padding:5px 50px;
`