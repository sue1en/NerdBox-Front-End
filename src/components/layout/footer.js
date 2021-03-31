import { Link } from 'react-router-dom'
import styled from 'styled-components';
import {
    NavLink,
} from 'reactstrap';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import LogoFooter from '../../assets/images/logos/logo-footer.png'

const Footer = () => (
        <SFooter>
            <SocialMidias>
                <SNavLink tag={Link} to="#"><AiOutlineFacebook/>Facebook</SNavLink>
                <SNavLink tag={Link} to="#"><AiOutlineInstagram/>Instagram</SNavLink>
                <SNavLink tag={Link} to="#"><AiOutlineWhatsApp/>Whatsapp</SNavLink>
            </SocialMidias>
            <BrandLogo>
                <img src={LogoFooter} alt="Nerd Box Logo"/>
                <p>Todos os direitos reservados.</p>
            </BrandLogo>
        </SFooter>
);

export default Footer;

const SFooter = styled.footer`
    background-color:#2b2450;
    border-top:1px solid #4bbcba;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media(max-width: 500px) {
        flex-direction:column;
        align-items:center;
    }
`
const SocialMidias = styled.div`
    display:flex;
    margin:0 50px;
    @media(max-width: 500px) {
        flex-direction:column;
        align-items:center;
    }
`
const SNavLink = styled(NavLink)`
    color:#4bbcba;
    padding:5px 10px;
    svg{
        margin-right:5px;
    }
    :hover{
        color:#fff;
    }
`
const BrandLogo = styled.div`
    margin:0 50px;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    img{
        width: 60px; 
    }
    p {
        font-size:12px;
        color:#4bbcba;
        margin:5px 0 5px 5px;
    }
    @media(max-width: 500px) {
        align-items:center;
        padding:15px;
    }
`