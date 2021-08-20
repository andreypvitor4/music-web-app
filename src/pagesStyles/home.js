import styled from "styled-components";

export const TracksList = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;
  @media(max-width: 700px) {
    width: 100%;
    flex-direction: column;
  }
`

export const LoadingScreen = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const GoToTop = styled.div`
  display: none;
  @media(max-width: 700px) {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 85vh;
    right: 20px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    opacity: 60%;
    background-color: #111;
    color: white;
    font-size: 40px;
    font-weight: bold;
  }
`

export const Title = styled.div`
  display: none;
  justify-content: center;
  h1 {
    color: #eee;
    font-size: 16px;
    margin: 40px 0px -15px 0px;
    @media(max-width: 700px) {
      margin: 20px 0px -10px 0px;
    }
  }
`