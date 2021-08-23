import { useRouter } from 'next/dist/client/router';
import Router from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react'
import { getLocalStorageSavedTracks, refreshLocalStorageState } from '../../store/myTracks/myTracks.actions';
import { NavComponent, Container, BorderBottom } from "./styles"

export default function Header() {
  const router = useRouter()

  //posição das barras abaixo dos links home  minhas músicas
  const [borderRight, setBorderRight] = useState(207);
  const [borderWidth, setBorderWidth] = useState(46);

  const dispatch = useDispatch()
  const tracksAudios = useSelector(state => state.tracksAudios)

  useEffect(() => {
    dispatch(getLocalStorageSavedTracks())
  }, []);

  useEffect(() => {
    if(router.pathname === '/my-tracks') {
      setBorderRight(80)
      setBorderWidth(115)
    }
    if(router.pathname === '/') {
      setBorderRight(207);
      setBorderWidth(46)
    }
  }, [router.pathname]);

  function handleHome() {
    setBorderRight(207)
    setBorderWidth(46)
    tracksAudios.forEach(elem => elem.pause())
    Router.push('/')
  }

  function handleMyTracks() {
    setBorderRight(80)
    setBorderWidth(115)
    tracksAudios.forEach(elem => elem.pause())
    Router.push('/my-tracks')
  }

  return (
    <header>
      <Container>
        <NavComponent>
          <ul>
            <li onClick={handleHome}> 
              Home
            </li>
            <li onClick={handleMyTracks}> 
              Minhas músicas
            </li>
          </ul>
        </NavComponent>

        <BorderBottom borderRight={borderRight} borderWidth={borderWidth}/>
      </Container>
    </header>
  )
}