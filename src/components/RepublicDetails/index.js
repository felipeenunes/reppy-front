import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { Container, MainContainer } from "./styles";
import { api } from "../../services/api";
import { useEffect } from "react";
import { useParams } from "react-router";

function RepublicDetails() {
  const params = useParams();
  const [republic, setRepublic] = useState([]);
  useEffect(() => {
    api.get(`republic/${params.id}`).then((response) => {
      setRepublic(response.data);
      return response.data;
    });
  }, [params.id]);
  console.log(republic);

  return republic.length === 0 ? (
    <Container>
      <span>LOADING...</span>
    </Container>
  ) : (
    <MainContainer>
      <Container>
        <div className="republic-details">
          <h1>{republic.name}</h1>
          <h4>
            {republic.address.street}, {republic.address.street_number},{" "}
            {republic.address.city} - {republic.address.uf}
          </h4>
          <div className="price-card">
            <h4>
              A Partir de R$ <span>{republic.price},00</span>
            </h4>
          </div>
          <div className="vacancies">
            <h3>VAGAS DISPONÍVEIS:</h3>
            <p>{republic.vacancies_qty}</p>
          </div>
          <div className="description">
            <h3>DESCRIÇÃO:</h3>
            <p>{republic.description}</p>
          </div>
          <div className="extras">
            <h3>Comodidades:</h3>
            <div>
              <span>wifi</span> <span>piscina</span> <span>churrasqueira</span>
              <span>aceita animais</span>
            </div>
          </div>
        </div>
        <div className="pictures-button">
          <div className="republic-pictures">
            <img
              className="picture-0"
              src={republic.pictures[0].picture_url}
              alt={republic.name}
            />
            <div className="others-pictures">
              {republic.pictures.map((picture, index) => {
                if (index > 0 && index < 5)
                  return (
                    <img
                      key={index}
                      src={picture.picture_url}
                      alt={republic.name}
                    />
                  );
              })}
            </div>
          </div>
          <button>QUERO MORAR NESSA BAGAÇA!</button>
        </div>
      </Container>
    </MainContainer>
  );
}

export default RepublicDetails;
