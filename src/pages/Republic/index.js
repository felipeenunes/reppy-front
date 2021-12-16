import React from "react";
import RepublicDetails from "../../components/RepublicDetails";
import { Container } from "./styles";
import MenuSidebar from "../../components/MenuSidebar";
import Header from "../../components/Header";

function Republic() {
  return (
    <Container>
      <MenuSidebar />
      <Header pageTitle="REPÚBLICA" />
      <RepublicDetails />
    </Container>
  );
}

export default Republic;
