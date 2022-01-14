import React from 'react';
import type { NextPage } from 'next'
import { FaDropbox } from 'react-icons/fa'

import { Container } from './styles';

interface Props {
  header: string;
  description: string;
}

const Card = ({ description, header }: Props) => {
  return (
    <Container>
      <div id='header'>
        <h1>{header}</h1>
      </div>
      <div id='icon'>
        <FaDropbox />
      </div>
      <div id='description'>
        <p>{description}</p>
      </div>
    </Container>
  );
};

export default Card;
