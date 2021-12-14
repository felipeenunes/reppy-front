import styled from "styled-components";

export const Container = styled.main`
  height: 100%;
  width: 100%;
  min-height: 530px;

  padding: 0 20px;

  display: flex;
  justify-content: center;
  align-items: center;

  position: relative;
  overflow: hidden;
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
        width: 60%;
        height: 70%;
        padding: 10px;
      }
      .eye {
        position: absolute;
        bottom: 406px;
        right: 200px;
        cursor: pointer;
      }

      button {
        width: 60%;
        color: #ffffff;
        background-color: #f25d27;
        margin: 20px 0 5px;
        padding: 10px;
      }

      span {
        a {
          color: #a0acb2;
          font-size: 15px;
        }
      }
    }
  }
`;
