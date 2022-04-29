import React from "react";
import { Container, Wrapper } from "./style";
import Sidebar from "../Components/Sidebar";
import Navbar from "../Components/Navbar";
import Body from "../Components/Body";

export const Root = () => {
  return (
    <Container>
      <Sidebar />
      <Wrapper>
        <Navbar />
        <Body />
      </Wrapper>
    </Container>
  );
};
export default Root;
