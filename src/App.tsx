import {Provider} from "react-redux";
import store from "./modules"
import {Main} from "./screens/Main";
import './App.css'

function App() {

  return (
    <Provider store={store}>
      <>
          <Main/>
      </>
    </Provider>
  );
}

export default App
