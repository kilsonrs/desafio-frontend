import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  flex-direction: column;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    color: #908d93;
    font-size: 16px;
  }
`;

export const SignForm = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
  margin: 0 0 25px;

  span {
    color: #fff;
    font-size: 16;
    line-height: 16px;
    font-weight: 600;
    margin-top: 40px;
  }

  input {
    height: 40px;
    border: none;
    background-color: transparent;
    color: #908d93;
    margin-top: 8px;
    transition: border 0.15s ease;
    font-size: 20px;
    font-weight: 300;
  }

  button {
    margin: 20px 0 0;
  }
`;
