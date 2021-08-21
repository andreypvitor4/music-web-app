import Head from 'next/head'
import { useCallback, useEffect, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader"
import { IoIosArrowUp } from 'react-icons/io'
import fetchTracks from "../store/playlist/playlist.thunks";
import TrackDisplay from "../components/TrackDisplay";
import Search from "../components/Search";
import InfiniteScroll from "../components/InfiniteScroll";
import { TracksList, LoadingScreen, GoToTop, Title} from '../pagesStyles/home'
import { updateTracksAudios } from '../store/tracksAudios/tracksAudios.actions';

export default function Home() {
  const dispatch = useDispatch()
  const { tracks, loading, lastPage } = useSelector(state => state.playlist)
  const fetchOptions = useSelector(state => state.fetchOptions)
  const homeClicked = useSelector(state => state.homePageToggle)

  useEffect(() => {
    !homeClicked && dispatch(fetchTracks(fetchOptions))
  }, [dispatch, fetchOptions]);

  useEffect(() => {
    dispatch(updateTracksAudios(tracks))
  }, [tracks]);

  const fetchMore = useCallback( () => {
    const currentIndex = tracks.length
    dispatch(fetchTracks({
      ...fetchOptions,
      newPlaylist: false,
      offset: currentIndex,
    }))
  }, [dispatch, tracks.length])

  function goToTopSmooth() {
    window.scrollTo({
      top: 0, behavior: 'smooth'
    })
  }
  
  return (
    <div >
      <Head>
        <title>Home</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      
      <Search />

      {loading && tracks.length > 0 &&  (
        <LoadingScreen>
          <ScaleLoader size={50} color={'white'}/>
        </LoadingScreen>
      )}

      <Title><h1>Mais ouvidas</h1></Title>
      <TracksList>
        {tracks.length > 0 && tracks.map( (track, key) => (
          <TrackDisplay data={track} key={key} index={key}/>
        ))}
      </TracksList>

      {loading &&(
        <LoadingScreen>
          <ScaleLoader size={100} color={'white'}/>
        </LoadingScreen>
      )}

      <GoToTop onClick={goToTopSmooth}> <IoIosArrowUp /> </GoToTop>

      {tracks.length > 0 && !loading && !lastPage && (
        <InfiniteScroll fetchMore={fetchMore} />
      )}
    </div>
  )
}