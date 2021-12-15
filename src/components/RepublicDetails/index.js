import React from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { Container } from "./styles";

function RepublicDetails() {
  return (
    <Container>
      <div className="republic-details">
        <h1>República Pública</h1>
        <p>
          República da iniciativa pública. Nada aqui é seu, tudo aqui é nosso é
          o que é nosso não é seu.
        </p>
        <div>
          <p>VAGAS</p>
          <span>2</span>
        </div>
        <div>
          <p>PREÇO:</p>
          <span>A Partir de R$ 200,00</span>
        </div>
        <div className="extras">
          <span>wifi</span> <span>piscina</span> <span>churrasqueira</span>
          <span>aceita animais</span>
        </div>
        <button>QUERO MORAR NESSA BAGAÇA!</button>
      </div>
      <div className="republic-pictures">
        <img
          src="http://s2.glbimg.com/h70ljat_mAOUOM2xRM967MtDing=/s.glbimg.com/og/rg/f/original/2013/03/27/unidos_por_acaso4_606x455.jpg"
          alt="foto da rep"
        />
        <span>
          <BsFillArrowRightCircleFill size={40} title="Mais fotos" />
        </span>
      </div>
    </Container>
  );
}

export default RepublicDetails;
