import { useHistory } from "react-router";
import Logo from "../Logo";
import { HeaderMain } from "./style";

const Header = ({ pageTitle }) => {
  const history = useHistory();
  return (
    <HeaderMain>
      <Logo />
      <h1>{pageTitle}</h1>
      <button onClick={() => history.push("/newreppy")}>CRIAR REPPY</button>
    </HeaderMain>
  );
};

export default Header;
