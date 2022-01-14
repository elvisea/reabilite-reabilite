import React from 'react';
import type { NextPage } from 'next';
import Imagem from '../../../public/images/imagem-01.png'

import { Container } from './styles';
import Image from 'next/image';

const RecuperacaoDeCredito: NextPage = () => {
  return (
    <Container>
      <Image src={Imagem} height={507} width={294} alt='Imagem' />
      <div>
        <h1>Recuperação de Crédito</h1>
        <p>A Reabilite é o jeito simples de resolver seus problemas com dívidas e fazer você recuperar o seu crédito rapidamente.</p>
        <button>REABILITE-SE</button>
      </div>
    </Container>
  );
};

export default RecuperacaoDeCredito;
