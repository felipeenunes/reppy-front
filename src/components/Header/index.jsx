import Logo from "../Logo";
import { HeaderMain } from "./style";

const Header = ({ pageTitle }) => {
  return (
    <HeaderMain>
      <Logo />
      <h1>{pageTitle}</h1>
      <button>CRIAR REPPY</button>
    </HeaderMain>
  );
};

export default Header;
