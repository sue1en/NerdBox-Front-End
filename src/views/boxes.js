import { useState, useCallback, useEffect } from 'react';
import { useParams } from 'react-router';
import { getServiceBoxDetalhe } from '../services/boxes.service.js';
import { Navbar, Nav, Button } from 'reactstrap';
import styled from 'styled-components';

//______ COMPONENTES______
import Subscription from '../components/subscription';
import MembersTable from '../components/table';
import Loading_component from '../components/loading';
import ImgBox from '../assets/images/boxes/box-detalhes.jpg';




const BoxesPage = (props) => {
   const { id } = useParams();
   const { history } = props;

   const [loading, setLoading] = useState(false);
   const [boxDetalhe, setBoxDetalhe] = useState({});
   const [update, setUpdate] = useState(false);
   const [ isSubscription, SetSubs] = useState(false);

   const getBoxDetalhe = useCallback(async () => {
      try {
         setLoading(true);
         const res = await getServiceBoxDetalhe(id);
         setTimeout(() => {
            setBoxDetalhe(res.data);
            setLoading(false);
         }, 500)
         } catch (error) {
            console.log("##", error, "##")
            // setError(true)
            history.push('/?error=404')
         }
      }, [id, history]
   );

   useEffect(()=>{
      getBoxDetalhe()
      setUpdate(false)
   },[getBoxDetalhe, update]
   );

   const printBoxDetalhe = (boxDetalhe) => {
      console.log(boxDetalhe)
      return(
      <Produto>
         <h2>{boxDetalhe.name || ''}</h2>
         <div>
            <img src={ImgBox} width="60%" alt='foto demosntrativa da box'/>
            <p>{boxDetalhe.description || ''}</p>
         </div>
      </Produto>
   )};


   const Menu = () => (
      <SNavbar light>
         <Nav className="mr-auto" navbar>
            <Button size="md" block onClick={() => SetSubs(!isSubscription)} color={ !isSubscription ? "info" : "secondary" } size="sm">
               { !isSubscription ? "Incrições" : "Lista de Inscritos" }
            </Button>
         </Nav>
      </SNavbar>
   )

   const montarTela = (boxDetalhe) => (
      <div>
         {printBoxDetalhe(boxDetalhe)}
         {Menu()}
         {
            isSubscription 
               ? (<Subscription id={id} update={setUpdate}/>)
               : (<MembersTable membros={boxDetalhe.assinantes} update={setUpdate}/>)
         }
      </div>
   )


   return(
      loading 
         ? <Loading_component/> 
         : montarTela (boxDetalhe)
      
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
      p{
         margin:0 40px;
      }
   }
   @media(max-width: 800px) {
      margin:20px;
      h2{
         text-align:center;
      }
      div{
         flex-direction:column;
         align-items:center;
         p{
            margin:0 10px;
         }
      }
  }
`
const SNavbar = styled(Navbar)`
   padding:10px 65px;

`
