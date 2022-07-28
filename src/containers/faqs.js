import React from "react";
import { Accordian, OptForm } from "../components";
import OptForm from "../components/opt-form";
import faqsData from "../fixtures/faqs.json";

export function FaqsContainer() {
  <Accordian>
    <Accordion.Title>Frequently Asked Questions</Accordion.Title>
    <Accordian.Frame>
      {faqsData.map((item) => (
        <Accordian.Item key={item.id}>
          <Accordian.Header>{item.header}</Accordian.Header>
          <Accordian.Body>{item.body}</Accordian.Body>
        </Accordian.Item>
      ))}
    </Accordian.Frame>

    <OptForm>
      <OptForm.Input placeholder="Email Address " />
    </OptForm>
  </Accordian>;
}
