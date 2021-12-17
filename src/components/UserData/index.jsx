import jwtDecode from "jwt-decode";
import { useEffect, useState } from "react";
import { useAuth } from "../../providers/Auth";
import { Container } from "./style";
import UpdateUserForm from "../UpdateUserForm";

const UserData = () => {
  const [openModal, setOpenModal] = useState(false);
  const [user, setUser] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    const data = jwtDecode(auth);
    setUser([data.sub]);
  }, [auth]);


  return user.length > 0 ? (
    <Container>
      <div className="info-container">
        <div className="user-info">
          <h1>NOME:</h1>
          <span>{user[0].name}</span>
        </div>
        <div className="user-info">
          <h1>FACULDADE:</h1>
          <span>{user[0].college}</span>
        </div>
        <div className="user-info">
          <h1>E-MAIL:</h1>
          <span>{user[0].email}</span>
        </div>
        <div className="user-info">
          <h1>TELEFONE:</h1>
          <span>{user[0].phone_number}</span>
        </div>
        <div className="user-info">
          <h1>ENDEREÇO:</h1>
          <span>
            {user[0].address.street}, {user[0].address.street_number},
            {user[0].address.city} - {user[0].address.uf},
            {user[0].address.zip_code}
          </span>
        </div>
      </div>
      <button onClick={() => setOpenModal(true)}>EDITAR</button>
      <UpdateUserForm openModal= {openModal} setOpenModal={setOpenModal}/>
    </Container>
  ) : (
    <Container>
      <div className="info-container">
        <h1>Loading...</h1>
      </div>
    </Container>
  );
};

export default UserData;
