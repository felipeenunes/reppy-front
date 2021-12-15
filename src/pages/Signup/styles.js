import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #e9e9e9;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;

  form {
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    max-height: 640px;

    h1 {
      margin-bottom: 40px;
      color: #f25d27;
      text-transform: uppercase;
      font-size: 2rem;
      font-weight: bold;
      font-family: "Courier New", Courier, monospace;
    }

    div {
      display: flex;
      flex-direction: column;
    }
  }

  h1 {
  }

  form {
    /* width: 100%; */
    /* display: flex; */
    /* flex-direction: column; */
    /* justify-content: center; */
    /* height: 51vh; */

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      /* margin: 30px; */
    }
    input {
      border-radius: 5px;
      margin: 5px;
      padding: 10px;
      border: 1px solid lightgray;
      width: 280px;
      color: gray;
    }
    button {
      color: #ffffff;
      background-color: #f25d27;
      margin-top: 16px;
      padding: 10px;
      border: none;
      border-radius: 10px;
      width: 120px;

      span {
        margin: 0 8px;
      }
    }
  }

  .wrapper {
    position: relative;
  }

  .eye-icon {
    position: absolute;
    right: 16px;
    bottom: 16px;
    color: gray;
  }
`;
