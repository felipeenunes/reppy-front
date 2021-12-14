import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  font-family: "monospace";
  padding: 24px;
  justify-content: center;

  .republic-details,
  .republic-pictures {
    width: 45%;
    padding: 16px;
  }

  .republic-details {
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h1 {
      font-size: 40px;
      text-transform: uppercase;
    }

    p:nth-child(2) {
      margin: 16px 0;
      font-style: italic;
    }

    .extras span {
      background-color: #17d91f;
      padding: 8px;
      color: #fff4f4;
      border-radius: 4px;
      margin: 0 8px;
      font-weight: bold;
    }

    button {
      background-color: #3e9ebd;
      border: none;
      cursor: pointer;
      height: 40px;
      font-weight: bold;
      font-size: 24px;
      border-radius: 10px;
    }
  }

  .republic-pictures {
    position: relative;

    img {
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
