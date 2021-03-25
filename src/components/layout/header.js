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
} from 'reactstrap';


//_____Images_____
import NerdBoxLogo from '../../assets/images/logos/logo-header.png';


const Header = ()=>{ 

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return(
        <header>
            <SNavbar color="#2b2450" light expand="md">
                <SNavbarBrand tag={RRDNavLink} to="/">
                    <img src={NerdBoxLogo} alt="Nerd Box Logo"/>
                </SNavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <SNavLink exact tag={RRDNavLink} to="/" activeClassName="active">Home</SNavLink>
                        </NavItem>
                        <NavItem>
                            <SNavLink exact tag={RRDNavLink} to="/sobre" activeClassName="active">Sobre</SNavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </SNavbar>
        </header>
    );
};

export default Header;

const SNavbar = styled(Navbar)`
    background-color:#2b2450;
`

const SNavbarBrand = styled(NavbarBrand)`
    img{
        width: 100px; 
    }
`
const SNavLink = styled(NavLink)`
    color:#4bbcba !important; 
    font-weight:bolder;
    text-transform:uppercase;
    font-size:18px;
    padding:5px 20px !important;
    margin:0 5px;
    border-radius:20px;

    :hover{
        background-color:#42396e;
    }
    /* &.active{
        color:blue !important;
    } */
`