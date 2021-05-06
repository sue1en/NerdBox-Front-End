import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSubsAll } from '../store/assinante/assinante.action';
import { Table } from 'reactstrap'
import { Button, Modal, ModalHeader, ModalBody} from 'reactstrap';
import { BiListPlus } from 'react-icons/bi'
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
        <>
        <Table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome do Assinante</th>
                    <th>Email do Assinante</th>
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
        </>
    )
}

export default Assinantes;