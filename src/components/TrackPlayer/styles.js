import styled from "styled-components";

export const AudioPlayer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`

export const PlayPause = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4px;
  border: none;
  border-radius: 50%;
  background-color: ${ ({theme}) => theme.colors.primary };
  color: #eee;
  cursor: pointer;
  transition: all ease 0.4s;
  width: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '40px': '40px'};
  height: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '30px': '40px'};
  font-size: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '9px': ''};

  @media(max-width: 700px) {
    font-size: 13px;
    width: 40px;
    height: 40px;
  }
`

export const Time = styled.div`
  color: white;
  font-weight: bold;
  margin: 5px 8px;
  margin-top: 10px;
  font-family: Arial, Helvetica, sans-serif;
  transition: all ease 0.4s;

  @media(max-width: 700px) {
    font-size: 13px;
  }

  @media(min-width: 700px) {
    display: ${ ({ timeDisplay = false }) => timeDisplay? 'none': 'block'};
    font-size: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '10px': '13px'};
    margin: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '5px 4px': '5px 8px'};
  }
`
export const DesktopTime = styled(Time)`
  @media(min-width: 700px) {
    transition: ease 0.2s;
    opacity: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '100%': '0%'};
    font-size: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '10px': '0px'};
  }
`

const barBackground = '#555'
const seekBeforeColor = 'black'
const selectedKnobby = 'red'
const barHeight = '8px'

export const ProgressBar = styled.input`
  appearance: none;
  background-color: ${barBackground};
  border-radius: 10px;
  position: relative;
  height: ${barHeight};
  outline: none;
  @media(min-width: 700px) {
    width: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '80%': '100%'};
    margin-left: ${ ({ fullLayoutDisplay }) => fullLayoutDisplay? '10px': '0px'};
  }

  ::-webkit-slider-runnable-track {
    background-color: ${barBackground};
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: ${barHeight};
    outline: none;
  } */
  ::-moz-range-track {
    background-color: ${barBackground};
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: ${barHeight};
    outline: none;
  }
  ::-moz-focus-outer {
    border: 0;
  }

  ::before {
    content: '';
    height: ${barHeight};
    width: ${( ({ seekBeforeWidth = 0 }) => `${seekBeforeWidth}%`)};
    background-color: ${seekBeforeColor};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    top: 0px;
    left: 0px;
    z-index: 2;
    cursor: pointer;
  }
  ::-moz-range-progress {
    background-color: ${seekBeforeColor};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    height: ${barHeight};
  }
  ::-webkit-slider-thumb {
    --webkit-appearance: 'none';
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: none;
    background-color: ${ ({theme}) => theme.colors.primary };
    cursor: pointer;
    position: relative;
    margin-top: -4px;
    z-index: 3;
    box-sizing: border-box;
  }

   :active::-webkit-slider-thumb {
    transform: scale(1.2);
    background-color: ${selectedKnobby};
  }
  ::-moz-range-thumb {
    height: 15px;
    width: 15px;
    border-radius: 50%;
    border: transparent;
    background-color: ${ ({theme}) => theme.colors.primary };
    cursor: pointer;
    position: relative;
    z-index: 3;
  }
  :active::-moz-range-thumb {
    transform: scale(1.2);
    background: ${selectedKnobby};
  }
`