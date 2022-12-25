import styled from 'styled-components';

const TextButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100px;
  min-height: 30px;
  margin: ${props => props.margin || '0'};
  padding: 8px 10px;
  font-size: ${props => props.size || '10px'};
  font-weight: 700;
  text-transform: uppercase;
  color: rgb(50 50 50);
  background-color: ${props => props.bgc || 'rgba(200, 180, 250, 0.5)'};
  border-radius: 5px;
  border: none;
  box-shadow: 5px 5px 5px -2px rgba(80, 100, 170, 0.3);
  cursor: pointer;
  &:hover,
  &:focus,
  &:active {
    color: rgb(255 255 255);
    background-color: rgba(15, 15, 130, 0.7);
    border: none;
    box-shadow: 1px -1px 10px -2px rgba(80, 100, 170, 0.3) inset;
  }
`;

const IconButton = styled.button`
  display: inline-flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  margin: ${props => props.margin || '0'};
  padding: 0;
  color: ${props => props.color || 'rgb(50 50 50)'};
  background-color: transparent;
  border: none;
  cursor: pointer;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);
  &:hover,
  &:focus,
  &:active {
    color: rgb(250 50 50);
  }
  & > svg {
    fill: currentColor;
  }
`;

export { TextButton, IconButton };