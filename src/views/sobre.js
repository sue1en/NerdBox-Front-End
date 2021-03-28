import styled from 'styled-components';
import React from 'react';
import Teste from '../assets/estilo-teste.js';

const Sobre = () => {
    return(
        <Teste>
            <SobreContainer>
                <h2>Sobre nós</h2>
                <p>Projeto realizado para o curso de Desenvolvedor Full Stack do Instituto Infnet</p>
                <br/>
                <p>Alunos:</p>
                <p>Felipe Siqueira - Back-End</p>
                <p>Suelen Batista - Front-End</p>
            </SobreContainer>
        </Teste>

    );
}
export default Sobre;

const SobreContainer = styled.div`
    background-color:#eee;
`