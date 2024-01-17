import styled from 'styled-components'

const Img = styled.img`
  max-width: 200px;

  @media (max-width: 768px) {
    width: 200px;
  }
`

const VerticalText = styled.h1`
  display: flex;
  flex-direction: column;
  font-size: 80px;
  color: ${props => props.theme.colors.black};
  line-height: 70px;
  margin-top: -80px;
  margin-left: 150px;
`
const HorizontalText = styled.h1`
  font-size: 40px;
  color: ${props => props.theme.colors.black};
`

const PrimaryColor = styled.span`
  color: ${props => props.theme.colors.primary};
  text-transform: uppercase;
`

export default function Logo  ({ showImage, textType }) {
  return (
    <div>
      {showImage && <Img src="./woman.svg"/>} 
      {textType === "vertical" &&
        <VerticalText>
          Clima <PrimaryColor>DEV</PrimaryColor>
        </VerticalText>
      }
      {textType === "horizontal" &&
        <HorizontalText>
          Clima<PrimaryColor>DEV</PrimaryColor>
        </HorizontalText>
      }
    </div>
  )
}

Logo.defaultProps = {
  textType: 'horizontal'
}