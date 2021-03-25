import { Link } from 'react-router-dom'
import styled from 'styled-components';
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
} from 'reactstrap';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import LogoFooter from '../../assets/images/logos/logo-footer.png'

const Footer = () => (
        <footer>
            <SNavbar color="#2b2450" light expand="md">
                <SNavbarBrand>
                    <img src={LogoFooter} alt="Nerd Box Logo"/>
                    <p>Todos os direitos reservados.</p>
                </SNavbarBrand>
                    <SNav className="mr-auto" navbar>
                        <NavItem>
                            <SNavLink tag={Link} to="#"><AiOutlineFacebook/>Facebook</SNavLink>
                        </NavItem>
                        <NavItem>
                            <SNavLink tag={Link} to="#"><AiOutlineInstagram/>Instagram</SNavLink>
                        </NavItem>
                        <NavItem>
                            <SNavLink tag={Link} to="#"><AiOutlineWhatsApp/>Whatsapp</SNavLink>
                        </NavItem>
                    </SNav>
            </SNavbar>
        </footer>
);

export default Footer;

const SNavbar = styled(Navbar)`
    background-color:#2b2450;
`

const SNavbarBrand = styled(NavbarBrand)`
    flex-grow:1;

    img{
        width: 100px; 
    }
    p{
        color:#4bbcba !important;
        font-size:14px;
        margin:5px 0 0 0;
    }
`
const SNav = styled(Nav)`
    flex-direction:column !important;
`
const SNavLink = styled(NavLink)`
    color:#4bbcba !important;
    padding:5px;
    svg{
        margin-right:5px;
    }

    :hover{
        color:#fff !important;
    }
`