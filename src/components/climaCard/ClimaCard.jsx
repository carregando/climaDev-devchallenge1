import styled from 'styled-components'

const StyledClimaCar = styled.div`
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  width: 300px;
  padding: 20px;
  box-sizing: border-box;
`

const Title = styled.h6`
  font-weight: 700;
  font-size: 20px;
  text-align: center;
  margin: 0;
  padding: 0;
`
const Basicinfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const BasicinfoImage = styled.img`
  width: 100px;
  height: 100px;
`

const BasicinfoText = styled.div`
  text-align: center;
  flex: 1;
`

const InfoLine = styled.p`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  padding: 0 15px;
`

const InfoTemperature = styled.span`
  font-weight: 700;
  ${props=> props.blue && 'color: #00C9f5'}
  ${props => props.red && 'color: #ff0000'}
`

export default function ClimaCard({
  title, icon, description, temp, feels, min, max
}) {
  return (
    <StyledClimaCar>
      <Title>{title}</Title>
      <Basicinfo>
        <BasicinfoImage src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        <BasicinfoText>{description}</BasicinfoText>
      </Basicinfo>
      <InfoLine>
        Temperatura<InfoTemperature>{temp}ºC</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Sensação<InfoTemperature>{feels}ºC</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Mínima<InfoTemperature blue >{min}ºC</InfoTemperature>
      </InfoLine>
      <InfoLine>
        Máxima<InfoTemperature red >{max}ºC</InfoTemperature>
      </InfoLine>
    </StyledClimaCar>
  )
}