import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./global-styles";
import { App } from "./app";
import { FirebaseContext } from "./context/firebase";

const config = {
  apiKey: "AIzaSyCRs5HAzvrlahIBfm5rNVwqz06eUSCvTpo",
  authDomain: "react-netflix-clone-zowdk.firebaseapp.com",
  projectId: "react-netflix-clone-zowdk",
  storageBucket: "react-netflix-clone-zowdk.appspot.com",
  messagingSenderId: "50461734855",
  appId: "1:50461734855:web:84848a85d3b9ca48a44be2",
};

const firebase = window.firebase.initializeApp(config);

ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase: window.firebase }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById("root")
);
