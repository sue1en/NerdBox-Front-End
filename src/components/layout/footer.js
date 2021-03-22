import styled from 'styled-components';
import { Link } from 'react-router-dom'
import LogoFooter from '../../assets/images/logos/logo-footer.png'
import FacebookLogo from '../../assets/images/social-medias/facebook-img.png';
import InstagramLogo from '../../assets/images/social-medias/instagram-img.png';
import WhatsappLogo from '../../assets/images/social-medias/whatsapp-img.png';

const Footer = () => (
        <footer>
            <SLogoFooter>
                <img src={LogoFooter} alt='Nerd Box Logo rodapé'/>
                <p>Todos os direitos reservados.</p>
            </SLogoFooter>
            <SSocialMedias>
                <SLink to="#">
                    <p>
                    <img src={FacebookLogo} alt=''/>Facebook</p>
                </SLink>
                <SLink to="#">
                    <p><img src={InstagramLogo} alt=''/>Instagram</p>
                </SLink>
                <SLink to="#">
                    <p><img src={WhatsappLogo} alt=''/>Whatsapp</p>
                </SLink>
            </SSocialMedias>
        </footer>
);

export default Footer;

const SLogoFooter = styled.div`
    padding: 10px 30px;
    img{
        width: 80px;
        padding: 10px 0;
    }
    p{
        font-size: 12px;
    }
`
const SSocialMedias = styled.div`
    margin: 0 15px;
    `
const SLink = styled(Link)`
    text-decoration: none;
    color:#4bbcba;
    p{
        display:flex;
        margin: 10px;
        align-items: center;

        img{
            width:16px;
            margin-right: 10px;
        }
    }
`