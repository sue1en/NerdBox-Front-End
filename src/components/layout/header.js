import { useState } from 'react';
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
   Container,
   Tooltip
} from 'reactstrap';
import '../../assets/css/style.css'

//_____Images_____
import NerdBoxLogo from '../../assets/images/logos/main-logo.svg';


const Header = ()=>{ 
   const [isOpen, setIsOpen] = useState(false);
   const [tooltipOpen, setTooltipOpen] = useState(false);

   const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
   const toggle = () => setIsOpen(!isOpen);
   
   return(   
      <SHeader>
         <Container>
            <SNavbar expand="md" dark fixed="top">
               <SNavbarBrand  tag={RRDNavLink} to="/" id="logoMain"><img src={NerdBoxLogo} alt="Nerd Box Logo"/></SNavbarBrand>
               <Tooltip placement="top" isOpen={tooltipOpen} autohide={false} target="logoMain" toggle={toggleTooltip}>
                        Voltar a página inicial
               </Tooltip>
               <NavbarToggler onClick={toggle}/>
               <SCollapse isOpen={isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                     <NavItem>
                        <SNavLink exact tag={RRDNavLink} to="/" activeClassName="active">Home</SNavLink>
                     </NavItem>
                     <NavItem>
                        <SNavLink exact tag={RRDNavLink} to="/sobre" activeClassName="active">Sobre</SNavLink>
                     </NavItem>
                  </Nav>
               </SCollapse>
            </SNavbar>
         </Container>    
      </SHeader>
   );
};

export default Header;

const SHeader = styled.header`
   padding:27px;
`
const SNavbar = styled(Navbar)`
   background-color:#5C22B3;
   padding:5px 50px;
   display:flex;
   justify-content:space-between;
`

const SNavbarBrand = styled(NavbarBrand)` 
   margin:0;
   padding:0;
   img{
      width: 180px; 
      margin:0;    
   }
`
const SCollapse = styled(Collapse)`
    flex-grow: 0;
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