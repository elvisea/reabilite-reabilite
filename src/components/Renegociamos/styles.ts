import styled from 'styled-components';

export const Container = styled.div`
  height: 360px;
  width: 100%;
  max-width: 1920px;
  padding: 0 250px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContentLeft = styled.div`
  h1 {
    width: 100%;
    max-width: 500px;
    height: 180px;
    font-weight: bold;
    font-size: 40px;
    line-height: 48px;
    color: #2E3192;
  }
`;

export const ContentRight = styled.div`
  p {
    width: 100%;
    max-width: 620px;
    height: 180px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #535353;
  }

  span {
    max-width: 540px;
    width: 100%;
    height: 20px;
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #FC7900;
  }
`;
