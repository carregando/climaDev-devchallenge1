import styled from 'styled-components'

import Input from '../input/Input'

const SuggestionContainer = styled.div`
  margin-top: 10px;
  background-color: ${props => props.theme.colors.white};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  font-weight: bold;
`

const Suggestions = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #e4e4e4;
  }
`

export default function InputWithSugestions ({ suggestions, ...props }) {
  return (
    <>
      <Input {...props}/>
      <SuggestionContainer>
        {
          suggestions.map((suggestion, pos) =>
            <Suggestions
              key={`sugestion-${pos}`}
              onClick={suggestion.onClick}
            >
              {suggestion.text}
            </Suggestions>)
        }
      </SuggestionContainer>
    </>
  )
}

InputWithSugestions.defaultProps = {
  suggestions: [
    {text: 'Sugestão', onClick: () => {}},
    {text: 'Sugestão 2', onClick: () => {}},
  ]
}