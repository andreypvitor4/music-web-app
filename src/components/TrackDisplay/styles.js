import styled from "styled-components";

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
    padding: 5px;
    padding-left: 10px;
    transition: 0.1s;
    font-size: 16px;
    margin-top: 20px;
    position: absolute;
    color: white;
    opacity: 70%;
    background-color: rgba(17, 17, 17, 0.9);
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  }
`

export const AddToList = styled.div`
  position: absolute;
  right: 0px;
  margin: -70px 10px 0px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 55px;
  height: 55px;
  border-radius: 50%;
  padding-top: 12px;
  background-color: rgba(0, 0, 0, 0.8);
  cursor: pointer;
  transition: all ease 0.2s;
  @media(min-width: 700px) {
    transform: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? 'scale(0.5)': 'scale(1)'};
    visibility: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? 'hidden': 'visible'};
    opacity: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '0%': '100%'};
  }
`

export const AddToList2 = styled(AddToList)`
  background: none;
  right: -15px;
  bottom: 52px;
  visibility: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? 'visible': 'hidden'};
  opacity: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '100%': '0%'};
  @media(max-width: 700px) {
    display: none
  }
`

export const HeartFill = styled.div`
  transition: all ease 0.4s;
  visibility: ${ ({ addToMyList }) => addToMyList? 'visible': 'hidden'};
  opacity: ${ ({ addToMyList }) => addToMyList? '100%': '0%'};
  position: ${ ({ addToMyList }) => addToMyList? 'initial': 'absolute'};
  color: rgb(204, 25, 64);
  z-index: 10;
  font-size: 40px;
`
export const HeartLine = styled.div`
  transition: all ease 0.4s;
  opacity: ${ ({ addToMyList }) => addToMyList? '0%': '100%'};
  position: absolute;
  color: rgb(204, 25, 64);
  z-index: 10;
  font-size: 40px;
`

export const SongInfo = styled.div`
  padding-right: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '5px': '0px'};
  padding-left: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '10px': '0px'};
  color: white;

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
  margin: 10% 5px 20px 0px;
  cursor: pointer;
  text-decoration: none;
  color: ${ ({theme}) => theme.colors.primary };
  font-weight: bold;
  :hover {
    color: blue;
  }
  span {
    margin-left: 10px;
    margin-right: 7px;
  }
`

export const UnFavoritePopUp = styled.div`
  position: absolute;
  color: #eee;
  font-weight: bold;
  background-color: #111;
  border-radius: 2px;
  padding: 5px 10px;
  margin-left: 75px;
  transition: all ease 0.5s;
  visibility: ${ ({ unFavoriteClicked }) => unFavoriteClicked? 'visible': 'hidden'};
  opacity: ${ ({ unFavoriteClicked }) => unFavoriteClicked? '70%': '0%'};
  margin-top: ${ ({ unFavoriteClicked }) => unFavoriteClicked? '-110px': '-145px'};
`