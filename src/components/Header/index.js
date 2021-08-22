import { useRouter } from 'next/dist/client/router';
import Router from 'next/router';
import { useEffect, useState } from 'react'
import { NavComponent, Container, BorderBottom } from "./styles"
import { getLocalStorageSavedTracks } from '../../store/mySongs/mySongs.actions';
import { useDispatch } from 'react-redux';

export default function Header() {
  const router = useRouter()
  const [borderRight, setBorderRight] = useState(207);
  const [borderWidth, setBorderWidth] = useState(46);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getLocalStorageSavedTracks())
  }, []);

  useEffect(() => {
    if(router.pathname === '/my-songs') {
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
    Router.push('/')
  }

  function handleMySongs() {
    setBorderRight(80)
    setBorderWidth(115)
    Router.push('/my-songs')
  }

  return (
    <header>
      <Container>
        <NavComponent>
          <ul>
            <li onClick={handleHome}> 
              Home
            </li>
            <li onClick={handleMySongs}> 
              Minhas músicas
            </li>
          </ul>
        </NavComponent>

        <BorderBottom borderRight={borderRight} borderWidth={borderWidth}/>
      </Container>
    </header>
  )
}