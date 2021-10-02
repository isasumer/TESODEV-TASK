import ReactDOM from "react-dom";
import App from "./App";
import { createStore } from "redux";
import reducer from "./reducers/reducer";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

const store = createStore(reducer);
ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
