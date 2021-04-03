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
import NerdBoxLogo from '../../assets/images/logos/main-logo.svg';


const Header = ()=>{ 

   const [isOpen, setIsOpen] = useState(false);

   const toggle = () => setIsOpen(!isOpen);
   
   return(   
      <SHeader>
         <SNavbar expand="md" dark className="navbar-style" fixed="top">
            <SNavbarBrand>
               <img src={NerdBoxLogo} alt="Nerd Box Logo"/>
            </SNavbarBrand>
            <Container>
               <NavbarToggler onClick={toggle} />
               <SCollapse isOpen={isOpen} navbar>
                     <Nav className="mr-auto" navbar>
                        <SNavItem>
                           <SNavLink exact tag={RRDNavLink} to="/" activeClassName="active">Home</SNavLink>
                        </SNavItem>
                        <SNavItem>
                           <SNavLink exact tag={RRDNavLink} to="/sobre" activeClassName="active">Sobre</SNavLink>
                        </SNavItem>
                     </Nav>
               </SCollapse>
            </Container>    
         </SNavbar>
      </SHeader>
   );
};

export default Header;

const SHeader = styled.header`
   padding:25px;
`
const SNavbar = styled(Navbar)`
   background-color:#5C22B3;
   padding:0;
`
const Container = styled.div`
   margin:0 60px;
   @media(max-width: 500px) {

   }
`
const SCollapse = styled(Collapse)`
`

const SNavbarBrand = styled(NavbarBrand)`
   flex:1;
   margin:0 50px;    
   img{
      width: 180px; 
      margin:0;    
   }
`
const SNavItem = styled(NavItem)`
   margin:0;
   padding:0;
`

const SNavLink = styled(NavLink)`
   color:#f6f6f6 !important; 
   font-size:18px;
   padding:5px 10px !important;
   margin:0 5px;
   :hover{
      background-color:#491C8D;
   }
`