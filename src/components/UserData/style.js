import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e9e9ec;

  .info-container {
    width: 50%;
    border: 2px solid grey;
    border-radius: 1rem;
    padding: 1rem;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .user-info {
    margin: 1rem;
    display: flex;
    flex-direction: column;
  }

  h1 {
    font-size: 2rem;
    font-weight: bolder;
    color: #f25d27;
  }

  span {
    font-size: 2rem;
    color: black;
    margin-left: 2rem;
  }

  button {
    padding: 1rem;
    margin: 1rem;
    color: white;
    border: 1px solid red;
    border-radius: 1rem;
    background-color: #f25d27;
    font-weight: bolder;
  }

  button:hover {
    cursor: pointer;
    filter: brightness(1.1);
    -webkit-box-shadow: 5px 5px 19px 0px rgba(94, 94, 94, 0.68);
    box-shadow: 5px 5px 19px 0px rgba(94, 94, 94, 0.68);
  }
`;
