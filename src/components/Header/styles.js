import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  background: #e5556e;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  height: 28px;

  img {
    margin: 0 30px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-size: 16px;
    font-weight: bold;
    margin: 0 30px 0 0;
  }
`;

export const Profile = styled.button`
  background: transparent;
  border: 0;
  img {
    margin: 0 30px;
    color: #fff;
  }
`;
