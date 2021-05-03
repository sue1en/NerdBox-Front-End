import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Card, CardBody, CardImg, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect, useState } from 'react'
import Swal from 'sweetalert2'
import { editBoxAction, deleteBoxAction, getBoxDetalhe} from '../../store/box/box.action'
import FormBox from '../boxes/form';

// ______Images_____
import BoxesImage from '../../assets/images/boxes/modelbox.jpg'
import { BiTrash, BiEdit } from 'react-icons/bi'

const ProductBoxes = ({ item: { id, name, price} }) => {


const dispatch = useDispatch();

const detalhe = useSelector(state => state.boxes.detalhes)

const [modal, setModal] = useState(false);

const stateForm = useState({})
const [form, setForm] = stateForm

const toggle = () => setModal(!modal);

const editBox = (id) => {
    toggle()
    setForm({ id })
}

useEffect(() => {
    setForm({ ...detalhe })
}, [detalhe, setForm])

   
const deleteBox = (id, name) => {
    Swal.fire({
        title: `Você deseja excluir a Caixa: ${name} ?`,
        showDenyButton: false,
        showCancelButton: true,
        confirmButtonText: `Sim`,
        cancelButtonText: `Não`,
      }).then((result) => {
        if (result.isConfirmed) {
            dispatch(deleteBoxAction(id))
            .then(() => {
                Swal.fire('Deletado!', '', 'success')
            })
        }
    })
}

const submitForm= () => {
    dispatch(editBoxAction(form))
      .then(() => {
        setForm({});
        toggle();
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Caixa Atualizada!',
          showConfirmButton: false,
          timer: 3500
          })
    })
}
   const isAdmin = useSelector(state => state.auth.admin)

   return(
       <>
        <SCard>
            <SLink to={`/boxes/${id}`}>
            <SCardImg top src={BoxesImage} alt="Card image cap" />
            </SLink>
            <SCardBody>
                <h5>{name}</h5>
                <h6>R$ {price}</h6>
                <h6>Numero de assinantes:</h6>
                <BiEdit style={{ cursor: "pointer" }} className="text-info mr-1 font-weight-normal" size="25px" onClick={() => editBox(id) } />
                <BiTrash style={{ cursor: "pointer" }} className="text-danger font-weight-normal" size="25px" onClick={() => deleteBox(id, name)} /> 
            </SCardBody>
        </SCard>


        {/* MODAL */}
        <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Atualizar Caixa</ModalHeader>
            <ModalBody>
                <FormBox state={stateForm}/>
            </ModalBody>
        <ModalFooter>
            <Button color="primary" onClick={submitForm}>Enviar</Button>{' '}
            <Button color="secondary" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
        </Modal>
    </>   
   );
};

export default ProductBoxes;

const SCard = styled(Card)`
   background-color:#5C22B3;
   border-radius:10px;
   border:none;
`
const SLink = styled(Link)`
   text-decoration:none !important;
   :hover {
      opacity: 0.8;
   }
`
const SCardImg = styled(CardImg)`
   border-radius:10px 10px 0 0;
`

const SCardBody = styled(CardBody)`
   text-decoration:none;
   text-align: center;
   h5{
      color:#f6f6f6;
      font-weight:normal;
   }
   h6{
      font-size:22px;
      color:#1CBCBB;
   }
`