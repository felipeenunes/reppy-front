import { Cards, Main } from "./style";
import MenuSidebar from "../../components/MenuSidebar";
import Header from "../../components/Header";
import RepublicCard from "../../components/RepublicCard";
import { useState, useEffect } from "react";
import { api } from "../../services/api";

const Dashboard = () => {
  const [republics, setRepublics] = useState([]);
  useEffect(() => {
    api.get("/republic").then((res) => {
      setRepublics(res.data);
      console.log(res.data);
    });
  }, []);
  // console.log(republics);
  return (
    <Main>
      <MenuSidebar />
      <Header />
      <Cards>
        <RepublicCard />
        <RepublicCard />
        <RepublicCard />
        <RepublicCard />
      </Cards>
    </Main>
  );
};

export default Dashboard;
