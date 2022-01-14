import styled from 'styled-components';

export const Container = styled.div`
  height: 500px;
  width: 100%;
  background: #f4f4f4;
  max-width: 1920px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 250px;
`;

export const Comment = styled.div`
  width: 1180px;
  height: 300px;
  background: #FC7900;
  border-radius: 10px;
  padding: 40px 100px;

  header {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    height: 60px;
    width: 100%;
    margin-bottom: 20px;

      img {
        border-radius: 50%;
      }
      
      h1 { 
        margin-left: 60px;
        width: 720px;
        font-weight: bold;
        font-size: 30px;
        line-height: 36px;
        color: #FFFFFF;
    }
  }

  p {
    width: 980px;
    height: 100px;
    margin-bottom: 30px;
    font-weight: 500;
    font-size: 20px;
    line-height: 24px;

    color: #FFFFFF;
  }
`;
