import styled from "styled-components";
import { ButtonProps } from "./Button.type";

const Button = styled.button<ButtonProps>`
  padding: 1rem 1.5rem;
  border-radius: 1rem;
  cursor: pointer;
  font-weight: 500;
  transition: all 0.2s;
  text-decoration: none;
  outline: none;
  border: ${(props) => (props.primary ? `none` : `none`)};
  color: inherit;

  color: var(--color-white);
  background-color: ${(props) =>
    props.primary ? `var(--color-green-600)` : `transparent`};

  &:hover {
    background-color: ${(props) =>
      props.primary ? `var(--color-green-500)` : ``};
  }
`;

export default Button;
