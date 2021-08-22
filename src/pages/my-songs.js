import Link from 'next/link'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { TracksList } from "../pagesStyles/home"
import TrackDisplay from '../components/TrackDisplay'
import { updateTracksAudios } from "../store/tracksAudios/tracksAudios.actions";
import { getSavedTracks } from "../store/mySongs/mySongs.actions";
import { AddButtonDiv } from "../pagesStyles/mySongs";

export default function MySongs() {
  const dispatch = useDispatch()
  const mySongs = useSelector(state => state.mySongs)

  useEffect(() => {
    dispatch(getSavedTracks())
  }, []);

  useEffect(() => {
    dispatch(updateTracksAudios(mySongs))
  }, [mySongs]);

  return (
    <div>
      <TracksList>
        {mySongs.length > 0 ? mySongs.map( (track, key) => (
          <TrackDisplay data={track} key={key} index={key}/>
        )) : (
          <>
            <h2 style={{color: '#eee', fontSize: '16px'}}>Você ainda não adicionou músicas :(</h2>
            <AddButtonDiv>
              <Link href="/">+</Link>
            </AddButtonDiv>
          </>
        )}


      </TracksList>
    </div>
  )
}