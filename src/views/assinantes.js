import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubsAll } from '../store/assinante/assinante.action';
import { Table } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { BiListPlus } from 'react-icons/bi'
import styled from "styled-components";
const Assinantes = () => {
    document.title = 'Nerdbox - Assinantes'
    const dispatch = useDispatch()
    const assinantes = useSelector(state => state.subs.all)

    const [modal, setModal] = useState({
        status: false,
        data: {}
    });

    const toggle = (data = {}) => setModal({
        status: !modal.status,
        data: data
    })

    useEffect(() => {
        dispatch(getSubsAll())
    },[dispatch])

    return (
        <Container>
            <ContainerSL>
                <Table striped>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Nome do Assinante</th>
                            <th>Email do Assinante</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {assinantes?.map((assinantes, i)=> (
                            <tr key={i}>
                                <th scope="row">{assinantes.id}</th>
                                <td>{assinantes.name}</td>
                                <td>{assinantes.email}</td>
                                <td><BiListPlus style={{ cursor: 'pointer' }} size="25px" onClick={() => toggle(assinantes)}/></td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
                <Modal isOpen={modal.status} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Lista de Assinaturas</ModalHeader>
                    <ModalBody>
                        <Table>
                            <thead>
                                <tr>
                                    <th>Caixas Assinadas</th>
                                    <th>ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {modal?.data?.assinaturas?.map((v, i)=> (
                                    <tr key={i}>
                                        <td>{v.caixa}</td>
                                        <td>{v.id}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </ModalBody>
                </Modal>
            </ContainerSL>
        </Container>
    )
}

export default Assinantes;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    min-width: 100%;
`

const ContainerSL = styled.div`
    /* box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px; */
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    min-width: 70%;
`