import React from 'react';
import type { NextPage } from 'next';

import { Container, ContentLeft, ContentRight } from './styles';

const Renegociamos: NextPage = () => {
  return (
    <Container>
      <ContentLeft>
        <h1>Renegociamos suas dívidas com até 88% de desconto!</h1>
      </ContentLeft>

      <ContentRight>
        <p>
          Chega de ficar esquentando a cabeça com problemas de dívidas. Aqui na Reabilite você se preocupa com os momentos importantes da vida.
          <br /> 
          <br /> 
          Nós falamos com os seus credores e buscamos a melhor proposta para resolver suas dívidas.
        </p>
        <span>QUERO RESOLVER O MEU PROBLEMA DE DÍVIDAS! </span>
      </ContentRight>
    </Container>
  );
};

export default Renegociamos;
