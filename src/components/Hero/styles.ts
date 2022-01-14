import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  width: 100%;
  max-width: 1920px;
  background: #F4F4F4; 
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 250px;
`;

export const Content = styled.div`
  height: auto;
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 40px;
    font-weight: 700;
    line-height: 52px;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    max-width: 600px;
    width: 100%;

    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    text-align: center;
    color: #878383;
    margin-bottom: 20px;
  }

  button {
    max-width: 360px;
    width: 100%;
    height: 50px;

    background: #FC7900;
    box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
    border-radius: 30px;
    border: none;
    color: #fff;
  }
`;

