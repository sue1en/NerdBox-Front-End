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
   Tooltip,
   UncontrolledDropdown, DropdownItem, DropdownToggle, DropdownMenu
} from 'reactstrap';
import { useSelector, useDispatch } from 'react-redux'
import { isAuthenticated } from '../../config/auth';
import { logoutAction } from '../../store/auth/auth.action';
import history from '../../config/history';
import '../../assets/css/style.css'

//_____Images_____
import NerdBoxLogo from '../../assets/images/logos/main-logo.svg';


const Header = (props)=>{
   const dispatch = useDispatch()
   const [isOpen, setIsOpen] = useState(false);
   const [tooltipOpen, setTooltipOpen] = useState(false);

   const toggleTooltip = () => setTooltipOpen(!tooltipOpen);
   const toggle = () => setIsOpen(!isOpen);

   const usuario = useSelector(state => state.auth.usuario)
   const isAdmin = useSelector(state => state.auth.admin)

   const logout = () => {
      dispatch(logoutAction())
  }

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
                     {isAdmin ? (
                        <NavItem>
                           <SNavLink exact tag={RRDNavLink} to="/gerenciar" activeClassName="active">AdminPanel</SNavLink>
                        </NavItem>
                     ) : ""}
                     {!isAuthenticated() ? (
                        <NavItem>
                           <SNavLink exact tag={RRDNavLink} to="/signin" activeClassName="active">SignIn / SignUp</SNavLink>
                        </NavItem>
                     ) : ""}
                  </Nav>
                  {isAuthenticated() ? (
                     <Nav>
                        <UncontrolledDropdown nav inNavbar>
                           <DropdownToggle nav caret  className="text-white">
                              {usuario.name}
                           </DropdownToggle>
                           <DropdownMenu>
                              <DropdownItem onClick={() => history.push('/profile')}>Perfil</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem onClick={logout}>Sair</DropdownItem>
                           </DropdownMenu>
                        </UncontrolledDropdown>
                     </Nav>
                  ) : ""}
               </SCollapse>
            </SNavbar>
         </Container>    
      </SHeader>
   );
};

export default Header;

const SHeader = styled.header`
   padding:27px;
   @media(max-width: 765px) {
      padding:22px;
   }
`
const SNavbar = styled(Navbar)`
   background-color:#5C22B3;
   padding:0 50px;
   display:flex;
   justify-content:space-between;
`

const SNavbarBrand = styled(NavbarBrand)` 
   margin:5px 0;
   padding:0;
   img{
      width: 180px; 
      margin:0;    
   }
`
const SCollapse = styled(Collapse)`
   flex-grow: 0;
   ul {
      :nth-child(2) { 
         padding:6px 0 !important;
         font-size:18px;
         :hover{
            background-color:#491C8D;
         }
      }
   }
`
const SNavLink = styled(NavLink)`
   color:#f6f6f6 !important; 
   font-size:18px;
   padding:14px 10px !important;
   margin:0 5px; 
   :hover{
      background-color:#491C8D;
   }
`