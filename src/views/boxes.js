import { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getBoxDetalhe } from '../store/box/box.action';
import { Navbar, Button } from 'reactstrap';
import styled from 'styled-components';

//______ COMPONENTES______
import Subscription from '../components/subscription';
import MembersTable from '../components/table';
import LoadingComponent from '../components/loading';
import ImgBox from '../assets/images/boxes/box-detalhes.jpg';
import { useSelector, useDispatch } from 'react-redux';


const BoxesPage = (props) => {
   const dispatch = useDispatch()
   const { id } = useParams();
   const { history } = props;

   const [loading, setLoading] = useState(false);
   // const [boxDetalhe, setBoxDetalhe] = useState({});
   const [update, setUpdate] = useState(false);
   const [ isSubscription, setSubs] = useState(false);

   const isAdmin = useSelector(state => state.auth.admin)
   const detalhes = useSelector(state => state.boxes.detalhes)
   // const getBoxDetalhe = useCallback(async () => {
   //    try {
   //       setLoading(true);
   //       const res = await getServiceBoxDetalhe(id);
   //       setTimeout(() => {
   //          setBoxDetalhe(res.data);
   //          setLoading(false);
   //       }, 500)
   //       } catch (error) {
   //          console.log("##", error, "##")
   //          // setError(true)
   //          history.push('/?error=404')
   //       }
   //    }, [id, history]
   // );

   useEffect(()=>{
      dispatch(getBoxDetalhe(id))
      setUpdate(false)
   },[]
   );

   const printBoxDetalhe = (detalhes) => {
      return(
      <Produto>
         <h2>{detalhes.name || ''}</h2>
         <div>
            <img src={ImgBox} width="60%" alt='foto demosntrativa da box'/>
            <p>{detalhes.description || ''}</p>
         </div>
         <Button color="primary">Quero Assinar</Button>
      </Produto>
   )};


   // const Menu = () => (
   //    <SNavbar >
   //       <div className="Info">
   //          {isSubscription ? "Faça Aqui sua inscrição." : "Veja a lista de inscritos." }
   //       </div>
   //       <Button onClick={() => setSubs(!isSubscription)} color={ !isSubscription ? "info" : "primary" } size="md">
   //          { !isSubscription ? "Inscreva-se" : "Lista de Inscritos" }
   //       </Button>
   //    </SNavbar>
   // )

   const montarTela = (detalhes) => (
      <div>
         {printBoxDetalhe(detalhes)}
         {isAdmin ? <MembersTable membros={detalhes.assinantes} update={setUpdate}/> : "" }
      </div>
   )


   return(
      loading 
         ? <LoadingComponent/> 
         : montarTela (detalhes)
      
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
   background-color:#312E3F;
   border-bottom:1px solid #3E444A;
   display:flex;
   .Info{
      color:#f6f6f6;
      flex:1;
   }

`