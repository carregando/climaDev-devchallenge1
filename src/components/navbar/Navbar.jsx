import styled from 'styled-components'

import Logo from '../logo/Logo'
import Container from '../layout/container/Container'

const StyledNavbar = styled.div`
  margin: 20px 0px;
  display: flex;
  align-items: center;
`

export default function Navbar() {
  return (
    <StyledNavbar>
      <Container>
        <Logo />
      </Container>
    </StyledNavbar>
  )
}