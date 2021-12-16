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
    });
  }, []);
  return (
    <Main>
      <MenuSidebar />
      <Header pageTitle="REPÚBLICAS" />
      <Cards>
        {republics.length > 0 &&
          republics.map((republic) => (
            <RepublicCard key={republic.id} republic={republic} />
          ))}
      </Cards>
    </Main>
  );
};

export default Dashboard;
