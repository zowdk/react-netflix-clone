import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";

export function BrowseContainer() {
  return (
    <>
      <p>Browse Container</p>,
      <FooterContainer />
    </>
  );
}
