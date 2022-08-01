import React from "react";
import { FaqsContainer } from "../containers/faqs";
import { JumbotronContainer } from "../containers/jumbotron";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from "../containers/header";
import { OptForm } from "../components";

export default function Home() {
  return (
    <>
      <HeaderContainer>
        <OptForm>
          <OptForm.Input placeholder="Email Address" />
          <OptForm.Button>Get Started</OptForm.Button>
          {/* //todo: insert break between input and text */}
          <OptForm.Text>
            Ready to watch? Enter your email to create or restart your
            membership.
          </OptForm.Text>
        </OptForm>
      </HeaderContainer>
      <JumbotronContainer />
      <FaqsContainer />
      <FooterContainer />;
    </>
  );
}
