import styled, { css } from "styled-components";
import { defaultTheme } from "../../styles/defaultThame";

interface TrCustomProps{ 
  backgroundColor: boolean
}

export const ContentContainer = styled.div`
  width: 100%;
  height: 100%;
  max-height: 48.5rem;
  margin: 0 auto;
  padding: 0rem;
  overflow: auto;

  ::-webkit-scrollbar {
    width: 9px;
    height: 9px
  }

  ::-webkit-scrollbar-track {
    border-radius: 40px;
    background-color: #efefef;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${defaultTheme.green};
    border-radius: 40px;
  }

  ::-webkit-scrollbar-corner {
    display: none;
  }

`

export const  TableCustomStyle = styled.table`
  border-collapse: collapse;
  margin: 8px 0;
`
export const TheadStyle = styled.thead`
  font-weight: 700;
  font-size:16px;
`

export const TbodyStyle = styled.tbody`
  font-weight: thin;
  font-size:12px;
`

export const TrCustom = styled.tr<TrCustomProps>`
  max-width: 16px;
  text-align: center;
  background-color: ${p => p.backgroundColor ? "#ffffff": "#efefef"}

`

export const ThCustom = styled.th`
  padding: 12px 8px;
  cursor: default;
  color: ${defaultTheme.black};
  border-top: 1px solid black;
  border-bottom: 1px solid black;
  font-size: 14px;
  font-family: inter;
  font-style: regular;
  color: ${defaultTheme.black}
`

export const TdCustom = styled.td`
  padding: 12px 8px;
  white-space: nowrap;
  color:${defaultTheme.black}
  font-size: 12px;
  font-style: regular;
`