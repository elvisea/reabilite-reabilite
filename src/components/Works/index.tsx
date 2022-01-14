import React from 'react';
import type { NextPage } from 'next'
import { FaCarAlt, FaHome, FaLock, FaCreditCard, FaStore } from 'react-icons/fa'

import { Container, Work } from './styles';

const Woks: NextPage = () => {
  return (
    <Container>
      <Work>
        <FaCarAlt />
        <p>Dívidas de financiamento de veículo</p>
      </Work>
      <Work>
        <FaHome />
        <p>Dívidas de financiamento imobiliário</p>
      </Work>
      <Work>
        <FaLock />
        <p>Dívidas de banco em geral</p>
      </Work>
      <Work>
        <FaCreditCard />
        <p>Dívidas de cartão de crédito</p>
      </Work>
      <Work>
        <FaStore />
        <p>Dívidas de comércio em geral</p>
      </Work>
    </Container>
  );
};

export default Woks;
