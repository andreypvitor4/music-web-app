import { useState, useEffect, useRef } from "react";
import { FaPlay } from 'react-icons/fa'
import { GiPauseButton } from 'react-icons/gi'
import { AudioPlayer, PlayPause, Time, ProgressBar, DesktopTime} from './styles'
import { useSelector } from 'react-redux';

export default function PlayList({songDuration, data, fullLayoutDisplay }) {
  const active = useSelector(state => state.fullSongLayout)

  const [isPlaying, setIsPlaying] = useState(active);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [progressBarSeekBeforeWidth, setProgressBarSeekBeforeWidth] = useState(0);

  const audioPlayerRef = useRef()
  const progressBarRef = useRef()
  const animationRef = useRef()

  useEffect(() => {
    const seconds = songDuration || 30
    setDuration(seconds);

    progressBarRef.current.max = seconds
    progressBarRef.current.value = 0
    
  }, [songDuration]);

  function togglePlayPause() {
    const prevValue = isPlaying
    setIsPlaying(!prevValue)
    if(!prevValue) {
      audioPlayerRef.current.play()
      animationRef.current = requestAnimationFrame(whilePlaying)
    }else {
      audioPlayerRef.current.pause()
      cancelAnimationFrame(animationRef.current)
    }
  }

  function whilePlaying() {
    progressBarRef.current.value = audioPlayerRef.current.currentTime
    setProgressBarSeekBeforeWidth((progressBarRef.current.value/duration)*100)
    setCurrentTime(progressBarRef.current.value)
    animationRef.current = requestAnimationFrame(whilePlaying)
  }

  function handleChangeRange() {
    audioPlayerRef.current.currentTime = progressBarRef.current.value
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
        <audio preload="metadata" ref={audioPlayerRef} src={data.preview}></audio>

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