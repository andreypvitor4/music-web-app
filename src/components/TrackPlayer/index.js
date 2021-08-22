import { useState, useEffect, useRef } from "react";
import { useSelector } from 'react-redux';
import { FaPlay } from 'react-icons/fa'
import { GiPauseButton } from 'react-icons/gi'
import { AudioPlayer, PlayPause, Time, ProgressBar, DesktopTime} from './styles'

export default function PlayList({ songDuration, fullLayoutDisplay, index }) {
  
  const tracksAudios = useSelector(state => state.tracksAudios)

  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progressBarSeekBeforeWidth, setProgressBarSeekBeforeWidth] = useState(0);

  const progressBarRef = useRef()
  const animationRef = useRef()

  useEffect(() => {
    const seconds = songDuration || 30
    setDuration(seconds)

    progressBarRef.current.max = seconds
    progressBarRef.current.value = 0

    function pauseActiveListener() {
      setIsPlaying(prev => {
        if(prev) return !prev
        if(!prev) return prev
      })
    }

    //tracksAudios é a lista de todos os audios e index é o index da música atual
    tracksAudios[index] && tracksAudios[index].addEventListener('pause', pauseActiveListener)

    return () => {
      tracksAudios[index] && tracksAudios[index].removeEventListener('pause', pauseActiveListener)
    }
    
  }, [songDuration, tracksAudios[index]]);

  function togglePlayPause() {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)

    if(!prevValue) {
      tracksAudios.forEach(elem => elem.pause())
      tracksAudios[index] && tracksAudios[index].play()
      
      animationRef.current = requestAnimationFrame(whilePlaying)
    }else {
      tracksAudios[index] && tracksAudios[index].pause()
      cancelAnimationFrame(animationRef.current)
    }
  }

  function whilePlaying() {
    if(progressBarRef.current) {
      progressBarRef.current.value = tracksAudios[index].currentTime
      setProgressBarSeekBeforeWidth((progressBarRef.current.value/duration)*100)
      setCurrentTime(progressBarRef.current.value)
      animationRef.current = requestAnimationFrame(whilePlaying)
    }
  }

  function handleChangeRange() {
    if(tracksAudios[index]) tracksAudios[index].currentTime = progressBarRef.current.value
    setProgressBarSeekBeforeWidth( (progressBarRef.current.value/duration)*100 )
    setCurrentTime(progressBarRef.current.value)
  }

  function calculateTime(secs) {
    const minutes = Math.floor(secs / 60)
    const seconds = secs%60
    const time = seconds < 10 ? `${minutes}:0${seconds}` : `${minutes}:${seconds}`
    return time
  }
  
  return (
    <div style={{width: '100%'}}>

      <AudioPlayer fullLayoutDisplay={fullLayoutDisplay}>

        <PlayPause onClick={togglePlayPause} fullLayoutDisplay={fullLayoutDisplay}>
          {isPlaying ? <GiPauseButton /> : <FaPlay />}
        </PlayPause>

        {(!fullLayoutDisplay || window.innerWidth < 700) && (
          <Time fullLayoutDisplay={fullLayoutDisplay}>{ calculateTime(currentTime) }</Time>
        )}


        <div>
          <ProgressBar 
            type="range" 
            ref={progressBarRef} 
            onChange={handleChangeRange}
            seekBeforeWidth={progressBarSeekBeforeWidth}
            fullLayoutDisplay={fullLayoutDisplay}
          />
        </div>

          <Time fullLayoutDisplay={fullLayoutDisplay} timeDisplay={fullLayoutDisplay}>{!!duration ? calculateTime(duration) : '0:30'}</Time>

      </AudioPlayer>  

      {(window.innerWidth > 700) && (
        <div style={{width: '100%', display: 'flex', justifyContent: 'center'}}>
          <DesktopTime fullLayoutDisplay={fullLayoutDisplay} timeDesktop={fullLayoutDisplay}>{ calculateTime(currentTime) }</DesktopTime>
        </div>
      )}

    </div>
  );
}