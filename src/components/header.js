const Header = ()=>{
    return(
        <header>
            <h1>Titulo</h1>
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