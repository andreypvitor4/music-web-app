import { createGlobalStyle, ThemeProvider } from 'styled-components'
import LayOut from '../components/LayOut'
import { store } from '../store'
import { Provider } from 'react-redux'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Arial, Helvetica, sans-serif;
    background-image: linear-gradient(to right,black, rgb(22, 24, 31));
  }

  * {
    box-sizing: border-box;
  }
`

const theme = {
  colors: {
    primary: '#0070f3',
  },
}

export default function App({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <LayOut>
            <Component {...pageProps} />
          </LayOut>
        </Provider>
      </ThemeProvider>
    </>
  )
}
