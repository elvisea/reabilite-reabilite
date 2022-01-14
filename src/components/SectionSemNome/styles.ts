import styled from 'styled-components';

export const Container = styled.div`
  height: 640px;
  width: 100%;
  padding: 0 250px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 80px;
`;

export const Content = styled.div`
  height: 640px;
  width: 100%;
  max-width: 876px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  div {
    width: 100%;
    height: 200px;
    border: 2px solid #FC7900;
    border-radius: 10px;
    margin-bottom: 16px;
    padding: 20px 100px;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    
    &:last-child {
      margin-bottom: 0;
    }

    h1 {
      font-weight: bold;
      font-size: 30px;
      line-height: 36px;
      color: #FC7900;
      margin-bottom: 16px;
    }

    p {
      font-weight: 500;
      font-size: 20px;
      line-height: 24px;
      color: #FC7900;
    }
  }
`;


