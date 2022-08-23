import React, { useState, useContext, createContext } from "react";

const featureContext = createContext();

export default function Card({ children, ...restProps }) {
    const [showFeature]

  return (
    <featureContext.Provider value={{}}>
      <Container {...restProps}>{children}</Container>
    </featureContext.Provider>
  );
}
