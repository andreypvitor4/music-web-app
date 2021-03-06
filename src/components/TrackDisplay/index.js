import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { SiDeezer } from 'react-icons/si'
import { RiHeartFill, RiHeartAddLine } from 'react-icons/ri'
import TrackPlayer from "../TrackPlayer"
import { addTrackToAddList, addTrackToDeleteList } from "../../store/myTracks/myTracks.actions";
import { CoverContainer, TrackContainer, TrackInfo, DeezerLink, AddToList, AddToList2, HeartFill, HeartLine, UnFavoritePopUp} from './styles'

export default function TrackDisplay( { data, index }) {
  const [unFavoriteClicked, setUnFavoriteClicked] = useState(false);
  const [fullLayoutDisplay, setFullLayoutDisplay] = useState(false);
  const [addToMyList, setAddToMyList] = useState(false);
  const [hideTitle, setHideTitle] = useState('');

  const { myTracks } = useSelector(state => state.myTracks)

  useEffect(() => {
      if(myTracks) {
        // Se a musica atual estiver na minha lista currentTrackIsInMyList recebe true
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
      dispatch(addTrackToAddList(data))
    }else {
      dispatch(addTrackToDeleteList(data))
      setUnFavoriteClicked(true)
      setTimeout(() => { setUnFavoriteClicked(false) }, 1000)
    }

    const heartFill = e.currentTarget.firstChild
    // Animação do botão de adicionar aos favoritos
    heartFill.style.transform = 'scale(1.5)'
    setTimeout(() => {
      heartFill.style.transform = 'scale(1)'
    }, 200)
  }

  return (
      <>
        {data.album && (
          <TrackContainer 
            fullLayoutDisplay={fullLayoutDisplay} 
            onMouseEnter={() => {setHideTitle('0')}}
            onMouseLeave={() => {setHideTitle('70%')}}
          >
            <CoverContainer>
              {(!fullLayoutDisplay) && <h2 style={{opacity: hideTitle}}>
                { data.title_short || 'Sem título' }
              </h2>}

              <img src={data?.album.cover_big || '/No-image-available.jpg'} alt="album" onClick={handleLayoutDisplay}/>

              <UnFavoritePopUp unFavoriteClicked={unFavoriteClicked}>Retirado dos favoritos</UnFavoritePopUp>

              <AddToList onClick={handleAddToMyList} fullLayoutDisplay={fullLayoutDisplay} >
                <HeartFill addToMyList={addToMyList}> <RiHeartFill/> </HeartFill>
                <HeartLine addToMyList={addToMyList}> <RiHeartAddLine/> </HeartLine>
              </AddToList>

              <AddToList2 onClick={handleAddToMyList} fullLayoutDisplay={fullLayoutDisplay} >
                <HeartFill addToMyList={addToMyList}> <RiHeartFill/> </HeartFill>
                <HeartLine addToMyList={addToMyList}> <RiHeartAddLine/> </HeartLine>
              </AddToList2>

              <span>
                <TrackPlayer fullLayoutDisplay={fullLayoutDisplay} index={index}/>
              </span>
            </CoverContainer>
          
            <TrackInfo fullLayoutDisplay={fullLayoutDisplay}>
              <h2>{ data.title_short || 'Sem título'}</h2>

              <a href={data.artist.link || ''} style={{textDecoration: 'none'}}>
                <span style={{color: '#999'}}>Artista:</span> 
                <span style={{color: 'white', fontWeight: 'bold'}}>
                  { data.artist.name || 'Nome não disponível' }
                </span>
              </a>

              <div>
                <span style={{color: '#999'}}>Album:</span> { data.album.title || 'Não disponível' } 
              </div>

              <div>
                <span style={{color: '#999'}}>Duração:</span> 
                { calculateTime(data.duration) || 'Não disponível' }
              </div>

              <DeezerLink href={data.link || '#'}> Ouvir música completa <span><SiDeezer size="25px"/></span> </DeezerLink>

            </TrackInfo>

          </TrackContainer>
        )}
      </>

  )
}