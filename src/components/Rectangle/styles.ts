import styled from 'styled-components';

export const Container = styled.div`
  height: 240px;
  width: 100%;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 250px;
  margin-bottom: 40px;
  
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const Retangulo = styled.div`
  height: 240px;
  width: 100%;
  max-width: 1420px;
  border-radius: 10px;
  background: #00AEEF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px 100px;

  h1 {
    max-width: 1220px;
    width: 100%;
    font-weight: bold;
    font-size: 30px;
    line-height: 36px;
    color: #FFFFFF;
    margin-bottom: 20px;
  }

  p {
    max-width: 1200px;
    width: 100%;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;
    color: #FFFFFF;
  }
`;
