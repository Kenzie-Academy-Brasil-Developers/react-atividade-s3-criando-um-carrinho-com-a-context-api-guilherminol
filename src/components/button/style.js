import styled from "styled-components";
export const ButtonStyled = styled.button`
  background-color: rebeccapurple;
  padding: 10px;
  color: #dfff;
  border: 1px solid transparent;
  border-radius: 10px;
  &:hover {
    transition: 0.3s;
    background: lightgreen;
    color: rebeccapurple;
    border: 1px solid rebeccapurple;
    cursor: pointer;
  }
`;
