import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getBoxDetalhe } from '../store/box/box.action';
import { Navbar, Button } from 'reactstrap';
import styled from 'styled-components';
import { AiFillCheckSquare, AiFillCloseSquare } from 'react-icons/ai'

//______ COMPONENTES______
import MembersTable from '../components/table';
import LoadingComponent from '../components/loading';
import ImgBox from '../assets/images/boxes/box-detalhes.jpg';
import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import { createSubscription, removeSubscription } from '../store/assinante/assinante.action';


const BoxesPage = (props) => {
   const dispatch = useDispatch()
   const { id } = useParams();
   // const { history } = props;

   const [loading, setLoading] = useState(false);
   const [update, setUpdate] = useState(false);
   // const [ isSubscription, setSubs] = useState(false);

   const isAdmin = useSelector(state => state.auth.admin)
   const detalhes = useSelector(state => state.boxes.detalhes)
   const assinaturas = useSelector(state => state.boxes.detalhes.assinantes)
   const registered = useSelector(state => state.boxes.detalhes.registered)

   const toogleSubcription = () => {
      if(registered) {
         dispatch(removeSubscription(id, detalhes.assinantes[0].id))
         .then(() => {
            Swal.fire({
                icon: 'success',
                title: `Assinatura removida.`,
                showConfirmButton: false,
                showCloseButton: true,
            })
        })
        .catch(erro => console.log('ERRO!'))
      } else {
         dispatch(createSubscription(id))
             .then(() => {
                 Swal.fire({
                     icon: 'success',
                     title: `Caixa assinada com sucesso!`,
                     showConfirmButton: false,
                     showCloseButton: true,
                 })
             })
             .catch(erro => console.log('ERRO!'))
     }
   }

   useEffect(()=>{
      dispatch(getBoxDetalhe(id))
      setUpdate(false)
   },[]);
   
   const printBoxDetalhe = (detalhes) => {
      return(
      <Produto>
         <h2>{detalhes.name || ''}</h2>
         <div>
            <img src={ImgBox} width="60%" alt='foto demosntrativa da box'/>
            <div>
               <p>{detalhes.description || ''}</p>
               <Button block onClick={() => toogleSubcription(assinaturas)} color={!registered ? "info" : "danger"} size="sm">{!registered ?(<><AiFillCheckSquare/> Quero Assinar</>) :(<><AiFillCloseSquare/> Cancelar Assinatura</>) }</Button>
            </div>
         </div>
      </Produto>
   )};
   
   const montarTela = (detalhes) => (
      <div>
         {printBoxDetalhe(detalhes)}
         {isAdmin ? <MembersTable membros={detalhes.assinantes} update={setUpdate}/> : "" }
      </div>
   )

   return(
      loading 
         ? <LoadingComponent/> 
         : montarTela(detalhes)
   );
};

export default BoxesPage;

const Produto = styled.div`
   margin:50px;
   padding:20px;
   background-color:#ffffff;
   border-radius:10px;
   color:#575757;
   box-shadow: 5px 5px 5px #e5e5e5;
   
   div{
      display:flex;
      img{
         border-radius:10px;
      }
      div{
         flex-direction:column;
         justify-content:space-between;
         width:100%;
         margin:0 0 0 20px;
         p{
            text-indent:15px;
            margin:0 0 10px 0;
         }
      }
   }

   @media(max-width: 700px) {
      margin:20px;
      h2{
         text-align:center;
      }
      div{
         flex-direction:column;
         align-items:center;
         div{
            margin:10px;
            p{
               margin:20px;
            }
         }
      }
  }
`
const SNavbar = styled(Navbar)`
   padding:10px 65px;
   background-color:#312E3F;
   border-bottom:1px solid #3E444A;
   display:flex;
   .Info{
      color:#f6f6f6;
      flex:1;
   }

`