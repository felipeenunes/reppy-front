import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1024px;
  margin: 8px;
  padding: 8px;
  justify-content: space-between;
  font-family: "monospace";
  border: 1px solid lightgrey;
  border-radius: 10px;
  background-color: white;
  cursor: default;

  img {
    width: 120px;
    height: 120px;
    border-radius: 10%;
    cursor: pointer;
    border: 2px solid lightgrey;
  }

  .republic-infos,
  .republic-region,
  .republic-vacancies,
  .republic-price {
    text-align: center;
    max-width: 40%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 16px;

    span:nth-child(1) {
      text-transform: uppercase;
      font-weight: bold;
      color: #636363;
      font-size: 1rem;
    }
  }

  .republic-infos {
    width: 25%;
  }

  .republic-description {
    text-align: center;
  }

  .republic-region {
    width: 20%;
  }

  .republic-vacancies {
    width: 10%;
    span:nth-child(2) {
      font-size: 40px;
    }
  }

  .republic-price {
    width: 20%;
    span:nth-child(3) {
      font-weight: bold;
      font-size: 18px;
    }
  }

  button {
    text-transform: uppercase;
    background-color: #f25d27;
    color: white;
    border: 1px solid red;
    border-radius: 0.5rem;
    height: 40px;
    width: 120px;
    margin: auto;
    cursor: pointer;
    font-weight: bolder;
  }

  button:hover {
    cursor: pointer;
    filter: brightness(1.1);
    -webkit-box-shadow: 5px 5px 19px 0px rgba(94, 94, 94, 0.68);
    box-shadow: 5px 5px 19px 0px rgba(94, 94, 94, 0.68);
  }
`;
