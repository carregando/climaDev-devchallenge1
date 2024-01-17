import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../src/theme'

const GlobalStyle = createGlobalStyle`
  html, body{
    padding: 0;
    margin: 0;
    font-family: sans-serif;
    box-sizing: border-box;
    color: ${props => props.theme.colors.black}
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


