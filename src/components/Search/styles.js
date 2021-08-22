import styled from "styled-components";

export const FormContainer = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: auto;
  margin-top: 100px;
  width: 30%;
  @media(max-width: 700px) {
    margin: 0px auto;
    transition: all ease 0.4s;
    width: ${ ({ setBorder }) => setBorder? '80%': '0%'};
  }
`
export const Border1 = styled.span`
  align-self: flex-end;
  position: absolute;
  width: 30%;
  height: 1px;
  background-color: #444;
  @media(max-width: 700px) {
    background: none;
    width: 40%;
    height: 2px;
  }
`

export const Border2 = styled.span`
  align-self: flex-end;
  position: absolute;
  height: 1px;
  background-color: ${ ({theme}) => theme.colors.primary };
  transition: all ease 0.2s;
  width: ${ ({ setBorder }) => setBorder? '30%': '0%'};
  @media(max-width: 700px) {
    height: 2px;
    width: ${ ({ setBorder }) => setBorder? '80%': '0%'};
  }
`

export const SearchIcon = styled.div`
  font-size: 22px;
  padding-top: 5px;
  cursor: pointer;
  outline: none;
  transition: all ease 0.4s;
  color: ${ ({ setBorder, theme }) => setBorder? theme.colors.primary: '#eee'};
  @media(max-width: 700px) {
    margin-left: ${ ({ setBorder }) => setBorder? `0px`: '75vw'};
  }
`

export const SearchInput = styled.input`
  border: none;
  background: none;
  font-weight: bold;
  font-size: 14px;
  color: #eee;
  width: 100%;
  margin-right: 15px;
  user-select: none;
  :focus {
    outline: 0;
  }

`