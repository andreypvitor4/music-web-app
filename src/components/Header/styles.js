import styled from "styled-components";
import { primaryColor } from '../../variables/colors'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  width: 100%;
  margin: 30px 0px;
`

export const NavComponent = styled.nav`
  width: 300px;
  @media(max-width: 700px) {
    width: 240px;
  }
  ul {
    list-style: none;
    display: flex;
    justify-content: flex-start;
    width: 100%;
    color: #eee;
    font-weight: bold;
    font-size: 14px;
    margin: 0px;
  }
  li {
    margin: 10px 10px;
    cursor: pointer;
  }
`

export const BorderBottom = styled.div`
  position: absolute;
  top: 62px;
  transition: all ease 0.1s;
  right: ${ ({ borderRight }) => `${borderRight}px`};
  width: ${ ({ borderWidth }) => `${borderWidth}px`};
  height: 2px;
  background-color: ${primaryColor};
  @media(max-width: 700px) {
    right: ${ ({ borderRight }) => `${borderRight - 57}px`};
  }
`