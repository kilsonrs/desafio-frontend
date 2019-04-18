import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  padding-bottom: 100px;
  max-width: 900px;
  strong {
    margin: 30px 0 15px 0;
  }
`;

export const ScroolList = styled.div`
  display: flex;
  flex-direction: row;
`;
