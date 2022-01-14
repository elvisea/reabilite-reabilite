import styled from 'styled-components';

export const Container = styled.header`
  height: 80px;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 150px;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;

    a {
      margin-right: 20px;

      &:last-child {
        margin-right: 0;
      }
    }
  }

  #redes-sociais {
    width: 100%;
    max-width: 190px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    a {
      margin-right: 8px !important;

      &:last-child {
        margin-right: 0;
      }
      svg {
        color: #00AEEF;
      }
    }
  }

  button {
    height: 40px;
    max-width: 220px;
    width: 100%;
    border: 2px solid #2E3192;
    font-size: 14px;
    font-weight: 700;
    border-radius: 20px;
    background: #fff;
    color: #2E3192;
  }
`;
