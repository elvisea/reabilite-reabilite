import React from 'react';
import type { NextPage } from 'next'
import { Container, Content } from './styles';
import Image from 'next/image';
import Astronaut from '../../../public/images/astronaut.svg'

const SectionSemNome: NextPage = () => {
  return (
    <Container>
     <Content>
      <div>
        <h1>Melhor experiência</h1>
        <p>Nossa time está comprometido com um serviço excepcional, carregado de empatia e paixão pelo nosso cliente.</p>
      </div>
      <div>
        <h1>Inovação inteligente</h1>
        <p>Nosso pessoal está liderando a mudança e inovação na Renegociação de Dívidas e preocupados com as necessidades dos clientes.</p>
      </div>
      <div>
        <h1>Sustentabilidade</h1>
        <p>Nosso sucesso contínuo exige que atuemos hoje, transformemos para o amanhã e cumpramos nossa promessa aos nossos clientes e a comunidade na qual estamos inseridos.</p>
      </div>
     </Content>

     <Image src={Astronaut} height={640} width={419} alt='Imagem' />
    </Container>
  );
};

export default SectionSemNome;
