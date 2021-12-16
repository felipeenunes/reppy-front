import { Container, UserData } from "./style";
import { MenuSidebar } from "../../components/MenuSidebar";
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
