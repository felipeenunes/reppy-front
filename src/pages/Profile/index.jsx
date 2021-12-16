import { Container } from "./style";
import { MenuSidebar } from "../../components/MenuSidebar";
import UserData from "../../components/UserData";
import Header from "../../components/Header";

const Profile = () => {
  return (
    <Container>
      <MenuSidebar />
      <Header pageTitle="MEUS DADOS" />
      <UserData />
    </Container>
  );
};

export default Profile;
