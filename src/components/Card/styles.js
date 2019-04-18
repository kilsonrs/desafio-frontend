import styled from 'styled-components';

export const Container = styled.div`
  background: #fff;
  width: 290px;
  border-radius: 3px;
  margin: 0 15px 0 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 20px;

  button {
    height: 42px;
    width: 42px;
    border-radius: 50%;
    transition: background-color 0.15s ease;
    background: #e5556e;
    border: 0;
  }
`;

export const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-around;
  color: #000;

  strong {
    margin: 0 0 8px 0;
  }

  small {
    color: #b3b3b3;
  }
`;
