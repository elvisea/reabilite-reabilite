import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 340px;
  height: 400px;
  border-radius: 10px;
  background: #F4F4F4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 30px 30px 20px 30px;

  #header {
    h1 {
      margin-bottom: 30px;

      width: 280px;
      height: 40px;

      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #00AEEF;
    }
  }

  #icon {
    svg {
      font-size: 100px;
      color: #2E3192;
      margin-bottom: 30px;
    }
  }

  #description {
    p {
      max-width: 280px;
      width: 100%;
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      text-align: center;
      color: #535353;
    }
  }
`;
