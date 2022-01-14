import type { NextPage } from 'next'

import Header from '../components/Header'
import Hero from '../components/Hero'
import Contratar from '../components/Contratar';
import Cards from '../components/Cards';
import Rectangle from '../components/Rectangle';
import Revolution from '../components/Revolution';
import Comments from '../components/Comments';
import RecuperacaoDeCredito from '../components/RecuperacaoDeCredito';
import Renegociamos from '../components/Renegociamos';
import Especializada from '../components/Especializada';
import Works from '../components/Works';
import Stats from '../components/Stats';
import SectionSemNome from '../components/SectionSemNome';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Header />
      <Hero />
      {/* <Contratar />
      <Cards /> */}

      {/* <Rectangle
        title='Como Funciona o processo de renegociação de dívidas?'
        description='A Reabilite entrará em contato com o seu credor, conforme o seu aceite, e buscará a proposta com valor mais reduzido para quitação do seu débito. Mas você é o tomador de decisão, você que decide se aceitará ou não a proposta e estabelecerá as datas para pagamento.'
      />
      <Rectangle
        title='Tive um imprevisto e não conseguirei quitar minha dívida agora?'
        description='Se você vier a ter algum tipo de imprevisto, e não conseguir honrar os pagamentos, sua negociação ficará suspensa até você retornar com um condição financeira favorável a quitação'
      />
      <Rectangle
        title='Quantos dias demora para o nome ficar “limpo” liberado do SCPC/SERASA?'
        description='O art. 43, parágrafo terceiro, do CDC, estabelece: "O consumidor, sempre que encontrar inexatidão nos seus dados e cadastros, poderá exigir sua imediata correção." Segundo o CDC, o arquivista tem o prazo de cinco dias úteis para comunicar a alteração aos eventuais destinatários das informações incorretas. Sendo assim o prazo é de 5 (cinco) dias úteis para retirada do nome após a quitação da dívida.'
      /> */}

      {/* <Revolution /> */}
      {/* <Comments /> */}
      {/* <RecuperacaoDeCredito /> */}
      {/* <Renegociamos /> */}
      {/* <Especializada /> */}
      {/* <Works /> */}
      {/* <Stats /> */}
      {/* <SectionSemNome /> */}
      <Footer />
    </>
  )
}

export default Home
