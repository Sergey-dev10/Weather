import { Provider } from "react-redux";
import store from "./modules";
import { Main } from "./screens/Main";
import { GlobalStyles } from "./common/CommonStyles.styles.ts";
function App() {
  return (
    <Provider store={store}>
      <>
        <Main />
        <GlobalStyles />
      </>
    </Provider>
  );
}

export default App;
