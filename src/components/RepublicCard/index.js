import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";

function RepublicCard({ republic }) {
  const history = useHistory();
  return (
    <Container>
      <img
        src="http://s2.glbimg.com/h70ljat_mAOUOM2xRM967MtDing=/s.glbimg.com/og/rg/f/original/2013/03/27/unidos_por_acaso4_606x455.jpg"
        alt="nome da rep"
        onClick={() => history.push("/republic/2")}
      />
      <div className="republic-infos">
        <span>República Pública</span>
        <span>
          República da iniciativa pública, nada aqui é seu, tudo aqui é nosso, e
          o que é nosso não é seu.
        </span>
      </div>
      <div className="republic-region">
        <span>Local</span>
        <span>Ouro Preto</span>
        <span>MG</span>
      </div>
      <div className="republic-vacancies">
        <span>Vagas</span>
        <span>2</span>
      </div>
      <div className="republic-price">
        <span>Preço</span>
        <span>A partir de</span>
        <span>R$ 200,00</span>
      </div>
      <button onClick={() => history.push("/republic/2")}>Detalhes</button>
    </Container>
  );
}

export default RepublicCard;
