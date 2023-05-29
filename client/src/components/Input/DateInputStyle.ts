import styled from "styled-components";
import { defaultTheme } from "../../styles/defaultThame";

interface DateInputProps {
    click?: boolean;
}

export const DateInputStyled = styled.input<DateInputProps>`
  height: 32px;
  width: 134px;
  border: solid 1px ${defaultTheme.black};
  margin: 0 1rem 0 1rem;
  border-radius: 6px;
  transition:all ease 400ms;
  box-shadow: none;
  background-color: ${defaultTheme.white};
  font-family: inter;
  font-style: regular;
  font-size: 14px;

  &::-webkit-datetime-edit {
    color: ${p => p.click ? defaultTheme.black : defaultTheme.grayWeak};
    margin-left: 12px;
  }
  
  ::-webkit-calendar-picker-indicator {
    display: none;
  }

`