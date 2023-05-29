import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultThame";

export const DateForm = styled.form`
  height: 3rem;
  display: flex;
  justify-content: flex-start;
  align-items: center;

  h3 {
    margin-top: 0.5rem;
    font-size: 14px;
    font-style: medium;
  }
`

export const FilterButton = styled.button`
  background: ${defaultTheme.white};
  border: 1px solid ${defaultTheme.black};
  border-radius: 6px;
  height: 32px;
  
  font-family: 'Inter';
  font-style: regular;
  font-size: 14px;
  color: ${defaultTheme.black};
  padding: 0 16px 0 16px;
  cursor: pointer;
  
  &:hover {
    background: ${defaultTheme.buttonHover};
  }
`