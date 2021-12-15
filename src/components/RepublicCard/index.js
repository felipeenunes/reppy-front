import React from "react";
import { useHistory } from "react-router-dom";
import { Container } from "./styles";

function RepublicCard({ republic }) {
  const history = useHistory();
  return (
    <Container>
      <img
        src={republic.pictures[0].picture_url}
        alt={republic.name}
        onClick={() => history.push(`/republic/${republic.id}`)}
      />
      <div className="republic-infos">
        <span>{republic.name}</span>
        <span className="republic-description">{republic.description}</span>
      </div>
      <div className="republic-region">
        <span>Local</span>
        <span>{republic.address.city}</span>
        <span>{republic.address.uf}</span>
      </div>
      <div className="republic-vacancies">
        <span>Vagas</span>
        <span>{republic.vacancies_qty}</span>
      </div>
      <div className="republic-price">
        <span>Preço</span>
        <span>A partir de</span>
        <span>R$ {republic.price},00</span>
      </div>
      <button onClick={() => history.push(`/republic/${republic.id}`)}>
        Detalhes
      </button>
    </Container>
  );
}

export default RepublicCard;
