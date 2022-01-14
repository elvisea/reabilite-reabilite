import type { NextPage } from 'next'
import React from 'react';
import Card from '../Card';

import { Container } from './styles';

const Cards: NextPage = () => {
  return (
    <Container>
      <Card
        header='1'
        description='Acesse o nosso site, e preencha as informações em nosso link' 
      />
      <Card
        header='2'
        description='Confira todas as informações preenchidas' 
      />
      <Card
        header='3'
        description='Na página de pagamento, informe seus dados e finalize seu pedido' 
      />
      {/* <Card
        header='4'
        description='Pronto! Agora, é só aguardar o contrato para início dos serviços. Entramos em contato via WhatsApp e também via e-mail' 
      /> */}
    </Container>
  );
};

export default Cards;
