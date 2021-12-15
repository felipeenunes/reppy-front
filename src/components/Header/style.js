import styled from "styled-components";

export const HeaderMain = styled.div`
  background-color: lightgrey;
  width: 100%;
  height: 100px;
  padding-left: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  && h1 {
    font-size: 2rem;
    color: black;
    font-weight: bolder;
    cursor: default;
    padding-left: 1rem;
  }

  && button {
    padding: 1rem;
    border: none;
    border-radius: 1rem;
    background-color: #51b853;
    color: white;
    font-weight: bolder;
    margin-right: 2rem;
  }

  && button:hover {
    cursor: pointer;
    filter: brightness(1.1);
    -webkit-box-shadow: 5px 5px 19px 0px rgba(94, 94, 94, 0.68);
    box-shadow: 5px 5px 19px 0px rgba(94, 94, 94, 0.68);
  }
`;
