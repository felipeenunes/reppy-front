import styled from "styled-components";

export const HeaderMain = styled.div`
  background-color: white;
  width: 100%;
  height: 100px;
  padding-left: 1%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  border-bottom: 2px solid lightgray;

  && h1 {
    font-size: 2rem;
    color: gray;
    font-weight: bolder;
    cursor: default;
    padding-left: 1rem;
  }

  && button {
    padding: 1rem;
    border: 1px solid green;
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
