import React from 'react';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

const Layout = (props) => {
    return(
        <React.Fragment>
            <SHeader/>
            <Main>
                {props.children}
            </Main>
            <Footer/>
        </React.Fragment>
    )
};

export default Layout;

const Main = styled.main`
    flex:1;
    background-color: #1d1b25;
    justify-content:center;
    align-items:center;
`
const SHeader = styled(Header)`
    background-color:blue;
`


/* >>> Minhas cores <<<
- Roxo header e footer: #2b2450 ;
- Roxo background do Main:#1d1b25;
- Ciano principal: #4bbcba ;
- Laranja: #fd7e14;
*/