import React from "react";
import { Header } from "../components";
import * as ROUTES from "../constants";

export function SelectProfileContainer() {
  return (
    <>
      <Header bg={false}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src="/images/misc/logo.svg" />
        </Header.Frame>
      </Header>
    </>
  );
}
