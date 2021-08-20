import { useState } from 'react'
import { NavComponent, Container, BorderBottom } from "./styles"

export default function Header() {
  const [borderRight, setBorderRight] = useState(207);
  const [borderWidth, setBorderWidth] = useState(46);

  return (
    <header>
      <Container>
        <NavComponent>
          <ul>
            <li onClick={() => {setBorderRight(207); setBorderWidth(46)}}>Home</li>
            <li onClick={() => {setBorderRight(80); setBorderWidth(115)}}>Minhas músicas</li>
          </ul>
        </NavComponent>

        <BorderBottom borderRight={borderRight} borderWidth={borderWidth}/>
      </Container>
    </header>
  )
}