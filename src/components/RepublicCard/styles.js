import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 1024px;
  margin: 8px;
  padding: 8px;
  justify-content: space-between;
  font-family: "monospace";
  border: 1px dashed orange;
  border-radius: 10px;

  img {
    width: 120px;
    height: 120px;
    border-radius: 10%;
    cursor: pointer;
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
      font-size: 18px;
    }
  }

  .republic-vacancies {
    span:nth-child(2) {
      font-size: 40px;
    }
  }

  .republic-price {
    span:nth-child(3) {
      font-weight: bold;
      font-size: 18px;
    }
  }

  button {
    text-transform: uppercase;
    height: 40px;
    width: 120px;
    margin: auto;
    cursor: pointer;
  }
`;
