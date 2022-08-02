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

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
