import React, { useState } from "react";
import {
  Body,
  Title,
  Header,
  Container,
  Inner,
  Item,
} from "./styles/accordion";

export default function Accordion({ children, ...restProps }) {
  return (
    <Container {...restProps}>
      <Inner>{children}</Inner>
    </Container>
  );
}
Accordion.Item = function AccordionItem({ children, ...restProps }) {
  return <Item {...restProps}>{children}</Item>;
};

Accordion.Title = function AccordionTitle({ chidlren, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Accordion.Header = function AccordionHeader({ chidlren, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Accordion.Body = function AccordionBody({ chidlren, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
