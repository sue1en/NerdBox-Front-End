import React from 'react';
import { Spinner } from 'reactstrap';
import styled from 'styled-components';

const LoadingComponent = (props) => {

    return(
        <LoadingContainer>
            <Spinner style={{ color:'#4bbcba', width: '3rem', height: '3rem' }} />
        </LoadingContainer>
    )
};

export default LoadingComponent;

const LoadingContainer = styled.div`
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    height:60vh;
`