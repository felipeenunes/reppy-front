import styled from "styled-components";

export const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 24px;
  display: flex;
  justify-content: center;
  justify-content: center;
  font-family: "monospace";
  margin-left: 50px;
  background-color: #e9e9ec;

  .republic-details,
  .pictures-button {
    width: 35%;
    height: 70%;
    padding: 1rem;
  }

  .republic-details {
    border: 2px solid #636363;
    border-radius: 1rem;
    display: flex;
    flex-direction: column;
    background-color: white;

    h1 {
      font-size: 40px;
      text-transform: uppercase;
      font-weight: bolder;
      margin: 0 0 1rem 0;
    }

    h3 {
      font-weight: bolder;
      font-size: 1.2rem;
    }

    .price-card {
      background-color: #17d91f;
      padding: 1rem;
      margin: 1rem 0 0 0;
      border-radius: 1rem;
      color: white;
      text-align: center;
      width: 100%;
      max-width: 400px;
      display: flex;
      justify-content: center;
      h4 {
        font-size: 1.3rem;
        font-weight: 300;
      }
      span {
        font-size: 2rem;
        font-weight: 600;
      }
    }

    .vacancies {
      margin: 1rem 0 0 0;
      display: flex;
      align-items: center;
      p {
        margin: 0 0 0 1rem;
        font-size: 1.2rem;
      }
    }

    .description {
      min-height: 30%;
      margin: 1rem 0;
      p {
        margin: 16px 0;
      }
    }

    .extras {
      margin: 1rem 0 0 0;
      height: 20%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      span {
        background-color: #17d91f;
        padding: 8px;
        color: #fff4f4;
        border-radius: 4px;
        margin: 0 8px;
        font-weight: bold;
      }
    }
  }

  .pictures-button {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    button {
      background-color: #f25d27;
      border: none;
      cursor: pointer;
      color: white;
      padding: 1rem;
      font-weight: bold;
      font-size: 24px;
      border-radius: 10px;
      width: 70%;
    }
  }

  .republic-pictures {
    position: relative;
    display: flex;
    height: 80%;
    width: 100%;
    .picture-0 {
      width: 100%;
      height: 100%;
    }
    .others-pictures {
      display: flex;
      flex-direction: column;
    }
    img {
      cursor: pointer;
      border: 1px solid gray;
      width: 100%;
      height: 18.89%;
      margin: 0.2rem;
      border-radius: 10px;
    }

    span {
      position: absolute;
      top: 40px;
      right: 0px;
      color: lightgray;
      cursor: pointer;
    }
  }
`;
