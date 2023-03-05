import React from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import store from "./redux/state";
import AuthProvider from "./context/AuthProvider";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById("root"));

let rerenderEntireTree = (state) => {
  root.render(
    // <React.StrictMode>
    <BrowserRouter basename={state.basePath}>
      <AuthProvider>
        <App {...state} popups={store.togglePopUps.bind(store)} />
      </AuthProvider>
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


