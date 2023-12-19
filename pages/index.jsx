import styled from 'styled-components'

import BackGroundImageWithChildren from '../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren.jsx'
import Logo from '../src/components/logo/Logo.jsx'

const StyledDiv = styled.div`
  background-color: ${props => props.theme.colors.white};
  min-width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0px 100px;

  @media (max-width: 768px) {
    min-width: 100%;
    margin: 0px 100px;
  }
`

export default function HomePage () {
  return (
    <BackGroundImageWithChildren>
      <StyledDiv>
        <Logo showImage textType="vertical"/>
        <input/>
      </StyledDiv>
    </BackGroundImageWithChildren>
  )
}