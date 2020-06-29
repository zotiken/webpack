import React from "react";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducer from "./reducer/reducer.js";
import { BrowserRouter  } from 'react-router-dom'

const { render } = require("react-dom");

const store = createStore(reducer);

render(
  <Provider store={store}>
      <BrowserRouter>
      <App />
      </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
