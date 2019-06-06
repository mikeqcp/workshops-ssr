import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

export const List = styled.div`
  margin-top: 20px;
`;

export const Item = styled(Link)`
  display: block;
`;
