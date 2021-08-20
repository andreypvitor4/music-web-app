import styled from "styled-components";
import { primaryColor } from "../../variables/colors";

export const SongContainer = styled.div`
  display: flex;
  margin-top: 20px;
  background-image: linear-gradient(to right, rgb(22, 24, 31), #111);
  border: 1px solid #333;
  overflow: hidden;

  @media(max-width: 700px) {
    flex-direction: column;
    border-left: none;
    border-right: none;
  }

  @media(min-width: 700px) {
    border-radius: 5px;
    width: 300px;
    transition: ease 1s;
    transform: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? 'scale(1)': 'scale(0.8)'};
  }
`

export const CoverContainer = styled.div`
  flex: 1;
  @media(max-width: 700px) {
    width: 100%;
  }

  img {
    width: 100%;
  }
  span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
  }
  h2 {
    transition: 0.1s;
    font-size: 20px;
    padding-left: 10px;
    padding-right: 5px;
    margin-top: 20px;
    position: absolute;
    color: white;
    opacity: 50%;
    background-color: #111;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`

export const SongInfo = styled.div`
  color: white;
  h2 {
    margin-left: 10px;
  }
  @media(max-width: 700px) {
    width: 100%;
    font-size: 18px;
    transition: height 0.4s;
    visibility: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? 'visible': 'hidden'};
    height: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '350px': '0px'};
  }
  @media(min-width: 700px) {
    transition: 0.4s;
    border-left: 1px solid #333;
    visibility: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? 'visible': 'hidden'};
    width: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '55%': '0px'};
    height: ${ ({ fullLayoutDisplay }) => !fullLayoutDisplay && '0'};
    font-size: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '14px': '0px'};
  }
  
  div {
    margin-top: 10%;
  }
`

export const DeezerLink = styled.a`
  display: flex;
  align-items: center;
  margin: 10% 5px 20px 10px;
  cursor: pointer;
  text-decoration: none;
  color: ${primaryColor};
  font-weight: bold;
  :hover {
    color: blue;
  }
  span {
    margin-left: 10px;
    margin-right: 7px;
  }
`
