import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectID: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
};

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
