import styled from 'styled-components';
import { Link as RouterLink } from 'react-router-dom';

export const Container = styled.div``;

export const Link = styled(RouterLink)`
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;
