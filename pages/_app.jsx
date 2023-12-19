import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  *{
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    background-color: ${props => props.theme.colors.white};
    box-sizing: border-box;
  }
`

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
        <Component {...pageProps} />
        <GlobalStyle />
    </ThemeProvider>
  )
}
export default MyApp


