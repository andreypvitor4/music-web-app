import Head from 'next/head'
import { useCallback, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import ScaleLoader from "react-spinners/ScaleLoader"
import { IoIosArrowUp } from 'react-icons/io'
import TrackDisplay from "../components/TrackDisplay";
import Search from "../components/Search";
import InfiniteScroll from "../components/InfiniteScroll";
import { updateTracksAudios } from '../store/tracksAudios/tracksAudios.actions';
import { addTracksToMyList, deleteTracksOfMyList } from '../store/myTracks/myTracks.actions';
import fetchTracks from "../store/playlist/playlist.thunks";
import { TracksList, LoadingScreen, GoToTop, Title} from '../pagesStyles/home'

export default function Home() {
  const dispatch = useDispatch()

  const { tracks, loading, lastPage } = useSelector(state => state.playlist)
  const fetchOptions = useSelector(state => state.fetchOptions)

  useEffect(() => {
    dispatch(fetchTracks(fetchOptions))
  }, [dispatch, fetchOptions]);

  useEffect(() => {
    dispatch(updateTracksAudios(tracks))
  }, [tracks]);

  useEffect(() => {
    return () => {
      // Atualiza a lista de favoritos com as ações feitas na página
      dispatch(addTracksToMyList())
      dispatch(deleteTracksOfMyList())
    }
  }, []);

  // Função para fazer a chamada da próxima página da api (o valor padrão do max é 8)
  const fetchMore = useCallback( () => {
    const currentIndex = tracks.length
    dispatch(fetchTracks({
      ...fetchOptions,
      newPlaylist: false,
      offset: currentIndex,
    }))
  }, [dispatch, tracks.length, fetchOptions])

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