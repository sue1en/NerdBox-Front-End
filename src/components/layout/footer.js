import LogoFooter from '../../assets/images/logos/logo-footer.png'
import FacebookLogo from '../../assets/images/social-medias/facebook-img.png';
import InstagramLogo from '../../assets/images/social-medias/instagram-img.png';
import WhatsappLogo from '../../assets/images/social-medias/whatsapp-img.png';

const Footer = () => (

        <footer>
            <div  className='LogoFooter'>
                <p><img src={LogoFooter} alt='Nerd Box Logo rodapé'/></p>
                <p>Todos os direitos reservados.</p>
            </div>
            <div className='SocialMedias'>
                <p><img src={FacebookLogo} alt=''/>Facebook</p>
                <p><img src={InstagramLogo} alt=''/>Instagram</p>
                <p><img src={WhatsappLogo} alt=''/>Whatsapp</p>
            </div>
        </footer>
);

export default Footer;