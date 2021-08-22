import Head from 'next/head'
import Link from 'next/link'
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { TracksList } from "../pagesStyles/home"
import TrackDisplay from '../components/TrackDisplay'
import { updateTracksAudios } from "../store/tracksAudios/tracksAudios.actions";
import { getLocalStorageSavedTracks } from "../store/mySongs/mySongs.actions";
import { addTracksToMyList, deleteTracksOfMyList } from '../store/mySongs/mySongs.actions';
import { AddButtonDiv } from "../pagesStyles/mySongs";

export default function MySongs() {
  const dispatch = useDispatch()
  
  useEffect(() => {
    dispatch(getLocalStorageSavedTracks())
    return () => {
      dispatch(addTracksToMyList())
      dispatch(deleteTracksOfMyList())
    }
  }, []);

  const { myTracks } = useSelector(state => state.mySongs)

  useEffect(() => {
    dispatch(updateTracksAudios(myTracks))
  }, [myTracks]);

  return (
    <div>
      <Head>
        <title>Minhas Músicas</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      <TracksList>
        {myTracks.length > 0 ? myTracks.map( (track, key) => (
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