import styled from "styled-components";

export const Container = styled.main`
  #logo {
    margin: 0;
  }

  height: 100%;
  width: 100%;
  min-height: 530px;

  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;
  background-color: #e9e9e9;
`;
export const Content = styled.article`
  max-width: 400px;
  width: 100%;

  text-align: center;

  @media only screen and (min-width: 1024px) {
    max-width: 1280px;
    height: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  .image {
    margin-top: 15px;

    height: 97vh;
  }
`;
export const ContainerForm = styled.section`
  form {
    width: 30vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 51vh;

    .back {
      cursor: pointer;
      position: absolute;
      margin-top: 15px;
      top: 0;

      .svg {
        height: 40px;
        width: 40px;
        size: 20px;
      }
    }

    h1 {
      margin-bottom: 20px;
      font-size: 2rem;
    }

    div {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 30px;

      .inputs {
        border-radius: 5px;
        margin: 5px;
        padding: 10px;
        border: 1px solid lightgray;
        width: 280px;
        color: gray;
      }

      .input-wrapper {
        position: relative;
      }

      .eye-icon {
        position: absolute;
        right: 56px;
        bottom: 16px;
        color: #777;
        cursor: pointer;
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

      span {
        a {
          color: gray;
          font-size: 15px;
        }
      }
    }
  }
`;
