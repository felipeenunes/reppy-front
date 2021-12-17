import styled from "styled-components";

export const Container = styled.div`
  background-color: #e9e9e9;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 4rem;
    font-family: monospace;
    font-weight: 700;
    margin-bottom: 32px;
  }

  .bg {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 420px;

    background-image: url("/images/turnup.png");
    background-position: center;
    background-repeat: no-repeat;
  }

  .bg:hover {
    background-image: url("/images/turndown.png");
    transition: 0.2s ease;
  }

  div {
    display: flex;

    img {
      width: 160px;
      height: 160px;

      border-radius: 50%;
      margin: 20px 50px;
      border: 5px solid #f25d27;
    }

    .img {
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      align-items: center;
      text-transform: uppercase;
      text-align: center;

      p {
        font-weight: 700;
      }

      span {
        font-weight: 700;
        text-decoration: line-through;
      }
    }
  }

  .teste {
    width: 100%;
    position: absolute;
    top: 0;
  }
`;
