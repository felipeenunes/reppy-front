import styled from "styled-components";

export const Sidebar = styled.div`
  width: 10%;
  max-width: 50px;
  height: 100%;
  position: fixed;
  background-color: #f25d27;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  && svg {
    color: white;
    font-size: 1.7rem;
    margin: 5px;
  }
  && svg:hover {
    cursor: pointer;
    color: black;
  }
`;

export const CentralIcons = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
