import { useRouter } from 'next/dist/client/router';
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { NavComponent, Container, BorderBottom } from "./styles"

export default function Header() {
  const router = useRouter()
  const [borderRight, setBorderRight] = useState(207);
  const [borderWidth, setBorderWidth] = useState(46);

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
            <li onClick={handleHome}> 
              <Link href="/">
                Home
              </Link> 
            </li>
            <li onClick={handleMySongs}> 
              <Link href="/my-songs"> 
                Minhas músicas
              </Link> 
            </li>
          </ul>
        </NavComponent>

        <BorderBottom borderRight={borderRight} borderWidth={borderWidth}/>
      </Container>
    </header>
  )
}