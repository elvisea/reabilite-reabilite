import styled from 'styled-components';

export const Container = styled.div`
  height: 280px;
  width: 100%;
  max-width: 1920px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 250px;

  h1 {
    max-width: 480px;
    width: 100%;
    font-weight: bold;
    font-size: 40px;
    line-height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #2E3192;
    height: 120px;
  }

  p {
    max-width: 720px;
    width: 100%;

    height: 120px;

    font-weight: 500;
    font-size: 20px;
    line-height: 26px;
    color: #535353;
  }
`;
