// React
import React from "react";
import ReactDOM from "react-dom";

// Some  general styles
import "./index.css";

// General App import
import App from "./App";

// Router
import { BrowserRouter } from "react-router-dom";

// Redux
import { Provider } from "react-redux";
import store from "./redux/store";

// for later stages
//import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
    ,
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
