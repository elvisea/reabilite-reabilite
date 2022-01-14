import styled from 'styled-components';

export const Container = styled.div`
  height: 400px;
  width: 100%;
  max-width: 1920px;
  background: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 250px;
  gap: 20px;
  margin-bottom: 80px;
`;

export const Work = styled.div`
  width: 100%;
  max-width: 269px;
  height: 400px;
  border-radius: 10px;
  background: #F4F4F4;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content:center;
  padding: 30px 30px 20px 30px;

  svg {
    width: 107px;
    height: 100px;
    color: #00AEEF;
    margin-bottom: 40px;
  }

  p {
    font-weight: bold;
    font-size: 20px;
    line-height: 24px;
    color: #535353;
    text-align: center;
  }
`;
