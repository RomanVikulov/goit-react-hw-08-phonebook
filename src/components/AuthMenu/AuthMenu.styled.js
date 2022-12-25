import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Box = styled.div`
  margin: 0 auto;
  text-align: center;
`;

const Text = styled.p`
  margin-bottom: 5px;
  font-size: 14px;
  font-weight: 400;
  color: rgb(40 40 100);
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
`;

const Link = styled(NavLink)`
  font-size: 14px;
  font-weight: 500;
  color: rgb(40 40 100);
  background-color: transparent;
  border: none;
  cursor: pointer;
  @media screen and (min-width: 768px) {
    font-size: 16px;
  }
  :hover,
  :focus {
    color: rgb(200 200 200);
  }
`;

export { Box, Text, Link };