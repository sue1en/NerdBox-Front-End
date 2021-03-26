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
            <Navbar color="#2b2450" light expand="md">
                <NavbarBrand>
                    <img src={LogoFooter} alt="Nerd Box Logo"/>
                    <p>Todos os direitos reservados.</p>
                </NavbarBrand>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="#"><AiOutlineFacebook/>Facebook</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="#"><AiOutlineInstagram/>Instagram</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="#"><AiOutlineWhatsApp/>Whatsapp</NavLink>
                        </NavItem>
                    </Nav>
            </Navbar>
        </footer>
);

export default Footer;

// const SFooter = styled.footer`
//     background-color:#2b2450;
//     width:100vw;
//     display:flex;
//     justify-content:center;
// `

// const SNavbar = styled(Navbar)`
//     /* background-color:blue; */
//     width:1200px;
// `
// const SNavbarBrand = styled(NavbarBrand)`
//     flex-grow:1;

//     img{
//         width: 80px; 
//     }
//     p{
//         color:#4bbcba !important;
//         font-size:14px;
//         margin:5px 0 0 0;
//     }
// `
// const SNav = styled(Nav)`
//     flex-direction:column !important;
// `
// const SNavLink = styled(NavLink)`
//     color:#4bbcba !important;
//     padding:5px;
//     svg{
//         margin-right:5px;
//     }

//     :hover{
//         color:#fff !important;
//     }
// `