import { Link } from 'react-router-dom'
import styled from 'styled-components';
import {
    NavLink,
} from 'reactstrap';
import { AiOutlineFacebook, AiOutlineInstagram, AiOutlineWhatsApp } from 'react-icons/ai';
import LogoFooter from '../../assets/images/logos/logo-pb.svg';

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
    background-color:#5C22B3;
    padding:10px;
    display:flex;
    justify-content:space-between;
    align-items:center;
    @media(max-width: 700px) {
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
    color:#f6f6f6;
    padding:5px 10px;
    display:flex;
    align-items:center;
    svg{
        margin-right:5px;
    }
    :hover{
        color:#1CBCBB;
    }
`
const BrandLogo = styled.div`
    margin:0 50px;
    display:flex;
    flex-direction:column;
    align-items:flex-end;
    img{
        height:30px;
        width:auto;
    }
    p {
        font-size:14px;
        color:#f6f6f6;
        margin:5px 0 5px 5px;
    }
    @media(max-width: 700px) {
        align-items:center;
        padding:15px;
    }
`