import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import store from "./redux/state";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    // <React.StrictMode>
      <BrowserRouter basename={state.basePath}>
        <App {...state} popups={store.togglePopUps.bind(store)} />
      </BrowserRouter>
    // </React.StrictMode>
    // document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });


