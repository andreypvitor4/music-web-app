import { useState } from "react";
import PlayList from "../PlayList/"
import { CoverContainer, SongContainer, SongInfo, DeezerLink } from './styles'
import { SiDeezer } from 'react-icons/si'

export default function SongDisplay( { data }) {
  const [fullLayoutDisplay, setFullLayoutDisplay] = useState(false);
  const [hideTitle, setHideTitle] = useState('');

  function calculateTime(secs) {
    const minutes = Math.floor(secs / 60)
    const seconds = secs%60
    const time = seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`
    return time
  }
  function handleLayoutDisplay() {
    setFullLayoutDisplay(prev => !prev)
  }
  return (

      <>
        {data.album && (
          <SongContainer 
            fullLayoutDisplay={fullLayoutDisplay} 
            onMouseEnter={() => {setHideTitle('0')}}
            onMouseLeave={() => {setHideTitle('50%')}}
          >
            <CoverContainer>
              {(!fullLayoutDisplay) && <h2 style={{opacity: hideTitle}}>{ data.title_short }</h2>}
              <img src={data?.album.cover_big || ''} alt="album" onClick={handleLayoutDisplay}/>
              <span>
                <PlayList data={data} fullLayoutDisplay={fullLayoutDisplay}/>
              </span>
            </CoverContainer>
          
            <SongInfo fullLayoutDisplay={fullLayoutDisplay}>
              <h2>{ data.title_short }</h2>

              <a href={data.artist.link} style={{marginLeft: '10px', textDecoration: 'none'}}> 
                <span style={{color: '#999'}}>Artista:</span> <span style={{color: 'white', fontWeight: 'bold'}}>{ data.artist.name }</span>
              </a>

              <div style={{marginLeft: '10px'}}>
                <span style={{color: '#999'}}>Album:</span> { data.album.title } 
              </div>

              <div style={{marginLeft: '10px'}}>
                <span style={{color: '#999'}}>Duração:</span> { calculateTime(data.duration) }
              </div>

              <DeezerLink href={data.link}> Ouvir música completa <span><SiDeezer size="25px"/></span> </DeezerLink>

            </SongInfo>

          </SongContainer>
        )}
      </>

  )
}