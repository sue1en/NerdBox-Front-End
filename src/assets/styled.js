import styled from 'styled-components';

const Test = styled.h1`
    font-family: 'Roboto', sans-serif;
    color: white;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`

const TitlePage = styled.div`
    color: #4b8EC7;
    font-family: 'Roboto', sans-serif;
    font-size:22px;
    margin-bottom: 10px;
    font-weight:500;
    padding: 5px;
    display:flex;
    justify-content: space-between
`

const SForm = styled.div`
    font-family: 'Roboto', sans-serif;
    background-color: #343a40;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
`

const Sign = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100%;
    min-width: 100%
`

export {
    Sign,
    Test,
    SForm,
    TitlePage
}