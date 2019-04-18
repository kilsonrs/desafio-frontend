import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 40px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;

  span {
    color: #fff;
    font-size: 16px;
    line-height: 16px;
    font-weight: 600;
    margin-top: 40px;
  }

  > input {
    height: 40px;
    border: none;
    background-color: transparent;
    color: #908d93;
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 20px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    margin-top: 20px;
    li {
      font-weight: bold;

      input {
        border: none;
        background-color: transparent;
        color: #908d93;
        margin: 0 8px 8px 0;
        transition: border 0.15s ease;
        font-size: 20px;
        font-weight: 300;
      }

      small {
        font-size: 18px;
      }
    }
  }

  button {
    margin: 20px 0;
  }
`;
