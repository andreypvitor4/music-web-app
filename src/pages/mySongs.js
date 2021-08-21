import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { TracksList } from "../pagesStyles/home"
import TrackDisplay from '../components/TrackDisplay'
import { updateTracksAudios } from "../store/tracksAudios/tracksAudios.actions";

export default function MySongs() {
  const dispatch = useDispatch()
  const mySongs = useSelector(state => state.mySongs)

  useEffect(() => {
    dispatch(updateTracksAudios(mySongs))
  }, [mySongs]);

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