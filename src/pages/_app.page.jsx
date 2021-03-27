import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@src/styles';
import { blueTheme, defaultTheme, redTheme } from '@src/themes';

const App = ({ Component, pageProps }) => {
  const { theme } = pageProps;
  const availableThemes = {
    blue: blueTheme,
    red: redTheme,
    default: defaultTheme,
  };

  return (
    <ThemeProvider theme={availableThemes[theme] || defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
