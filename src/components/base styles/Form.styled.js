import styled from 'styled-components';
import { TextButton } from './Buttons';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  background-color: transparent;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
`;

const Label = styled.span`
  margin-bottom: 4px;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: rgb(50 50 50);
`;

const Input = styled.input`
  width: calc(100vw - 40px);
  padding: 10px 15px;
  font-size: 12px;
  font-weight: 500;
  color: rgb(50 50 50);
  background-color: rgb(255 255 255 / 70%);
  border-radius: 5px;
  border: 2px solid rgba(130, 130, 130, 0.7);
  box-shadow: 3px 5px 10px -2px rgba(80, 100, 170, 0.5);
  @media screen and (min-width: 320px) {
    max-width: 300px;
  }
  &:hover,
  &:focus,
  &:active {
    outline: 0;
    border: 2px solid rgb(130, 130, 130);
    box-shadow: 1px -1px 10px -2px rgba(75, 92, 165, 0.5) inset;
  }
`;

const Submit = styled(TextButton)``;

export { Form, Field, Label, Input, Submit };