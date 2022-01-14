import type { NextPage } from 'next'
import Image from 'next/image';
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import ReabiliteFooterLogo from '../../../public/images/reabilite-footer.svg'
import { Container, Links, Infos } from './styles';

const Footer: NextPage = () => {
  return (
    <Container>
      <Links>
        <Image 
          src={ReabiliteFooterLogo} 
          width={244} 
          height={44} 
          alt='Reabilite Logo'
        />

        <nav>
          <a href="">Home</a>
          <a href="">Sobre Nós</a>
          <a href="">Contato</a>
        </nav>

        <div>
          <a href="">
            <FaFacebook />
          </a>
          <a href="">
            <FaInstagram />
          </a>
          <a href="">
            <FaTwitter />
          </a>
        </div>
      </Links>

      <Infos>
        <div id='whats'>
          
          <h1>
            +55 41 98822-1077
          </h1>
          <FaWhatsapp />
        </div>

        <div id='suporte'>
          <p>Suporte para Reclamações</p>
          <a href=''>atendimento@reabilitecredito.com.br</a>
        </div>

        <div id='localizacao'>
          <p>
            Reabilite Reabilitação de Crédito<br />
            Sede: Rua Francisco Rocha, nº 198, Batel – Curitiba/PR.<br />
            Contato: <a href="">atendimento@reabilitecredito.com.br</a>
          </p>
        </div>
      </Infos>
    </Container>
  );
};

export default Footer;
