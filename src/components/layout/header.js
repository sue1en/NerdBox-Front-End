import NerdBoxLogo from '../../assets/images/logos/logo-header.png'


const Header = ()=>{
    return(
        <header>
            <div className='HeaderLogo'>
                <img src={NerdBoxLogo} alt="Nerd Box Logo"/>
            </div>
            <ul className='NavBar'>
                <li><a href="/">Home</a></li>
                <li><a href="/#ReviewContainer">Depoimentos</a></li>
                <li><a href="/#ProductsContainer">Nossos Produtos</a></li>
                <li><a href="/sobre">Sobre</a></li>
            </ul>
        </header>
    );
};

export default Header;