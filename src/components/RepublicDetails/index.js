import React, { useState } from "react";
import { Container, MainContainer } from "./styles";
import { api } from "../../services/api";
import { useEffect } from "react";
import { useParams } from "react-router";
import { HiOutlineWifi } from "react-icons/hi";
import { MdPool, MdOutlinePets } from "react-icons/md";
import { GiBarbecue, GiPartyPopper } from "react-icons/gi";

function RepublicDetails() {
  const params = useParams();
  const [republic, setRepublic] = useState([]);
  useEffect(() => {
    api.get(`republic/${params.id}`).then((response) => {
      setRepublic(response.data);
      return response.data;
    });
  }, [params.id]);
  console.log(republic.extras);

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
              A Partir de R$ <span>{republic.price.toFixed(2)}</span>
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
            <div className="extras-items">
              {republic.extras &&
                republic.extras.map((extra) => {
                  if (extra === "wifi")
                    return (
                      <div className="extra-item">
                        <HiOutlineWifi />
                        <span>WiFi</span>
                      </div>
                    );
                  if (extra === "grill")
                    return (
                      <div className="extra-item">
                        <GiBarbecue />
                        <span>Churras</span>
                      </div>
                    );
                  if (extra === "swiming_pool")
                    return (
                      <div className="extra-item">
                        <MdPool />
                        <span>Piscina</span>
                      </div>
                    );
                  if (extra === "animals_allowed")
                    return (
                      <div className="extra-item">
                        <MdOutlinePets />
                        <span>Pets</span>
                      </div>
                    );
                  if (extra === "parties_allowed")
                    return (
                      <div className="extra-item">
                        <GiPartyPopper />
                        <span>Festas</span>
                      </div>
                    );
                })}
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
              {
                // eslint-disable-next-line
                republic.pictures.map((picture, index) => {
                  if (index > 0 && index < 5)
                    return (
                      <img
                        key={index}
                        src={picture.picture_url}
                        alt={republic.name}
                      />
                    );
                })
              }
            </div>
          </div>
          <button>QUERO MORAR NESSA BAGAÇA!</button>
        </div>
      </Container>
    </MainContainer>
  );
}

export default RepublicDetails;
