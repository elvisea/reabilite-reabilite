import styled from 'styled-components';

export const Container = styled.footer`
  max-width: 1920px;
  width: 100%;
  height: 500px;
  background: #2E3192;
  margin-top: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 350px;
`;

export const Links = styled.div`

  nav {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    margin: 60px 0;

    a {
      margin-bottom: 8px;
      font-weight: bold;
      font-size: 20px;
      line-height: 26px;
      color: #FFFFFF;
      
      &:last-child {
        margin-bottom: 0;
      }
    }
  }

  div {
    display: flex;
    align-items: center;
    justify-content: flex-start;

    a {
      margin-right: 32px;

      &:last-child {
        margin-bottom: 0;
      }

      svg {
        color: #fff;
        font-size: 24px;
      }
    }
  }
`;

export const Infos = styled.div`
  div {
    margin-bottom: 60px;

    &:last-child {
      margin-bottom: 0;
    }
  }

  #whats {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 40px;

    h1 {
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #FFFFFF;
    }
    
    svg {
      color: #FFFFFF;
      margin-left: 16px;
      font-size: 40px;
    }
  }

  #suporte {
    display: flex;
    flex-direction: column;
    
    p {
      font-style: normal;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: right;
      color: #FFFFFF;
    }

    a {
      font-style: normal;
      font-weight: bold;
      font-size: 20px;
      line-height: 24px;
      text-align: right;
      color: #FC7900;
    }
  }

  #localizacao {
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 18.2px;
    text-align: right;
    color: #FFFFFF;
  }
`;


