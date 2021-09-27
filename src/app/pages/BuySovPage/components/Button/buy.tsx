import React from 'react';
import styled, { css } from 'styled-components/macro';

interface BtnProps {
  onClick: () => void;
  disabled?: boolean;
}

interface Props extends BtnProps {
  text: React.ReactNode;
  className?: string;
}

const StyledButton = styled.button`
  width: 100%;
  margin-top: 20px;
  border: 0;
  height: 3.125rem;
  color: #ffffff;
  padding: 0.5rem 1.5rem;
  font-size: 1.25rem;
  font-weight: 600;
  background: #17c3b2;
  border-radius: 0.5rem;
  text-transform: none;
  line-height: 1;
  transition: opacity 0.3s;
  text-transform: uppercase;

  &:hover {
    opacity: 75%;
  }

  ${(props: BtnProps) =>
    props.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}
`;

export function BuyButton(props: Props) {
  return (
    <StyledButton
      onClick={props.onClick}
      disabled={props.disabled}
      className={props.className}
    >
      {props.text}
    </StyledButton>
  );
}
