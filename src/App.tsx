import { useAppSelector } from "./hooks";
import { Main } from "./screens/Main";
import { GlobalStyles } from "./common/CommonStyles.styles.ts";
import { selectTheme } from "./modules/theme/selectors.ts";
import { ThemeProvider } from "styled-components";
import { Theme } from "./modules/theme/types.ts";
import { lightTheme, darkTheme } from "./common/theme.ts";
function App() {
  const theme = useAppSelector(selectTheme);
  const selectedTheme = theme === Theme.LIGHT ? lightTheme : darkTheme;

  return (
    <>
      <ThemeProvider theme={selectedTheme}>
        <Main />
        <GlobalStyles />
      </ThemeProvider>
    </>
  );
}

export default App;
