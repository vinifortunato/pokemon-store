import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from '@src/styles';
import * as Themes from '@src/themes';

const App = ({ Component, pageProps }) => {
  const { theme } = pageProps;
  const availableThemes = {
    black: Themes.blackTheme,
    blue: Themes.blueTheme,
    brown: Themes.brownTheme,
    gray: Themes.grayTheme,
    green: Themes.greenTheme,
    pink: Themes.pinkTheme,
    purple: Themes.purpleTheme,
    red: Themes.redTheme,
    white: Themes.whiteTheme,
    yellow: Themes.yellowTheme,
  };

  return (
    <ThemeProvider theme={availableThemes[theme] || Themes.defaultTheme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
