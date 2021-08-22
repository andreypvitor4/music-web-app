import styled from "styled-components";

export const AddButtonDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  padding-top: 20px;
  padding-right: 30px;
  @media(min-width: 700px) {
    margin-right: 20%;
  }
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    margin: 20px;
    margin-right: 0px;
    border-radius: 50%;
    border: none;
    background-color: ${ ({theme}) => theme.colors.primary };
    color: white;
    font-size: 35px;
    user-select: none;
    text-decoration: none;
    cursor: pointer;
    transition: all ease 0.1s;
    :hover {
      transform: scale(1.1)
    }
  }
`