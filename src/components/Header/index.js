import Link from 'next/link'
import { useState } from 'react'
import { useDispatch } from 'react-redux';
import { NavComponent, Container, BorderBottom } from "./styles"
import { homePageClicked } from '../../store/HomePageToggle/HomePageToggle.actions';

export default function Header() {
  const [borderRight, setBorderRight] = useState(207);
  const [borderWidth, setBorderWidth] = useState(46);

  const dispatch = useDispatch()

  function handleHome() {
    setBorderRight(207);
    setBorderWidth(46)
    dispatch(homePageClicked())
  }

  function handleMySongs() {
    setBorderRight(80)
    setBorderWidth(115)
  }

  return (
    <header>
      <Container>
        <NavComponent>
          <ul>
            <li onClick={handleHome}> <Link href="/">Home</Link> </li>
            <li onClick={handleMySongs}> <Link href="/mySongs">Minhas músicas</Link> </li>
          </ul>
        </NavComponent>

        <BorderBottom borderRight={borderRight} borderWidth={borderWidth}/>
      </Container>
    </header>
  )
}