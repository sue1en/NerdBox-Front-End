import { useState, useEffect } from 'react';
import { NavLink as RRDNavLink } from 'react-router-dom';
import styled from 'styled-components';
import {
   Collapse,
   Navbar,
   NavbarToggler,
   NavbarBrand,
   Nav,
   NavItem,
   NavLink,
} from 'reactstrap';
import '../../assets/css/style.css'

//_____Images_____
import NerdBoxLogo from '../../assets/images/logos/logo-header.png';
import Teste from '../../assets/estilo-teste.js';


const Header = ()=>{ 

   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);
   
   return(   
      <SHeader>
         <SNavbar expand="sm" dark className="navbar-style" style={{ flexWrap:'nowrap' }}>
            <SNavbarBrand tag={RRDNavLink} to="/">
               <img src={NerdBoxLogo} alt="Nerd Box Logo"/>
            </SNavbarBrand>
            <Container>
               <NavbarToggler onClick={toggle} />
               <Collapse isOpen={isOpen} navbar>
                     <Nav className="mr-auto" navbar>
                        <NavItem>
                           <SNavLink exact tag={RRDNavLink} to="/" activeClassName="active">Home</SNavLink>
                        </NavItem>
                        <NavItem>
                           <SNavLink exact tag={RRDNavLink} to="/" activeClassName="active">Nossos Produtos</SNavLink>
                        </NavItem>
                        <NavItem>
                           <SNavLink exact tag={RRDNavLink} to="/" activeClassName="active">Comentários</SNavLink> 
                        </NavItem>
                        <NavItem>
                           <SNavLink exact tag={RRDNavLink} to="/sobre" activeClassName="active">Sobre</SNavLink>
                        </NavItem>
                     </Nav>
               </Collapse>
            </Container>    
         </SNavbar>
      </SHeader>
   );
};

export default Header;

const SHeader = styled.header`
   background-color:#2b2450;
   border-bottom:1px solid #4bbcba;
   padding:10px;
`
const SNavbar = styled(Navbar)`
   display:flex;
   flex-direction:row;
   justify-content:space-between;
`
const Container = styled.div`
   margin:0 50px;
   @media(max-width: 500px) {
      justify-content:flex-end;

   }
`
const SNavbarBrand = styled(NavbarBrand)`
   margin:0 50px;    
   img{
      width: 80px; 
   }
`
const SNavLink = styled(NavLink)`
   color:#4bbcba !important; 
   font-weight:bolder;
   text-transform:uppercase;
   font-size:18px;
   padding:5px 10px !important;
   margin:0 5px;
   
   :hover{
      border-radius:20px;
      background-color:#42396e;
   }
   &.active{
      /* color:blue !important; */
   }
`