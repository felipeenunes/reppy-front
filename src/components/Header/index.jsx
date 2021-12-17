import Logo from "../Logo";
import { HeaderMain } from "./style";
import { useAuth } from "../../providers/Auth";
import { useHistory } from "react-router-dom";

const Header = ({ pageTitle }) => {
  const { auth } = useAuth();
  const history = useHistory();

  const criar = () => {
    if (auth.length > 0) {
      history.push("/republic");
    } else {
      history.push("/login");
    }
  };
  return (
    <HeaderMain>
      <Logo />
      <h1>{pageTitle}</h1>
      <button onClick={criar}>CRIAR REPPY</button>
    </HeaderMain>
  );
};

export default Header;
