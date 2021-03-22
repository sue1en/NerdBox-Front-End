import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NerdBoxLogo from '../../assets/images/logos/logo-header.png';


const Header = ()=>{
    return(
        <header>
                <SHeaderLogo>
                    <Link to="/"><img src={NerdBoxLogo} alt="Nerd Box Logo"/>
                    </Link>
                </SHeaderLogo>

                <SNavList>
                    <li>
                        <SLink to="/">Home</SLink>
                    </li>
                    <li>
                        <SLink to="/#ReviewContainer">Depoimentos</SLink>
                    </li>
                    <li>
                        <SLink to="/#ProductsContainer">Nossos Produtos</SLink>
                    </li>
                    <li>
                        <SLink to="/sobre">Sobre</SLink>
                    </li>
                </SNavList>
        </header>
    );
};

export default Header;

const SHeaderLogo = styled.div`
    padding: 15px 60px;

    img{
        width: 100px;
    }
`

const SNavList =styled.ul`
    display:flex;
    justify-content: center;
    align-items:center;
    margin:0;
    padding:0;
    // width: 100vw;

    li{
        list-style: none;
        padding: 10px 20px;
        text-transform: uppercase;
        font-weight: bold;
    }
`

const SLink = styled(Link)`
    text-decoration: none;
    color:#4bbcba;
`