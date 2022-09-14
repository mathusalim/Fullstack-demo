import React, { FC } from 'react';
import styled from 'styled-components';

const Button: FC<ButtonTypes> = ({
  buttonType = 'primary',
  children,
  text,
}) => {
  return <button>{children || text}</button>;
};

export default Button;

export interface ButtonTypes {
  buttonType?: 'primary' | 'secondary' | 'warning' | 'accent';
  text?: string;
  children?: JSX.Element | JSX.Element[];
}

const StyledButton = styled.button`
  background-color: red;
  font-size: 1.2em;
  border: none;
  line-height: 0.5em;
  cursor: pointer;
  padding: 0.8rem;
  border-radius: 2rem;
`;
