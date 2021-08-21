import { useState, useEffect, useRef } from "react";
import { FaPlay } from 'react-icons/fa'
import { GiPauseButton } from 'react-icons/gi'
import { AudioPlayer, PlayPause, Time, ProgressBar, DesktopTime} from './styles'
import { useSelector } from 'react-redux';

export default function PlayList({songDuration, data, fullLayoutDisplay, index }) {

  const active = useSelector(state => state.fullSongLayout)
  const { tracksSound } = useSelector(state => state.playlist)

  const [isPlaying, setIsPlaying] = useState(active);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progressBarSeekBeforeWidth, setProgressBarSeekBeforeWidth] = useState(0);

  const progressBarRef = useRef()
  const animationRef = useRef()

  useEffect(() => {
    const seconds = songDuration || 30
    setDuration(seconds);

    progressBarRef.current.max = seconds
    progressBarRef.current.value = 0

    function pauseActiveListener() {
      setIsPlaying(prev => {
        if(prev) return !prev
        if(!prev) return prev
      })
    }

    tracksSound[index].addEventListener('pause', pauseActiveListener)

    return () => {
      tracksSound[index].removeEventListener('pause', pauseActiveListener)
    }
    
  }, [songDuration]);

  function togglePlayPause() {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)

    if(!prevValue) {
      tracksSound.forEach(elem => elem.pause())
      tracksSound[index].play()
      
      animationRef.current = requestAnimationFrame(whilePlaying)
    }else {
      tracksSound[index].pause()
      cancelAnimationFrame(animationRef.current)
    }
  }

  function whilePlaying() {
    progressBarRef.current.value = tracksSound[index].currentTime
    setProgressBarSeekBeforeWidth((progressBarRef.current.value/duration)*100)
    setCurrentTime(progressBarRef.current.value)
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  function handleChangeRange() {
    tracksSound[index].currentTime = progressBarRef.current.value
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