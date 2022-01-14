import type { NextPage } from 'next'
import React from 'react';

import { Container, Retangulo } from './styles';

interface Props {
  title: string;
  description: string;
}

const Rectangle: NextPage<Props> = ({ title, description }) => {
  return (
    <Container>
      <Retangulo>
        <h1>{title}</h1>
        <p>{description}</p>
      </Retangulo>
    </Container>
  );
};

export default Rectangle;
