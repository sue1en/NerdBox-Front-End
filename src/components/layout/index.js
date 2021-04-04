import React from 'react';
import Header from './header';
import Footer from './footer';
import styled from 'styled-components';

const Layout = (props) => {
    return(
        <React.Fragment>
            <Header/>
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
    background-color:#f5f5f5;
`