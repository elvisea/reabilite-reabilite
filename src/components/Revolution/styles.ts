import styled from 'styled-components';

export const Container = styled.div`
  height: 210px;
  width: 100%;
  max-width: 1920px;
  background: #ffffff; 
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 250px;

  h1 {
    font-weight: 700;
    color: #535353;
    line-height: 52px;
  }

  button {
    width: 360px;
    height: 50px;
    border-radius: 30px;
    background: #FC7900;
    border: none;
    font-weight: 700;
    color: #ffffff;
  }
`;
