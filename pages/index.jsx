import styled from 'styled-components'

import BackGroundImageWithChildren from '../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren.jsx'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 500px;

  @media (max-width: 500px) {
    min-width: 100%;
  }
`

export default function HomePage () {
  return (
    <BackGroundImageWithChildren>
      <StyledDiv>
        Página Inicial
      </StyledDiv>
    </BackGroundImageWithChildren>
  )
}