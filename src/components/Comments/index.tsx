import type { NextPage } from 'next'
import React from 'react';
import Avatar from '../../../public/images/avatar.jpeg'
import { Container, Comment } from './styles';
import Image from 'next/image';

const Comments: NextPage = () => {
  return (
    <Container>
      <Comment>
        <header>
          <Image src={Avatar} height={60} width={60} alt="avatar" />
          <h1>Marcela da Silva Leal</h1>
        </header>
        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        <span>Curitiba - PR</span>
      </Comment>
    </Container>
  );
};

export default Comments;
