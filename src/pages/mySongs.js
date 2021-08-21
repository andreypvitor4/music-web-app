import { TracksList } from "../pagesStyles/home"
import TrackDisplay from '../components/TrackDisplay'
import { useSelector } from 'react-redux';

export default function MySongs() {
  const mySongs = useSelector(state => state.mySongs)

  return (
    <div>
      <TracksList>
        {mySongs.length > 0 && mySongs.map( (track, key) => (
          <TrackDisplay data={track} key={key} index={key}/>
        ))}
      </TracksList>
    </div>
  )
}