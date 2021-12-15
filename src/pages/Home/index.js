import React, { useEffect } from "react";
import RepublicCard from "../../components/RepublicCard";
import { api } from "../../services/api";

// import { Container } from "./styles";

function Home() {
  const user = {
    cpf: "45678898545",
    name: "Gustavo interessado",
    email: "gustavoprado117@gmail.com",
    college: "ufsc",
    phone_number: "(21)12345-6777",
    password: "123456",
    address: {
      uf: "sc",
      street: "rua c",
      street_number: "105",
      city: "friburgo",
      zip_code: "12345679",
    },
  };
  useEffect(() => {
    api.post("/user", user).then((res) => console.log(res));
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <RepublicCard />
      <RepublicCard />
      <RepublicCard />
      <RepublicCard />
    </>
  );
}

export default Home;
