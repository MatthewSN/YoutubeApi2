import AppRouter from "./components/routers/appRouter";
import React from "react";
import ReactDOM from "react-dom";
import configureStore from "./components/stores/configureStore";
import { addVideoInfo } from "./components/actions/videoInfo";
import { Provider } from "react-redux";
import "./styles/main.scss"


const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
});

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);
ReactDOM.render(jsx, document.getElementById("app"));