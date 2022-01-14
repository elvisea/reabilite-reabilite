import styled from 'styled-components';

export const Container = styled.div`
  background: #2E3192;
  height: 400px;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 250px;
  margin-top: 187px;

  img {
    height: 507px;
    width: 294px;
  }

  div {
    h1 {
      max-width: 840px;
      width: 100%;
      font-weight: bold;
      font-size: 40px;
      line-height: 52px;
      color: #FFFFFF;
      margin-bottom: 20px;
    }

    p {
      max-width: 817px;
      width: 100%;
      font-weight: 500;
      font-size: 30px;
      line-height: 39px;
      color: #FFFFFF;
      margin-bottom: 20px;
    }

    button {
      width: 360px;
      height: 50px;
      background: transparent;
      color: #FC7900;
      border: 2px solid #FC7900;
      filter: drop-shadow(0px 2px 6px rgba(0, 0, 0, 0.15));
      border-radius: 30px;
    }
  }
`;
