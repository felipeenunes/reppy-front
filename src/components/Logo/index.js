import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";

function Logo() {
  const history = useHistory();
  return (
    <Container onClick={() => history.push("/")}>
      <h1 id="logo">Reppy</h1>
    </Container>
  );
}

export default Logo;
