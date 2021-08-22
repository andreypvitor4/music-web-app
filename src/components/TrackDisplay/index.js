import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addTrackToAdd, addTrackToDelete } from "../../store/mySongs/mySongs.actions";
import { SiDeezer } from 'react-icons/si'
import { RiHeartFill, RiHeartAddLine } from 'react-icons/ri'
import TrackPlayer from "../TrackPlayer"
import { CoverContainer, SongContainer, SongInfo, DeezerLink, AddToList, AddToList2, HeartFill, HeartLine} from './styles'

export default function TrackDisplay( { data, index }) {

  const [fullLayoutDisplay, setFullLayoutDisplay] = useState(false);
  const [addToMyList, setAddToMyList] = useState(false);
  const [hideTitle, setHideTitle] = useState('');

  const { myTracks } = useSelector(state => state.mySongs)

  useEffect(() => {
      if(myTracks) {
        //se a musica atual estiver na minha lista currentTrackIsInMyList recebe true
        const currentTrackIsInMyList = myTracks.some( elem => elem.id === data.id )
        setAddToMyList(currentTrackIsInMyList)
      }
  }, [myTracks, data]);

  const dispatch = useDispatch()

  function calculateTime(secs) {
    const minutes = Math.floor(secs / 60)
    const seconds = secs%60
    const time = seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`
    return time
  }
  function handleLayoutDisplay() {
    setFullLayoutDisplay(prev => !prev)
  }

  function handleAddToMyList(e) {
    setAddToMyList(prev => !prev)

    if(!addToMyList) {
      dispatch(addTrackToAdd(data))
    }else {
      dispatch(addTrackToDelete(data))
    }

    const heartFill = e.currentTarget.firstChild

    heartFill.style.transform = 'scale(1.5)'
    setTimeout(() => {
      heartFill.style.transform = 'scale(1)'
    }, 200)
  }

  return (
      <>
        {data.album && (
          <SongContainer 
            fullLayoutDisplay={fullLayoutDisplay} 
            onMouseEnter={() => {setHideTitle('0')}}
            onMouseLeave={() => {setHideTitle('70%')}}
          >
            <CoverContainer>
              {(!fullLayoutDisplay) && <h2 style={{opacity: hideTitle}}>{ data.title_short }</h2>}
              <img src={data?.album.cover_big || ''} alt="album" onClick={handleLayoutDisplay}/>

              <AddToList onClick={handleAddToMyList} fullLayoutDisplay={fullLayoutDisplay} >
                <HeartFill addToMyList={addToMyList}> <RiHeartFill/> </HeartFill>
                <HeartLine addToMyList={addToMyList}> <RiHeartAddLine/> </HeartLine>
              </AddToList>

              <AddToList2 onClick={handleAddToMyList} fullLayoutDisplay={fullLayoutDisplay} >
                <HeartFill addToMyList={addToMyList}> <RiHeartFill/> </HeartFill>
                <HeartLine addToMyList={addToMyList}> <RiHeartAddLine/> </HeartLine>
              </AddToList2>

              <span>
                <TrackPlayer data={data} fullLayoutDisplay={fullLayoutDisplay} index={index}/>
              </span>
            </CoverContainer>
          
            <SongInfo fullLayoutDisplay={fullLayoutDisplay}>
              <h2>{ data.title_short }</h2>

              <a href={data.artist.link} style={{textDecoration: 'none'}}>
                <span style={{color: '#999'}}>Artista:</span> <span style={{color: 'white', fontWeight: 'bold'}}>{ data.artist.name }</span>
              </a>

              <div>
                <span style={{color: '#999'}}>Album:</span> { data.album.title } 
              </div>

              <div>
                <span style={{color: '#999'}}>Duração:</span> { calculateTime(data.duration) }
              </div>

              <DeezerLink href={data.link}> Ouvir música completa <span><SiDeezer size="25px"/></span> </DeezerLink>

            </SongInfo>

          </SongContainer>
        )}
      </>

  )
}