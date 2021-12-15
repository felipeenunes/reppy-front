import styled from "styled-components";

export const Container = styled.div`
  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 51vh;
    h1 {
      margin-bottom: 20px;
      font-size: 2rem;
      text-align: center;
    }
    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px;
    }
    input {
      border-radius: 5px;
      margin: 5px;
      width: 60%;
      height: 70%;
      padding: 10px;
    }
    button {
      width: 60%;
      color: #ffffff;
      background-color: #f25d27;
      margin: 20px 0 5px;
      padding: 10px;
    }
  }
`;
