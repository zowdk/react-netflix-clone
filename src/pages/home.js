import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { JumbotronContainer } from "../containers/jumbotron";
import { Container, FooterContainer } from "../containers/footer";
import { Accordion } from "../components";

export default function Home() {
  return (
    <>
      <JumbotronContainer />
      <Accordion />
      <FooterContainer />;
    </>
  );
}
