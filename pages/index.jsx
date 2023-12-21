import styled from 'styled-components'

import BackGroundImageWithChildren from '../src/components/layout/backgroundImageWithChildren/BackgroundImageWithChildren.jsx'
import Logo from '../src/components/logo/Logo.jsx'
import InputWithSugestions from '../src/components/form/InputWithSugestions/InputWithSugestions.jsx'

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

const SpaceBetweenStyledDiv = styled.div`
  margin-bottom: 70px;
`

const StyledInput = styled(InputWithSugestions)`
  width: 100%;
  box-sizing: border-box;
`

const InputContainer = styled.div`
  @media (min-width: 768px){
    width: calc(100% + 270px);
    z-index: 1;
    border-radius: 10px;
  }
`

export default function HomePage () {
  return (
    <BackGroundImageWithChildren>
      <StyledDiv>
        <SpaceBetweenStyledDiv>
          <Logo showImage textType="vertical"/>
        </SpaceBetweenStyledDiv>
        <InputContainer>
          <StyledInput placeholder = "Digite o nome da cidade" />
        </InputContainer>
      </StyledDiv>
    </BackGroundImageWithChildren>
  )
}